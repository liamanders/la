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
