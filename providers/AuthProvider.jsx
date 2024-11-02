import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../utils/cookie";

function AuthProvider({ children }) {
  const router = useRouter();
  const token = getCookie("token");

  useEffect(() => {
    if (token && router.pathname === "/login") {
      router.push("/");
    }
    else if(!token && router.pathname !== "/login") {
      router.push("/login");
    } 
  }, [router, token]);


  return children;
}

export default AuthProvider;
