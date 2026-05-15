// ----------------------------- DATA MODEL ---------------------------------
const year2Sem2Courses = [
    { code: "52201", name: "Foundations of Curriculum Studies", credits: 4 },
    { code: "52202", name: "Research Methods in IT", credits: 2 },
    { code: "52203", name: "Guide to School Practice", credits: 2 },
    { code: "523", name: "Computer Teaching Methods I", credits: 3 },
    { code: "524", name: "Critical Thinking & Writing Skills", credits: 3 },
    { code: "525", name: "Transformation of Europe since 1871", credits: 3 },
    { code: "526", name: "History of Central Africa incl. Namibia since 1800", credits: 4 },
    { code: "527", name: "Web-Based Systems Programming", credits: 2 },
    { code: "528", name: "History Teaching Methods", credits: 3 },
    { code: "529", name: "Educational Measurement & Evaluation", credits: 4 },
    { code: "530", name: "System Administration", credits: 4 },
    { code: "531", name: "Mobile Computing & Networks", credits: 4 }
];

const semesterKeys = ["Y1S1", "Y1S2", "Y2S1", "Y2S2", "Y3S1", "Y3S2"];

const semesterLabels = {
    Y1S1: "📖 Year 1 - Semester 1",
    Y1S2: "📖 Year 1 - Semester 2",
    Y2S1: "📖 Year 2 - Semester 1",
    Y2S2: "⭐ Year 2 - Semester 2 (Current Units)",
    Y3S1: "📖 Year 3 - Semester 1",
    Y3S2: "📖 Year 3 - Semester 2"
};

let marksData = {};
let semestersCourses = {};
let currentSem = "Y2S2";

// ----------------------------- DATA PERSISTENCE ---------------------------------
function getDefaultCoursesForSemester(semKey) {
    if (semKey === "Y2S2") return JSON.parse(JSON.stringify(year2Sem2Courses));
    
    const generic = [
        { code: "EDU101", name: "Introduction to Education", credits: 3 },
        { code: "PSY101", name: "Educational Psychology", credits: 3 },
        { code: "ICT101", name: "Computer Literacy", credits: 2 },
        { code: "HIS101", name: "African History", credits: 3 },
        { code: "ENG101", name: "Communication Skills", credits: 2 },
        { code: "CUR201", name: "Curriculum Development", credits: 3 }
    ];
    
    if (semKey === "Y3S1") generic.push(
        { code: "MGT301", name: "School Management", credits: 3 },
        { code: "RES302", name: "Research Project", credits: 4 }
    );
    if (semKey === "Y3S2") generic.push({ code: "PRAC400", name: "Teaching Practicum", credits: 4 });
    if (semKey === "Y1S1") generic.push({ code: "PHIL101", name: "Philosophy of Education", credits: 3 });
    if (semKey === "Y2S1") generic.push({ code: "ICT202", name: "Instructional Technology", credits: 3 });
    
    return generic.slice(0, 7);
}

function loadOrInitData() {
    const saved = localStorage.getItem("Ashiraf_GradeTracker_3Y");
    if (saved) {
        const parsed = JSON.parse(saved);
        marksData = parsed.marksData || {};
        semestersCourses = parsed.semestersCourses || {};
    }
    
    for (let sem of semesterKeys) {
        if (!semestersCourses[sem]) {
            if (sem === "Y2S2") semestersCourses[sem] = JSON.parse(JSON.stringify(year2Sem2Courses));
            else semestersCourses[sem] = getDefaultCoursesForSemester(sem);
        }
        if (!marksData[sem]) {
            marksData[sem] = semestersCourses[sem].map(() => ({ cw: 0, final: 0 }));
        } else {
            if (marksData[sem].length !== semestersCourses[sem].length) {
                let newMarks = semestersCourses[sem].map((_, idx) => marksData[sem][idx] || { cw: 0, final: 0 });
                marksData[sem] = newMarks;
            }
        }
    }
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const store = {
        marksData: marksData,
        semestersCourses: semestersCourses
    };
    localStorage.setItem("Ashiraf_GradeTracker_3Y", JSON.stringify(store));
    const msgDiv = document.getElementById("saveMsg");
    if (msgDiv) {
        msgDiv.textContent = "✓ All grades saved at " + new Date().toLocaleTimeString();
        setTimeout(() => { if(msgDiv) msgDiv.textContent = "✓ Auto-saved to browser storage"; }, 1800);
    }
}

// ----------------------------- GPA CALCULATIONS ---------------------------------
function computeSemesterGPA(semKey) {
    const courses = semestersCourses[semKey];
    const marksArr = marksData[semKey];
    if (!courses || !marksArr) return { gpa: 0, totalPoints: 0, totalCredits: 0 };
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < courses.length; i++) {
        const credit = courses[i].credits;
        const cw = Math.min(50, Math.max(0, Number(marksArr[i]?.cw) || 0));
        const finalExam = Math.min(50, Math.max(0, Number(marksArr[i]?.final) || 0));
        const totalScore = cw + finalExam;
        const gradePointValue = (totalScore / 10) * credit;
        totalGradePoints += gradePointValue;
        totalCredits += credit;
    }
    
    const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits) : 0;
    return { gpa: parseFloat(gpa.toFixed(2)), totalPoints: totalGradePoints, totalCredits };
}

function computeCGPA() {
    let sumGradePoints = 0;
    let sumCredits = 0;
    
    for (let sem of semeterKeys) {
        const { totalPoints, totalCredits } = computeSemesterGPA(sem);
        sumGradePoints += totalPoints;
        sumCredits += totalCredits;
    }
    
    const cgpa = sumCredits > 0 ? (sumGradePoints / sumCredits) : 0;
    return parseFloat(cgpa.toFixed(2));
}

function totalCreditsAll() {
    let total = 0;
    for (let sem of semesterKeys) {
        const courses = semestersCourses[sem];
        if (courses) total += courses.reduce((sum, c) => sum + c.credits, 0);
    }
    return total;
}

function getCurrentSemCredits() {
    const courses = semestersCourses[currentSem];
    if (!courses) return 0;
    return courses.reduce((sum, c) => sum + c.credits, 0);
}

// ----------------------------- UI RENDERING ---------------------------------
function renderCurrentSemester() {
    const courses = semestersCourses[currentSem];
    const marks = marksData[currentSem];
    if (!courses || !marks) return;
    
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const cwVal = marks[i]?.cw ?? 0;
        const finalVal = marks[i]?.final ?? 0;
        const totalScore = Number(cwVal) + Number(finalVal);
        const gradePoint = (totalScore / 10) * course.credits;
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<span class="course-code">${course.code}</span>`;
        row.insertCell(1).innerHTML = `<strong>${course.name}</strong>`;
        row.insertCell(2).innerHTML = `${course.credits}`;
        
        // Coursework input
        const tdCW = row.insertCell(3);
        const cwInput = document.createElement("input");
        cwInput.type = "number";
        cwInput.value = cwVal;
        cwInput.step = "0.5";
        cwInput.min = "0";
        cwInput.max = "50";
        cwInput.addEventListener("change", (function(idx) {
            return function(e) {
                let v = parseFloat(e.target.value) || 0;
                v = Math.min(50, Math.max(0, v));
                marksData[currentSem][idx].cw = v;
                saveToLocalStorage();
                renderCurrentSemester();
                updateGPAandCGPA();
            };
        })(i));
        tdCW.appendChild(cwInput);
        
        // Final exam input
        const tdFinal = row.insertCell(4);
        const finalInput = document.createElement("input");
        finalInput.type = "number";
        finalInput.value = finalVal;
        finalInput.step = "0.5";
        finalInput.min = "0";
        finalInput.max = "50";
        finalInput.addEventListener("change", (function(idx) {
            return function(e) {
                let v = parseFloat(e.target.value) || 0;
                v = Math.min(50, Math.max(0, v));
                marksData[currentSem][idx].final = v;
                saveToLocalStorage();
                renderCurrentSemester();
                updateGPAandCGPA();
            };
        })(i));
        tdFinal.appendChild(finalInput);
        
        // Total and grade point
        row.insertCell(5).innerHTML = `<span class="total-col">${totalScore.toFixed(1)}</span>`;
        row.insertCell(6).innerHTML = `<span class="grade-point">${gradePoint.toFixed(2)}</span>`;
    }
    
    document.getElementById("semesterTitle").innerHTML = semesterLabels[currentSem] || currentSem;
    updateGPAandCGPA();
}

function updateGPAandCGPA() {
    const { gpa } = computeSemesterGPA(currentSem);
    document.getElementById("currentSemGPA").innerHTML = gpa.toFixed(2);
    
    const cgpa = computeCGPA();
    document.getElementById("overallCGPA").innerHTML = cgpa.toFixed(2);
    
    document.getElementById("totalCredits").innerHTML = totalCreditsAll();
    document.getElementById("currentCredits").innerHTML = getCurrentSemCredits();
}

function buildTabs() {
    const container = document.getElementById("semesterTabs");
    container.innerHTML = "";
    
    semesterKeys.forEach(sem => {
        const btn = document.createElement("button");
        btn.className = "sem-tab";
        if (sem === currentSem) btn.classList.add("active");
        
        let label = sem;
        if (sem === "Y1S1") label = "🗂️ Y1 S1";
        else if (sem === "Y1S2") label = "🗂️ Y1 S2";
        else if (sem === "Y2S1") label = "🗂️ Y2 S1";
        else if (sem === "Y2S2") label = "⭐ Y2 S2";
        else if (sem === "Y3S1") label = "🗂️ Y3 S1";
        else label = "🗂️ Y3 S2";
        
        btn.textContent = label;
        btn.onclick = () => {
            currentSem = sem;
            renderCurrentSemester();
            document.querySelectorAll(".sem-tab").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        };
        container.appendChild(btn);
    });
}

// ----------------------------- EXPORT & IMPORT ---------------------------------
function exportToPDF() {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.onload = () => {
        const element = document.querySelector(".dashboard");
        const opt = {
            margin: 10,
            filename: "Academic_Transcript_ASHIRAF.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
        };
        html2pdf().set(opt).from(element).save();
        showNotification("✓ PDF exported successfully!");
    };
    document.head.appendChild(script);
}

function sendEmail() {
    const email = document.getElementById("emailInput").value;
    if (!email) {
        alert("❌ Please enter a valid email address");
        return;
    }
    
    const transcript = generateTranscriptText();
    const subject = "Academic Transcript - SSEMWOGERERE ASHIRAF (BA EDUC)";
    const body = encodeURIComponent(transcript);
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
    closeModal("emailModal");
    showNotification("✓ Email client opened with transcript!");
}

function generateTranscriptText() {
    let text = "ACADEMIC TRANSCRIPT\n";
    text += "=".repeat(50) + "\n\n";
    text += "Student: SSEMWOGERERE ASHIRAF\n";
    text += "Registration: 2024-B201-11819\n";
    text += "Program: BA(EDUC) - Bachelor of Arts with Education\n";
    text += "Campus: Nkozi Campus\n";
    text += "Generated: " + new Date().toLocaleDateString() + "\n\n";
    
    text += "CGPA: " + computeCGPA().toFixed(2) + "\n";
    text += "Total Credits: " + totalCreditsAll() + "\n\n";
    
    for (let sem of semesterKeys) {
        const { gpa, totalCredits } = computeSemesterGPA(sem);
        text += "\n" + semesterLabels[sem] + "\n";
        text += "-".repeat(40) + "\n";
        text += "GPA: " + gpa.toFixed(2) + " | Credits: " + totalCredits + "\n\n";
        
        const courses = semestersCourses[sem];
        const marks = marksData[sem];
        courses.forEach((course, i) => {
            const cw = marks[i]?.cw || 0;
            const final = marks[i]?.final || 0;
            const total = cw + final;
            text += `${course.code}: ${course.name} (${course.credits}cr) - ${total}/100\n`;
        });
    }
    
    return text;
}

function backupData() {
    const backup = {
        marksData: marksData,
        semestersCourses: semestersCourses,
        generatedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ashiraf_GradeTracker_Backup_" + new Date().toISOString().split("T")[0] + ".json";
    a.click();
    URL.revokeObjectURL(url);
    showNotification("✓ Backup downloaded successfully!");
}

function importData() {
    const text = document.getElementById("importText").value;
    if (!text) {
        alert("❌ Please paste JSON data");
        return;
    }
    
    try {
        const data = JSON.parse(text);
        marksData = data.marksData || {};
        semestersCourses = data.semestersCourses || {};
        saveToLocalStorage();
        renderCurrentSemester();
        closeModal("importModal");
        showNotification("✓ Data imported successfully!");
    } catch (e) {
        alert("❌ Invalid JSON format. Please check your backup file.");
    }
}

function clearAllData() {
    showConfirmDialog(
        "🗑️ Clear All Data?",
        "This will delete all your grades and course information. This action CANNOT be undone. Are you absolutely sure?",
        () => {
            marksData = {};
            semestersCourses = {};
            loadOrInitData();
            renderCurrentSemester();
            showNotification("✓ All data cleared. Defaults reloaded.");
        }
    );
}

function resetCurrentSemesterMarks() {
    showConfirmDialog(
        "⚠️ Reset Semester Marks?",
        `Reset ALL coursework & final marks for ${semesterLabels[currentSem]}? This cannot be undone.`,
        () => {
            const coursesLen = semestersCourses[currentSem].length;
            marksData[currentSem] = Array(coursesLen).fill().map(() => ({ cw: 0, final: 0 }));
            saveToLocalStorage();
            renderCurrentSemester();
            showNotification("✓ Marks reset successfully!");
        }
    );
}

// ----------------------------- MODAL HELPERS ---------------------------------
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

function showConfirmDialog(title, message, onConfirm) {
    document.getElementById("confirmTitle").innerHTML = title;
    document.getElementById("confirmMessage").innerHTML = message;
    document.getElementById("confirmBtn").onclick = () => {
        closeModal("confirmModal");
        onConfirm();
    };
    openModal("confirmModal");
}

function showNotification(message) {
    const msgDiv = document.getElementById("saveMsg");
    if (msgDiv) {
        msgDiv.textContent = message;
        setTimeout(() => { if(msgDiv) msgDiv.textContent = "✓ Auto-saved to browser storage"; }, 2500);
    }
}

// ----------------------------- EVENT LISTENERS ---------------------------------
window.addEventListener("load", () => {
    loadOrInitData();
    buildTabs();
    renderCurrentSemester();
    
    document.getElementById("exportPdfBtn")?.addEventListener("click", exportToPDF);
    document.getElementById("emailBtn")?.addEventListener("click", () => openModal("emailModal"));
    document.getElementById("importBtn")?.addEventListener("click", () => openModal("importModal"));
    document.getElementById("backupBtn")?.addEventListener("click", backupData);
    document.getElementById("clearAllBtn")?.addEventListener("click", clearAllData);
    document.getElementById("resetSemesterBtn")?.addEventListener("click", resetCurrentSemesterMarks);
});

// Close modals when clicking outside
window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("active");
    }
});
