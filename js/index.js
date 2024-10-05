function openModal(title, content) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalContent").innerText = content;
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Function to open the quote modal
function openQuoteModal() {
  document.getElementById("quoteModal").classList.remove("hidden");
}

// Function to close the quote modal
function closeQuoteModal() {
  document.getElementById("quoteModal").classList.add("hidden");
}

// Mobile menu toggle
document.getElementById("menuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  mobileMenu.classList.toggle("hidden");

  // Toggle visibility between the hamburger and close icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
document.getElementById("menuBtn1").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu1");
  const hamburgerIcon = document.getElementById("hamburgerIcon1");
  const closeIcon = document.getElementById("closeIcon1");

  mobileMenu.classList.toggle("hidden");
  // Toggle visibility between the hamburger and close icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Get navbar elements
const navbar1 = document.getElementById("navbar-1");
const navbar2 = document.getElementById("navbar-2");

// Function to handle scroll
function handleScroll() {
  console.log("hello world");
  if (window.scrollY > 50) {
    // Show navbar 1 and hide navbar 2 when scrolled down
    navbar1.classList.remove("hidden");
    navbar2.classList.add("hidden");
  } else {
    // Show navbar 2 and hide navbar 1 when at the top
    navbar1.classList.add("hidden");
    navbar2.classList.remove("hidden");
  }
}

// Event listener for scroll
window.addEventListener("scroll", handleScroll);
