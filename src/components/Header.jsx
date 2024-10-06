import React, { useState } from "react";
import MobileHeader from "./mobileHeader/MobileHeader";

export const routes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
  { name: "Ministries", href: "/ministries" },
  { name: "Sermons", href: "/sermons" },
  { name: "Login", href: "/login" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full overflow-hidden bg-slate-300">
      <div className="max-w-[1300px] mx-auto p-4">
        <MobileHeader open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
