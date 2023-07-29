import { createContext, MutableRefObject } from 'react';

export const SectionRefContext = createContext<MutableRefObject<null> | null>(null);
