"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    {
      name: "Customer",
      href: "/",
    },
    {
      name: "Brokers",
      href: "/",
      dropdown: [
        {
          name: "middle for brokers",
          href: "/broker/option1",
        },
        {
          name: "Success Stories",
          href: "/broker/option2",
        },
      ],
    },
    {
      name: "Lenders",
      href: "/lenders",
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-white z-[1000] shadow-md">
      <nav className="flex max-w-screen-xl mx-auto px-9 mt-5 justify-between items-center pb-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-12">
            <h1 className="text-4xl font-semibold">Middle</h1>
          </div>

          <div className="text-md font-semibold flex gap-7 items-center absolute md:static mt-10 md:mt-0 bg-slate-200 md:bg-white left-0 px-3 py-1 md:p-0 w-full top-6">
            {navItems.map((nav) => (
              <div
                key={nav.name}
                className="relative"
                onMouseEnter={() => nav.dropdown && setShowDropdown(true)}
                onMouseLeave={() => nav.dropdown && setShowDropdown(false)}
              >
                <Link href={nav.href}>
                  <p className="md:hover:bg-zinc-100 cursor-pointer px-4 py-2 rounded-lg hover:text-purple-600">
                    {nav.name}
                  </p>
                </Link>

                {/* Dropdown */}
                {nav.dropdown && showDropdown && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-60">
                    {nav.dropdown.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <p className="px-6 py-3 hover:bg-purple-50 cursor-pointer">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 font-semibold">
          <Link href="/contact">
            <p className="hover:text-purple-600">Contact</p>
          </Link>
          <Link href="/login">
            <p>
              <Button className="bg-zinc-900 text-zinc-50 hover:bg-purple-600 rounded-lg">
                Login
              </Button>
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
