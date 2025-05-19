import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

try {
    const docRef = await addDoc(collection(db, "users"), {
        store_name: "Tokyo",
        store_address: "Tokyo, Japan",
        store_phone: "+81 3-1234-5678",
        store_email: ""
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}