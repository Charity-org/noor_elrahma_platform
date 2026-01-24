import { Invoice, NotificationsData } from "@/types/layoutTypes";
import { BellDot, CalendarHeart, CircleUser, HandHeart, Languages, LogOut } from "lucide-react";

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

const heroData = [
  {
    id: 1,
    image: "/assets/hero-1.jpg",
    title: "Education for children in singal",
    description:
      "Every contribution has the power to change a life. Through carefully managed humanitarian projects.",
    donations: 1248,
    helpedPeople: 12400,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: 2,
    image: "/assets/hero-2.jpg",
    title: "Education for children in ghambia",
    description:
      "Every contribution has the power to change a life. Through carefully managed humanitarian projects.",
    donations: 1582,
    helpedPeople: 16839,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: 3,
    image: "/assets/hero-3.jpg",
    title: "Food for children in singal",
    description:
      "Every contribution has the power to change a life. Through carefully managed humanitarian projects.",
    donations: 8369,
    helpedPeople: 452639,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: 4,
    image: "/assets/hero-4.jpg",
    title: "Education for children in ghambia",
    description:
      "Every contribution has the power to change a life. Through carefully managed humanitarian projects.",
    donations: 7896,
    helpedPeople: 154789,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
];

const howItWorksData = [
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

const recentProjects = [
  {
    id: "1",
    imageSrc: "/assets/water_well_project.png",
    title: "Water Well Project",
    startDate: "18/2/2026",
    country: "senegal",
    description:
      "Providing clean and safe water to families in need by building sustainable water wells in underserved communities.",
    progress: 50,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "2",
    imageSrc: "/assets/quran_project.png",
    title: "Quran Distribution Project",
    startDate: "18/2/2026",
    country: "Singal",
    description:
      "Distributing Qurans to individuals and communities to support education, faith, and daily spiritual life.",
    progress: 80,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "3",
    imageSrc: "/assets/ramdan_project.png",
    title: "Ramadan Food Package Project",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Providing essential food supplies to families in need during the holy month of Ramadan to support their fasting and daily needs.",
    progress: 70,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "4",
    imageSrc: "/assets/water_well_project.png",
    title: "Winter Clothing Drive",
    startDate: "18/2/2026",
    country: "Senegal",
    description:
      "Distributing warm clothing and blankets to vulnerable individuals and families to protect them from the cold weather.",
    progress: 50,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "5",
    imageSrc: "/assets/quran_project.png",
    title: "Educational Materials Donation",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Donating educational materials such as textbooks, notebooks, and stationery to schools and educational institutions to support learning and education.",
    progress: 50,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "6",
    imageSrc: "/assets/ramdan_project.png",
    title: "Eid Clothing Drive",
    startDate: "18/2/2026",
    country: "Singal",
    description:
      "Providing new clothes and shoes to children and families in need for the Eid celebration.",
    progress: 50,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
  {
    id: "7",
    imageSrc: "/assets/water_well_project.png",
    title: "Water Well Project",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Providing clean and safe water to families in need by building sustainable water wells in underserved communities.",
    progress: 50,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
      donateNow: {
        title: "Donate Now",
        link: "",
      },
    },
  },
];

const completedProjects = [
  {
    id: "1",
    imageSrc: "/assets/water_well_project.png",
    title: "Water Well Project",
    startDate: "18/2/2026",
    country: "senegal",
    description:
      "Providing clean and safe water to families in need by building sustainable water wells in underserved communities.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "2",
    imageSrc: "/assets/quran_project.png",
    title: "Quran Distribution Project",
    startDate: "18/2/2026",
    country: "Senegal",
    description:
      "Distributing Qurans to individuals and communities to support education, faith, and daily spiritual life.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "3",
    imageSrc: "/assets/ramdan_project.png",
    title: "Ramadan Food Package Project",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Providing essential food supplies to families in need during the holy month of Ramadan to support their fasting and daily needs.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "4",
    imageSrc: "/assets/water_well_project.png",
    title: "Winter Clothing Drive",
    startDate: "18/2/2026",
    country: "Singal",
    description:
      "Distributing warm clothing and blankets to vulnerable individuals and families to protect them from the cold weather.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "5",
    imageSrc: "/assets/quran_project.png",
    title: "Educational Materials Donation",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Donating educational materials such as textbooks, notebooks, and stationery to schools and educational institutions to support learning and education.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "6",
    imageSrc: "/assets/ramdan_project.png",
    title: "Eid Clothing Drive",
    startDate: "18/2/2026",
    country: "Singal",
    description:
      "Providing new clothes and shoes to children and families in need for the Eid celebration.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
  },
  {
    id: "7",
    imageSrc: "/assets/water_well_project.png",
    title: "Water Well Project",
    startDate: "18/2/2026",
    country: "Gambia",
    description:
      "Providing clean and safe water to families in need by building sustainable water wells in underserved communities.",
    progress: 100,
    goal: 12000,
    raised: 8000,
    donations: 20,
    actions: {
      viewProject: {
        title: "View Project",
        link: "",
      },
    },
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

const whoWeAreData = {
  images: [
    {
      src: "/assets/who-1.jpg",
    },
    {
      src: "/assets/who-2.jpg",
    },
    {
      src: "/assets/who-3.jpg",
    },
    {
      src: "/assets/who-4.jpg",
    },
    {
      src: "/assets/who-5.jpg",
    },
  ],
  personData: [
    {
      quote: "Together, we can change lives for the better",
      wisdome:
        "Your kindness today can improve someone’s life tomorrow. A single donation can provide clean water, food for a family, or care for someone who is struggling. Together, these small acts of generosity grow into lasting impact. By standing together and giving with compassion, we can help build a better, more caring future for everyone.",
      name: "Mohamed Mahmoud",
      position: "CEO & Founder",
    },
    {
      quote: "Small actions create big impact",
      wisdome:
        "We believe that even the smallest contribution can make a real difference. When people come together with a shared purpose, lives are transformed. Our mission is to ensure every donation reaches those who need it most and creates long-term change.",
      name: "Sarah Johnson",
      position: "Operations Manager",
    },
    {
      quote: "Hope begins with helping hands",
      wisdome:
        "Every person deserves dignity, care, and opportunity. Through transparent work and community-driven programs, we aim to bring hope where it is needed most. Helping others is not just a responsibility, it is a privilege.",
      name: "Ahmed El-Sayed",
      position: "Community Outreach Lead",
    },
    {
      quote: "Giving is the strongest form of humanity",
      wisdome:
        "True change happens when compassion leads the way. By supporting education, healthcare, and basic needs, we empower communities to stand on their own and build a brighter future for generations to come.",
      name: "Emily Carter",
      position: "Programs Director",
    },
    {
      quote: "Transparency builds trust, trust builds impact",
      wisdome:
        "Our commitment is to ensure that every donation is handled with honesty and care. We work tirelessly to maintain transparency, measure impact, and show our supporters exactly how their generosity is changing lives.",
      name: "David Wilson",
      position: "Finance & Compliance Manager",
    },
  ],
};

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
  { name: "Notifications", link: "/notifications", icon: BellDot },
  // { name: "Terms and privacy", link: "/terms", icon: ReceiptText },
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
  heroData,
  howItWorksData,
  recentProjects,
  completedProjects,
  someRealProjectsData,
  whoWeAreData,
  footerContactsData,
  userMenuOptions,
  invoicesData,
  notificationsData,
};
