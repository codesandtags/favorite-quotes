'use client';
import React, { ReactNode, useState } from 'react';

import {
  IconBlockquote,
  IconBrandGithub,
  IconMenu2,
  IconMoon,
  IconQuote,
  IconSun,
} from '@tabler/icons-react';
import { pacifico } from '@/app/fonts';
import Link from 'next/link';

const Navbar = ({ children }: { children: ReactNode }) => {
  // const [darkMode, setDarkMode] = useState(
  //   typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  // );

  // const toggleDarkMode = () => {
  //   const newTheme = !darkMode ? 'dark' : 'light';
  //   setDarkMode(!darkMode);
  //   localStorage.setItem('theme', newTheme);
  //   document.documentElement.setAttribute('data-theme', newTheme);
  // };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <IconMenu2 />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <a
              href="/"
              className={`flex gap-2 font-bold mx-4 text-gray-200 ${pacifico.className}`}
            >
              <span className="text-lg">My Quotes</span>
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href="/login" className="py-2">
                  Sign In / Sign Up
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/codesandtags/favorite-quotes"
                  target="_blank"
                  className="tooltip tooltip-bottom"
                  data-tip="GitHub"
                >
                  <IconBrandGithub className="text-gray-200" />
                </a>
              </li>
              {/* <li>
                <button
                  className="btn btn-circle btn-ghost"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <IconSun className="text-gray-200" />
                  ) : (
                    <IconMoon className="text-gray-200" />
                  )}
                </button>
              </li> */}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="bg-base-100 min-h-screen w-80">
          <div className="bg-base-100 sticky top-0 z-10 bg-opacity-90 p-4 flex items-center gap-2">
            <IconQuote className="text-primary text-3xl" />
            <span className={`py-2 text-2xl ${pacifico.className}`}>
              My Quotes
            </span>
          </div>
          <ul className="menu px-2 bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link href="/login" className="py-2">
                Sign In / Sign Up
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/codesandtags/favorite-quotes"
                target="_blank"
              >
                <IconBrandGithub className="text-gray-200" /> Github repo
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
