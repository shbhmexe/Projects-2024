import { Menu } from "@/types/menu";

const menuData: Menu[] = [ 
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Notes",
    path: "/notes",
    newTab: true,
  },
  {
    id: 3,
    title: "Syllabus",
    path: "/Syllabus",
    newTab: true,
  },
  {
    id: 3,
    title: "CGPA Calculator",
    path: "/cgpa",
    newTab: true,
  },
  {
    id: 4,
    title: "PYQ's",
    path: "/pyqs",
    newTab: true,
  },
  {
    "id": 4,
    "title": "Pages",
    "newTab": false,
    "submenu": [
      {
        "id": 41,
        "title": "About Page",
        "path": "/Aboutpage",
        "newTab": false
      },
      {
        "id": 42,
        "title": "Contact Page",
        "path": "/contact",
        "newTab": false
      },
      {
        "id": 43,
        "title": "Blog",
        "path": "/blog",
        "newTab": false
      }
    ]
  }  
];
export default menuData;
