import * as React from 'react';
import { Logo } from '@md-ui/logos/main';
import { Wrapper, IWrapper, LWrapper, RWrapper } from './views';
import { ModalWindow } from 'pages/modal/modal';

const Header = () => {
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          <ModalWindow />
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
