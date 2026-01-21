import { invoicesData } from "@/constants/layoutData";
import { Invoice } from "@/types/layoutTypes";

export async function getInvoiceData(): Promise<Invoice[]> {
  // Fetch data from your API here.
  return invoicesData;
}
