import * as React from 'react';
import { GadgetAPIContext } from '@md-gs-gadget/layers/api/gadget';

interface GadgetInfo {
  id: number;
  coverImage: string;
  title: string;
  price: number;
}

interface Context {
  gadgetInfo: GadgetInfo;
}

const GadgetBLContext = React.createContext<Context>({
  gadgetInfo: {} as GadgetInfo
});

const GadgetBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { gadget } = React.useContext(GadgetAPIContext);

  const gadgetInfo = React.useMemo<GadgetInfo>(() => {
    if (!gadget) {
      return {} as GadgetInfo;
    }

    return { id: gadget.id, coverImage: gadget.coverImage, title: gadget.title, price: gadget.price };
  }, [typeof gadget === 'undefined']);

  return (
    <GadgetBLContext.Provider
      value={{
        gadgetInfo: gadgetInfo
      }}
    >
      {children}
    </GadgetBLContext.Provider>
  );
};

export { GadgetBLContextProvider, GadgetBLContext };
