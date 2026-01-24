interface BurgerBtnProps {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

interface ProgressBarProps {
  className?: string;
  value: number;
}

interface Project {
  id: string;
  imageSrc: string;
  title: string;
  startDate: string;
  country: string;
  description: string;
  progress: number;
  goal: number;
  raised: number;
  donations: number;
  actions: {
    viewProject: {
      title: string;
      link: string;
    };
    donateNow?: {
      title: string;
      link: string;
    };
  };
}

interface FocusCardsType {
  title: string;
  src: string;
}

interface Invoice {
  invoice: string;
  method: "Credit Card" | "PayPal" | "Bank Transfer";
  project: {
    name: string;
    id: number;
  };
  date: string;
  amount: number;
}

export type { BurgerBtnProps, ProgressBarProps, Project, FocusCardsType, Invoice };
