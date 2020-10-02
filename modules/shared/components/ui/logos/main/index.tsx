import * as React from 'react';
// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/' passHref>
    <a>
      <img src='/static/logos/logo.png' alt='Logo' />
    </a>
  </Link>
);

export { Logo };
