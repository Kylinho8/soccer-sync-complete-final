import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase";

const db = getFirestore(app);

const withRoleProtection = (Component: any, allowedRole: string) => {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const auth = getAuth(app);
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const role = userDoc.exists() ? userDoc.data().role : null;
          if (role === allowedRole) {
            setAuthorized(true);
          } else {
            router.push("/unauthorized");
          }
        } else {
          router.push("/login");
        }
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Loading...</p>;
    return authorized ? <Component {...props} /> : null;
  };
};

export default withRoleProtection;
