// ✅ Updated imports (React Icons v5+)
import { FaHome, FaGift } from "react-icons/fa";
import { MdHistory, MdAccountBalanceWallet } from "react-icons/md";

export const tabs = [
  {
    id: 1,
    icon: FaHome,
    label: "Home",
    href: "/",
    pageTitle: "Home",
    permission: "View Home",
  },
  {
    id: 2,
    icon: MdHistory,
    label: "Recharge History",
    href: "/dashboard/recharge-history",
    pageTitle: "Recharge History",
    permission: "View Recharge History",
  },
  {
    id: 3,
    icon: MdAccountBalanceWallet,
    label: "Wallet History",
    href: "/dashboard/wallet-history",
    pageTitle: "Wallet History",
    permission: "View Wallet History",
  },
  {
    id: 4,
    icon: FaGift,
    label: "Offers",
    href: "/dashboard/offers",
    pageTitle: "Offers",
    permission: "View Offers",
  },
  // {
  //   id: 5,
  //   icon: FaQuestionCircle,
  //   label: "Help & Support",
  //   href: "/dashboard/help-support",
  //   pageTitle: "Help & Support",
  //   permission: "View Help & Support",
  // },
];
