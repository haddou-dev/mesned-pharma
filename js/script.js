/** @format */

$(document).ready(function () {
  check();
});

// Smooth scrolling animation :
// // select All links :
// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     // e.preventDefault();
//     const href = link.getAttribute("href");

//     // scroll back to the top :
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//     // Scroll to other links :
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//     // Close mobile navigation :
//     if (link.classList.contains("main-nav-link")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

// Make mobile navigation work :
const btnNavEl = document.querySelector(".header__btn--mobile");
let headerEl = document.querySelector(".header");
console.log(btn);

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation :
const heroSectionEl = document.querySelector(".hero_Section");
const options = {};
const obs = new IntersectionObserver(
  function (entries, obs) {
    // entries.forEach(entry => {
    // });
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport :
    root: null,
    threshold: 0,
    // rootMargin: "-80px",
  }
);
function check() {
  if (heroSectionEl) {
    obs.observe(heroSectionEl);
  } else return;
}
// obs.observe(heroSectionEl);

// Countries PopUp :
var sidebarOpen = false;
var searchsidebarOpen = false;
var sidebar = document.getElementById("location_section");
var searchSidebar = document.getElementById("Search_section");

function ToggleSidebar(bol) {
  var sidebar = document.getElementById(bol.id);
  if (bol.id == "location_section") {
    if (!sidebarOpen) {
      OpenSidebar();
    } else {
      sidebar.className = "locationClose";
      sidebarOpen = false;
    }
  }
  if (bol.id == "Search_section") {
    if (!searchsidebarOpen) {
      OpenSearchSidebar();
    } else {
      sidebar.className = "searchClose";
      searchsidebarOpen = false;
    }
  }
}

function OpenSidebar() {
  sidebar.className = "locationOpen";
  sidebarOpen = true;
}

function closeSidebar() {
  sidebar.className = "locationClose";
  sidebarOpen = false;
}

function OpenSearchSidebar() {
  searchSidebar.className = "searchOpen";
  searchsidebarOpen = true;
}

function closeSearchSidebar() {
  searchSidebar.className = "searchClose";
  searchsidebarOpen = false;
}

// $(window).scroll(function () {
//   if ($(window).scrollTop() > elementPosition.top) {
//     $(".myDIVopen ").css("position", "fixed");
//   } else {
//     $(".myDIVopen").css("position", "static");
//   }
// });

const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const navSevices = document.getElementById("navbar_services");
openNav.addEventListener("click", () => {
  sectionToToggle.style.display = "block";
});
closeNav.addEventListener("click", () => {
  sectionToToggle.style.display = "none";
});

function alert_success() {
  var model_section = document.getElementById("model");
  model_section.style.display = "block";
  // hide the section after 2 seconds
  setTimeout(function () {
    model_section.style.display = "none";
  }, 2000);
}

var poupForm = false;
function OpenPopup() {
  var model_section = document.getElementById("poup_form");
  if (!poupForm) {
    model_section.style.display = "block";
    poupForm = !poupForm;
  } else {
    model_section.style.display = "none";
    poupForm = !poupForm;
  }
  console.log(poupForm);
}
