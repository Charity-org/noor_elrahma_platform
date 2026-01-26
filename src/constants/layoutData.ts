import { Invoice, NotificationsData } from "@/types/layoutTypes";
import { CalendarHeart, CircleUser, HandHeart, Languages, LogOut } from "lucide-react";

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
  { name: "Language", icon: Languages },
  { name: "Favourites", link: "/favourites", icon: CalendarHeart },
  { name: "Sign out", icon: LogOut },
];

const invoicesData: Invoice[] = [
  {
    invoice: "INV001",
    method: "Credit Card",
    project: {
      name: "Water Well",
      id: 1,
    },
    date: "11/8/2025",
    amount: 250.0,
  },
  {
    invoice: "INV002",
    method: "PayPal",
    project: {
      name: "Homeless Help",
      id: 2,
    },
    date: "11/8/2025",
    amount: 150.0,
  },
  {
    invoice: "INV003",
    method: "Bank Transfer",
    project: {
      name: "Quran Distribution Project",
      id: 3,
    },
    date: "11/8/2025",
    amount: 350.0,
  },
  {
    invoice: "INV004",
    method: "Credit Card",
    project: {
      name: "Ramadan Food Box Project",
      id: 4,
    },
    date: "11/8/2025",
    amount: 450.0,
  },
  {
    invoice: "INV005",
    method: "PayPal",
    project: {
      name: "Quran Distribution Project",
      id: 5,
    },
    date: "11/8/2025",
    amount: 550.0,
  },
  {
    invoice: "INV006",
    method: "Bank Transfer",
    project: {
      name: "Ramadan Food Box Project",
      id: 6,
    },
    date: "11/8/2025",
    amount: 200.0,
  },
  {
    invoice: "INV007",
    method: "Credit Card",
    project: {
      name: "Quran Distribution Project",
      id: 7,
    },
    date: "11/8/2025",
    amount: 300.0,
  },
  {
    invoice: "INV008",
    method: "PayPal",
    project: {
      name: "Water Well",
      id: 8,
    },
    date: "11/9/2025",
    amount: 400.0,
  },
  {
    invoice: "INV009",
    method: "Bank Transfer",
    project: {
      name: "Homeless Help",
      id: 9,
    },
    date: "11/9/2025",
    amount: 275.0,
  },
  {
    invoice: "INV010",
    method: "Credit Card",
    project: {
      name: "Ramadan Food Box Project",
      id: 10,
    },
    date: "11/9/2025",
    amount: 500.0,
  },
  {
    invoice: "INV011",
    method: "PayPal",
    project: {
      name: "Quran Distribution Project",
      id: 11,
    },
    date: "11/9/2025",
    amount: 600.0,
  },
  {
    invoice: "INV012",
    method: "Bank Transfer",
    project: {
      name: "Water Well",
      id: 12,
    },
    date: "11/9/2025",
    amount: 320.0,
  },
  {
    invoice: "INV013",
    method: "Credit Card",
    project: {
      name: "Homeless Help",
      id: 13,
    },
    date: "11/10/2025",
    amount: 180.0,
  },
  {
    invoice: "INV014",
    method: "PayPal",
    project: {
      name: "Ramadan Food Box Project",
      id: 14,
    },
    date: "11/10/2025",
    amount: 420.0,
  },
  {
    invoice: "INV015",
    method: "Bank Transfer",
    project: {
      name: "Quran Distribution Project",
      id: 15,
    },
    date: "11/10/2025",
    amount: 700.0,
  },
  {
    invoice: "INV016",
    method: "Credit Card",
    project: {
      name: "Water Well",
      id: 16,
    },
    date: "11/10/2025",
    amount: 260.0,
  },
  {
    invoice: "INV017",
    method: "PayPal",
    project: {
      name: "Homeless Help",
      id: 17,
    },
    date: "11/11/2025",
    amount: 340.0,
  },
  {
    invoice: "INV018",
    method: "Bank Transfer",
    project: {
      name: "Ramadan Food Box Project",
      id: 18,
    },
    date: "11/11/2025",
    amount: 480.0,
  },
  {
    invoice: "INV019",
    method: "Credit Card",
    project: {
      name: "Quran Distribution Project",
      id: 19,
    },
    date: "11/11/2025",
    amount: 520.0,
  },
  {
    invoice: "INV020",
    method: "PayPal",
    project: {
      name: "Water Well",
      id: 20,
    },
    date: "11/11/2025",
    amount: 390.0,
  },
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
  invoicesData,
  notificationsData,
};
