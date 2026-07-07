// constants/navLink.js
export const NAV_LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Pages",
    path: "/pages",
    submenu: [
      { name: "About Us", path: "/pages" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
