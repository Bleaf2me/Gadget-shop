import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled from 'styled-components';

interface Props {
  href: string;
  label: string;
}

const MenuItem: React.FC<Props> = ({ href, label }) => (
  <MenuI>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

const MenuI = styled.div``;

export { MenuItem };
