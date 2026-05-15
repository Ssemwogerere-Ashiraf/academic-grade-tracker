# 📖 User Guide - Academic Grade Tracker

Welcome! This guide walks you through every feature of the Academic Grade Tracker step-by-step.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Usage](#basic-usage)
3. [Understanding GPA](#understanding-gpa)
4. [Data Management](#data-management)
5. [Advanced Features](#advanced-features)
6. [Troubleshooting](#troubleshooting)
7. [Tips & Best Practices](#tips--best-practices)
8. [FAQs](#faqs)

---

## Getting Started

### Accessing the Tracker

**Online (Easiest):**
1. Visit: https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
2. Bookmark the page for quick access
3. Start using immediately - no login required!

**Offline (Download):**
1. Visit GitHub: https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker
2. Click **Code** → **Download ZIP**
3. Extract the folder
4. Open `index.html` in any web browser
5. Works completely offline!

### First Time Setup

When you first open the tracker:
- ✅ Your profile is already filled in (SSEMWOGERERE ASHIRAF)
- ✅ Year 2 Semester 2 courses are pre-loaded (12 courses)
- ✅ All semesters have placeholder courses
- ✅ Everything is ready to use - no configuration needed

---

## Basic Usage

### Step 1: Select a Semester

At the top, you'll see semester tabs:
```
🗂️ Y1 S1  |  🗂️ Y1 S2  |  🗂️ Y2 S1  |  ⭐ Y2 S2 (current)  |  🗂️ Y3 S1  |  🗂️ Y3 S2
```

**Click any tab to switch semesters.** The course table updates instantly.

### Step 2: Enter Coursework Mark

For each course:
1. Find the **Coursework** column
2. Click the input field
3. Enter marks from **0 to 50**
   - Decimal values OK (e.g., 42.5)
   - Out-of-range values auto-correct
4. Press Enter or Tab to move to next field

### Step 3: Enter Final Exam Mark

1. Find the **Final Exam** column
2. Click the input field
3. Enter marks from **0 to 50**
4. Press Enter

### Step 4: Watch It Calculate

Once you enter both marks:
- ✅ **Total** calculates automatically (Coursework + Final Exam)
- ✅ **Grade Point** calculates with credit weighting
- ✅ **Semester GPA** updates
- ✅ **CGPA** updates across all semesters
- ✅ **Grades auto-save** to your browser

### Example Entry

```
Course: "Research Methods in IT"
Credits: 2

You enter:
  Coursework: 42
  Final Exam: 38
  
System calculates:
  Total: 42 + 38 = 80/100
  Grade Point: (80 ÷ 10) × 2 = 16.0
  Updated GPA shown at top
```

---

## Understanding GPA

### What is GPA?

**GPA = Grade Point Average**

It's a weighted average of all your grades based on course credits.

### The Formula

```
Grade Point = (Total Score ÷ 10) × Credit Hours

Example:
  Total Score: 75/100
  Credits: 3
  Grade Point = (75 ÷ 10) × 3 = 22.5

Semester GPA = Sum of all Grade Points ÷ Sum of all Credits

Example:
  All Grade Points: 45.0 + 30.0 + 22.5 = 97.5
  All Credits: 4 + 2 + 3 = 9
  Semester GPA = 97.5 ÷ 9 = 10.83
```

### CGPA vs Semester GPA

| Metric | Covers | Calculation |
|--------|--------|-------------|
| **Semester GPA** | Current semester only | Sum of Grade Points ÷ Total Credits (this semester) |
| **CGPA** | All 6 semesters | Sum of ALL Grade Points ÷ Sum of ALL Credits |

### The 4 GPA Cards

At the top, you see 4 cards:

1. **📖 Current Semester GPA**
   - Shows GPA for whichever semester you're viewing
   - Updates as you enter grades
   
2. **🏆 Overall CGPA**
   - Your cumulative average across all 3 years
   - Most important for final qualification

3. **📊 Total Credits Attempted**
   - Sum of credits from ALL 6 semesters
   - Should be 40-50 credits per semester

4. **⭐ Current Sem Credits**
   - Credits in the semester you're currently viewing
   - Changes when you switch semesters

### Example Full Calculation

**Year 2 Semester 2 (current):**
```
Course 1: 75/100, 4 credits → Grade Point = 30.0
Course 2: 80/100, 3 credits → Grade Point = 24.0
Course 3: 60/100, 2 credits → Grade Point = 12.0

Semester Total Points: 30 + 24 + 12 = 66.0
Semester Total Credits: 4 + 3 + 2 = 9
Semester GPA: 66.0 ÷ 9 = 7.33
```

---

## Data Management

### Auto-Save Feature

Your grades are **automatically saved** to your browser. You'll see:
```
✓ All grades saved at 2:45:30 PM
```

The message updates each time you enter a grade. No manual save button needed!

### Reset One Semester

To clear marks for just one semester:

1. **Switch to that semester** using the tabs
2. Click **"⟳ Reset Marks"** button
3. Confirm the warning
4. All marks for that semester reset to 0

⚠️ **Cannot undo!** But you can always re-enter grades.

### Reset All Data

To completely start over:

1. Click **"🗑️ Clear All Data"** (red button)
2. Confirm warning (first dialog)
3. Confirm again (second dialog for safety)
4. All grades deleted
5. Default courses reloaded

⚠️ **Use backup before doing this!**

---

## Advanced Features

### 📥 Export to PDF

Create a professional transcript to print or share:

1. Click **"📥 Export to PDF"** button
2. A PDF generates automatically
3. Downloads as: `Academic_Transcript_ASHIRAF.pdf`
4. Shows:
   - Your name & registration number
   - All semester grades
   - Each semester's GPA
   - Overall CGPA
   - Total credits

**Perfect for:**
- Printing for portfolio
- Sharing with advisors
- Sending to future employers
- Record-keeping

### 📧 Email Transcript

Share your transcript via email:

1. Click **"📧 Email Transcript"** button
2. Modal appears asking for email
3. Enter recipient's email address
4. Click **"Send Email"**
5. Your default email client opens with:
   - Pre-filled recipient
   - Pre-filled subject
   - Your complete transcript in message body
6. Review and send from your email

**Perfect for:**
- Sending to course advisors
- Sharing with mentors
- Submitting to external programs

### 💾 Backup Data

Create a backup of all your grades:

1. Click **"💾 Backup"** button
2. JSON file downloads automatically
3. Named: `Ashiraf_GradeTracker_Backup_[DATE].json`
4. Save in a safe location (Google Drive, Dropbox, email, etc.)

**Why backup?**
- Device crashes or data loss
- Browser cache cleared
- Want to switch computers
- Share data across devices

### 📤 Import Data

Restore grades from a backup:

1. Click **"📤 Import Data"** button
2. Modal with large text area appears
3. Paste your backup JSON file contents
4. Click **"Import Data"**
5. All grades restored instantly

**How to use backup:**
```
1. Open your backup JSON file in a text editor
2. Copy all text (Ctrl+A, Ctrl+C)
3. Click "📤 Import Data"
4. Paste (Ctrl+V)
5. Click "Import Data" button
6. Done! Grades restored
```

---

## Troubleshooting

### Problem: Grades Not Saving

**Symptom:** You enter a grade, but it disappears when you refresh.

**Solution:**
1. Check browser console (F12 → Console tab)
2. Ensure localStorage is enabled
3. Clear browser cache and cookies
4. Try in an incognito/private window
5. Update your browser to latest version

### Problem: GPA Shows 0.00

**Symptom:** All GPA cards show 0.00 even after entering grades.

**Solution:**
1. Ensure you entered marks in ALL fields for a course
2. Check that courses have credit hours assigned
3. Try refreshing the page (F5)
4. Try switching semesters and back

### Problem: PDF Export Not Working

**Symptom:** Click export but nothing happens.

**Solution:**
1. Check your internet connection (PDFneeds a library)
2. Disable ad blockers (they might block CDN)
3. Check browser console for errors (F12)
4. Try a different browser
5. Try exporting again after 5 seconds

### Problem: Can't Import Backup

**Symptom:** "Invalid JSON format" error when importing.

**Solution:**
1. Ensure you copied the ENTIRE JSON file
2. Check for extra text before/after JSON
3. Validate JSON at: https://jsonlint.com
4. Try backup from recent export
5. Start fresh with manual re-entry

### Problem: Courses Missing or Changed

**Symptom:** Year 1 semester shows different courses than before.

**Solution:**
- Year 1, 3 have generic placeholder courses
- Year 2 Semester 2 has your actual 12 courses
- To customize, edit `tracker.js` in the code
- See README.md for customization guide

---

## Tips & Best Practices

### 📋 Regular Backups
- Download backup **weekly**
- Keep 2-3 recent backups
- Store in cloud (Google Drive, Dropbox)
- Name them with dates: `Backup_2026-05-15.json`

### 📱 Mobile Access
- Bookmark the URL on your phone
- Add to home screen (looks like an app)
- Access grades anytime, anywhere
- Same data syncs across devices (via browser)

### 📊 Semester Planning
- Look ahead at GPA before final exams
- Estimate what you need to hit target GPA
- Use to plan study time
- Share with advisor for feedback

### 🎯 GPA Targets
- Check after each assignment/exam
- Aim to maintain or improve
- Plan courses strategically
- Know your target GPA early

### 🔐 Data Safety
- Never rely on browser storage alone
- Back up monthly minimum
- Keep email copy of transcript
- Print PDF copy for records

### 🌐 Sharing with Classmates
- Repository is public (GitHub)
- Friends can fork and use
- Share the live URL
- Helps them organize their grades too

---

## FAQs

### Q: Will my data be safe?
**A:** Yes! Data is stored locally on your device. No cloud servers, no company collecting data. Your grades never leave your computer unless you share them.

### Q: Can I use this on mobile?
**A:** Absolutely! The tracker is fully responsive. Works perfectly on:
- iPhone/iPad (iOS)
- Android phones/tablets
- Any device with a web browser

### Q: What if my browser clears cache?
**A:** Your grades are saved in localStorage, which survives cache clearing. But to be safe:
1. Back up regularly (💾 button)
2. Export to PDF periodically
3. Store backups in cloud storage

### Q: Can I edit course names?
**A:** Currently, you'd need to edit `tracker.js` in the code. Advanced UI editing coming soon. For now:
- Download the repo
- Edit `tracker.js`
- Change course names in the arrays
- Push changes back to GitHub

### Q: How is 50+50 different from 100?
**A:** Great question! The tracker separates:
- **Coursework (50 points)** - Assignments, participation, projects
- **Final Exam (50 points)** - End-of-semester exam

Some institutions weight them differently. This structure matches most universities.

### Q: Can I add more semesters?
**A:** Currently 6 semesters (3 years) are built in. To add more:
1. Edit `tracker.js`
2. Add to `semesterKeys` array
3. Add label in `semesterLabels` object
4. Add placeholder courses in `getDefaultCoursesForSemester()`

### Q: Is there a dark mode?
**A:** Not yet, but it's on the roadmap! Currently has:
- Blue light theme (easy on eyes)
- Print-friendly stylesheet
- Works well at any brightness

### Q: Can I export as Excel/CSV?
**A:** Currently supports:
- PDF (for printing/sharing)
- JSON (for backup/restore)
- Email text format

CSV/Excel export coming soon!

### Q: What if I make a mistake entering marks?
**A:** Simply:
1. Click the input field again
2. Delete the old value
3. Type the correct mark
4. It auto-saves

No undo needed - just overwrite!

### Q: Can multiple people use this?
**A:** Yes, but they should:
1. Use separate browsers
2. Clear cookies between users
3. Use "🗑️ Clear All Data" to wipe
4. Encourage each to bookmark their own copy

Or: Each person forks and customizes their own copy on GitHub.

### Q: Is my data encrypted?
**A:** Data is stored locally in plain text (not encrypted). For maximum security:
- Use on personal devices only
- Keep computer password-protected
- Back up to secure cloud storage
- Don't share your computer access

### Q: What happens if I change devices?
**A:** Use the backup/restore feature:
1. On old device: Click **"���� Backup"**
2. Email the JSON file to yourself
3. On new device: Click **"📤 Import Data"**
4. Paste JSON and click Import
5. All grades restored!

---

## Need More Help?

- 📚 Check [README.md](README.md) for feature overview
- 🐛 Report bugs on [GitHub Issues](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/issues)
- 💡 Suggest features on [GitHub Discussions](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/discussions)
- 🌐 Visit the [GitHub Repository](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker)

---

**Happy grade tracking! 🎓**

Remember: This tracker helps you monitor your academic progress. Use it to stay informed, plan ahead, and ultimately improve your grades. Your success is the goal!

[← Back to README](README.md) | [Use Tracker →](https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker)
