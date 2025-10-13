import DynamicHistoryTable from "@/components/tables/DynamicHistoryTable";
import { FaHistory } from "react-icons/fa";

const rechargeData = [
  {
    txnId: "TXN123",
    customerName: "John Doe",
    amount: 100,
    discount: 10,
    vehicleNo: "MH12AB1234",
    createdAt: "2025-10-13",
    status: "Success",
  },
  { txnId: "TXN124", customerName: "Alice", amount: 150, discount: 5, vehicleNo: "MH14CD5678", createdAt: "2025-10-12", status: "Failed" },
];

const rechargeColumns = [
  { key: "txnId", label: "TxnID" },
  { key: "customerName", label: "Customer Name" },
  { key: "amount", label: "Amount" },
  { key: "discount", label: "Discount" },
  { key: "vehicleNo", label: "Vehicle No" },
  { key: "createdAt", label: "Created At" },
  { key: "status", label: "Status" },
];


export default function page() {
  return (
    <div className="bg-white rounded-xl shadow-xl">
      <DynamicHistoryTable
        title="Recharge History"
        icon={<FaHistory />}
        data={rechargeData}
        columns={rechargeColumns}
        searchKeys={["customerName", "vehicleNo"]}
        dateKeys={{ from: "createdAt", to: "createdAt" }}
      /> 
    </div>
  );
}
