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
  currency: string;
  country: string;
  method: string;
  projectId: number;
  status: string;
  project: {
    name: string;
    nameAr: string;
  };
  createdAt: string;
  amount: number;
}

interface NotificationsData {
  id: string;
  image?: string;
  notificationTitle: string;
  notificationMessage: string;
}

export type { BurgerBtnProps, ProgressBarProps, FocusCardsType, Invoice, NotificationsData };
