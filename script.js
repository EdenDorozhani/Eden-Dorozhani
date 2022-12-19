const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 10);
});

const MobileNav = document.getElementById("mobileNav");

const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("closeBtn");

const body = document.getElementById("body");

const link = document.getElementById("linku1");
const link1 = document.getElementById("linku2");
const link2 = document.getElementById("linku3");
const link3 = document.getElementById("linku4");
const link4 = document.getElementById("linku5");

const active1 = document.getElementById("active1");
const active2 = document.getElementById("active2");
const active3 = document.getElementById("active3");
const active4 = document.getElementById("active4");
const active5 = document.getElementById("active5");

link.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});
link1.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});
link2.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});
link3.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});
link4.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});

menuIcon.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});

closeBtn.addEventListener("click", function () {
  MobileNav.classList.toggle("opened");
  body.classList.toggle("heqScrollin");
});

active1.addEventListener("click", function () {
  active1.classList.add("active");
  active2.classList.remove("active");
  active3.classList.remove("active");
  active4.classList.remove("active");
  active5.classList.remove("active");
});
active2.addEventListener("click", function () {
  active1.classList.remove("active");
  active2.classList.add("active");
  active3.classList.remove("active");
  active4.classList.remove("active");
  active5.classList.remove("active");
});
active3.addEventListener("click", function () {
  active1.classList.remove("active");
  active2.classList.remove("active");
  active3.classList.add("active");
  active4.classList.remove("active");
  active5.classList.remove("active");
});
active4.addEventListener("click", function () {
  active1.classList.remove("active");
  active2.classList.remove("active");
  active3.classList.remove("active");
  active4.classList.add("active");
  active5.classList.remove("active");
});
active5.addEventListener("click", function () {
  active1.classList.remove("active");
  active2.classList.remove("active");
  active3.classList.remove("active");
  active4.classList.remove("active");
  active5.classList.add("active");
});
