import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactSubjectDropdown from "./ContactSubjectDropdown";
import useContactForm from "@/hooks/useContactForm";
import { Field, FieldGroup } from "@/components/ui/field";
import { Loader2 } from "lucide-react";
import { onContactSubmit } from "@/utils/onContactSubmit";

function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useContactForm();

  return (
    <div className="bg-[#F8F9FA] px-10 py-10 rounded-r-md shadow-lg flex-1">
      <form onSubmit={handleSubmit(onContactSubmit)}>
        <FieldGroup>
          {/* First Name and Last Name Row */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <Field className="flex-1 w-full">
              <Input {...register("firstName")} placeholder="First Name" />
              {errors.firstName && (
                <p className="text-destructive text-sm">{errors.firstName.message}</p>
              )}
            </Field>
            <Field className="flex-1 w-full">
              <Input {...register("lastName")} placeholder="Last Name" />
              {errors.lastName && (
                <p className="text-destructive text-sm">{errors.lastName.message}</p>
              )}
            </Field>
          </div>

          {/* Email and Phone Number Row */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <Field className="flex-1 w-full">
              <Input {...register("email")} placeholder="Email Address" />
              {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            </Field>
            <Field className="flex-1 w-full">
              <Input {...register("phoneNumber")} placeholder="Phone Number" />
              {errors.phoneNumber && (
                <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
              )}
            </Field>
          </div>

          {/* Subject Dropdown */}
          <Field className="w-full md:w-97.5 lg:w-[calc(50%-0.5rem)]">
            <ContactSubjectDropdown control={control} name="subject" />
            {errors.subject && <p className="text-destructive text-sm">{errors.subject.message}</p>}
          </Field>

          {/* Message Textarea */}
          <Field>
            <textarea
              {...register("message")}
              placeholder="Message"
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-44.5 resize-none"
            />
            {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
          </Field>

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-start">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="uppercase px-10 py-6 rounded-3xl flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                "Send message"
              )}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}

export default ContactForm;
