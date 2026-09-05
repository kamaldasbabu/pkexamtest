// Exam State Variables
let examConfig = {};
let questions = [];
let sections = [];
let currentIndex = 0;
const userAnswers = {}; // { qId: optionIndex }
let timeRemaining = 0;
let timerInterval = null;
let isSubmitted = false;
let candidateName = "";

// DOM Elements
const examTitleEl = document.getElementById("exam-title");
const examSubtitleEl = document.getElementById("exam-subtitle");
const pageTitleEl = document.getElementById("page-title");
const sectionTabsContainer = document.getElementById("section-tabs-container");
const qSectionBadgeEl = document.getElementById("q-section-badge");
const qDirectionEl = document.getElementById("q-direction");
const qTextEl = document.getElementById("q-text");
const qOptionsEl = document.getElementById("q-options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paletteGridEl = document.getElementById("palette-grid");
const paletteCountEl = document.getElementById("palette-count");
const timerDisplayEl = document.getElementById("timer-display");
const positiveMarkDisplay = document.getElementById("positive-mark-display");
const negativeMarkDisplay = document.getElementById("negative-mark-display");

// Fetch JSON and Initialize
async function loadExamData() {
  try {
    const response = await fetch("exam_data.json");
    if (!response.ok) throw new Error("Failed to load exam_data.json");
    const data = await response.json();

    examConfig = data.examConfig;
    sections = data.sections;
    questions = data.questions;

    setupPreExamMetadata();
  } catch (error) {
    console.error("Error loading examination data:", error);
    examTitleEl.innerText = "Error Loading Exam Data";
    examSubtitleEl.innerText = "Please ensure exam_data.json is present in the root directory.";
  }
}

// Setup Exam Titles and Information Prior to Start
function setupPreExamMetadata() {
  pageTitleEl.innerText = `${examConfig.title} - Online Mock Test`;
  examTitleEl.innerText = examConfig.title;

  const totalMarks = (questions.length * examConfig.positiveMark).toFixed(0);
  examSubtitleEl.innerText = `${questions.length} Questions • ${totalMarks} Marks • Duration: ${examConfig.durationMinutes} Mins`;

  positiveMarkDisplay.innerText = `+${examConfig.positiveMark.toFixed(2)}`;
  negativeMarkDisplay.innerText = `-${examConfig.negativeMark.toFixed(2)}`;

  // Display exam info in the modal
  document.getElementById("modal-exam-title").innerText = examConfig.title;
  document.getElementById("modal-exam-subtitle").innerText = `Total Questions: ${questions.length} | Duration: ${examConfig.durationMinutes} Minutes`;
}

// Form Handler to Start Exam
function handleStartExam(e) {
  e.preventDefault();
  const inputEl = document.getElementById("candidate-name-input");
  candidateName = inputEl.value.trim();

  if (!candidateName) return;

  // Update headers
  document.getElementById("header-candidate-name").innerText = candidateName;
  document.getElementById("candidate-badge").classList.remove("hidden");

  // Close modal
  document.getElementById("start-modal").classList.add("hidden");

  // Initialize Exam Session
  timeRemaining = examConfig.durationMinutes * 60;
  buildSectionTabs();
  buildPalette();
  renderCurrentQuestion();
  startTimer();
}

// Generate Section Nav Tabs dynamically
function buildSectionTabs() {
  sectionTabsContainer.innerHTML = "";
  sections.forEach((sec, idx) => {
    const count = questions.filter(q => q.sectionId === sec.id).length;
    const btn = document.createElement("button");
    btn.id = `sec-tab-${sec.id}`;
    btn.className = `section-tab ${idx === 0 ? "active" : ""}`;
    btn.innerText = `${sec.name} (${count})`;
    btn.onclick = () => switchSection(sec.id);
    sectionTabsContainer.appendChild(btn);
  });
}

// Generate Palette Grid
function buildPalette() {
  paletteGridEl.innerHTML = "";
  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.id = `palette-btn-${idx}`;
    btn.innerText = idx + 1;
    btn.className = "palette-btn";
    btn.onclick = () => jumpToQuestion(idx);
    paletteGridEl.appendChild(btn);
  });
  updatePaletteUI();
}

// Update Palette UI Indicators
function updatePaletteUI() {
  let answeredCount = 0;
  questions.forEach((q, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    const isAnswered = userAnswers[q.id] !== undefined;
    if (isAnswered) answeredCount++;

    btn.className = "palette-btn";
    if (idx === currentIndex) {
      btn.classList.add("current");
    }
    if (isAnswered) {
      btn.classList.add("answered");
    }
  });
  paletteCountEl.innerText = `${answeredCount} / ${questions.length} Answered`;
}

// Render Current Question
function renderCurrentQuestion() {
  const q = questions[currentIndex];
  const sectionObj = sections.find(s => s.id === q.sectionId) || { name: "General" };

  qSectionBadgeEl.innerText = sectionObj.name;
  qDirectionEl.innerText = q.direction || "";
  qTextEl.innerText = `${currentIndex + 1}. ${q.question}`;

  qOptionsEl.innerHTML = "";
  q.options.forEach((optText, optIdx) => {
    const isSelected = userAnswers[q.id] === optIdx;

    const optDiv = document.createElement("div");
    optDiv.className = `option-item ${isSelected ? "selected" : ""}`;
    optDiv.onclick = () => selectOption(optIdx);

    const indicator = document.createElement("div");
    indicator.className = "opt-indicator";
    if (isSelected) {
      indicator.innerHTML = `<span class="opt-indicator-dot"></span>`;
    }

    const label = document.createElement("span");
    label.className = "opt-label";
    label.innerText = optText;

    optDiv.appendChild(indicator);
    optDiv.appendChild(label);
    qOptionsEl.appendChild(optDiv);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.innerText = currentIndex === questions.length - 1 ? "Review All" : "Next →";

  highlightSectionTab(q.sectionId);
  updatePaletteUI();
}

function selectOption(optionIndex) {
  if (isSubmitted) return;
  userAnswers[questions[currentIndex].id] = optionIndex;
  renderCurrentQuestion();
}

function clearCurrentResponse() {
  if (isSubmitted) return;
  delete userAnswers[questions[currentIndex].id];
  renderCurrentQuestion();
}

function navigateQuestion(step) {
  const nextIdx = currentIndex + step;
  if (nextIdx >= 0 && nextIdx < questions.length) {
    currentIndex = nextIdx;
    renderCurrentQuestion();
  }
}

function jumpToQuestion(index) {
  currentIndex = index;
  renderCurrentQuestion();
}

function switchSection(secId) {
  const targetIdx = questions.findIndex(q => q.sectionId === secId);
  if (targetIdx !== -1) {
    currentIndex = targetIdx;
    renderCurrentQuestion();
  }
}

function highlightSectionTab(secId) {
  sections.forEach(sec => {
    const tab = document.getElementById(`sec-tab-${sec.id}`);
    if (tab) {
      if (sec.id === secId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    }
  });
}

// Timer Logic
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
      return;
    }
    timeRemaining--;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerDisplayEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// Confirmation & Submission
function confirmSubmitExam() {
  const answered = Object.keys(userAnswers).length;
  const unattempted = questions.length - answered;
  const msg = `Candidate: ${candidateName}\n\nAre you sure you want to submit?\n• Answered: ${answered}\n• Unattempted: ${unattempted}\n\nClick OK to evaluate your score.`;
  if (confirm(msg)) {
    submitExam();
  }
}

function submitExam() {
  if (isSubmitted) return;
  isSubmitted = true;
  clearInterval(timerInterval);

  document.getElementById("submit-exam-btn").classList.add("hidden");
  document.getElementById("timer-box").innerHTML = "<span style='color: #34d399;'>TEST SUBMITTED</span>";

  // Score Calculation
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  const sectionStats = {};
  sections.forEach(sec => {
    sectionStats[sec.id] = {
      name: sec.name,
      totalQuestions: 0,
      correct: 0,
      wrong: 0
    };
  });

  questions.forEach(q => {
    const sId = q.sectionId;
    if (sectionStats[sId]) {
      sectionStats[sId].totalQuestions++;
    }

    const userChoice = userAnswers[q.id];
    if (userChoice === undefined) {
      unattempted++;
    } else if (userChoice === q.answer) {
      correct++;
      if (sectionStats[sId]) sectionStats[sId].correct++;
    } else {
      wrong++;
      if (sectionStats[sId]) sectionStats[sId].wrong++;
    }
  });

  const posMark = examConfig.positiveMark;
  const negMark = examConfig.negativeMark;
  const netScore = (correct * posMark) - (wrong * negMark);
  const maxMarks = questions.length * posMark;

  // Display Total Metrics & Candidate Evaluation Name
  document.getElementById("result-exam-title").innerText = examConfig.title;
  document.getElementById("eval-candidate-name").innerText = candidateName;
  document.getElementById("res-score").innerText = `${netScore.toFixed(2)} / ${maxMarks.toFixed(0)}`;
  document.getElementById("res-correct").innerText = correct;
  document.getElementById("res-wrong").innerText = wrong;
  document.getElementById("res-unattempted").innerText = unattempted;

  // Sectional Breakdown Render
  const breakdownEl = document.getElementById("section-breakdown");
  breakdownEl.innerHTML = "";
  Object.keys(sectionStats).forEach(sKey => {
    const st = sectionStats[sKey];
    const sMarks = (st.correct * posMark) - (st.wrong * negMark);
    const maxSecMarks = st.totalQuestions * posMark;

    const row = document.createElement("div");
    row.className = "section-summary-row";
    row.innerHTML = `
      <strong>${st.name}</strong>
      <div style="display:flex; gap:16px;">
        <span class="text-success">${st.correct} Correct</span>
        <span class="text-danger">${st.wrong} Wrong</span>
        <span class="text-primary-dark font-semibold">Marks: ${sMarks.toFixed(2)} / ${maxSecMarks.toFixed(0)}</span>
      </div>
    `;
    breakdownEl.appendChild(row);
  });

  // Render Detailed Solutions
  renderSolutions("all");

  // Show Result Tab
  document.getElementById("test-view").classList.add("hidden");
  document.getElementById("result-view").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Solutions Review with Filters
function renderSolutions(filter = 'all') {
  const listEl = document.getElementById("solution-list");
  listEl.innerHTML = "";

  questions.forEach((q, idx) => {
    const userChoice = userAnswers[q.id];
    const isCorrect = userChoice === q.answer;
    const isSkipped = userChoice === undefined;

    if (filter === 'wrong' && (isCorrect || isSkipped)) return;
    if (filter === 'skipped' && !isSkipped) return;

    const card = document.createElement("div");
    let cardClass = "sol-card ";
    let statusBadge = "";

    if (isCorrect) {
      cardClass += "correct";
      statusBadge = `<span class="badge" style="background:#d1fae5; color:#065f46;">Correct (+${examConfig.positiveMark})</span>`;
    } else if (isSkipped) {
      cardClass += "skipped";
      statusBadge = `<span class="badge" style="background:#fef3c7; color:#92400e;">Skipped (0.0)</span>`;
    } else {
      cardClass += "wrong";
      statusBadge = `<span class="badge" style="background:#fee2e2; color:#991b1b;">Incorrect (-${examConfig.negativeMark})</span>`;
    }

    card.className = cardClass;

    card.innerHTML = `
      <div class="sol-header">
        <strong>${idx + 1}. ${q.question}</strong>
        ${statusBadge}
      </div>
      <div class="sol-options-grid">
        ${q.options.map((opt, oIdx) => {
          let optStyle = "sol-opt";
          if (oIdx === q.answer) optStyle += " correct-ans";
          if (oIdx === userChoice && !isCorrect) optStyle += " user-wrong";
          return `<div class="${optStyle}">${opt}</div>`;
        }).join("")}
      </div>
      <div class="sol-explanation">
        <strong>Explanation:</strong> ${q.explanation || "No explanation provided."}
      </div>
    `;
    listEl.appendChild(card);
  });
}

function filterReview(type) {
  ['all', 'wrong', 'skipped'].forEach(t => {
    const btn = document.getElementById(`rev-filter-${t}`);
    if (t === type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderSolutions(type);
}

// Run on page load
window.addEventListener("DOMContentLoaded", loadExamData);