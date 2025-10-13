"use client";

import InfoBanner from "../InfoBanner";


const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="lg:p-4 bg-blue-50 lg:ml-[17%] w-full">
      <InfoBanner />
      <div className="min-h-screen  p-4 lg:p-0 mt-[15%] lg:mt-0">{children}</div>
    </div>
  );
};

export default Wrapper;
