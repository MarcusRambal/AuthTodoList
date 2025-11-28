import Envs from "../variables/envs.types";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    appKey: Envs.FIREBASE_API_KEY,
    authDomain: Envs.FIREBASE_DOMAIN,
    projectId: Envs.FIREBASE_PROJECT_ID,
    storageBucket: Envs.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Envs.FIREBASE_MESSAGING_SENDER_ID,
    appId: Envs.FIREBASE_APP_ID,
    measurementId: Envs.FIREBASE_MEASUREMENT_ID,
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

