import SubPagesHero from "@/components/custom/SubPagesHero";
import ConactInfo from "@/components/pages/contact-us/ConactInfo";
import ContactForm from "@/components/pages/contact-us/ContactForm";

function ContactUsPage() {
  return (
    <>
      <SubPagesHero bgImage="/assets/real-pr-5.png">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          Stories and progress from our charitable work
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
          Real updates and stories showing the impact of your donations..
        </p>
      </SubPagesHero>

      <main className="container py-10 flex min-h-[calc(100dvh-50vh)] items-stretch gap-0">
        <ConactInfo />
        <ContactForm />
      </main>
    </>
  );
}

export default ContactUsPage;
