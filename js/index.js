// const menuBtn = document.getElementById("menuBtn");
// const mobileMenu = document.getElementById("mobileMenu");
// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });


// document.addEventListener("scroll", function () {
//     const navbar = document.getElementById("navbar");
//     if (window.scrollY > 50) {
//       navbar.classList.remove("navbar-default");
//       navbar.classList.add("navbar-scroll");
//     } else {
//       navbar.classList.remove("navbar-scroll");
//       navbar.classList.add("navbar-default");
//     }
//   });


// const menuBtn = document.getElementById('menuBtn');
// const mobileMenu = document.getElementById('mobileMenu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });

// function openModal(title, description) {
//   const modal = document.getElementById('modal');
//   const modalTitle = document.getElementById('modal-title');
//   const modalDescription = document.getElementById('modal-description');

//   modalTitle.textContent = title;
//   modalDescription.textContent = description;
//   modal.classList.remove('hidden');
// }

// function closeModal() {
//   const modal = document.getElementById('modal');
//   modal.classList.add('hidden');
// }
  
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
    mobileMenu.classList.toggle("hidden");
  });