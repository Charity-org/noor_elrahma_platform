"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countries from "@/constants/countries.json";
import { Field, FieldLabel } from "../ui/field";

interface CountrySelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  error?: string;
  className?: string;
}

const CountrySelect = <TFieldValues extends FieldValues>({
  control,
  name,
  label = "Country",
  error,
  className,
}: CountrySelectProps<TFieldValues>) => {
  return (
    <Field className={className}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value || ""}>
            <SelectTrigger id={name} className="border-primary focus:ring-primary/30! w-full">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="max-h-75" position="popper" sideOffset={4}>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-destructive text-sm">{error}</p>}
    </Field>
  );
};

export default CountrySelect;
