import PageTransition from "@/components/global/PageTransition";

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
