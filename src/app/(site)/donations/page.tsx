import { getInvoiceData } from "@/utils/getInvoiceData";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const DonatiosPage = async () => {
  const data = await getInvoiceData();

  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-33.4rem)]">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DonatiosPage;
