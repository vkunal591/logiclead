"use client";

import { useAuth } from "@/context/AuthContext";
import AboutUsSection from "@/components/AboutUsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import BannerSection from "@/components/BannerSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ProviderSection from "@/components/ProviderSection";
import ProviderWithSearch from "@/components/ProviderWithSearch";
import NetcSection from "@/components/NetcSection";
import InfoBoxes from "@/components/InfoBoxs";
import FAQSection2 from "@/components/FAQSection2";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BannerSection />
      <ProviderSection />
      <AboutUsSection />
      <FAQSection />
      {/* <AppDownloadSection /> */}
    </>
  )
}

const Dashboard = () => {
  return (
    <>
      <ProviderWithSearch />
      <NetcSection />
      <InfoBoxes />
      <FAQSection2 />
    </>
  )
}

export default function Home() {
  const { token, loading } = useAuth();

  if (loading) return null;
  console.log(token)
  return (
    <div className="font-[Inter] relative min-h-screen">
      {token ? Dashboard() : LandingPage()}
    </div>
  );
}
