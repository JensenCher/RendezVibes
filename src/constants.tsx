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
      { title: "J-Pop", path: "/genres/J-Pop" },
      { title: "K-Pop", path: "/genres/K-Pop" },
    ],
  },
  {
    title: "Artists",
    path: "/artists",
    icon: <Icons.Moon className="w-6 h-6" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/artists" },
      { title: "Yoasobi", path: "/artists/eebb6285-f4a1-43fd-b1af-35ee16b6b843" },
      { title: "Official Hige Dandism", path: "/artists/943254e6-9d02-4e43-a7a6-5e25b9be7b63" },
    ],
  },
  {
    title: "Albums",
    path: "/albums",
    icon: <Icons.Moon className="w-6 h-6" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/albums" },
      { title: "The Book", path: "/albums/a966079a-6f95-4961-8030-cd7fd39881f0" },
      { title: "Traveler", path: "/albums/d1240415-98a0-4448-b265-336cc6ae1447" },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <Icons.Laptop className="w-6 h-6" />,
  },
];
