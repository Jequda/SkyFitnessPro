import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface EmailContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>(() => {
    const savedEmail = localStorage.getItem("email");
    return savedEmail ? savedEmail : "";
  });

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};
