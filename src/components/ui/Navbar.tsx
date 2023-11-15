'use client';
import React, { useEffect, useState } from 'react';

import { IconBlockquote, IconBrandGithub } from '@tabler/icons-react';

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const DARK = 'dark';
  const LIGHT = 'light';

  const localTheme =
    typeof window !== 'undefined' && localStorage.getItem('theme');
  const [theme, setTheme] = useState(localTheme || DARK);

  // update state on toggle
  const handleToggle = (e: any) => {
    setTheme(theme === DARK ? LIGHT : DARK);
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    console.log('Changing theme to ', theme);
    // Perform localStorage action
    localStorage.setItem('theme', theme as string);
    const localTheme = localStorage.getItem('theme');
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.documentElement.setAttribute('data-theme', localTheme as string);
  }, [theme]);

  return (
    <div className="navbar bg-black shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <IconBlockquote className="text-purple-500" />
        <a href="/" className="text-lg font-bold mx-4 text-gray-200">
          MyQuotes
        </a>
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-circle btn-ghost">
          <a
            href="https://github.com/codesandtags/favorite-quotes"
            target="_blank"
          >
            <IconBrandGithub className="text-gray-200" />
          </a>
        </button>
        <button className="btn btn-circle btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === DARK ? false : true}
            />
            {/* light theme sun image */}
            <span className="w-8 h-8 swap-on fill-current text-lg">🌚</span>
            {/* dark theme moon image */}
            <span className="w-8 h-8 swap-off fill-current text-lg">☀️</span>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
