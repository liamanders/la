function showPopup() {
  document.getElementById("languagePopup").style.display = "block";
}

function selectLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);

  if (lang === "sv") {
    window.location.href = "./sv";
  } else {
    document.getElementById("languagePopup").style.display = "none";
  }
}
window.onload = showPopup;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
});

const notVisible = document.querySelectorAll(
  ".not-visible, .not-visible-right"
);
notVisible.forEach((el) => observer.observe(el));
