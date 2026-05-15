# 🤝 Contributing to Academic Grade Tracker

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🎯 Ways to Contribute

- 🐛 **Report Bugs** - Found an issue? Open a GitHub Issue
- 💡 **Suggest Features** - Have an idea? Start a Discussion
- 📝 **Improve Documentation** - Help make it clearer
- 🔧 **Code Contributions** - Submit pull requests with improvements
- 🎨 **Design Improvements** - Suggest UI/UX enhancements
- 🌍 **Translations** - Help translate to other languages
- 📢 **Share & Promote** - Tell others about the tracker

## 🔄 Development Workflow

### Setup
```bash
# Clone the repository
git clone https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker.git
cd academic-grade-tracker

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly
# Commit with clear messages
# Push and create a Pull Request
```

### Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/descriptive-name
   ```
   Good names: `feature/dark-mode`, `fix/gpa-calculation`, `docs/user-guide`

2. **Make your changes**
   - Edit files
   - Test in multiple browsers
   - Keep changes focused

3. **Test locally:**
   - Open `index.html` in your browser
   - Test all features
   - Check responsive design (F12 → Device Toolbar)
   - Check console for errors (F12 → Console)

4. **Commit with clear messages:**
   ```bash
   git commit -m "feat: add dark mode toggle"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/descriptive-name
   ```

6. **Open a Pull Request on GitHub**
   - Describe what you changed
   - Explain why the change is needed
   - Link to related issues

### Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat:  Add new feature (dark mode, export formats, etc)
fix:   Bug fix (calculation error, UI glitch, etc)
docs:  Documentation updates (README, guides, etc)
style: Code style improvements (formatting, etc)
refactor: Code refactoring without behavior change
test:  Test additions or modifications
perf:  Performance improvements
```

**Examples:**
```
✅ feat: add dark mode toggle to UI
✅ fix: correct CGPA calculation with missing credits
✅ docs: expand FAQ section
✅ perf: optimize grade calculations

❌ fixed stuff
❌ updated code
❌ changes
```

## 📋 Pull Request Process

Before submitting:

- [ ] Code works in all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] No console errors (open F12 and check Console tab)
- [ ] README.md updated if adding features
- [ ] Comments added for complex logic
- [ ] PR is focused on a single feature/fix
- [ ] Related issues are referenced

### PR Checklist Template

```markdown
## Changes
- [x] Feature: Add xyz
- [x] Fix: Correct abc

## Testing
- [x] Tested in Chrome
- [x] Tested in Firefox
- [x] Tested on mobile
- [x] No console errors

## Documentation
- [x] Updated README.md
- [x] Added code comments

Fixes #123
```

## 🧪 Testing

### Manual Testing Checklist

**Grade Entry:**
- [ ] Can enter coursework marks (0-50)
- [ ] Can enter final exam marks (0-50)
- [ ] Total calculates correctly
- [ ] Grade points calculate with credits
- [ ] Out-of-range values auto-correct

**GPA Calculations:**
- [ ] Semester GPA calculates correctly
- [ ] CGPA calculates across all semesters
- [ ] Credits sum correctly
- [ ] Formula: GPA = Σ(gradePoints) / Σ(credits)

**Data Persistence:**
- [ ] Grades save to localStorage
- [ ] Data persists after page refresh
- [ ] Data persists after browser restart
- [ ] Multiple semesters maintain separate data

**Semester Switching:**
- [ ] Can switch between 6 semesters
- [ ] Each semester shows correct courses
- [ ] Data doesn't mix between semesters
- [ ] GPA updates when switching

**Export/Import:**
- [ ] PDF exports successfully
- [ ] PDF contains all grades
- [ ] JSON backup creates valid file
- [ ] JSON import restores data correctly

**Data Management:**
- [ ] Reset marks clears one semester
- [ ] Clear all data wipes everything
- [ ] Safety confirmations appear
- [ ] Default courses reload after clear

**Responsive Design:**
- [ ] Desktop layout (1400px+)
- [ ] Tablet layout (768px-1024px)
- [ ] Mobile layout (320px-500px)
- [ ] All buttons accessible on mobile

**Browser Compatibility:**
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

### Test Cases Template

```javascript
// Test: GPA Calculation
// Given: Course with 75 total, 3 credits
// Expected: Grade Point = (75/10) * 3 = 22.5
// Expected: Contributes to semester GPA

// Test: Data Persistence
// Given: Grades entered
// When: Page refreshes
// Then: Grades still present

// Test: Responsive Design
// Given: Mobile viewport (375px)
// When: Page loads
// Then: All elements visible and accessible
```

## 🎨 Code Style

### JavaScript
```javascript
// ✅ Good: Descriptive names, comments for complex logic
function calculateSemesterGPA(semesterKey) {
    const courses = semestersCourses[semesterKey];
    const marks = marksData[semesterKey];
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < courses.length; i++) {
        const credit = courses[i].credits;
        const totalScore = (marks[i]?.cw || 0) + (marks[i]?.final || 0);
        const gradePoint = (totalScore / 10) * credit;
        
        totalGradePoints += gradePoint;
        totalCredits += credit;
    }
    
    return totalGradePoints / (totalCredits || 1);
}

// ❌ Bad: Unclear variable names, no comments
function calc(s) {
    let t = 0, c = 0;
    for (let i in semestersCourses[s]) {
        let g = (marks[s][i] / 10) * semestersCourses[s][i].credits;
        t += g;
        c += semestersCourses[s][i].credits;
    }
    return t / c;
}
```

### HTML
```html
<!-- ✅ Good: Semantic, descriptive IDs, proper structure -->
<div class="gpa-card">
    <h4>📖 Current Semester GPA</h4>
    <div class="value" id="currentSemGPA">0.00</div>
    <small>weighted by credits</small>
</div>

<!-- ❌ Bad: Generic div soup, unclear purpose -->
<div id="card1">
    <div id="text1">GPA</div>
    <div id="value1">0.00</div>
</div>
```

### CSS
```css
/* ✅ Good: Descriptive names, grouped logically */
.gpa-card {
    background: white;
    border-radius: 28px;
    padding: 18px 22px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.gpa-card .value {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
}

/* ❌ Bad: Generic classes, magic numbers */
.c1 { background: white; padding: 20px; }
.c1 .v { font-size: 40px; color: black; }
```

### Best Practices
- Use meaningful variable names
- Add comments for complex logic
- Keep functions focused and small
- Use consistent indentation (4 spaces)
- Follow camelCase for JavaScript
- Write descriptive commit messages

## 📚 Documentation

When adding features, please update:

1. **index.html** - UI changes or new elements
2. **tracker.js** - Code logic and functions
3. **README.md** - Feature overview and usage
4. **USER_GUIDE.md** - Step-by-step instructions
5. **Code comments** - Explain complex logic

### Documentation Template

```javascript
/**
 * Calculate semester GPA for a given semester
 * 
 * @param {string} semKey - Semester key (e.g., "Y2S2")
 * @returns {object} Object with gpa, totalPoints, totalCredits
 * 
 * Formula: GPA = Σ(gradePoints) / Σ(credits)
 * Grade Point = (totalScore / 10) * credits
 * 
 * Example:
 *   computeSemesterGPA("Y2S2")
 *   // Returns: { gpa: 7.45, totalPoints: 95.3, totalCredits: 13 }
 */
function computeSemesterGPA(semKey) { ... }
```

## 🚀 Feature Ideas

Here are features that would be great to add:

- [ ] **Grade Letter Conversion** - Convert numeric grades to A, B, C, D, F
- [ ] **GPA Prediction** - Estimate final GPA based on remaining courses
- [ ] **Semester Charts** - Visual comparison between semesters
- [ ] **Performance Analytics** - Trends and statistics
- [ ] **Dark Mode** - Theme toggle for night use
- [ ] **Multiple Languages** - Support for Swahili, French, etc.
- [ ] **Cloud Backup** - Firebase/Supabase integration
- [ ] **Mobile App** - React Native or Flutter version
- [ ] **CSV Export** - Excel-compatible export
- [ ] **Print Stylesheet** - Better printing support
- [ ] **Custom Courses** - Edit course names in UI
- [ ] **Target GPA** - Set and track goals
- [ ] **Grade Distribution** - Visualize grade spread
- [ ] **Course Search** - Find courses across semesters

## 🐛 Reporting Bugs

If you find a bug:

1. **Check existing issues** to avoid duplicates
2. **Open a GitHub Issue** with:
   - Clear title: "PDF export fails on mobile"
   - Description: What happened vs expected
   - Steps to reproduce
   - Browser and OS info
   - Screenshots if helpful
   - Console errors (F12 → Console)

**Good bug report:**
```
Title: GPA calculation incorrect for courses with decimal marks

Description:
When I enter 42.5 for coursework and 35.5 for final exam (total 78),
the GPA shows as if total was 78.5.

Steps to reproduce:
1. Open tracker
2. Enter coursework: 42.5
3. Enter final exam: 35.5
4. Observe total (should be 78.0, shows 78.5)

Browser: Chrome 125 on Windows 11
Console: No errors
```

## ❓ Questions?

- 📚 Check [README.md](README.md) for overview
- 📖 Check [USER_GUIDE.md](USER_GUIDE.md) for how-to
- 🐛 Open [GitHub Issues](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/issues)
- 💬 Start [GitHub Discussions](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/discussions)

## 📜 License

By contributing, you agree your contributions are licensed under the MIT License.

---

**Thank you for contributing! Your effort makes this better for everyone.** 🙏

[← Back to README](README.md)
