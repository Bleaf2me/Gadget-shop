import * as React from 'react';
// libs
import styled from 'styled-components';
// view components
import { Loader } from '../loader';

interface Props {
  isLoading: boolean;
}

const ContentLoader: React.FC<Props> = ({ children, isLoading }) =>
  isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <>{children}</>
  );

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ContentLoader };
