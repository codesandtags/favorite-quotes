'use client';
import React, { useEffect, useState, useRef } from 'react';

import { IconBlockquote, IconBrandGithub } from '@tabler/icons-react';

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const DARK = 'dark';
  const LIGHT = 'night';

  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : DARK
  );

  // update state on toggle
  const handleToggle = (e: any) => {
    console.log({
      toggle: e.target.checked,
    });
    if (e.target.checked) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    // Perform localStorage action
    localStorage.setItem('theme', theme as string);
    const localTheme = localStorage.getItem('theme');
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.documentElement.setAttribute('data-theme', localTheme as string);
  }, [theme]);

  return (
    <div className="navbar bg-base-300 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <IconBlockquote className="text-purple-500" />
        <a href="/" className="text-lg font-bold mx-4">
          MyQuotes
        </a>
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-circle btn-ghost">
          <a href="#">
            <IconBrandGithub className="" />
          </a>
        </button>
        <button className="btn btn-circle btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === LIGHT ? false : true}
            />
            {/* light theme sun image */}
            <span className="w-8 h-8 swap-on text-lg">☀️</span>
            {/* dark theme moon image */}
            <span className="w-8 h-8 swap-off text-lg">🌚</span>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
