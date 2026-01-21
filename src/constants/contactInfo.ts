import { Clock, Mail, Phone } from "lucide-react";

const contactInfoData = [
  {
    text: "+863-267-3634",
    icon: Phone,
  },
  {
    text: "charity@email.net",
    icon: Mail,
  },
  {
    text: "Mon-Fri: 8:00am - 6:00pm",
    icon: Clock,
  },
];

const contactSubjectData = [
  {
    title: "General Inquiry",
    value: "general-inquiry",
  },
  {
    title: "Donation Support (Payment / Confirmation issues)",
    value: "donation-support",
  },
  {
    title: "Project Information (Questions about a specific project)",
    value: "project-information",
  },
  {
    title: "Technical Issue (Website or account problems)",
    value: "technical-issue",
  },
  {
    title: "Feedback / Suggestions",
    value: "feedback-suggestions",
  },
  {
    title: "Other",
    value: "other",
  },
];

export { contactInfoData, contactSubjectData };
