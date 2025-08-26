import Image from "next/image";
import React from "react";
import TopNavigation from "./TopNavigation";

const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content/5">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="کلاسبن"
        />
        <TopNavigation />
        <div className="mr-auto">User Authentication</div>
      </div>
    </header>
  );
};

export default Header;
