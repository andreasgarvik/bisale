'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Bestemmer om header skal ha skygge basert på om mobilmeny er åpen
  // **OPPDATERT**: Ingen skygge når menyen er lukket.
  const headerShadow = isOpen ? 'shadow-lg' : ''; // Tom streng '' betyr ingen skygge-klasse legges til

  return (
    // Bruker headerShadow variabelen. transition-shadow sørger for animasjon når skyggen endres.
    <header className={`sticky top-0 z-20 bg-white dark:bg-gray-900 ${headerShadow} transition-shadow duration-300`}>
      {/* Hovedinnholdet i navbaren (logo, desktop-lenker, knapper) */}
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="BISALE logo"
              width={90}
              height={19}
              priority
            />
          </Link>
        </div>

        {/* Høyre side: Desktop-lenker (skjult på mobil), ThemeSwitch, Mobilmeny-knapp */}
        <div className="flex items-center gap-4">
          {/* Desktop Links (Vises kun på md og større) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/kurs" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Kurs</Link>
            <Link href="/delta" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Påmelding</Link>
            <Link href="/finansiering" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Finansiering</Link>
            <Link href="/om-oss" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Om oss</Link>
            <Link href="/personvern" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">Personvern</Link>
          </div>

          {/* Theme Switch */}
          <ThemeSwitch />

          {/* Mobilmeny-knapp (Vises kun på mobil) */}
          <button
            onClick={toggleMenu}
            className="ml-2 rounded p-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
          >
            <span className="sr-only">{isOpen ? 'Lukk meny' : 'Åpne meny'}</span>
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobilmeny Panel (Animeres med max-height) */}
      <div
        id="mobile-menu-panel"
        className={`
          w-full md:hidden
          bg-white dark:bg-gray-800
          overflow-hidden transition-[max-height,padding,border] duration-300 ease-in-out
          ${isOpen ? 'max-h-96 p-4 border-t border-gray-200 dark:border-gray-700' : 'max-h-0 p-0 border-transparent'}
        `}
      >
        {/* Lenker inne i mobilpanelet */}
        <div className="flex flex-col space-y-1">
          <Link href="/kurs" onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Kurs</Link>
          <Link href="/delta" onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Påmelding</Link>
          <Link href="/finansiering" onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Finansiering</Link>
          <Link href="/om-oss" onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Om oss</Link>
          <Link href="/personvern" onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Personvern</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;