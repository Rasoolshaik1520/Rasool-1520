// Rotating titles
const titles = ["Aspiring Software Engineer", "Web Developer"];
let i = 0;
const titleEl = document.querySelector(".animated-title");

setInterval(() => {
  i = (i + 1) % titles.length;
  titleEl.textContent = titles[i];
}, 3000);

// Scroll reveal animations
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(section => {
  observer.observe(section);
});
