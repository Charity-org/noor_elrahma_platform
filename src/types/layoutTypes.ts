interface BurgerBtnProps {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

interface ProgressBarProps {
  className?: string;
  value: number;
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

interface NotificationsData {
  id: string;
  image?: string;
  notificationTitle: string;
  notificationMessage: string;
}

export type { BurgerBtnProps, ProgressBarProps, FocusCardsType, Invoice, NotificationsData };
