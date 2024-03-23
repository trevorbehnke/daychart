"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const LandingFooter = () => {
  return (
    <footer className="w-full mt-24 bg-gray-900 text-white py-8 flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-10 w-full">
          <div className="mb-4 md:mb-0 flex-grow md:flex-grow-0">
            <div className="relative h-8 w-8">
              <Image fill alt="Logo" src="/logo.png" sizes="10vh" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/faq">FAQ</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
