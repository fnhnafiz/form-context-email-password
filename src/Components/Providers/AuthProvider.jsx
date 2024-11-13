import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import toast from "react-hot-toast";

export const ContextAuthProvider = createContext(null);

const twitterProvider = new TwitterAuthProvider();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const name = "Nafiz";
  const createRegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const handleTwitterProvider = () => {
    return signInWithPopup(auth, twitterProvider);
    // .then((result) => {
    //   console.log(result.user);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUsers = () => {
    toast.error("Sign Out.");

    setLoading(true);
    return signOut(auth);
  };
  // onAuthStateChanged(auth, (currentUsers) => {
  //   if (currentUsers) {
  //     console.log("New Login a User", currentUsers);
  //     setUsers(currentUsers);
  //   } else {
  //     console.log("the users fucking guy");
  //     setUsers(null);
  //   }
  // });

  useEffect(() => {
    const unLikes = onAuthStateChanged(auth, (cUser) => {
      console.log("Iam new user in this country", cUser);
      setUsers(cUser);
      setLoading(false);

      return () => {
        unLikes();
      };
    });
  }, []);

  // Create a Varriable Object for passing all of

  const info = {
    name,
    createRegisterUser,
    loginUser,
    users,
    logOutUsers,
    loading,
    handleTwitterProvider,
    loginWithGoogle,
  };

  return (
    <ContextAuthProvider.Provider value={info}>
      {children}
    </ContextAuthProvider.Provider>
  );
};

export default AuthProvider;
