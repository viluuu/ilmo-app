"use client";
// src/app/competitions/layout.tsx
import { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const CustomPage = () => {
    return (
      <div>
        <p>Moi</p>
      </div>
    );
  };

  const DotIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col bg-green-800">
      <header>
        <nav className="md:container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-mono font-bold text-white">
              <Link href="/kilpailut">Ilmo-app</Link>
            </div>
          </div>
          <div></div>
          <div className="hidden md:flex space-x-8 text-lg items-center">
            <Link
              href="/kilpailut"
              className="text-white font-semibold font-mono text-base"
            >
              Kilpailut
            </Link>
            <div>
              <p className="text-white">|</p>
            </div>
            <SignedOut>
              <SignInButton>
                <button className="font-semibold text-white font-mono text-base">
                  Kirjaudu
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="font-semibold text-white font-mono text-base">
                  Rekisteröidy
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton>
                <UserButton.UserProfilePage
                  label="Muokkaa kilpaprofiilia"
                  url="custom"
                  labelIcon={<DotIcon />}
                >
                  <CustomPage />
                </UserButton.UserProfilePage>
              </UserButton>
            </SignedIn>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>
        {isOpen && (
          <div className="md:hidden bg-green-800 p-4 transition duration-300 flex gap-4 flex-col items-start border-b">
            <Link
              href="/kilpailut"
              className="text-white font-semibold font-mono text-base"
            >
              Kilpailut
            </Link>
            <div>
              <p className="text-white hidden md:box">|</p>
            </div>
            <SignedOut>
              <SignInButton>
                <button className="font-semibold text-white font-mono text-base">
                  Kirjaudu
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="font-semibold text-white font-mono text-base">
                  Rekisteröidy
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton>
                <UserButton.UserProfilePage
                  label="Muokkaa kilpaprofiilia"
                  url="custom"
                  labelIcon={<DotIcon />}
                >
                  <CustomPage />
                </UserButton.UserProfilePage>
              </UserButton>
            </SignedIn>
          </div>
        )}
      </header>
      <main className="flex-grow bg-green-800">{children}</main>
    </div>
  );
};

export default Layout;
