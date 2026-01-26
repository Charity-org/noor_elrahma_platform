import { Invoice } from "@/types/layoutTypes";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getDonationsAction } from "@/app/actions";

const DonatiosPage = async () => {
  const { data } = await getDonationsAction();
  const donationsData = data ? Object.values(data as Record<string, Invoice>) : [];

  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-33.4rem)]">
      <DataTable columns={columns} data={donationsData} />
    </div>
  );
};

export default DonatiosPage;
