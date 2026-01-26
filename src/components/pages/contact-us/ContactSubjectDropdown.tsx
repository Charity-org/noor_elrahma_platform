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

interface ContactSubjectDropdownProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

function ContactSubjectDropdown<TFieldValues extends FieldValues>({
  control,
  name,
}: ContactSubjectDropdownProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value || ""}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent className="w-(--radix-select-trigger-width)" position="popper">
            <SelectGroup>
              {contactSubjectData.map((subject) => (
                <SelectItem key={subject.value} value={subject.value}>
                  {subject.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}

export default ContactSubjectDropdown;
