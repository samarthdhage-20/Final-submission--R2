window.addEventListener("load", () => {
  console.log("Script loaded"); // Debug check

  const loader = document.getElementById("loader-bar");
  const loaderScreen = document.getElementById("loader-screen");
  const mainContent = document.getElementById("main-content");

  // Step 1: Animate loader bar
  setTimeout(() => {
    loader.style.width = "60%";
  }, 100);

  // Step 2: Turn into L shape
  setTimeout(() => {
    loader.classList.add("l-shape");
  }, 3100);

  // Step 3: Zoom burst
  setTimeout(() => {
    loader.classList.add("zoom");
  }, 3600);

  // Step 4: Hide loader and show content
  setTimeout(() => {
    loaderScreen.style.display = "none";
    mainContent.classList.add("show");
  }, 4300);
});
// Mobile Navbar Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
function verifyCertificate(event) {
  event.preventDefault();
  const id = document.getElementById("certificate-id").value.trim();
  const result = document.getElementById("verify-result");

  // Dummy validation logic
  if (id === "INLIGHN2024") {
    result.textContent = "✅ Valid Certificate!";
  } else {
    result.textContent = "❌ Invalid Certificate ID!";
  }
}
