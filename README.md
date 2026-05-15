# 🎓 Academic Grade Tracker

[![GitHub](https://img.shields.io/badge/GitHub-Ssemwogerere--Ashiraf%2Facademic--grade--tracker-blue?logo=github)](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

A modern, responsive **academic grade tracker** designed for BA(EDUC) students at Nkozi Campus. Track grades across multiple semesters, calculate GPA/CGPA in real-time, and manage your academic data with ease.

## ✨ Features

### 📊 Core Functionality
- ✅ **Multi-Semester Tracking** - Track 6 semesters across 3 years
- ✅ **Real-Time GPA Calculation** - Automatic GPA & CGPA computation
- ✅ **Credit-Weighted Grades** - Accurate grade point calculations
- ✅ **12 Pre-Loaded Courses** - Year 2 Semester 2 units ready to use
- ✅ **Auto-Save** - Grades saved to browser storage automatically

### 🔄 Data Management
- 📥 **Export to PDF** - Download professional academic transcript
- 📧 **Email Transcript** - Share grades via email instantly
- 💾 **Backup & Restore** - Full JSON backup/restore functionality
- 🗑️ **Data Management** - Clear or reset data with safety confirmations
- 🔒 **Local Storage** - All data stored on your device (no cloud)

### 🎨 User Experience
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎯 **Intuitive Interface** - Clean, modern design with hover effects
- 🌙 **Professional UI** - Blue gradient theme with smooth animations
- ⚡ **Fast Performance** - Instant calculations and page loads
- 🔔 **Save Notifications** - Real-time feedback on data saves

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
Simply visit the live tracker:
```
https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
```
No installation needed. Start tracking grades immediately!

### Option 2: Download & Run Locally
```bash
# Clone the repository
git clone https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker.git
cd academic-grade-tracker

# Open in browser
open index.html
# or on Linux/Windows
xdg-open index.html  # Linux
start index.html     # Windows
```

### Option 3: Use as Template
- Fork the repository
- Customize for your courses
- Deploy to your own GitHub Pages

## 📖 How It Works

### Grade Entry
1. Select a semester from the tabs
2. Enter **Coursework** marks (0-50)
3. Enter **Final Exam** marks (0-50)
4. **Total** automatically calculates (0-100)
5. **Grade Points** computed based on credits
6. Grades **auto-save** to browser storage

### GPA Calculation Formula
```
Grade Point = (Total Score ÷ 10) × Credit Hours
Semester GPA = Σ(Grade Points) / Σ(Credit Hours)
CGPA = Σ(All Grade Points) / Σ(All Credit Hours)
```

### Example
```
Course: "Research Methods in IT"
Credits: 2
Coursework: 40/50
Final Exam: 35/50
Total: 75/100

Grade Point = (75 ÷ 10) × 2 = 15 points
```

## 📚 Pre-Loaded Courses (Year 2, Semester 2)

| Code | Course Name | Credits |
|------|-------------|---------|
| 52201 | Foundations of Curriculum Studies | 4 |
| 52202 | Research Methods in IT | 2 |
| 52203 | Guide to School Practice | 2 |
| 523 | Computer Teaching Methods I | 3 |
| 524 | Critical Thinking & Writing Skills | 3 |
| 525 | Transformation of Europe since 1871 | 3 |
| 526 | History of Central Africa incl. Namibia since 1800 | 4 |
| 527 | Web-Based Systems Programming | 2 |
| 528 | History Teaching Methods | 3 |
| 529 | Educational Measurement & Evaluation | 4 |
| 530 | System Administration | 4 |
| 531 | Mobile Computing & Networks | 4 |

**Total: 40 Credits**

## 🎯 Features in Detail

### 📥 Export to PDF
- Click **"📥 Export to PDF"**
- Generates professional transcript with:
  - Student information
  - All semester grades
  - Semester GPAs
  - Overall CGPA
  - Total credits
- Downloads as `Academic_Transcript_ASHIRAF.pdf`

### 📧 Email Transcript
- Click **"📧 Email Transcript"**
- Enter recipient email address
- Opens default mail client with transcript pre-filled
- Share with advisors, mentors, or institutions

### 💾 Backup & Restore
**Create Backup:**
1. Click **"💾 Backup"**
2. JSON file downloads to your computer
3. Safe storage for data portability

**Restore from Backup:**
1. Click **"📤 Import Data"**
2. Paste JSON from backup file
3. All grades restored instantly

### 🗑️ Clear Data
- **"⟳ Reset Marks"** - Clear one semester only
- **"🗑️ Clear All Data"** - Delete everything (requires 2 confirmations)

## 💻 Technical Details

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients & animations
- **JavaScript (Vanilla)** - No dependencies, lightweight
- **localStorage API** - Browser data persistence
- **HTML2PDF** - PDF generation library (CDN)

### File Structure
```
academic-grade-tracker/
├── index.html          # Main HTML with UI
├── tracker.js          # Core logic & calculations
├── README.md           # This file
├── USER_GUIDE.md       # Step-by-step guide
├── CONTRIBUTING.md     # Contribution guidelines
├── DEPLOYMENT.md       # Deployment instructions
├── package.json        # Project metadata
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### Data Storage
- **Location**: Browser's localStorage
- **Size Limit**: ~5-10MB (plenty for grade data)
- **Persistence**: Survives browser restart
- **Privacy**: No server access, entirely local

## 🔒 Privacy & Security

✅ **100% Local Storage** - No cloud servers, no account needed  
✅ **No Tracking** - No analytics or user tracking  
✅ **Open Source** - Full transparency, audit the code  
✅ **HTTPS** - Secure connection via GitHub Pages  
✅ **User Controlled** - You manage all backups  

## 📋 Customization

### Change Student Name
Edit `index.html` line (search for "SSEMWOGERERE ASHIRAF"):
```html
<h2>YOUR NAME HERE</h2>
```

### Edit Registration Number
Find and update:
```html
<strong>2024-B201-11819</strong>
```

### Add/Remove Courses
Edit `tracker.js` in the `year2Sem2Courses` array:
```javascript
const year2Sem2Courses = [
    { code: "NEW001", name: "Your Course Name", credits: 3 },
    // ... add more
];
```

### Change Colors
Modify CSS variables in `index.html` `<style>` section:
```css
background: linear-gradient(135deg, #1e3c72, #2a5298); /* Change these colors */
```

## ❓ FAQ

**Q: Will my grades be saved if I close the browser?**  
A: Yes! All grades are saved to localStorage and persist across sessions.

**Q: Can I use this on my phone?**  
A: Absolutely! The tracker is fully responsive and works on all devices.

**Q: What if I lose my data?**  
A: Create regular backups using the "💾 Backup" button. Download the JSON file to your computer.

**Q: Can I share this with classmates?**  
A: Yes! The repository is public. They can fork it or use their own copy.

**Q: How is GPA calculated exactly?**  
A: GPA = Sum of (Grade Points) ÷ Sum of (Credits). Grade Point = (Total Score ÷ 10) × Credits.

**Q: Can I edit course names after creation?**  
A: Currently, edit the JSON in `tracker.js`. Advanced editing UI coming soon.

**Q: Is there an offline version?**  
A: Yes! Download the files and open `index.html` in your browser - works completely offline.

**Q: Can I export in other formats?**  
A: Currently PDF and JSON. Email transcript feature also available.

**Q: How many semesters can I track?**  
A: Currently 6 semesters (3 years). Easily expandable if needed.

**Q: Is my data encrypted?**  
A: Data is stored locally in plain text in browser storage. Use HTTPS for secure access.

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Reporting bugs
- Suggesting features
- Submitting code improvements
- Improving documentation

## 📖 Documentation

- **[README.md](README.md)** - Project overview (this file)
- **[USER_GUIDE.md](USER_GUIDE.md)** - Step-by-step user instructions
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment & hosting options

## 🚀 Deployment

### GitHub Pages (Already Configured)
The tracker is automatically deployed to:
```
https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker
```

Changes push automatically via GitHub Actions.

### Alternative Hosting Options
See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Netlify deployment
- Vercel hosting
- Custom domain setup
- Troubleshooting

## 📈 Roadmap

Planned features:
- [ ] Grade letter conversion (A, B, C, D, F)
- [ ] GPA prediction based on remaining courses
- [ ] Semester comparison charts
- [ ] Performance analytics
- [ ] Dark mode toggle
- [ ] Multiple language support
- [ ] Cloud backup (Firebase/Supabase)
- [ ] Mobile app (React Native)

## 📞 Support

- 🐛 **Found a bug?** Open a [GitHub Issue](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/issues)
- 💡 **Have a feature idea?** Start a [GitHub Discussion](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker/discussions)
- 📧 **Questions?** Check [USER_GUIDE.md](USER_GUIDE.md) first

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute
- ✅ Use privately

## 👨‍💎 Author

**SSEMWOGERERE ASHIRAF**
- 📚 BA(EDUC) Student
- 🏫 Nkozi Campus
- 📍 Registration: 2024-B201-11819
- GitHub: [@Ssemwogerere-Ashiraf](https://github.com/Ssemwogerere-Ashiraf)

## 🙏 Acknowledgments

- **Nkozi Campus** for the academic framework
- **BA(EDUC) Program** for course specifications
- **GitHub Pages** for free hosting
- **Open Source Community** for inspiration

---

**Made with ❤️ by SSEMWOGERERE ASHIRAF**

⭐ If you find this useful, please star the repository!

[View on GitHub](https://github.com/Ssemwogerere-Ashiraf/academic-grade-tracker) | [Use Tracker](https://Ssemwogerere-Ashiraf.github.io/academic-grade-tracker)
