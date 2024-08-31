import { useState } from "react"
import { createContext, useContext } from "react"

const AccordionContext = createContext();

export function useAccordionContext(){
  const ctx =  useContext(AccordionContext);

  if (!ctx){
    throw new Error('AccordionItem should be used inside Accordion')
  }
  return ctx;
}

export default  function Accordion({children, className}){

  const [openItemId, setOpenItemId]  = useState()

  function openItem(id){
    setOpenItemId(id);
  }

  function closeItem(){
    setOpenItemId(null);
  }

  const contextValue ={
    openItemId: openItemId,
    openItem: openItem,
    closeItem: closeItem
  }

  return (
    <AccordionContext.Provider value ={contextValue}>
    <ul className={className}>
      {children}
    </ul>
    </AccordionContext.Provider>
  )
}
