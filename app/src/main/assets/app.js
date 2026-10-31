// Ares Schedule • 2BAC SP-4 Data & Logic (OLED Holiday Edition)

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

// MOROCCAN OFFICIAL SCHOOL HOLIDAYS 2026/2027 (16 OFFICIAL HOLIDAYS)
const MOROCCAN_HOLIDAYS_2026_2027 = [
  {
    id: "mawlid",
    title: "Mawlid Annabawi",
    arabic: "عيد المولد النبوي الشريف",
    category: "دينية",
    catEn: "Religious",
    badgeClass: "badge-cat-religious",
    startDate: "2026-09-24",
    endDate: "2026-09-25",
    days: 2,
    icon: "🕌",
    color: "#10B981",
    desc: "12 و 13 ربيع الأول 1448 هـ"
  },
  {
    id: "break1",
    title: "1st Mid-term Break",
    arabic: "العطلة البينية الأولى",
    category: "بينية",
    catEn: "Periodic",
    badgeClass: "badge-cat-periodic",
    startDate: "2026-10-18",
    endDate: "2026-10-25",
    days: 8,
    icon: "🌴",
    color: "#3B82F6",
    desc: "من الأحد 18 أكتوبر إلى الأحد 25 أكتوبر 2026"
  },
  {
    id: "unity_day",
    title: "National Unity Day",
    arabic: "عيد الوحدة الوطني",
    category: "وطنية",
    catEn: "National",
    badgeClass: "badge-cat-national",
    startDate: "2026-10-31",
    endDate: "2026-10-31",
    days: 1,
    icon: "🇲🇦",
    color: "#EF4444",
    desc: "السبت 31 أكتوبر 2026 (عطلة وطنية رسمية بالمملكة)"
  },
  {
    id: "green_march",
    title: "Green March Anniversary",
    arabic: "ذكرى المسيرة الخضراء",
    category: "وطنية",
    catEn: "National",
    badgeClass: "badge-cat-national",
    startDate: "2026-11-06",
    endDate: "2026-11-06",
    days: 1,
    icon: "🇲🇦",
    color: "#EF4444",
    desc: "الجمعة 06 نونبر 2026 (الجمعة القادمة)"
  },
  {
    id: "independence",
    title: "Independence Day",
    arabic: "عيد الاستقلال المجيد",
    category: "وطنية",
    catEn: "National",
    badgeClass: "badge-cat-national",
    startDate: "2026-11-18",
    endDate: "2026-11-18",
    days: 1,
    icon: "🇲🇦",
    color: "#EF4444",
    desc: "الأربعاء 18 نونبر 2026"
  },
  {
    id: "break2",
    title: "2nd Mid-term Break",
    arabic: "العطلة البينية الثانية",
    category: "بينية",
    catEn: "Periodic",
    badgeClass: "badge-cat-periodic",
    startDate: "2026-12-06",
    endDate: "2026-12-13",
    days: 8,
    icon: "❄️",
    color: "#06B6D4",
    desc: "من الأحد 06 دجنبر إلى الأحد 13 دجنبر 2026"
  },
  {
    id: "new_year",
    title: "New Year's Day",
    arabic: "فاتح السنة الميلادية",
    category: "عالمية",
    catEn: "Civil",
    badgeClass: "badge-cat-civil",
    startDate: "2027-01-01",
    endDate: "2027-01-01",
    days: 1,
    icon: "🎆",
    color: "#8B5CF6",
    desc: "الجمعة 01 يناير 2027"
  },
  {
    id: "independence_manifesto",
    title: "Proclamation of Independence",
    arabic: "ذكرى تقديم وثيقة الاستقلال",
    category: "وطنية",
    catEn: "National",
    badgeClass: "badge-cat-national",
    startDate: "2027-01-11",
    endDate: "2027-01-11",
    days: 1,
    icon: "📜",
    color: "#F59E0B",
    desc: "الإثنين 11 يناير 2027"
  },
  {
    id: "yennayer",
    title: "Amazigh New Year (Yennayer)",
    arabic: "رأس السنة الأمازيغية (إيض يناير)",
    category: "وطنية",
    catEn: "National",
    badgeClass: "badge-cat-national",
    startDate: "2027-01-14",
    endDate: "2027-01-14",
    days: 1,
    icon: "ⵣ",
    color: "#EAB308",
    desc: "الخميس 14 يناير 2027"
  },
  {
    id: "mid_term",
    title: "Mid-Academic Year Vacation",
    arabic: "عطلة منتصف السنة الدراسية",
    category: "مدرسية",
    catEn: "Semester",
    badgeClass: "badge-cat-semester",
    startDate: "2027-01-24",
    endDate: "2027-01-31",
    days: 8,
    icon: "🏖️",
    color: "#EC4899",
    desc: "من الأحد 24 يناير إلى الأحد 31 يناير 2027"
  },
  {
    id: "eid_fitr",
    title: "Eid Al-Fitr",
    arabic: "عيد الفطر المبارك",
    category: "دينية",
    catEn: "Religious",
    badgeClass: "badge-cat-religious",
    startDate: "2027-03-09",
    endDate: "2027-03-12",
    days: 4,
    icon: "🌙",
    color: "#10B981",
    desc: "من 29 رمضان إلى 2 شوال 1448 هـ"
  },
  {
    id: "break3",
    title: "3rd Mid-term Break",
    arabic: "العطلة البينية الثالثة",
    category: "بينية",
    catEn: "Periodic",
    badgeClass: "badge-cat-periodic",
    startDate: "2027-03-21",
    endDate: "2027-03-28",
    days: 8,
    icon: "🌸",
    color: "#10B981",
    desc: "من الأحد 21 مارس إلى الأحد 28 مارس 2027"
  },
  {
    id: "labor_day",
    title: "Labour Day",
    arabic: "عيد الشغل",
    category: "عالمية",
    catEn: "Civil",
    badgeClass: "badge-cat-civil",
    startDate: "2027-05-01",
    endDate: "2027-05-01",
    days: 1,
    icon: "🛠️",
    color: "#F97316",
    desc: "السبت 01 ماي 2027"
  },
  {
    id: "break4",
    title: "4th Mid-term Break",
    arabic: "العطلة البينية الرابعة",
    category: "بينية",
    catEn: "Periodic",
    badgeClass: "badge-cat-periodic",
    startDate: "2027-05-09",
    endDate: "2027-05-16",
    days: 8,
    icon: "☀️",
    color: "#06B6D4",
    desc: "من الأحد 09 ماي إلى الأحد 16 ماي 2027"
  },
  {
    id: "eid_adha",
    title: "Eid Al-Adha",
    arabic: "عيد الأضحى المبارك",
    category: "دينية",
    catEn: "Religious",
    badgeClass: "badge-cat-religious",
    startDate: "2027-05-16",
    endDate: "2027-05-19",
    days: 4,
    icon: "🐑",
    color: "#10B981",
    desc: "من 09 إلى 11 ذو الحجة 1448 هـ"
  },
  {
    id: "hijri_new_year",
    title: "Hijri New Year 1449",
    arabic: "فاتح محرم (رأس السنة الهجرية)",
    category: "دينية",
    catEn: "Religious",
    badgeClass: "badge-cat-religious",
    startDate: "2027-06-06",
    endDate: "2027-06-06",
    days: 1,
    icon: "✨",
    color: "#8B5CF6",
    desc: "فاتح محرم 1449 هـ"
  }
];

let currentView = "today"; // 'today', 1..6, 'week', 'holidays'
let simulatedHolidayId = null; // For interactive testing & previewing Void Mode

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

function formatDateIso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// GET DATE FOR A GIVEN DAY OF CURRENT WEEK
function getDateForDay(targetDayNum) {
  const now = new Date();
  const currentDay = now.getDay();
  const diff = targetDayNum - currentDay;
  const target = new Date(now);
  target.setDate(now.getDate() + diff);
  return target;
}

// CHECK IF A DATE FALLS INTO A MOROCCAN HOLIDAY
function getActiveHoliday(date = new Date()) {
  if (simulatedHolidayId) {
    const found = MOROCCAN_HOLIDAYS_2026_2027.find(h => h.id === simulatedHolidayId);
    if (found) return found;
  }
  const dateStr = formatDateIso(date);
  return MOROCCAN_HOLIDAYS_2026_2027.find(h => {
    return dateStr >= h.startDate && dateStr <= h.endDate;
  }) || null;
}

// GET NEXT UPCOMING HOLIDAY AFTER CURRENT DATE
function getNextUpcomingHoliday(date = new Date()) {
  const dateStr = formatDateIso(date);
  return MOROCCAN_HOLIDAYS_2026_2027.find(h => h.startDate > dateStr) || null;
}

// GET HOLIDAY STATUS RELATIVE TO TODAY
function getHolidayStatus(holiday, todayIso) {
  if (todayIso >= holiday.startDate && todayIso <= holiday.endDate) {
    return { type: "active", label: "🔴 جارٍ اليوم (Active)", badgeClass: "badge-status-active" };
  } else if (todayIso < holiday.startDate) {
    const d1 = new Date(todayIso + "T00:00:00");
    const d2 = new Date(holiday.startDate + "T00:00:00");
    const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    return {
      type: "upcoming",
      label: `⏳ بعد ${diffDays} يوم${diffDays > 1 ? '' : ''}`,
      badgeClass: "badge-status-upcoming"
    };
  } else {
    return { type: "past", label: "✓ انقضت (Past)", badgeClass: "badge-status-past" };
  }
}

// UPDATE LIVE STATUS HERO
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

  // 1. Check if today is a Moroccan Holiday (or simulated preview)
  const activeHoliday = getActiveHoliday(now);
  if (activeHoliday) {
    heroCard.classList.remove("live-glow");
    heroCard.classList.add("holiday-glow");
    heroTag.className = "hero-tag tag-holiday";
    heroTag.textContent = "🏖️ OFFICIAL HOLIDAY • عطلة رسمية";
    heroTitle.textContent = `${activeHoliday.icon} ${activeHoliday.arabic}`;

    const nextH = getNextUpcomingHoliday(now);
    let nextNote = "";
    if (nextH) {
      const d1 = new Date(formatDateIso(now) + "T00:00:00");
      const d2 = new Date(nextH.startDate + "T00:00:00");
      const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
      nextNote = ` • القادمة: ${nextH.arabic} (بعد ${diffDays} أيام)`;
    }

    heroSub.textContent = `Void Day • لا توجد دراسة اليوم (${activeHoliday.title})${nextNote}`;
    heroProgressBg.style.display = "none";
    return;
  }

  // Remove holiday glow if not holiday
  heroCard.classList.remove("holiday-glow");

  // 2. Sunday or weekend rest
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

  // 3. Ongoing Class
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

  // 4. Upcoming First Class
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

  // 5. Next Class Today
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

  // 6. All classes done for today
  heroCard.classList.remove("live-glow");
  heroTag.className = "hero-tag tag-free";
  heroTag.textContent = "✅ COMPLETED FOR TODAY";
  heroTitle.textContent = "Classes finished!";
  
  const nextDayNum = day === 6 ? 1 : day + 1;
  const nextDayName = nextDayNum === 1 ? "Monday" : SCHEDULE[nextDayNum]?.name;
  heroSub.textContent = `Great job. Next session: ${nextDayName} at 08:00.`;
  heroProgressBg.style.display = "none";
}

// RENDER VOID HOLIDAY CARD
function renderVoidHolidayCard(holiday, isSimulated = false) {
  const nextH = getNextUpcomingHoliday(new Date());
  let nextHolidayHtml = "";
  if (nextH) {
    const d1 = new Date(formatDateIso(new Date()) + "T00:00:00");
    const d2 = new Date(nextH.startDate + "T00:00:00");
    const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    nextHolidayHtml = `
      <div style="background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 12px 14px; width: 100%; display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; box-sizing: border-box;">
        <span style="color: #60A5FA; font-weight: 800;">🔔 العطلة القادمة:</span>
        <span style="color: #F3F4F6; font-weight: 700;">${nextH.icon} ${nextH.arabic} (${nextH.desc}) • بعد ${diffDays} أيام</span>
      </div>
    `;
  }

  return `
    <div class="void-banner-card">
      <div class="void-icon">${holiday.icon}</div>
      <div class="void-pill">🏖️ عطلة رسمية • VOID DAY</div>
      <div class="void-title">${holiday.arabic}</div>
      <div class="void-sub">${holiday.title} • يوم شاغر بالكامل</div>
      
      <div class="void-grid">
        <div class="void-grid-box">
          <div class="void-grid-label">📅 الفترة (Dates)</div>
          <div class="void-grid-value">${holiday.startDate} ➔ ${holiday.endDate}</div>
        </div>
        <div class="void-grid-box">
          <div class="void-grid-label">⏳ المدة (Duration)</div>
          <div class="void-grid-value">${holiday.days} ${holiday.days > 1 ? 'أيام' : 'يوم'} (${holiday.category})</div>
        </div>
        <div class="void-grid-box">
          <div class="void-grid-label">⚡ الحالة (Status)</div>
          <div class="void-grid-value" style="color: #34D399;">شاغر • 0 حصص مبرمجة</div>
        </div>
        <div class="void-grid-box">
          <div class="void-grid-label">📖 المناسبة (Occasion)</div>
          <div class="void-grid-value">${holiday.desc}</div>
        </div>
      </div>

      ${nextHolidayHtml}

      <div class="void-quote">
        💡 <b>استراحة محارب 2BAC:</b> استغل يوم العطلة للاستراحة واسترجاع النشاط أو مراجعة ما فاتك بدون ضغط الحصص اليومية! ☕📚
      </div>

      ${isSimulated ? `
        <button class="void-btn-reset" onclick="clearSimulatedHoliday()">
          ✕ إلغاء وضع المعاينة والرجوع للجدول المباشر
        </button>
      ` : ''}
    </div>
  `;
}

// RENDER SINGLE DAY
function renderDay(dayNum) {
  const scheduleList = document.getElementById("scheduleList");
  const allWeekView = document.getElementById("allWeekView");
  const holidaysView = document.getElementById("holidaysView");
  const sectionHeader = document.getElementById("sectionHeader");

  scheduleList.style.display = "flex";
  allWeekView.style.display = "none";
  holidaysView.style.display = "none";
  sectionHeader.style.display = "flex";

  const todayNum = getDayOfWeek();
  const isActualToday = (dayNum === todayNum);
  const curMins = getCurrentMinutes();

  // Check if target day is a holiday
  const targetDate = isActualToday ? new Date() : getDateForDay(dayNum);
  const dayHoliday = simulatedHolidayId ? getActiveHoliday() : getActiveHoliday(targetDate);

  if (dayHoliday) {
    document.getElementById("sectionTitle").textContent = `${dayHoliday.arabic} • Void Day 🏖️`;
    document.getElementById("sectionStats").textContent = `${dayHoliday.days} ${dayHoliday.days > 1 ? 'Days' : 'Day'} Off • ${dayHoliday.category}`;
    scheduleList.innerHTML = renderVoidHolidayCard(dayHoliday, !!simulatedHolidayId);
    return;
  }

  // Sunday
  if (dayNum === 0 || !SCHEDULE[dayNum]) {
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

      if (isActualToday && !simulatedHolidayId) {
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
  const holidaysView = document.getElementById("holidaysView");
  const sectionHeader = document.getElementById("sectionHeader");

  scheduleList.style.display = "none";
  holidaysView.style.display = "none";
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

// RENDER HOLIDAYS VIEW
function renderHolidaysView() {
  const scheduleList = document.getElementById("scheduleList");
  const allWeekView = document.getElementById("allWeekView");
  const holidaysView = document.getElementById("holidaysView");
  const sectionHeader = document.getElementById("sectionHeader");

  scheduleList.style.display = "none";
  allWeekView.style.display = "none";
  holidaysView.style.display = "flex";
  sectionHeader.style.display = "flex";

  document.getElementById("sectionTitle").textContent = "Moroccan School Holidays • العطل المدرسية";
  document.getElementById("sectionStats").textContent = "16 Holidays • 58 Total Days Off (2026/2027)";

  const todayIso = formatDateIso(new Date());

  let totalDays = 0;
  MOROCCAN_HOLIDAYS_2026_2027.forEach(h => totalDays += h.days);

  let html = `
    <div class="holidays-stats-bar">
      <div>
        <div class="holidays-stat-num">16</div>
        <div class="holidays-stat-lbl">عطلة رسمية</div>
      </div>
      <div>
        <div class="holidays-stat-num">${totalDays}</div>
        <div class="holidays-stat-lbl">يوماً شاغراً</div>
      </div>
      <div>
        <div class="holidays-stat-num">4</div>
        <div class="holidays-stat-lbl">عطل بينية</div>
      </div>
      <div>
        <div class="holidays-stat-num">2026/27</div>
        <div class="holidays-stat-lbl">الموسم الدراسي</div>
      </div>
    </div>
  `;

  MOROCCAN_HOLIDAYS_2026_2027.forEach(h => {
    const status = getHolidayStatus(h, todayIso);
    const isActive = (status.type === "active");

    html += `
      <div class="holiday-card ${isActive ? 'is-active-holiday' : ''}" style="border-left-color: ${h.color};">
        <div class="holiday-card-top">
          <div class="holiday-card-title">
            <span>${h.icon}</span>
            <span>${h.title}</span>
          </div>
          <span class="badge-cat ${h.badgeClass}">${h.category}</span>
        </div>
        <div class="holiday-card-arabic">${h.arabic} • <span style="color: var(--text-dim);">${h.desc}</span></div>
        <div class="holiday-dates-row">
          <span>📅 ${h.startDate} ➔ ${h.endDate} (${h.days} ${h.days > 1 ? 'أيام' : 'يوم'})</span>
          <span class="${status.badgeClass}">${status.label}</span>
        </div>
        <div>
          <button class="holiday-action-btn" onclick="previewHolidayVoid('${h.id}')">
            <span>👁️</span>
            <span>معاينة شاشة Void</span>
          </button>
        </div>
      </div>
    `;
  });

  holidaysView.innerHTML = html;
}

// PREVIEW & RESET ACTIONS
window.previewHolidayVoid = function(holidayId) {
  simulatedHolidayId = holidayId;
  const tabs = document.querySelectorAll(".tab-pill");
  tabs.forEach(t => t.classList.remove("active"));
  const todayTab = document.querySelector('.tab-pill[data-day="today"]');
  if (todayTab) todayTab.classList.add("active");

  currentView = "today";
  updateLiveStatus();
  renderDay(getDayOfWeek());
};

window.clearSimulatedHoliday = function() {
  simulatedHolidayId = null;
  updateLiveStatus();
  renderDay(getDayOfWeek());
};

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
      } else if (target === "holidays") {
        renderHolidaysView();
      } else {
        renderDay(Number(target));
      }
    });
  });
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  document.getElementById("headerDate").textContent = now.toLocaleDateString('en-US', options);

  setupTabs();
  
  // Render today by default
  const today = getDayOfWeek();
  renderDay(today);

  // Start live tick
  updateLiveStatus();
  setInterval(updateLiveStatus, 1000);
});
