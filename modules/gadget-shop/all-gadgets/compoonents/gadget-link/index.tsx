import * as React from 'react';
// components
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  gId: number;
}

const GadgetLink: React.FC<Props> = ({ gId, children }) => (
  <Link href='/gadget/[id]' as={`/gadget/${gId}`}>
    <Al>{children}</Al>
  </Link>
);

const Al = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export { GadgetLink };
