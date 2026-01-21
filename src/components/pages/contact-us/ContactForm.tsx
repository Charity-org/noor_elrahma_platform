import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactSubjectDropdown from "./ContactSubjectDropdown";

function ContactForm() {
  return (
    <div className="bg-[#F8F9FA] px-10 py-10 rounded-r-md shadow-lg flex-1">
      <form>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
        </div>

        {/* Subject Dropdown */}
        <ContactSubjectDropdown />

        <div>
          <textarea
            placeholder="Message"
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-44.5 mb-10 resize-none"
          />
        </div>

        <div className="flex justify-center lg:justify-start">
          <Button className="uppercase px-10 py-6 rounded-3xl">Send message</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
