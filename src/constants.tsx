import Icons from "./components/global/Icon";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icons.Moon className="w-6 h-6" />,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: <Icons.Moon className="w-6 h-6" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/genres" },
      { title: "J-Pop", path: "/genres/j-pop" },
      { title: "K-Pop", path: "/genres/k-pop" },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <Icons.Laptop className="w-6 h-6" />,
  },
];
