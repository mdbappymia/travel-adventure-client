import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  //   sign in using google
  const provider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        saveUser(result.user.email, result.user.displayName, result.user.uid);
      })
      .catch((e) => {
        setError(e.message);
        setUser({});
      });
  };

  //   register user using email and password
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { ...result.user, displayName: name };
        setUser(newUser);

        // save user to database
        saveUser(email, name, result.user.uid);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //   sign in using email and password
  const signInUsingEmailAndPassword = (email, password, navigate, from) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   sign Out a single user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  //   save user to database
  const saveUser = (email, displayName, user_id) => {
    const user = { email, displayName, user_id, role: "User" };
    fetch("http://localhost:5000/users", {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return {
    signInUsingGoogle,
    user,
    error,
    registerUser,
    isLoading,
    logOut,
    signInUsingEmailAndPassword,
  };
};

export default useFirebase;
