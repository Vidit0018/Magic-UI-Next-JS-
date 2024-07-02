"use client";
import React from "react";
import { FloatingNav } from "@/components/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const FloatingNavDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resources",
      link: "/resources",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Pricing",
      link: "/pricing",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} className="custom-floating-nav-class" />
    </div>
  );
};



export default FloatingNavDemo;
