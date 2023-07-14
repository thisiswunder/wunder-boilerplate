import { createStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ITemplateNameStoreProps } from './TemplateNameStore';

export const useTemplateNameStore = createStore<ITemplateNameStoreProps>()(
  devtools(
    (set, get) => ({
      bears: 0,
      increase: (by: number) =>
        set((state) => ({ bears: state.bears + by }), undefined, 'increase'),
    }),
    {
      name: 'useTemplateNameStore',
    }
  )
);
