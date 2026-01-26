import { NotificationsData } from "@/types/layoutTypes";
import { CalendarHeart, CircleUser, HandHeart, LogOut } from "lucide-react";

const navLinksData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const HowItWorksStepsData = [
  {
    title: "Choose Project",
  },
  {
    title: "Donate the amount you like",
  },
  {
    title: "Register on our website",
  },
  {
    title: "Stay tuned about cause",
  },
];

const footerContactsData = [
  {
    title: "Phone",
    value: "+1 234 567 890",
  },
  {
    title: "Email",
    value: "[EMAIL_ADDRESS]",
  },
  {
    title: "Address",
    value: "123 Main St, Anytown, USA",
  },
];

const userMenuOptions = [
  { name: "Profile", link: "/profile", icon: CircleUser },
  { name: "My Donations", link: "/donations", icon: HandHeart },
  { name: "Favourites", link: "/favourites", icon: CalendarHeart },
  { name: "Sign out", icon: LogOut },
];

const someRealProjectsData = [
  {
    title: "School Projects",
    src: "/assets/howitworks.png",
  },
  {
    title: "Water Projects",
    src: "/assets/real-pr-1.png",
  },
  {
    title: "Education Projects",
    src: "/assets/real-pr-2.png",
  },
  {
    title: "Ramadan Projects",
    src: "/assets/real-pr-3.png",
  },
  {
    title: "Winter Projects",
    src: "/assets/real-pr-4.png",
  },
  {
    title: "Eid Projects",
    src: "/assets/real-pr-5.png",
  },
];

const notificationsData: NotificationsData[] = [
  {
    id: "1",
    image: "/assets/water_well_project.png",
    notificationTitle: "Water well project",
    notificationMessage: "Thanks for your generosity ",
  },
  {
    id: "2",
    image: "",
    notificationTitle: "Ramdan project",
    notificationMessage: "Thanks for your generosity ",
  },
  {
    id: "3",
    image: "/assets/water_well_project.png",
    notificationTitle: "Water well project",
    notificationMessage: "Thanks for your generosity ",
  },
];

export {
  navLinksData,
  HowItWorksStepsData,
  someRealProjectsData,
  footerContactsData,
  userMenuOptions,
  notificationsData,
};
