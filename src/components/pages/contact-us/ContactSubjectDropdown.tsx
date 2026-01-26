"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSubjectData } from "@/constants/contactInfo";

import { useTranslations } from "next-intl";

interface ContactSubjectDropdownProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder?: string;
}

function ContactSubjectDropdown<TFieldValues extends FieldValues>({
  control,
  name,
  placeholder = "Subject",
}: ContactSubjectDropdownProps<TFieldValues>) {
  const t = useTranslations("contact_subjects");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value || ""}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="w-(--radix-select-trigger-width)" position="popper">
            <SelectGroup>
              {contactSubjectData.map((subject) => {
                // Map the value to the key used in JSON
                const key = subject.value.replace(/-/g, "_");
                return (
                  <SelectItem key={subject.value} value={subject.value}>
                    {t(key)}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}

export default ContactSubjectDropdown;
