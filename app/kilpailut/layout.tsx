"use client";
// src/app/competitions/layout.tsx
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

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
    <div className="flex flex-col min-h-screen bg-green-700">
      <header>
        <nav className="md:container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-mono font-bold text-white">
              Ilmo-app
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-lg items-center">
            <Link
              href="/kilpailut"
              className="text-white text-sm transition duration-300 sm:text-base text-w"
            >
              Kilpailut
            </Link>
            <SignedOut>
              <SignInButton>
                <button className="rounded-full border border-solid border-transparent transition-colors text-gray-800 flex items-center justify-center bg-foreground text-background gap-2 bg-slate-100 hover:bg-slate-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                  Kirjaudu sisään
                </button>
              </SignInButton>
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
          <div className="md:hidden bg-green-700 p-4 transition duration-300 flex gap-4 flex-col">
            <Link
              href="/kilpailut"
              className="text-white text-sm transition duration-300 sm:text-base text-w"
            >
              Kilpailut
            </Link>
            <SignedOut>
              <SignInButton>
                <button className="py-2 px-4 text-black bg-white rounded-lg">
                  Kirjaudu sisään
                </button>
              </SignInButton>
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
      <main className="flex-grow bg-white">{children}</main>
    </div>
  );
};

export default Layout;
