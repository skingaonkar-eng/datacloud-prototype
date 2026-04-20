# Project Untethered 🚀

## 🔗 Live Prototypes

| Prototype | Link |
|-----------|------|
| **Data Cloud Segment Builder** | [Launch →](https://skingaonkar-eng.github.io/datacloud-prototype/) |
| **Slack + Data Cloud Agent** | [Launch →](https://skingaonkar-eng.github.io/datacloud-prototype/prototype-shareable.html) |

---

An **Agentic Segmentation Workspace** that revolutionizes how marketers create and analyze audience segments. Move away from complex SQL queries and technical tables—just describe your goal, and let the AI Agent do the rest.

## The Vision

Traditional segmentation tools force marketers to understand databases, joins, and technical schemas. **Project Untethered** transforms this into a natural, visual, and intelligent experience where:

- 🎯 Goals are expressed in plain language
- 🤖 AI interprets and builds segmentation logic
- 🎨 Data flows as visual nodes, not rows and columns
- 📊 Real-time insights guide optimization
- ✨ The entire experience feels alive and intelligent

## 5-Step User Journey

### Step 1: Goal-Based Entry
Start with a simple goal: *"I want to win back high-value customers for our trek gear launch."*

The Agent interprets this to mean:
- High-value = LTV > $500
- Win back = No purchase in 6 months

### Step 2: Attribute Cards
Instead of complex filters, get visual **Attribute Cards**:
- 📈 Lifetime Value: Top 10%
- ⏰ Last Activity: 180+ Days
- 📦 Product Interest: Trekking Boots

Quick search to add more filters like "Region: Pacific Northwest"

### Step 3: Channel Affinity
See which channels work best for your audience:
- 📱 Mobile Push: 70% affinity (Top Pick!)
- 💬 SMS: 55% affinity
- ✉️ Email: 35% affinity

### Step 4: Agentic Splits
Let the AI suggest A/B test splits:
- **Group A**: 15% Discount via Mobile Push (6,244 people)
- **Group B**: Free Shipping via SMS (6,243 people)

Visual fork-in-the-road design shows the split clearly.

### Step 5: Analytics & Performance
Get comprehensive insights:
- 📊 **Segment Analytics**: Total reachable audience of 12,487
- 🔄 **Overlap Analysis**: Sleek Venn diagram showing audience intersections
- 🏆 **Performance**: Real-time A/B comparison with winner detection

## Design Philosophy

### Modern SaaS 2.0 Aesthetic
- **Theme**: Zinc/Slate with glassmorphism effects
- **Borders**: Sharp 0px or luxurious 24px+ rounded corners
- **Animations**: Framer Motion for smooth, staggered entrances
- **Colors**: Violet/Purple primary with Blue/Cyan accents

### The Agentic Bar
Fixed at the bottom, pill-shaped, glowing subtly—the **primary engine** of the app. This is where goals are entered and AI magic begins.

### Living Canvas
Everything feels alive:
- Pulsing dots indicate active AI processing
- Glowing borders highlight important elements
- Staggered animations bring components to life
- Smooth transitions between steps

### Non-Technical Language
No mentions of:
- ❌ SQL, Joins, Schemas
- ❌ Tables, Databases, Queries

Instead, we use:
- ✅ Goals, Interests, Results
- ✅ Attributes, Affinity, Performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Try the Demo Flow

1. Enter a goal in the Agent Bar at the bottom:
   ```
   I want to win back high-value customers for our trek gear launch
   ```

2. Watch as the AI identifies key attributes

3. Click "Analyze Channels" to see channel affinity

4. Click "Optimize with A/B Split" to create test groups

5. Explore the final analytics and performance insights

## Project Structure

```
project-untethered/
├── app/
│   ├── page.tsx          # Main app with 5-step flow
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles & animations
├── components/
│   ├── AgentBar.tsx              # Bottom command bar
│   ├── AttributeCards.tsx        # Step 2: Attribute visualization
│   ├── ChannelAffinity.tsx       # Step 3: Channel analysis
│   ├── SplitVisualization.tsx    # Step 4: A/B split creation
│   └── InsightsPanel.tsx         # Step 5: Analytics & performance
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Key Features

### 🎯 Goal-Based Interface
No need to know technical details—just describe what you want to achieve in natural language.

### 🎨 Visual Segmentation
- Glassmorphic cards with gradient accents
- Smooth animations and transitions
- Clear visual hierarchy

### 🤖 AI-Powered Insights
- Automatic attribute identification
- Channel affinity analysis
- Smart A/B split suggestions
- Explainable segment behavior

### 📊 Real-Time Analytics
- Venn diagram overlap analysis
- Performance comparison charts
- Live conversion tracking
- Statistical significance detection

### 🌊 Fluid Experience
- Staggered component entrance
- Pulsing activity indicators
- Smooth page transitions
- Responsive design

## Design Tokens

### Colors
```css
Primary: Violet (500-600)
Secondary: Blue/Cyan (500-600)
Success: Emerald/Green (400-500)
Background: Zinc (900-950)
Text: Zinc (100-400)
```

### Animations
- **Entrance**: Staggered fade + slide up
- **Processing**: Pulse glow on active elements
- **Transitions**: Smooth layout shifts
- **Hover**: Subtle scale + color shift

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, high contrast
- **Labels**: Small, muted zinc-400

## Future Enhancements

- 🔄 Real-time collaboration
- 📅 Campaign scheduling
- 🎯 Multi-step journey builders
- 📱 Mobile app version
- 🔌 CRM integrations
- 📈 Advanced analytics dashboards
- 🧪 Multi-variate testing
- 🎨 Custom branding themes

## Philosophy

**Project Untethered** embodies a new paradigm in marketing technology:

1. **Agent-First**: Let AI handle complexity
2. **Visual-First**: Show, don't tell
3. **Goal-First**: Start with outcomes, not tools
4. **Human-First**: Natural language over technical jargon

The future of segmentation isn't about learning tools—it's about achieving goals.

---

Built with ✨ by forward-thinking marketers and designers who believe software should adapt to humans, not the other way around.
