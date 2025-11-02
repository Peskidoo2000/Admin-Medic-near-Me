import CryptoJS from "crypto-js";
import {redirect} from "next/navigation";
export function setToken(
    token:string,
    expiryInMinutes:number = 1439
):void{
 if(!process.env.NEXT_PUBLIC_ENCRYPTO_HASH){
    console.error("ENCRYPTO_HASH is not defined in environment variables.");
    return;
 }
try{
    const encrytptedToken = CryptoJS.AES.encrypt(
        token,
        process.env.NEXT_PUBLIC_ENCRYPTO_HASH
    ).toString();
    localStorage.setItem("authToken", encrytptedToken);
}
catch(error){
    console.error("Error encrypting and setting token:", error);
}
const expiryTIme = Date.now() + expiryInMinutes * 60 * 1000;
localStorage.setItem("tokenExpiry", expiryTIme.toString());
}

export function removeToken():void{
    const expiryTIme = localStorage.getItem("tokenExpiry");
    if(expiryTIme){
        localStorage.removeItem("tokenExpiry");
    }
    localStorage.removeItem("authToken");
}

export function getToken(): string | null {
  if (typeof window !== "undefined") {
    const encryptedToken = localStorage.getItem("authToken");
    if (!encryptedToken) {
      return null;
    }

    let token: string | null = null; // ✅ declare here

    try {
      const bytes = CryptoJS.AES.decrypt(
        encryptedToken,
        process.env.NEXT_PUBLIC_ENCRYPTO_HASH!
      );
      token = bytes.toString(CryptoJS.enc.Utf8);

      if (!token) {
        console.warn("Decrypting Failed");
        localStorage.removeItem("authToken");
        redirect("/auth/login");
        return null;
      }
    } catch (error) {
      console.error("Error Getting Token:", error);
      return null;
    }

    return token; 
  }

  return null;
}
