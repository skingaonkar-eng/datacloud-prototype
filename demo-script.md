# Data Cloud Segment Builder - Demo Script
## Customer Scenario: OutdoorCo Retail - Spring Reactivation Strategy

**Duration:** ~9 minutes  
**Persona:** Sarah Chen, Marketing Manager at OutdoorCo (outdoor equipment retailer)  
**Business Context:** Spring season approaching, need to reactivate high-value customers who haven't purchased recently

---

## ACT 1: SEGMENT CREATION WITH AI AGENT (2 min)

### Scene Setup
*"Hi, I'm Sarah, and I manage customer engagement at OutdoorCo. Spring is our peak season, and I need to bring back our best customers who've gone quiet. Let me show you how Data Cloud helps me do this in minutes."*

### Feature: Landing Page & Agent-Driven Creation
**Action:** Click "Create New Segment" → Select "Guide Me with AI Assistant"

**Demo Flow:**
1. **Type goal into agent:** 
   *"I want to target high-value customers who haven't purchased in the last 6 months but have strong history with us"*

2. **Agent asks Question 1:**
   *"How do you define 'high value' customers?"*
   - **Select:** "Top 20% lifetime value"

3. **Agent asks Question 2:**
   *"How do you define 'lapsing' or 'inactive' customers?"*
   - **Select:** "No purchase in 180+ days"

4. **Agent presents 2 strategies:**
   - Strategy A: High-Value Recovery (Top 20% LTV + recently lapsed + past engagement)
   - Strategy B: Broader Reactivation (All high-value + any lapse period)
   
   **Select:** Strategy A - "This gives me the highest recovery potential"

5. **Agent navigates to Segment Definition page**

**Talking Point:**  
*"In just 30 seconds, the AI understood my goal and pre-configured my segment criteria. But I can also build manually if I prefer full control—there's a 'Manual Builder' option for that."*

---

## ACT 2: REFINING THE SEGMENT (2.5 min)

### Feature: Segment Definition - Include/Exclude Logic

**Already Added by Agent:**
- ✅ Lifetime Value ≥ $7,000 (Top 20%)
- ✅ Last Activity > 180 Days ago
- ✅ Product Interest = Trekking Boots (from past purchases)

**Demo Action 1 - Add More Filters:**
*"Let me refine this further. I want to add engagement criteria."*

1. **Click "Add from Quick Filters"** - Show the 5-tab filter builder
   
2. **Navigate through tabs to explain:**
   - **Quick Attributes:** *"Raw data fields like Age, Location—I'd need to configure values"*
   - **Quick Filters:** *"Pre-configured—like 'Millennials' already has age 25-40 set"*
   - **Metrics:** *"Calculated fields using formulas—like Customer Health Score"*
   - **Predictive Scores:** *"AI scores from Model Builder—propensity, affinity scores"*
   - **Other Segments:** *"Nest existing segments as conditions"*

3. **Add from Predictive Scores tab:**
   - Click "Purchase Propensity > 0.7" 
   - *"This ML score tells me they're likely to buy again"*

4. **Add from Quick Filters:**
   - Click "Email Engaged (30 days)"
   - *"They're still opening our emails—good signal!"*

**Demo Action 2 - Add Exclusions:**
*"Now let me exclude customers I shouldn't message."*

1. **Click "+ Add Exclusion"** → Opens filter builder in exclusion mode
2. **From Other Segments:** Add "Recent Buyers - 30 Days"
   - *"No need to target people who just bought"*
3. **From Quick Filters:** Add "Contact Recency < 7 days"
   - *"Avoid message fatigue"*

**Talking Point:**  
*"See how I'm building complex logic with AND/OR—all visually, no SQL needed. Each filter shows a badge so I know if it's an attribute, metric, or score."*

---

## ACT 3: VALIDATING THE SEGMENT (2 min)

### Feature: Segment Preview
**Action:** Click "Preview Segment" button

**Demo Flow:**
1. **Sample Data Table:**
   *"Here are 50 actual customers who'll be in this segment. I can see their names, LTV, last purchase date—the filter attributes show first."*
   
2. **Attribute Distribution Charts:**
   - Point to Gender pie chart: *"68% male, 32% female"*
   - Point to LTV bar chart: *"Most are in the $7K-$10K range"*
   - Point to Loyalty Tiers: *"47% Gold members"*
   - *"These quick visuals confirm my filters are working"*

3. **Click "Next: Insights" →**

### Feature: Segment Insights
**Demo Flow - Tell the Story:**

*"Now let me understand what this audience really looks like..."*

1. **Point to Audience Composition:**
   - *"45,700 customers, mostly Gold loyalty tier"*
   - *"61% are active, but 30% at-risk—this validates why we're targeting them"*

2. **Point to Behavioral Patterns:**
   - *"Average order frequency is 3.2x/year—these were good customers"*
   - *"Email open rate is 42%—they're still engaged with our brand"*
   - *"Best time to reach them: 6-8 PM weekdays"*

3. **Point to Revenue Indicators:**
   - *"$38.6M total addressable value"*
   - *"$2.94M at risk if they churn—this is significant!"*

4. **Point to Risk & Opportunity:**
   - *"65% have high churn risk, but 78% have upsell potential"*
   - *"NPS is 72—they like us, just haven't bought lately"*

5. **AI Recommendation:**
   - *"Premium positioning recommended—emphasize quality over discounts"*

**Click "Next: Overlap Analysis" →**

### Feature: Overlap Analysis
**Demo Flow:**

1. **Show Venn Diagram:**
   *"Let me check if these customers overlap with other segments..."*
   - Select "Holiday Gift Guide" from dropdown
   - *"52% overlap! 6,493 customers were in our holiday segment"*

2. **Message Fatigue Indicators:**
   - Point to cards: *"23% contacted in last 7 days"*
   - *"19% receiving high message frequency"*
   - *"Fatigue score is 6.8/10—moderate-high risk"*

3. **Smart Suggestions:**
   - *"AI recommends excluding 890 high-frequency customers"*
   - **Click "+ Add" on exclusion suggestion**
   - *"Just added that exclusion—it automatically went to my segment rules!"*

4. **Click "Back to Rules" →**

**Talking Point:**  
*"I validated my segment, found overlap issues, and refined my rules—all without leaving the builder. This saves hours of back-and-forth."*

---

## ACT 4: OPTIONAL OPTIMIZATIONS (1.5 min)

### Feature: Rank and Limit (Quick)
**Navigate to:** Rank and Limit tab

*"These next steps are optional but powerful..."*

**Quick Explanation:**
- *"I could group by region, rank by LTV, limit to top 500 per region"*
- *"Perfect for controlled rollouts or budget constraints"*
- **Click "Skip to Activate" →**

### Feature: Channel Affinity (Quick)
*"Skipping rank for now... let me check channels..."*

**Point out:**
- Email: 45%, SMS: 22%, Push: 18%, In-App: 15%
- Best send time: 6-8 PM (aligns with insights!)
- **Click "Skip to Activate" →**

### Feature: Smart Splits (Quick)
*"I could also test variants..."*

**Quick show:**
- Split A (60%): Email + SMS
- Split B (40%): Email + Push
- *"Perfect for A/B testing, but I'm skipping today"*
- **Click "Skip to Activate" →**

**Talking Point:**  
*"Notice how these are all marked OPTIONAL—I have full control over my workflow."*

---

## ACT 5: ACTIVATION & JOURNEY (2 min)

### Feature: Activation Templates
**Navigate to:** Activate tab

**Demo Flow:**

1. **Show Templates:**
   *"I have pre-built templates with channels and personalization already configured."*
   
   - **Point to Template 1:** "Multi-Channel Engagement"
     - Channels: Email + WhatsApp + Meta Ads
     - 5 personalization attributes: Name, Last Purchase, Category, LTV, Loyalty
   
   - **Point to Template 2:** "Email-First Strategy"
     - Channels: Email + SMS fallback
     - Personalization for retention focus

2. **Select "Create Custom Template":**
   *"But let me build a custom one for this spring reactivation..."*

   **Step 1: Select Channels**
   - Check: Email (primary)
   - Check: SMS (follow-up)
   - Check: Mobile Push (reminder)

   **Step 2: Add Personalization Attributes**
   - *"I want to personalize with customer name, last purchase date, and favorite product category"*
   - **Click "+ Add"** - *"This would let me search all attributes and metrics from my segment"*

3. **Show Journey Configuration (Optional):**
   **Click "Configure Journey" →**
   
   *"This is where it gets powerful—I can orchestrate a multi-touch journey..."*
   
   **Select pre-configured:** "Email Engagement Flow"
   - Shows: Email → Wait 24h → If opened → WhatsApp → If not → Meta Ads
   
   **Alternative - Build Custom:**
   - Click "Build Custom Journey"
   - Show quick-add steps: Send Email, Wait 24h, If Email Opened, etc.
   - *"I can define complex conditional flows based on customer responses"*

**Talking Point:**  
*"Templates separate channel/personalization from journey orchestration—so I can reuse templates across different journey flows. And if I'm ever stuck, I can just tell the agent: 'Create a template: send email, if opened send WhatsApp, if not wait 24hrs and send push'—it builds it automatically!"*

4. **Click "Activate Segment" →**
   - Popup: *"✓ Segment Activated Successfully!"*
   - *"12,487 customers activated"*
   - **Click "View Performance" →**

---

## ACT 6: MEASURING SUCCESS (1 min)

### Feature: Segment Performance
**Navigate to:** Segment Performance tab

**Demo Flow - Quick Highlights:**

1. **Activation Summary Dashboard:**
   - *"11,843 reached, 24.8% engagement rate"*
   - *"16.4% conversion—that's excellent!"*
   - *"$167K revenue generated with 4.2x ROI"*

2. **Engagement Analysis:**
   - *"Email performed best at 42% open rate"*
   - *"Gold loyalty tier converted at 18.5%—highest"*

3. **Conversion Analytics:**
   - *"Average order value is $425"*
   - *"We generated $167K incremental revenue"*

4. **Comparative Performance:**
   - *"38% above our 6-month average"*
   - *"185% lift vs. control group—strong incremental impact!"*

5. **Next Segment Suggestions:**
   - Win-back non-responders (1,847 customers)
   - Upsell converters to premium tier
   - Create lookalike for acquisition

**Talking Point:**  
*"In under 10 minutes, I went from a business goal to an activated segment to performance insights. The AI guided me, validation tools gave me confidence, and now I have clear next steps."*

---

## CLOSING (30 sec)

### Key Value Props to Emphasize:

1. **Speed:** "Business goal to activation in minutes, not hours"
2. **Intelligence:** "AI asks the right questions, suggests strategies, flags issues"
3. **Validation:** "Preview, insights, overlap—validate before you activate"
4. **Flexibility:** "Guided or manual, simple or complex—you choose"
5. **Integration:** "Predictive scores from Model Builder, journey orchestration, multi-channel"
6. **Results:** "Performance insights and recommendations close the loop"

**Final Line:**  
*"This is Data Cloud—transforming how marketers build, validate, and activate segments. Any questions?"*

---

## DEMO TIPS & BEST PRACTICES

### Timing Breakdown:
- Act 1 (Agent Creation): 2:00
- Act 2 (Segment Definition): 2:30
- Act 3 (Validation): 2:00
- Act 4 (Optional Features): 1:30
- Act 5 (Activation): 2:00
- Act 6 (Performance): 1:00
- **Total: ~11 minutes** (can trim optional features to get under 10)

### What to Emphasize:
- **Agent intelligence** - Show how it understands intent
- **Visual validation** - Preview, insights, overlap working together
- **One-click actions** - Suggestions that add to segment automatically
- **Journey orchestration** - Conditional multi-touch flows
- **Closed-loop** - From creation to performance analysis

### What to Breeze Through:
- Rank & Limit (mention but don't deep dive)
- Smart Splits (show quickly)
- Channel Affinity (point out, don't linger)

### Key Phrases to Use:
- "No SQL needed"
- "Business language, not technical"
- "AI-powered intelligence"
- "Validate before you activate"
- "Multi-touch orchestration"
- "Closed-loop insights"

### If Time is Tight (Get to 8 minutes):
**Skip/Mention Only:**
- Rank & Limit (just say "I could limit to top 500 per region")
- Smart Splits (just say "I could A/B test two variants")
- Journey Configuration (show template, skip custom builder)

### Story Consistency Check:
✅ Spring season (timing makes sense)  
✅ High-value lapsed customers (clear business need)  
✅ Outdoor gear (specific product category)  
✅ Email + SMS + Push (logical channel mix)  
✅ $167K revenue, 4.2x ROI (realistic B2C results)  
✅ Next steps: win-back non-responders, upsell converters (logical progression)

---

## OPTIONAL: ALTERNATIVE SCENARIOS

### Scenario 2: B2B SaaS - Churn Prevention
- Goal: "Prevent enterprise customers at risk of not renewing"
- Filters: Contract renewal < 60 days, declining product usage, support cases
- Activation: Email + account manager sync + in-app messaging
- Journey: Multi-touch with escalation to account team

### Scenario 3: Financial Services - Cross-sell
- Goal: "Promote credit cards to checking account customers"
- Filters: Has checking, no credit card, good credit score, active transactions
- Activation: Email with personalized offer + online banking banner
- Journey: Email → Wait 3 days → SMS → Wait 7 days → Call center sync

---

## COMMON QUESTIONS & ANSWERS

**Q: "Can I use this without knowing SQL?"**  
A: "Absolutely—everything is visual. The agent asks business questions, not technical ones."

**Q: "How does it compare to our current segmentation tool?"**  
A: "Three key differences: AI-guided creation, built-in validation (preview/insights/overlap), and journey orchestration—all in one workflow."

**Q: "Can I integrate with our existing martech stack?"**  
A: "Yes—400+ activations supported, including Marketing Cloud, Meta, Google, CRM systems."

**Q: "What if I want to make quick changes?"**  
A: "Use the global agent bar at the bottom—just type 'Add filter for West Coast' or 'Show me overlap'—it executes instantly."

**Q: "How accurate are the predictive scores?"**  
A: "They're built in Model Builder using your historical data—you control the training and validation. Average accuracy is 85%+ for propensity models."

---

## POST-DEMO: NEXT STEPS

**If they're interested:**
1. "Would you like to try building a segment for your use case?"
2. "What's your biggest segmentation challenge today?"
3. "Let's set up a working session with your data"

**Key differentiators to leave them with:**
- ✨ **AI-Powered:** Not just a builder—an intelligent assistant
- 🔍 **Validation-First:** Preview, insights, overlap—confidence before activation
- 🎯 **Goal-Oriented:** Start with business goals, not technical requirements
- 🔄 **Closed-Loop:** Performance insights feed next segment recommendations
- ⚡ **Fast:** Minutes instead of hours or days

---

## SCRIPT PERSONALIZATION

**For different industries, adjust:**
- **Retail/E-commerce:** Use LTV, purchase frequency, product affinity
- **B2B/SaaS:** Use contract value, product usage, support cases
- **Financial Services:** Use account balances, credit scores, transaction patterns
- **Healthcare:** Use patient engagement, appointment history, care gaps
- **Travel/Hospitality:** Use booking frequency, loyalty status, trip preferences

**Keep the story structure same, swap the context.**

---

**END OF DEMO SCRIPT**
