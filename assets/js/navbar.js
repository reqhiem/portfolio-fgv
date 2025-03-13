let pages = [
  { url: "", title: "Home" },
  { url: "projects", title: "Projects" },
  { url: "contacto", title: "Contact me" },
];

const createNavBar = () => {
  let nav = document.createElement("nav");
  nav.className = "header";

  const isInSubfolder = location.pathname.split("/").filter(Boolean).length > 0;
  const prefix = isInSubfolder ? "../" : "";

  for (let page of pages) {
    let a = document.createElement("a");

    if (
      (page.url === "" && location.pathname === "/") ||
      (page.url !== "" && location.pathname.includes(page.url))
    ) {
      a.classList.add("active");
    }

    a.href = prefix + page.url;
    a.innerText = page.title;
    nav.appendChild(a);
  }

  return nav;
};

const content = document.getElementById("content");
const newNav = createNavBar();

content.prepend(newNav);
