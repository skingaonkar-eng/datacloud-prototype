'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronRight, X } from 'lucide-react'

const ALL = '*'

type TagNode = {
  id: string
  name: string
  parent: string | null
}

const NODES: TagNode[] = [
  { id: 'emea', name: 'EMEA', parent: null },
  { id: 'fr', name: 'France', parent: 'emea' },
  { id: 'p1', name: 'Paris 01', parent: 'fr' },
  { id: 'p2', name: 'Paris 02', parent: 'fr' },
  { id: 'ly', name: 'Lyon', parent: 'fr' },
  { id: 'de', name: 'Germany', parent: 'emea' },
  { id: 'b1', name: 'Berlin 01', parent: 'de' },
  { id: 'mu', name: 'Munich', parent: 'de' },
  { id: 'amer', name: 'AMER', parent: null },
  { id: 'us', name: 'United States', parent: 'amer' },
  { id: 'ny', name: 'New York 5th Ave', parent: 'us' },
  { id: 'au', name: 'Austin', parent: 'us' },
]

const BY_ID: Record<string, TagNode> = Object.fromEntries(NODES.map((node) => [node.id, node]))

function childrenOf(id: string) {
  return NODES.filter((node) => node.parent === id)
}

function descendantsOf(id: string): string[] {
  return childrenOf(id).flatMap((child) => [child.id, ...descendantsOf(child.id)])
}

function leavesOf(id: string): string[] {
  const kids = childrenOf(id)
  return kids.length ? kids.flatMap((child) => leavesOf(child.id)) : [id]
}

function ancestorsOf(id: string): string[] {
  const ancestors: string[] = []
  let parent = BY_ID[id]?.parent ?? null
  while (parent) {
    ancestors.push(parent)
    parent = BY_ID[parent]?.parent ?? null
  }
  return ancestors
}

const ALL_STORES = NODES.filter((node) => childrenOf(node.id).length === 0)

function chipLabel(id: string) {
  if (id === ALL) return 'All stores, including new ones'
  const node = BY_ID[id]
  if (!node) return id
  return childrenOf(id).length ? `All of ${node.name}, dynamic` : node.name
}

function storeCount(value: string[]) {
  if (value.includes(ALL)) return ALL_STORES.length
  const stores = new Set<string>()
  value.forEach((id) => {
    if (!BY_ID[id]) return
    leavesOf(id).forEach((leaf) => stores.add(leaf))
  })
  return stores.size
}

export interface GovernanceTagsProps {
  value: string[]
  onChange?: (value: string[]) => void
  required?: boolean
  single?: boolean
  showError?: boolean
  onRequiredChange?: (required: boolean) => void
  onSingleChange?: (single: boolean) => void
  readOnly?: boolean
}

export default function GovernanceTags({
  value,
  onChange,
  required = false,
  single = false,
  showError = false,
  onRequiredChange,
  onSingleChange,
  readOnly = false,
}: GovernanceTagsProps) {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ emea: true })
  const selected = useMemo(() => new Set(value), [value])
  const needle = query.trim().toLowerCase()

  const covered = (id: string) =>
    selected.has(ALL) || ancestorsOf(id).some((ancestor) => selected.has(ancestor))

  const checked = (id: string) => selected.has(id) || covered(id)

  const matches = (id: string) => BY_ID[id].name.toLowerCase().includes(needle)

  const visible = (id: string): boolean => {
    if (!needle) return true
    return matches(id) || ancestorsOf(id).some(matches) || descendantsOf(id).some(matches)
  }

  const toggleExpanded = (id: string) => {
    setExpanded((current) => ({ ...current, [id]: !current[id] }))
  }

  const toggleAll = (on: boolean) => {
    onChange?.(on ? [ALL] : [])
  }

  const toggleNode = (id: string, on: boolean) => {
    const next = new Set(value.filter((item) => item !== ALL))
    if (on) {
      descendantsOf(id).forEach((descendant) => next.delete(descendant))
      next.add(id)
    } else {
      next.delete(id)
    }
    onChange?.(Array.from(next))
  }

  const removeChip = (id: string) => {
    onChange?.(value.filter((item) => item !== id))
  }

  const chips = single
    ? [{ id: 'p1', label: 'Paris 01' }]
    : value.map((id) => ({ id, label: chipLabel(id) }))

  const count = single ? 0 : storeCount(value)
  const countLabel =
    count > 0
      ? `${count} store${count === 1 ? '' : 's'} today${value.includes(ALL) ? ', and any added later' : ''}`
      : ''

  const showValidation = showError && required && !single && value.length === 0

  const renderNode = (id: string, depth: number): JSX.Element | null => {
    if (!visible(id)) return null
    const node = BY_ID[id]
    const kids = childrenOf(id)
    const open = Boolean(expanded[id]) || (needle.length > 0 && kids.length > 0)
    const picked = kids.length ? leavesOf(id).filter((leaf) => checked(leaf)).length : 0
    let meta = kids.length ? `${leavesOf(id).length} stores` : ''
    if (kids.length && !checked(id) && picked > 0) meta += ` (${picked} selected)`
    const isCovered = covered(id)

    return (
      <div key={id}>
        <div
          role="treeitem"
          aria-level={depth + 1}
          aria-expanded={kids.length ? open : undefined}
          className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-zinc-100 hover:bg-white/5"
          style={{ paddingLeft: `${0.375 + depth * 1.25}rem` }}
        >
          {kids.length ? (
            <button
              type="button"
              className="flex h-5 w-5 items-center justify-center rounded text-zinc-400 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400"
              aria-label={`${open ? 'Collapse' : 'Expand'} ${node.name}`}
              onClick={() => toggleExpanded(id)}
            >
              {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
            </button>
          ) : (
            <span className="inline-block h-5 w-5" />
          )}
          <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 accent-violet-400"
              checked={checked(id)}
              disabled={isCovered}
              aria-label={node.name}
              onChange={(event) => toggleNode(id, event.target.checked)}
            />
            <span>{node.name}</span>
            {meta ? <span className="text-xs text-zinc-500">{meta}</span> : null}
          </label>
        </div>
        {kids.length > 0 && open ? kids.map((child) => renderNode(child.id, depth + 1)) : null}
      </div>
    )
  }

  const roots = NODES.filter((node) => node.parent === null)
  const tree = roots.map((root) => renderNode(root.id, 0)).filter(Boolean)

  return (
    <section className="glassmorphism rounded-3xl p-6" aria-label="Governance tags">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">Governance tags</h3>
          <p className="mt-1 text-sm text-zinc-400">
            {readOnly
              ? 'Activations use the same tags as the segment. Change them on the segment definition.'
              : 'Choose where this segment applies. Anyone with a matching tag can see it and its activations.'}
          </p>
        </div>
        {!readOnly && (
          <span className="whitespace-nowrap rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-300">
            {required ? 'Required' : 'Optional'}
          </span>
        )}
      </div>

      {!readOnly && !single && (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-1 text-sm text-zinc-400">Where this segment applies</p>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search regions and stores"
              aria-label="Search regions and stores"
              className="mb-2 w-full rounded-md border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-violet-400 focus:outline focus:outline-2 focus:outline-violet-400/40"
            />
            <label className="mb-1.5 flex items-center gap-2 rounded-md px-1.5 py-1 text-sm text-zinc-100">
              <input
                type="checkbox"
                className="h-4 w-4 accent-violet-400"
                checked={value.includes(ALL)}
                onChange={(event) => toggleAll(event.target.checked)}
              />
              Select all, including new ones
            </label>
            <div
              role="tree"
              aria-label="Governance tags"
              className="max-h-64 overflow-y-auto rounded-md border border-zinc-700/80 p-1.5"
            >
              {tree.length > 0 ? tree : <p className="px-2 py-2 text-xs text-zinc-500">No matching tags</p>}
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm text-zinc-400">Selected</p>
            <ChipList chips={chips} removable onRemove={removeChip} />
            {countLabel ? <p className="mt-2 text-sm text-zinc-200">{countLabel}</p> : null}
            <p className="mt-2 text-xs text-zinc-500">
              Choosing a group includes stores added to it later. Choose single stores to limit access to exactly those.
            </p>
          </div>
        </div>
      )}

      {!readOnly && single && (
        <p className="text-sm text-zinc-400">
          No selector needed. Your only tag, <strong className="text-zinc-100">Paris 01</strong>, is applied.
        </p>
      )}

      {readOnly && (
        <div>
          {chips.length > 0 ? (
            <ChipList chips={chips} />
          ) : (
            <p className="text-sm text-zinc-400">
              No tags selected. Everyone with access to the data space can see this segment.
            </p>
          )}
          {!single && countLabel ? <p className="mt-2 text-sm text-zinc-200">{countLabel}</p> : null}
        </div>
      )}

      {showValidation && (
        <p className="mt-3 rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
          Select at least one tag. Your admin requires it.
        </p>
      )}

      {!readOnly && (
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-dashed border-zinc-700 pt-3 text-xs text-zinc-400">
          <span>Prototype settings</span>
          <label className="flex items-center gap-2">
            Tags you can use
            <select
              aria-label="Tags you can use"
              value={single ? 'one' : 'many'}
              onChange={(event) => onSingleChange?.(event.target.value === 'one')}
              className="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-zinc-100"
            >
              <option value="many">Several tags</option>
              <option value="one">One tag</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={required}
              onChange={(event) => onRequiredChange?.(event.target.checked)}
            />
            Admin requires tags
          </label>
        </div>
      )}
    </section>
  )
}

function ChipList({
  chips,
  removable = false,
  onRemove,
}: {
  chips: { id: string; label: string }[]
  removable?: boolean
  onRemove?: (id: string) => void
}) {
  if (chips.length === 0) {
    return <p className="text-xs text-zinc-500">Nothing selected</p>
  }

  return (
    <div className="flex min-h-8 flex-wrap">
      {chips.map((chip) => (
        <span
          key={chip.id}
          className="mb-1.5 mr-1.5 inline-flex items-center gap-1.5 rounded-md border border-violet-400/40 bg-violet-500/15 px-2 py-0.5 text-sm text-violet-200"
        >
          {chip.label}
          {removable && (
            <button
              type="button"
              aria-label={`Remove ${chip.label}`}
              className="text-violet-200 hover:text-white"
              onClick={() => onRemove?.(chip.id)}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </span>
      ))}
    </div>
  )
}
