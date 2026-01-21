import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";

const SocialProviders = ({ btnText }: { btnText: string }) => {
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <Button
      variant="outline"
      type="button"
      onClick={handleGoogleSignIn}
      className="rounded-md! text-primary hover:bg-primary/5 border-primary w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
        <path
          fill="#4285F4"
          d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.3h146.9c-6.3 34-25 62.8-53.3 82v68h86.2c50.4-46.4 79.7-114.9 79.7-194.9z"
        />
        <path
          fill="#34A853"
          d="M272 544.3c72.6 0 133.6-24.1 178.1-65.4l-86.2-68c-24 16.1-54.7 25.6-91.9 25.6-70.7 0-130.6-47.7-152-111.7h-89v70.3C75.9 486.1 167.1 544.3 272 544.3z"
        />
        <path
          fill="#FBBC05"
          d="M120 324.8c-10.6-31.7-10.6-65.9 0-97.6v-70.3h-89c-38.4 76.8-38.4 167.3 0 244.1l89-76.2z"
        />
        <path
          fill="#EA4335"
          d="M272 107.7c39.5-.6 77.6 14.1 106.7 41.1l79.4-79.4C404.6 24.1 343.6 0 272 0 167.1 0 75.9 58.2 31 156.9l89 70.3C141.4 155.4 201.3 107.7 272 107.7z"
        />
      </svg>
      {btnText}
    </Button>
  );
};

export default SocialProviders;
