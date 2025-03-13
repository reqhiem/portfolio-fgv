let pages = [
  { url: "", title: "Home" },
  { url: "projects", title: "Projects" },
  { url: "contacto", title: "Contact me" },
];

const createNavBar = () => {
  let nav = document.createElement("nav");
  nav.className = "header";

  for (let page of pages) {
    let a = document.createElement("a");

    a.href = siteConfig.baseUrl + "/" + page.url;
    a.innerText = page.title;
    nav.appendChild(a);
  }

  return nav;
};

const content = document.getElementById("content");
const newNav = createNavBar();

content.prepend(newNav);