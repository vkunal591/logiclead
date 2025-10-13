import DynamicHistoryTable from "@/components/tables/DynamicHistoryTable";
import { FaWallet } from "react-icons/fa6";



const walletData = [
  { txnId: "WAL123", type: "Credit", amount: 500, createdAt: "2025-10-10", status: "Success" },
];

const walletColumns = [
  { key: "txnId", label: "TxnID" },
  { key: "type", label: "Type" },
  { key: "amount", label: "Amount" },
  { key: "createdAt", label: "Date" },
  { key: "status", label: "Status" },
];

export default function page() {
  return (
    <div className="bg-white rounded-xl shadow-xl">
      <DynamicHistoryTable
        title="Wallet History"
        icon={<FaWallet />}
        data={walletData}
        columns={walletColumns}
        searchKeys={["type"]}
        dateKeys={{ from: "createdAt", to: "createdAt" }}
      />
    </div>
  );
}
