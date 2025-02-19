
import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/bisale_logo.svg"
              alt="BISALE logo"
              width={90}
              height={19}
              priority
            />
          </Link>
          <Link href="/kurs" className="text-sm">Kurs</Link>
          <Link href="/om-oss" className="text-sm">Om oss</Link>
        </div>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
