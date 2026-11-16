'use client'

import { useMemo, useState } from 'react'
import './GovernanceTags.css'

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

  const visible = (id: string) => {
    if (!needle) return true
    return matches(id) || ancestorsOf(id).some(matches) || descendantsOf(id).some(matches)
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

    return (
      <div key={id}>
        <div
          className="gov-row"
          role="treeitem"
          aria-level={depth + 1}
          aria-expanded={kids.length ? open : undefined}
          style={{ paddingLeft: `${0.375 + depth * 1.25}rem` }}
        >
          {kids.length ? (
            <button
              type="button"
              className="gov-toggle"
              aria-label={`${open ? 'Collapse' : 'Expand'} ${node.name}`}
              onClick={() => setExpanded((current) => ({ ...current, [id]: !current[id] }))}
            >
              {open ? '▾' : '▸'}
            </button>
          ) : (
            <span className="gov-spacer" />
          )}
          <label>
            <input
              type="checkbox"
              checked={checked(id)}
              disabled={covered(id)}
              aria-label={node.name}
              onChange={(event) => toggleNode(id, event.target.checked)}
            />
            {node.name} {meta ? <span className="gov-count">{meta}</span> : null}
          </label>
        </div>
        {kids.length > 0 && open ? kids.map((child) => renderNode(child.id, depth + 1)) : null}
      </div>
    )
  }

  const roots = NODES.filter((node) => !node.parent)
  const tree = roots.map((root) => renderNode(root.id, 0)).filter(Boolean)

  if (readOnly) {
    return (
      <section className="gov-card" aria-label="Governance tags">
        <h3 className="gov-title">Governance tags</h3>
        <p className="gov-sub" style={{ marginBottom: '0.75rem' }}>
          Activations use the same tags as the segment. Change them on the Segment Definition tab.
        </p>
        {chips.length > 0 ? (
          <ChipList chips={chips} />
        ) : (
          <span className="gov-sub">
            No tags selected. Everyone with access to the data space can see this segment.
          </span>
        )}
      </section>
    )
  }

  return (
    <section className="gov-card" aria-label="Governance tags">
      <div className="gov-head">
        <div>
          <h3 className="gov-title">Governance tags</h3>
          <p className="gov-sub">
            Choose where this segment applies. Anyone with a matching tag can see it and its activations.
          </p>
        </div>
        <span className="gov-opt">{required ? 'Required' : 'Optional'}</span>
      </div>

      {!single && (
        <div className="gov-cols">
          <div>
            <div className="gov-label">Where this segment applies</div>
            <input
              className="gov-search"
              type="text"
              value={query}
              placeholder="Search regions and stores"
              aria-label="Search regions and stores"
              onChange={(event) => setQuery(event.target.value)}
            />
            <label className="gov-row" style={{ marginBottom: '0.375rem' }}>
              <input
                type="checkbox"
                checked={value.includes(ALL)}
                onChange={(event) => toggleAll(event.target.checked)}
              />
              Select all, including new ones
            </label>
            <div className="gov-tree" role="tree" aria-label="Governance tags">
              {tree.length > 0 ? tree : <div className="gov-note" style={{ padding: '0.5rem' }}>No matching tags</div>}
            </div>
          </div>
          <div>
            <div className="gov-label">Selected</div>
            <div style={{ minHeight: '2rem' }}>
              <ChipList
                chips={chips}
                removable
                onRemove={(id) => onChange?.(value.filter((item) => item !== id))}
              />
            </div>
            {countLabel ? <p className="gov-sum">{countLabel}</p> : null}
            <p className="gov-note">
              Choosing a group includes stores added to it later. Choose single stores to limit access to exactly those.
            </p>
          </div>
        </div>
      )}

      {single && (
        <div className="gov-one">
          No selector needed. Your only tag, <strong>Paris 01</strong>, is applied.
        </div>
      )}

      <div className={showValidation ? 'gov-err is-shown' : 'gov-err'} role="alert">
        {showValidation ? 'Select at least one tag. Your admin requires it.' : ''}
      </div>

      <div className="gov-proto">
        <span>Prototype settings</span>
        <label>
          Tags you can use{' '}
          <select
            aria-label="Tags you can use"
            value={single ? 'one' : 'many'}
            onChange={(event) => onSingleChange?.(event.target.value === 'one')}
          >
            <option value="many">Several tags</option>
            <option value="one">One tag</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={required}
            onChange={(event) => onRequiredChange?.(event.target.checked)}
          />{' '}
          Admin requires tags
        </label>
      </div>
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
    return <span className="gov-note">Nothing selected</span>
  }

  return (
    <>
      {chips.map((chip) => (
        <span key={chip.id} className="gov-chip">
          {chip.label}
          {removable && (
            <button type="button" aria-label={`Remove ${chip.label}`} onClick={() => onRemove?.(chip.id)}>
              ×
            </button>
          )}
        </span>
      ))}
    </>
  )
}
