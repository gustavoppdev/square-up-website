import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const NavigationBar = () => {
  return (
    <header className="section-container">
      <nav>
        <Image src={logo} alt="Square Up" priority className="w-28" />
      </nav>
    </header>
  );
};

export default NavigationBar;
