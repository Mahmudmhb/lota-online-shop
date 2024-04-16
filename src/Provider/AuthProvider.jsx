/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
import usePublicAxios from "../Layout/usePublicAxios/usePublicAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = usePublicAxios();

  const handleRegister = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUpdateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const handleLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);

      if (currentUser) {
        const NewUser = {
          email: currentUser.email,
          name: currentUser.displayName,
          image: currentUser.photoURL,
          status: "user",
        };

        const res = axiosPublic.post("/users", NewUser).then((res) => {});
      }
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic]);
  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogOut,
    handleUpdateUser,
    user,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
