"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface IFormPageContext {
  isFormPage: boolean;
  setIsFormPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormPageContext = createContext<IFormPageContext>({
  isFormPage: false,
  setIsFormPage: () => {},
});

export const useFormPageContext = () => useContext(FormPageContext);

// 定義Props類型以包含children
type FormPageProviderProps = {
  children: ReactNode;
};

export const FormPageProvider: React.FC<FormPageProviderProps> = ({
  children,
}) => {
  const [isFormPage, setIsFormPage] = useState(true);

  return (
    <FormPageContext.Provider value={{ isFormPage, setIsFormPage }}>
      {children}
    </FormPageContext.Provider>
  );
};
