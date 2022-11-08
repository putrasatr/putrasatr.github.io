let selectedTab = 0;


function backRoute() {
  if (window.location.pathname !== "/index.html") {
    window.location.href = "/index.html";
  }
}
backRoute();
const homeContent = `<div class="home-content"> <header> <div class="image-wrapper"> <img src="/assets/images/me-code.jpeg" class="image-item" /> </div> <div id="intro"> F R O N T - E N D - D E V E L O P E R <p>I started from a bootcamp, learned basic javascript and then took on an unusual challenge, working to create an E-commerce web, CMS, and creative dev, work in a great company and keep learning.</p> <div class="social-media"> <a target="_blank" rel="no-referrer" href="https://instagram.com/putrasptm"> <i class="fab fa-instagram"></i> </a> <a target="_blank" rel="no-referrer" href="https://github.com/putrasatr"> <i class="fab fab fa-github"></i> </a> <a target="_blank" rel="no-referrer" href="https://www.linkedin.com/in/putra-satria-918b161ab/"> <i class="fab fab fab fa-linkedin"></i> </a> </div> </div> </header> <section> <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, reiciendis neque soluta, sapiente voluptates recusandae modi ratione est porro facere ab, doloremque ex illo rem veniam quasi molestiae. Iste, voluptate. </p> </section> <div class="container"> <div class="card card-content-outer"> <div class="card card-content"> <pre><code><span id='code1'>public static void Main() { Console.WriteLine("Test"); }</span></code></pre> <pre><code><span id='code3'>const name = "Putra Satria Pratama"; const age = 20;</span></code></pre> </div> </div> </div> </div>`;
const aboutContent = `<div>About Me</div>`;
const skillsContent = `<div>Skills</div>`;
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
