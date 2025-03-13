let pages = [
  { url: "", title: "Home" },
  { url: "projects", title: "Projects" },
  { url: "contacto", title: "Contact me" },
];

const createNavBar = () => {
  let nav = document.createElement("nav");
  nav.className = "header";

  const isGitHubPages = location.hostname.includes("github.io");
  let basePath = "";
  let isSubfolder = false;

  if (isGitHubPages) {
    const pathParts = location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const repoName = pathParts[0];
      basePath = `/${repoName}`;

      isSubfolder = pathParts.length > 1;
    }
  } else {
    isSubfolder = location.pathname.split("/").filter(Boolean).length > 0;
  }

  console.log("Base path:", basePath);
  console.log("Is subfolder:", isSubfolder);
  
  for (let page of pages) {
    let a = document.createElement("a");
    
    const isHome = page.url === "";
    const currentPath = location.pathname;
    const isActive =
      (isHome &&
        (currentPath === basePath || currentPath === `${basePath}/`)) ||
      (!isHome && currentPath.includes(page.url));

    if (isActive) {
      a.classList.add("active");
    }
    
    if (isSubfolder) {
      a.href = "../" + page.url;
    } else {
      a.href = page.url;
    }
    
    a.innerText = page.title;
    nav.appendChild(a);
  }

  return nav;
};

const content = document.getElementById("content");
const newNav = createNavBar();

content.prepend(newNav);