import NavBar from "@/components/layout/nav-bar";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full mx-auto max-w-7xl">
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
