// Ares Schedule • 2BAC SP-4 Data & Logic
const SCHEDULE = {
  1: {
    name: "Monday",
    arabic: "الإثنين",
    classes: [
      { start: "08:00", end: "09:00", subject: "Sport (PE)", arabic: "التربية البدنية والرياضية", icon: "🏃‍♂️", color: "#6366F1", duration: "1 HR" },
      { start: "09:00", end: "10:00", subject: "French", arabic: "اللغة الفرنسية", icon: "🇫🇷", color: "#8B5CF6", duration: "1 HR" },
      { type: "break", title: "☕ Midday Break (6 hrs)", start: "10:00", end: "16:00" },
      { start: "16:00", end: "17:00", subject: "Islamic Education", arabic: "التربية الإسلامية", icon: "📖", color: "#F43F5E", duration: "1 HR" },
      { start: "17:00", end: "18:00", subject: "Mathematics", arabic: "الرياضيات", icon: "📐", color: "#10B981", duration: "1 HR" }
    ]
  },
  2: {
    name: "Tuesday",
    arabic: "الثلاثاء",
    classes: [
      { start: "08:00", end: "10:00", subject: "Philosophy", arabic: "الفلسفة", icon: "🏛️", color: "#EAB308", duration: "2 HRS" },
      { type: "break", title: "☕ Midday Break (4 hrs)", start: "10:00", end: "14:00" },
      { start: "14:00", end: "16:00", subject: "Physics & Chemistry", arabic: "الفيزياء والكيمياء", icon: "⚡", color: "#F59E0B", duration: "2 HRS" },
      { start: "16:00", end: "17:00", subject: "Arabic", arabic: "اللغة العربية", icon: "🖋️", color: "#FB923C", duration: "1 HR" },
      { start: "17:00", end: "18:00", subject: "English", arabic: "اللغة الإنجليزية", icon: "🇬🇧", color: "#38BDF8", duration: "1 HR" }
    ]
  },
  3: {
    name: "Wednesday",
    arabic: "الأربعاء",
    classes: [
      { start: "08:00", end: "09:00", subject: "French", arabic: "اللغة الفرنسية", icon: "🇫🇷", color: "#8B5CF6", duration: "1 HR" },
      { start: "09:00", end: "10:00", subject: "Sport (PE)", arabic: "التربية البدنية والرياضية", icon: "🏃‍♂️", color: "#6366F1", duration: "1 HR" },
      { type: "break", title: "☕ Midday Break (4 hrs)", start: "10:00", end: "14:00" },
      { start: "14:00", end: "16:00", subject: "Mathematics", arabic: "الرياضيات", icon: "📐", color: "#10B981", duration: "2 HRS" },
      { start: "16:00", end: "17:00", subject: "English", arabic: "اللغة الإنجليزية", icon: "🇬🇧", color: "#38BDF8", duration: "1 HR" }
    ]
  },
  4: {
    name: "Thursday",
    arabic: "الخميس",
    classes: [
      { start: "08:00", end: "10:00", subject: "Life & Earth Sciences", arabic: "علوم الحياة والأرض (SVT)", icon: "🧬", color: "#06B6D4", duration: "2 HRS" },
      { start: "10:00", end: "12:00", subject: "Physics & Chemistry", arabic: "الفيزياء والكيمياء", icon: "⚡", color: "#F59E0B", duration: "2 HRS" },
      { type: "free", title: "🌿 Free Afternoon (شاغر بعد الزوال 12:00+)" }
    ]
  },
  5: {
    name: "Friday",
    arabic: "الجمعة",
    classes: [
      { start: "10:00", end: "11:00", subject: "Arabic", arabic: "اللغة العربية", icon: "🖋️", color: "#FB923C", duration: "1 HR" },
      { start: "11:00", end: "12:00", subject: "English", arabic: "اللغة الإنجليزية", icon: "🇬🇧", color: "#38BDF8", duration: "1 HR" },
      { type: "break", title: "🕌 Friday Prayer & Lunch", start: "12:00", end: "14:30" },
      { start: "14:30", end: "16:30", subject: "Mathematics", arabic: "الرياضيات", icon: "📐", color: "#10B981", duration: "2 HRS" },
      { start: "16:30", end: "18:30", subject: "French", arabic: "اللغة الفرنسية", icon: "🇫🇷", color: "#8B5CF6", duration: "2 HRS" }
    ]
  },
  6: {
    name: "Saturday",
    arabic: "السبت",
    classes: [
      { start: "08:00", end: "10:00", subject: "Physics & Chemistry", arabic: "الفيزياء والكيمياء", icon: "⚡", color: "#F59E0B", duration: "2 HRS" },
      { start: "10:00", end: "12:00", subject: "Life & Earth Sciences", arabic: "علوم الحياة والأرض (SVT)", icon: "🧬", color: "#06B6D4", duration: "2 HRS" },
      { type: "free", title: "✨ Weekend Holiday (عطلة نهاية الأسبوع 12:00+)" }
    ]
  }
};

let currentView = "today"; // 'today', 1..6, 'week'

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function formatMinutes(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h > 0) return `${h}h ${m > 0 ? m + 'm' : ''}`;
  return `${m}m`;
}

function getDayOfWeek() {
  const d = new Date();
  return d.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
}

function getCurrentMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

// UPDATE LIVE STATUS
function updateLiveStatus() {
  const now = new Date();
  const day = now.getDay();
  const curMins = getCurrentMinutes();
  const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById("heroClock").textContent = timeFormatted;

  const heroCard = document.getElementById("heroCard");
  const heroTag = document.getElementById("heroTag");
  const heroTitle = document.getElementById("heroTitle");
  const heroSub = document.getElementById("heroSub");
  const heroProgressBg = document.getElementById("heroProgressBg");
  const heroProgressBar = document.getElementById("heroProgressBar");

  // Sunday or outside school days
  if (day === 0) {
    heroTag.className = "hero-tag tag-free";
    heroTag.textContent = "✨ WEEKEND REST";
    heroTitle.textContent = "Happy Sunday!";
    heroSub.textContent = "No classes today. Tomorrow starts Monday at 08:00.";
    heroProgressBg.style.display = "none";
    heroCard.classList.remove("live-glow");
    return;
  }

  const todayData = SCHEDULE[day];
  if (!todayData) return;

  const classes = todayData.classes.filter(c => !c.type);
  if (classes.length === 0) {
    heroTag.className = "hero-tag tag-free";
    heroTag.textContent = "🌿 FREE DAY";
    heroTitle.textContent = "No classes today!";
    heroSub.textContent = "Enjoy your day off.";
    heroProgressBg.style.display = "none";
    heroCard.classList.remove("live-glow");
    return;
  }

  // 1. Check if class is ongoing right now
  let activeClass = null;
  for (const c of classes) {
    const startM = timeToMinutes(c.start);
    const endM = timeToMinutes(c.end);
    if (curMins >= startM && curMins < endM) {
      activeClass = { ...c, startM, endM };
      break;
    }
  }

  if (activeClass) {
    heroCard.classList.add("live-glow");
    heroTag.className = "hero-tag tag-live";
    heroTag.textContent = "🔴 HAPPENING NOW";
    heroTitle.textContent = `${activeClass.icon} ${activeClass.subject}`;
    
    const remMins = activeClass.endM - curMins;
    heroSub.textContent = `${activeClass.start} – ${activeClass.end} • ${remMins} min${remMins > 1 ? 's' : ''} left (${activeClass.arabic})`;

    const elapsed = curMins - activeClass.startM;
    const total = activeClass.endM - activeClass.startM;
    const pct = Math.min(Math.max((elapsed / total) * 100, 0), 100);
    heroProgressBg.style.display = "block";
    heroProgressBar.style.width = `${pct}%`;
    heroProgressBar.style.background = activeClass.color;
    return;
  }

  // 2. Check if before school starts today
  const firstClass = classes[0];
  const firstStartM = timeToMinutes(firstClass.start);
  if (curMins < firstStartM) {
    heroCard.classList.remove("live-glow");
    heroTag.className = "hero-tag tag-next";
    heroTag.textContent = "🌅 FIRST CLASS UPCOMING";
    const diff = firstStartM - curMins;
    heroTitle.textContent = `${firstClass.icon} ${firstClass.subject}`;
    heroSub.textContent = `Starts at ${firstClass.start} (in ${formatMinutes(diff)})`;
    heroProgressBg.style.display = "none";
    return;
  }

  // 3. Check for next class today
  let nextClass = null;
  for (const c of classes) {
    const startM = timeToMinutes(c.start);
    if (curMins < startM) {
      nextClass = { ...c, startM };
      break;
    }
  }

  if (nextClass) {
    heroCard.classList.remove("live-glow");
    heroTag.className = "hero-tag tag-next";
    heroTag.textContent = "⏳ UP NEXT TODAY";
    const diff = nextClass.startM - curMins;
    heroTitle.textContent = `${nextClass.icon} ${nextClass.subject}`;
    heroSub.textContent = `Starts at ${nextClass.start} (in ${formatMinutes(diff)})`;
    heroProgressBg.style.display = "none";
    return;
  }

  // 4. All classes done for today
  heroCard.classList.remove("live-glow");
  heroTag.className = "hero-tag tag-free";
  heroTag.textContent = "✅ COMPLETED FOR TODAY";
  heroTitle.textContent = "Classes finished!";
  
  const nextDayNum = day === 6 ? 1 : day + 1;
  const nextDayName = nextDayNum === 1 ? "Monday" : SCHEDULE[nextDayNum]?.name;
  heroSub.textContent = `Great job. Next session: ${nextDayName} at 08:00.`;
  heroProgressBg.style.display = "none";
}

// RENDER SINGLE DAY
function renderDay(dayNum) {
  const scheduleList = document.getElementById("scheduleList");
  const allWeekView = document.getElementById("allWeekView");
  const sectionHeader = document.getElementById("sectionHeader");

  scheduleList.style.display = "flex";
  allWeekView.style.display = "none";
  sectionHeader.style.display = "flex";

  const todayNum = getDayOfWeek();
  const isActualToday = (dayNum === todayNum);
  const curMins = getCurrentMinutes();

  if (dayNum === 0 || !SCHEDULE[dayNum]) {
    // Sunday
    document.getElementById("sectionTitle").textContent = "Sunday • الأحد";
    document.getElementById("sectionStats").textContent = "Weekend Holiday";
    scheduleList.innerHTML = `
      <div class="free-day-banner">
        <div class="emoji">🎉</div>
        <h3>No Classes Today!</h3>
        <p>Sunday is a full rest day. Recharging for Monday.</p>
      </div>
    `;
    return;
  }

  const dayData = SCHEDULE[dayNum];
  const totalClasses = dayData.classes.filter(c => !c.type).length;
  let totalHours = 0;
  dayData.classes.forEach(c => {
    if (!c.type) {
      const dur = (timeToMinutes(c.end) - timeToMinutes(c.start)) / 60;
      totalHours += dur;
    }
  });

  document.getElementById("sectionTitle").textContent = `${dayData.name} • ${dayData.arabic}`;
  document.getElementById("sectionStats").textContent = `${totalClasses} Classes • ${totalHours} Hours`;

  let html = "";
  dayData.classes.forEach(c => {
    if (c.type === "break") {
      html += `<div class="break-item"><span>${c.title}</span></div>`;
    } else if (c.type === "free") {
      html += `
        <div class="free-day-banner" style="padding: 24px 16px;">
          <div class="emoji">🌿</div>
          <h3 style="font-size: 15px;">${c.title}</h3>
        </div>
      `;
    } else {
      const startM = timeToMinutes(c.start);
      const endM = timeToMinutes(c.end);

      let cardClass = "";
      let statusBadge = "";

      if (isActualToday) {
        if (curMins >= startM && curMins < endM) {
          cardClass = "is-current";
          statusBadge = `<span class="class-status-badge badge-ongoing">Live Now</span>`;
        } else if (curMins >= endM) {
          cardClass = "is-past";
          statusBadge = `<span class="class-status-badge badge-done">Done</span>`;
        } else {
          statusBadge = `<span class="class-status-badge badge-upcoming">${c.duration}</span>`;
        }
      } else {
        statusBadge = `<span class="class-status-badge badge-upcoming">${c.duration}</span>`;
      }

      html += `
        <div class="class-card ${cardClass}" style="border-left-color: ${c.color};">
          <div class="class-card-top">
            <span class="class-time">${c.start} – ${c.end}</span>
            ${statusBadge}
          </div>
          <div class="class-name">
            <span>${c.icon}</span>
            <span>${c.subject}</span>
          </div>
          <div class="class-arabic">${c.arabic}</div>
        </div>
      `;
    }
  });

  scheduleList.innerHTML = html;
}

// RENDER ALL WEEK
function renderAllWeek() {
  const scheduleList = document.getElementById("scheduleList");
  const allWeekView = document.getElementById("allWeekView");
  const sectionHeader = document.getElementById("sectionHeader");

  scheduleList.style.display = "none";
  allWeekView.style.display = "flex";
  sectionHeader.style.display = "flex";

  document.getElementById("sectionTitle").textContent = "Complete Weekly Schedule";
  document.getElementById("sectionStats").textContent = "6 Study Days • 29 Hours Total";

  let html = "";
  for (let d = 1; d <= 6; d++) {
    const dayData = SCHEDULE[d];
    html += `
      <div class="week-day-block">
        <div class="week-day-title">
          <span>${dayData.name} (${dayData.arabic})</span>
          <span style="color: #60A5FA;">${d === getDayOfWeek() ? "• TODAY" : ""}</span>
        </div>
        <div class="week-classes-list">
    `;

    dayData.classes.forEach(c => {
      if (c.type === "break" || c.type === "free") {
        html += `
          <div class="week-class-row" style="color: #6B7280; font-size: 11.5px;">
            <span>${c.title}</span>
          </div>
        `;
      } else {
        html += `
          <div class="week-class-row">
            <span style="font-weight: 700; color: #FFFFFF;">${c.icon} ${c.subject}</span>
            <span style="color: ${c.color}; font-weight: 800; font-size: 12px;">${c.start} – ${c.end}</span>
          </div>
        `;
      }
    });

    html += `
        </div>
      </div>
    `;
  }

  allWeekView.innerHTML = html;
}

// SETUP TABS
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-pill");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-day");
      currentView = target;

      if (target === "today") {
        const today = getDayOfWeek();
        renderDay(today);
      } else if (target === "week") {
        renderAllWeek();
      } else {
        renderDay(Number(target));
      }
    });
  });
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  document.getElementById("headerDate").textContent = now.toLocaleDateString('en-US', options);

  setupTabs();
  
  // Render today by default
  const today = getDayOfWeek();
  renderDay(today);

  // Start live tick
  updateLiveStatus();
  setInterval(updateLiveStatus, 1000);
});
