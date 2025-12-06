// slider.js - simple, safe slider (no globals that break)
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelector('.slides');
  if(!slides) return;
  const total = slides.children.length;
  let idx = 0;
  function go(i){ idx = (i+total)%total; slides.style.transform = 'translateX(' + (-idx*100) + '%)'; updateDots(); }
  function updateDots(){ const dots = document.getElementById('dots'); if(!dots) return; Array.from(dots.children).forEach((b,bi)=>b.classList.toggle('active', bi===idx)); }
  // build dots
  const dots = document.getElementById('dots');
  for(let i=0;i<total;i++){ const b=document.createElement('button'); b.addEventListener('click', ()=>go(i)); dots.appendChild(b); }
  document.getElementById('nextBtn').addEventListener('click', ()=>go(idx+1));
  document.getElementById('prevBtn').addEventListener('click', ()=>go(idx-1));
  let timer = setInterval(()=>go(idx+1), 4500);
  slides.addEventListener('mouseenter', ()=> clearInterval(timer));
  slides.addEventListener('mouseleave', ()=> timer = setInterval(()=>go(idx+1), 4500));
  go(0);
});
const track = document.querySelector(".banner-track");
const imgs = document.querySelectorAll(".banner-track img");
const dotsBox = document.querySelector(".banner-dots");

let index = 0;
let total = imgs.length;

// Tạo dots
for (let i = 0; i < total; i++) {
    let dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsBox.appendChild(dot);
}

const dots = document.querySelectorAll(".banner-dots span");

// Chuyển slide
function moveSlide(n) {
    index = (n + total) % total;
    track.style.transition = "0.5s ease";
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

// Nút điều hướng
document.querySelector(".prev").onclick = () => moveSlide(index - 1);
document.querySelector(".next").onclick = () => moveSlide(index + 1);

// Auto chạy
setInterval(() => moveSlide(index + 1), 5000);
