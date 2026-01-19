import PageTransition from "@/components/global/PageTransition";

export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
