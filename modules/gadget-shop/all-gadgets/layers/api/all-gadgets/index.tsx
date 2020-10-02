import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Gadget, allGadgets } from '@md-modules/shared/mock';

interface Context {
  allGadgets: Gadget[] | undefined;
  isLoading: boolean;
}

const AllGadgetsAPIContext = React.createContext<Context>({
  allGadgets: [],
  isLoading: false
});

const AllGadgetsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(allGadgets);

  return (
    <AllGadgetsAPIContext.Provider
      value={{
        allGadgets: data,
        isLoading: loading
      }}
    >
      {children}
    </AllGadgetsAPIContext.Provider>
  );
};

export { AllGadgetsAPIContextProvider, AllGadgetsAPIContext };
