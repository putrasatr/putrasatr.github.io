const home = `<p>I started from a bootcamp, learned basic javascript and then took on an unusual challenge,
working to
create an E-commerce web, CMS, and creative dev, work in a great company and keep learning.</p>`;
const contact = `<p>I am Contact Page</p>`;
const about = `<p>I am About Page</p>`;

const routes = {
  "/index.html": home,
  "/": home,
  "/contact": contact,
  "/about": about,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  pathname = "/";
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

function backRoute() {
  if (window.location.pathname !== "/index.html") {
    window.location.href = "/index.html";
  }
}
backRoute();
