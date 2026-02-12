# Setup Guide for Project Untethered

## Prerequisites Installation

Since Node.js isn't currently in your PATH, here's how to set it up:

### Option 1: Install via Homebrew (Recommended for macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (includes npm)
brew install node

# Verify installation
node --version
npm --version
```

### Option 2: Install via Node Version Manager (nvm)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.zshrc

# Install Node.js LTS
nvm install --lts
nvm use --lts

# Verify installation
node --version
npm --version
```

### Option 3: Direct Download

Download from [nodejs.org](https://nodejs.org/) and install the LTS version.

## Running the Project

Once Node.js is installed:

### 1. Navigate to the project directory

```bash
cd ~/.local/bin
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Framer Motion (animations)
- Lucide React (icons)
- Recharts (data visualization)
- Tailwind CSS (styling)
- TypeScript

### 3. Start the development server

```bash
npm run dev
```

### 4. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000)

You should see the **Project Untethered** landing screen with the Agent Bar at the bottom!

## Quick Start Demo

1. **Type a goal** in the Agent Bar:
   ```
   I want to win back high-value customers for our trek gear launch
   ```

2. **Press Enter** or click the send button

3. **Watch the magic happen**:
   - ✨ AI processes your goal (1.5s animation)
   - 📊 Attribute Cards appear with staggered animation
   - 📱 Channel Affinity analysis shows up
   - 🔀 A/B Split visualization creates test groups
   - 📈 Full analytics and insights panel displays

## Troubleshooting

### Port 3000 already in use?

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

### Module not found errors?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?

```bash
# Rebuild TypeScript
npm run build
```

## Project Structure Overview

```
~/.local/bin/
├── app/
│   ├── page.tsx              # Main 5-step flow
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Animations & styles
├── components/
│   ├── AgentBar.tsx          # Step 0: Command input
│   ├── AttributeCards.tsx    # Step 1: Attributes
│   ├── ChannelAffinity.tsx   # Step 2: Channels
│   ├── SplitVisualization.tsx # Step 3: A/B splits
│   └── InsightsPanel.tsx     # Step 4: Analytics
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind setup
├── tsconfig.json             # TypeScript config
└── README.md                 # Full documentation
```

## Development Tips

### Hot Reload
Changes to any file will automatically refresh the browser. No need to restart the server!

### Customizing the Experience

**Change the example goal:**
Edit `app/page.tsx` - look for the welcome message

**Adjust animations:**
Edit individual components - all use Framer Motion with `initial`, `animate`, and `transition` props

**Modify colors:**
Edit `tailwind.config.js` - add custom colors or adjust the theme

**Change the step flow:**
Edit `app/page.tsx` - the `step` state controls which components are visible

### Key Files to Explore

- **`app/page.tsx`**: Main orchestration, state management, step flow
- **`components/AgentBar.tsx`**: The iconic bottom command bar
- **`app/globals.css`**: Custom CSS animations (pulse-glow, glassmorphism)
- **`tailwind.config.js`**: Design tokens, custom animations

## Building for Production

When ready to deploy:

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Start with `npm run dev`
4. ✅ Open http://localhost:3000
5. ✅ Enter a marketing goal
6. ✅ Experience the 5-step journey!

Enjoy building the future of segmentation! 🚀
