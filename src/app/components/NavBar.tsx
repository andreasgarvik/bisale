
import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch';

export default () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="BISALE logo"
              width={90}
              height={19}
              priority
            />
          </Link>
          <Link href="/kurs" className="text-sm">Kurs</Link>
          <Link href="/delta" className="text-sm">Påmelding</Link>
          <Link href="/personvern" className="text-sm">Personvern</Link>
          <Link href="/om-oss" className="text-sm">Om oss</Link>
        </div>
        <div className="pr-4">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};
