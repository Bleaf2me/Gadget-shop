import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { allGadgets, Gadget } from '@md-modules/shared/mock';

interface Context {
  gadget: Gadget | undefined;
  isLoading: boolean;
}

const GadgetAPIContext = React.createContext<Context>({
  gadget: undefined,
  isLoading: false
});

const GadgetAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(allGadgets.find(({ id }) => id === query.id));

  return (
    <GadgetAPIContext.Provider
      value={{
        gadget: data,
        isLoading: loading
      }}
    >
      {children}
    </GadgetAPIContext.Provider>
  );
};

export { GadgetAPIContextProvider, GadgetAPIContext };
