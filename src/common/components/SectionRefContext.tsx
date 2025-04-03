import { createContext, MutableRefObject } from 'react';

export const SectionRefContext = createContext<MutableRefObject<HTMLElement | null> | null>(null);
