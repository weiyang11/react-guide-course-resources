import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if(!ctx) {
    throw new Error('AccordionItemContext must be used within an AccordionItem');
  }
  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return<AccordionItemContext.Provider value={id}> <li className={className}>{children}</li></AccordionItemContext.Provider>
}
