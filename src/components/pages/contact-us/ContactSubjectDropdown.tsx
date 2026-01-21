import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSubjectData } from "@/constants/contactInfo";

function ContactSubjectDropdown() {
  return (
    <div className="w-full md:w-97.5 lg:w-[calc(50%-0.5rem)] mb-6">
      <Select>
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
    </div>
  );
}

export default ContactSubjectDropdown;
