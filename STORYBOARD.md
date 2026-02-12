# Project Untethered: Visual Storyboard

## The Complete 5-Step Journey

### 🎬 Scene 0: The Hook (Initial State)

**Visual:**
- Dark zinc-950 background with subtle gradient orbs
- Large "Project Untethered" logo with sparkle icon
- Minimal, zen-like interface
- Pulsing "Sparkles" icon in the center
- Bottom Agent Bar glowing softly

**User sees:**
```
┌─────────────────────────────────────────┐
│  ✨ Project Untethered                  │
│     Your Agentic Segmentation Workspace │
├─────────────────────────────────────────┤
│                                         │
│           ✨ (pulsing icon)             │
│                                         │
│    What would you like to achieve?     │
│                                         │
│  Tell me your goal in plain language,  │
│       and I'll handle the rest.        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [✨ Describe your marketing goal...▸] │
│                                         │
└─────────────────────────────────────────┘
```

**The Moment:**
User types: *"I want to win back high-value customers for our trek gear launch"*

**Animation:** Smooth typing, glowing border intensifies on Agent Bar

---

### 🎬 Step 1: Attribute Cards (The "Ingredients")

**Transition:**
- Agent Bar shows processing state (rotating sparkle icon)
- Text appears: "Analyzing your goal and identifying key attributes..."
- User goal appears in glassmorphic card at top
- After 1.5s delay, attribute cards stagger in

**Visual:**
```
┌─────────────────────────────────────────┐
│ 🟣 Your Goal                            │
│ "I want to win back high-value          │
│  customers for our trek gear launch"    │
└─────────────────────────────────────────┘

       Key Attributes Identified
   Based on your goal, I've identified 
   these audience characteristics

┌─────────┐  ┌─────────┐  ┌─────────┐
│ 📈      │  │ ⏰       │  │ 📦      │
│ Lifetime│  │ Last    │  │ Product │
│ Value   │  │ Activity│  │ Interest│
│         │  │         │  │         │
│ Top 10% │  │ 180+    │  │ Trekking│
│         │  │ Days    │  │ Boots   │
│ LTV >   │  │ No      │  │ Previous│
│ $500    │  │ purchase│  │ purchase│
│ ────── │  │ ────── │  │ ────── │
└─────────┘  └─────────┘  └─────────┘

        Add More Filters
   [🔍 Search for attributes...    [+] ]

┌─────────────────────────────────────────┐
│ Estimated Audience Size                 │
│                                         │
│ 12,487 people    [Analyze Channels →]  │
└─────────────────────────────────────────┘
```

**Animations:**
- Cards enter with staggered delay (0.15s each)
- Hover effect: Cards lift slightly, gradient line grows
- Pulse dots on each card indicate AI is active
- Numbers count up from 0 to final value

**Interaction:**
- User can search and add filters like "Region: Pacific Northwest"
- Filter pills appear below with fade-in animation
- Audience count updates dynamically

---

### 🎬 Step 2: Channel Affinity (The "Strategy")

**Visual:**
```
       Channel Affinity Analysis
   These channels perform best with 
        your target audience

┌─────────────────────────────────────────┐
│ [📱]  Mobile Push         [Top Pick]    │
│ ████████████████████ 70%          High  │
│                                         │
│ [💬]  SMS                               │
│ █████████████ 55%            Medium     │
│                                         │
│ [✉️]  Email                             │
│ ████████ 35%                    Low     │
│                                         │
│ [🔔]  In-App                            │
│ ██████████ 45%               Medium     │
│                                         │
│ ┌─────────────────────────────────────┐│
│ │ 💡 Insight: 70% of this segment     ││
│ │ responds better to Mobile Push      ││
│ │ notifications. Consider prioritizing││
│ │ this channel for maximum engagement.││
│ └─────────────────────────────────────┘│
│                                         │
│              [Optimize with A/B Split →]│
└─────────────────────────────────────────┘
```

**Animations:**
- Bars fill from left to right with easing
- Top pick card has violet glow and pulsing dot
- Staggered entrance (0.1s delay between channels)
- Hover: Cards scale up 1.02x

**Key Features:**
- Color-coded engagement levels (High/Medium/Low)
- Clear percentage affinity scores
- Channel icons in gradient circles
- Contextual insight box at bottom

---

### 🎬 Step 3: Agentic Splits (The "Test")

**Before Split (Prompt State):**
```
┌─────────────────────────────────────────┐
│                                         │
│           🔀 (rotating icon)            │
│                                         │
│         Ready to Optimize?              │
│                                         │
│  I can split your audience into two     │
│  groups and test different offers to    │
│  see what drives the best results.      │
│                                         │
│         [Create Smart Split]            │
│                                         │
└─────────────────────────────────────────┘
```

**After Split (Fork Visualization):**
```
        Agentic Split Testing
    Let me create an optimized A/B test

         [💯 12,487 People]
                │
                │
        ┌───────┴───────┐
        │               │
        │               │
┌───────▼──────┐ ┌──────▼───────┐
│ [A]          │ │          [B] │
│              │ │              │
│ 🎁           │ │           🚚 │
│ 15% Discount │ │ Free Shipping│
│ via Mobile   │ │ via SMS      │
│ Push         │ │              │
│              │ │              │
│ 6,244 people │ │ 6,243 people │
│ 50%          │ │ 50%          │
└──────────────┘ └──────────────┘

┌─────────────────────────────────────────┐
│ 🧠 Test Strategy: Split is balanced    │
│ 50/50. Group A tests discount          │
│ sensitivity via high-engagement        │
│ channel, while Group B tests value-add │
│ incentives via alternative channel.    │
└─────────────────────────────────────────┘
```

**Animations:**
- Before: Rotating branch icon (GitBranch)
- After: Segment drops from top, splits animate from center outward
- Each group card slides in from opposite directions
- Connector lines draw smoothly
- 2s delay before auto-advancing to insights

**Design Details:**
- Groups use gradient backgrounds (A: violet, B: blue)
- Large letter badges (A/B) in gradient squares
- Offer cards with icons and channel info
- Live audience count for each group

---

### 🎬 Step 4: Analytics & Performance (The "Proof")

**Visual:**
```
     Analytics & Performance
  Real-time insights into your 
    segmentation strategy

┌────────┐ ┌────────┐ ┌────────┐
│👥      │ │🎯      │ │📈      │
│Total   │ │Expected│ │Project.│
│Reach.  │ │Reach   │ │ROI     │
│12,487  │ │87.2%   │ │4.2x    │
│+2.3%   │ │Based on│ │+35%    │
└────────┘ └────────┘ └────────┘

┌─────────────────┐ ┌─────────────────┐
│ Segment Overlap │ │ Why This Works  │
│                 │ │                 │
│    ◯       ◯    │ │ 🟣 4x more      │
│   Trek  Outdoor │ │ likely on       │
│     \ 4.5K /    │ │ weekends        │
│      \   /      │ │                 │
│   8.2K 15.3K    │ │ 🔵 73% prefer   │
│                 │ │ visual content  │
│ 36% overlap     │ │                 │
│                 │ │ 🟢 Peak: 6-9PM  │
│                 │ │                 │
│                 │ │ 🟠 Responds to  │
│                 │ │ urgency         │
└─────────────────┘ └─────────────────┘

       Split Performance
          Live Results

[A] 15% Discount via Push
███████████████ 18.5%

[B] Free Shipping via SMS
█████████████████████ 22.3%  +20% vs A

┌─────────────────────────────────────────┐
│ ✅ Winner: Group B (Free Shipping) is  │
│ performing 20% better with statistical  │
│ significance                            │
└─────────────────────────────────────────┘

       Ready to Launch?
 Your segment is optimized and 
        ready to deploy

  [Save Segment]  [Deploy Campaign]
```

**Animations:**
- Stats count up from 0
- Venn diagram circles scale in with spring animation
- Overlap box scales in last
- "Why This Works" cards stagger in (0.1s delay)
- Performance bars fill with smooth easing
- Winner badge scales in with pulse

**Key Components:**

1. **Top Stats Row**: 3 key metrics with pulse dots
2. **Venn Diagram**: Circular overlap showing audience intersection
3. **Explainability Cards**: 4 insight cards with color-coded borders
4. **Performance Bars**: Real-time A/B comparison with percentages
5. **Winner Detection**: Highlighted result with statistical note
6. **CTA Buttons**: Final action prompts

---

## Design System Summary

### Color Palette

**Primary Colors:**
- Violet: `#8b5cf6` (500), `#7c3aed` (600)
- Blue: `#3b82f6` (500), `#2563eb` (600)
- Cyan: `#06b6d4` (500)

**Semantic Colors:**
- Success: Emerald `#10b981` (500)
- Warning: Orange `#f97316` (500)
- Error: Red `#ef4444` (500)

**Background:**
- Base: Zinc `#18181b` (900), `#0a0a0f` (950)
- Cards: Zinc `#27272a` (800) with 40% opacity + blur

### Typography Scale

```
Hero:     text-4xl (36px) - font-bold
Heading:  text-2xl (24px) - font-bold
Title:    text-xl (20px) - font-semibold
Body:     text-base (16px) - font-normal
Caption:  text-sm (14px) - font-normal
Label:    text-xs (12px) - font-medium
```

### Spacing System

```
xs:  0.25rem (4px)
sm:  0.5rem (8px)
md:  1rem (16px)
lg:  1.5rem (24px)
xl:  2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Animation Timings

```
Instant:  100ms
Fast:     200ms
Normal:   300ms
Slow:     500ms
Deliberate: 800ms
Dramatic: 1500ms
```

### Border Radius

```
Sharp:    0px
Subtle:   8px
Standard: 16px
Large:    24px
XL:       32px
Pill:     9999px (rounded-full)
```

### Elevation (Glassmorphism)

```css
.glassmorphism {
  background: rgba(39, 39, 42, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(113, 113, 122, 0.2);
}

.glow-border {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}
```

---

## Interactive Moments

### Hover States
- **Cards**: Scale 1.02, lift with shadow, gradient line extends
- **Buttons**: Scale 1.05, color deepens
- **Agent Bar**: Glow intensifies

### Active States
- **Processing**: Rotating sparkle icon
- **AI Working**: Pulsing dots on relevant elements
- **Selection**: Glow border appears

### Loading States
- **Initial**: Fade + slide up from bottom
- **Processing**: Rotation animation
- **Success**: Scale + fade in with spring

---

## Voice & Tone in UI Copy

### ✅ DO Use:
- "What would you like to achieve?"
- "Key Attributes Identified"
- "Channel Affinity"
- "Optimize with A/B Split"
- "Your segment is ready to deploy"

### ❌ DON'T Use:
- "Configure query parameters"
- "Join customer_events table"
- "Filter WHERE clause"
- "SQL aggregation functions"

### Personality:
- **Confident but not arrogant**: "I've identified..." not "Maybe these?"
- **Action-oriented**: "Let me create..." not "Would you like to..."
- **Insightful**: "70% of this segment..." with context
- **Non-technical**: "Audience" not "Records", "Goals" not "Queries"

---

## The Magic Moments

1. **The Agent Bar Entry**: Glowing, pulsing invitation to describe goals
2. **Staggered Card Reveal**: Each attribute feels individually crafted
3. **Channel Bar Fills**: Watching data come alive
4. **The Split Fork**: Visual representation of optimization in action
5. **Winner Declaration**: Definitive, data-backed conclusion

---

**Project Untethered** isn't just a segmentation tool—it's a story that unfolds with each interaction, turning complex data operations into an elegant, visual narrative.
