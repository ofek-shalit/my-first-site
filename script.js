// Hebrew / English language toggle.
// Every element with data-i18n gets its text from the dictionary below,
// and every element with data-i18n-alt gets its alt text from it.

const translations = {
  he: {
    title: "אופק שליט",
    name: "אופק שליט",
    introAlt: "אופק שליט",
    introText: "נעים להכיר, אני אופק, ירושלמית במקור. אני אוהבת ליצור, לעבוד עם הידיים, ולמצוא דרכים לבטא את עצמי דרך אומנות.",
    backgroundTitle: "רקע",
    backgroundText: "האהבה שלי לאמנות התחילה בציור, ובעיקר בציור שמן, שהוא אחד התחומים שהכי מייצגים אותי. מתוך החיבור לצבע, לפרטים וליצירה, התפתח גם העיסוק שלי בעולם הקעקועים.",
    tattoosTitle: "הקעקועים שלי",
    tattooAlt: "קעקוע חיפושית צבעונית ותלת־ממדית",
    tattoosText: "כיום אני מקעקעת, עם דגש על קעקועי צבע מפורטים, ריאליסטיים וקאברים לקעקועים ישנים. אני אוהבת ליצור עבודות שמשלבות עומק, צבע ודיוק, ולהפוך רעיונות אישיים ליצירות שנשארות על העור. אחד הקעקועים האהובים עליי הוא חיפושית צבעונית, תלת־ממדית וריאליסטית. חיפושית מטפסת מסמלת מזל טוב, ואני אוהבת את המשמעות שהיא מביאה איתה: תנועה, צמיחה והתחלה חדשה.",
    contactTitle: "יצירת קשר",
    contactText: "לפרטים, שאלות ותיאום תורים:",
    instagram: "אינסטגרם",
    github: "GitHub"
  },
  en: {
    title: "Ofek Shalit",
    name: "Ofek Shalit",
    introAlt: "Ofek Shalit",
    introText: "Nice to meet you, I'm Ofek, originally from Jerusalem. I love creating, working with my hands, and finding ways to express myself through art.",
    backgroundTitle: "Background",
    backgroundText: "My love for art began with painting, especially oil painting, one of the fields that represents me most. From my connection to color, detail and creating, my work in the world of tattooing grew as well.",
    tattoosTitle: "My Tattoos",
    tattooAlt: "A colorful, three-dimensional beetle tattoo",
    tattoosText: "Today I work as a tattoo artist, focusing on detailed color tattoos, realism, and cover-ups of old tattoos. I love creating work that combines depth, color and precision, and turning personal ideas into pieces that stay on the skin. One of my favorite tattoos is a colorful, three-dimensional, realistic beetle. A climbing beetle symbolizes good luck, and I love the meaning it carries: movement, growth and a new beginning.",
    contactTitle: "Contact",
    contactText: "For details, questions and booking appointments:",
    instagram: "Instagram",
    github: "GitHub"
  }
};

const toggleButton = document.getElementById("lang-toggle");

function setLanguage(lang) {
  const strings = translations[lang];
  const root = document.documentElement;

  root.lang = lang;
  root.dir = lang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = strings[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = strings[el.dataset.i18nAlt];
  });

  // The button always offers the other language.
  if (lang === "he") {
    toggleButton.textContent = "EN";
    toggleButton.lang = "en";
    toggleButton.setAttribute("aria-label", "Switch to English");
  } else {
    toggleButton.textContent = "עב";
    toggleButton.lang = "he";
    toggleButton.setAttribute("aria-label", "מעבר לעברית");
  }

  // Remember the choice for the next visit (ignored if the browser blocks storage).
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

toggleButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "he" ? "en" : "he");
});

let savedLang = null;
try {
  savedLang = localStorage.getItem("lang");
} catch (e) {}
if (savedLang === "en") {
  setLanguage("en");
}
