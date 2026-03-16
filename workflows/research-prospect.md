---
description: How to research a business and prepare a video pitch using NotebookLM and Eliana Scripts
---

# 🚀 Research & Pitch Workflow

Use this workflow whenever a new high-intent audit is submitted. This will help you research the business in depth and record a "face-to-face" pitch video that closes the deal.

## 1. Get the Audit Data
Copy the JSON data of the latest audit submission from your database (Firebase/Supabase) or use the data provided in the email notification.

## 2. Generate the Prospecting Kit & Start NotebookLM
// turbo
Run the following command. This will generate the research files AND launch a browser that creates the NotebookLM project for you.

```powershell
# 1. Generate the brief
node scripts/generate-pitch-package.js

# 2. Launch NotebookLM Automation (ensure you have the brief path)
node scripts/notebooklm-auto.js "prospect_pitches/river_flow_real_estate/notebooklm_research_brief.md" "River Flow Real Estate"
```

## 3. Deep Research with NotebookLM (Automated)
The script will now:
1. Open **NotebookLM**.
2. **Create a New Notebook** for the business.
3. Import the **Research Brief** as a source.
4. Open the **Notebook Guide** and click **Generate** on the "Audio Overview" (The Pitch Video).

> [!IMPORTANT]
> The first time you run this, you will need to sign in to your Google Account in the browser window that opens. The script will wait for you to complete the login.

## 4. Why this works
I've added a **"Direct Problem Statement"** section to the research brief. This is a special instruction for the NotebookLM AI to:
- Stop being overly polite.
- Call out the specific **infrastructure debt** of the business.
- Highlight the **lost revenue** and **burnout risk** of their current manual methods.

This ensures the "Pitch Video" (Audio Overview) sounds authoritative and identifies the exact problems you are there to fix.

## 5. Record & Send the Video
1. Use **Loom** or **Canva** to record your screen and camera.
2. Show their audit results on screen while you walk through the script.
3. **Be Direct**: Call out the problems as requested. Founders respect founders who see through the fluff.
4. Send the video link via email or SMS using the links provided in your `problem_summary.md`.

## 6. Next Step
The goal of the video is to get them to book the **Industry Playbook** strategy session. Check your `CAL_LINK` in `scripts/generate-pitch-package.js` to ensure it's correct.
