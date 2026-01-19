import Image from "next/image";
import Link from "next/link";

interface AuthPageLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
  backgroundAlt?: string;
}

export function AuthPageLayout({
  children,
  backgroundImage,
  backgroundAlt = "Auth background",
}: AuthPageLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 pg-background">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Image
                src="/assets/logo.png"
                alt="Noor Elrahmat Logo"
                width={18}
                height={18}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            Noor Elrahma
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="bg-background relative hidden lg:block">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fill
          sizes="50vw"
        />
      </div>
    </div>
  );
}
