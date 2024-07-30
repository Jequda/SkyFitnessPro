import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  import { onAuthStateChanged, User, signOut } from "firebase/auth";
  import { auth } from "../firebase";
  
  interface UserContextType {
    user: User | null;
    userId: string | null;
    userEmail: string | null;
    logout: () => void;
  }
  
  const UserContext = createContext<UserContextType | undefined>(undefined);
  
  export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  };
  
  export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userId, setUserId] = useState<string | null>(
      localStorage.getItem("userId")
    );
    const [userEmail, setUserEmail] = useState<string | null>(
      localStorage.getItem("userEmail")
    );
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          setUser(authUser);
          setUserId(authUser.uid);
          setUserEmail(authUser.email);
          localStorage.setItem("userId", authUser.uid);
          localStorage.setItem("userEmail", authUser.email || "");
        } else {
          setUser(null);
          setUserId(null);
          setUserEmail(null);
          localStorage.removeItem("userId");
          localStorage.removeItem("userEmail");
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const logout = async () => {
      await signOut(auth);
      setUser(null);
      setUserId(null);
      setUserEmail(null);
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
    };
  
    return (
      <UserContext.Provider value={{ user, userId, userEmail, logout }}>
        {children}
      </UserContext.Provider>
    );
  };