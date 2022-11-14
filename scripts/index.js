let selectedTab = 0;

function backRoute() {
  if (window.location.pathname !== "/index.html") {
    window.location.href = "/index.html";
  }
}
backRoute();
const homeContent = `<p style="color: white;">Wait, I will make coffee first...</p>`;
const aboutContent = `<p style="color: white;">Wait, I will make coffee first...</p>`;
const skillsContent = `<p style="color: white;">Wait, I will make coffee first...</p>`;
const contents = [homeContent, aboutContent, skillsContent];
function setMainContent(i) {
  const main = document.getElementById("main-section");
  main.innerHTML = contents[i];
}

function setSelectedTab(i) {
  const navElems = document.getElementsByClassName("nav-elem");
  const activeNavElem = navElems[selectedTab];
  activeNavElem.classList.remove("active");
  navElems[i].setAttribute("class", "nav-elem active");
  setMainContent(i);
  selectedTab = i;
}
const stickyDiv = document
  .getElementsByClassName("home-content")[0]
  .querySelector("section");
const outerStickyElem = document.getElementById("sticky-content-container");
const stickyElem = document.getElementById("outer-sticky-content-container");
// const body = document.getElementsByTagName("body")[0];
const mainSectionElem = document.getElementById("main-section");
mainSectionElem.addEventListener("scroll", () => {
  const { y } = stickyDiv.getBoundingClientRect();
  if (y === 156) {
    outerStickyElem.setAttribute("class", "isSticky");
    stickyElem.setAttribute("class", "isSticky");
  }
  if (y > 156) {
    outerStickyElem.removeAttribute("class");
    stickyElem.removeAttribute("class");
  }
});
