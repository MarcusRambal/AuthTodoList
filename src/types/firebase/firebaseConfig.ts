import Envs from "../variables/envs.types";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: Envs.FIREBASE_API_KEY,
    authDomain: Envs.FIREBASE_DOMAIN,
    projectId: Envs.FIREBASE_PROJECT_ID,
    storageBucket: Envs.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Envs.FIREBASE_MESSAGING_SENDER_ID,
    appId: Envs.FIREBASE_APP_ID,
    measurementId: Envs.FIREBASE_MEASUREMENT_ID,
};

// Verificación temprana para detectar builds sin variables VITE_
if (!firebaseConfig.projectId) {
    // Mensaje claro para debugging en consola del cliente/CI
    // No ocultamos la comprobación: esto ayuda a localizar por qué falta projectId
    // Lanzamos un error descriptivo para que la pila de la app muestre la causa.
    // Nota: quita o suaviza esta comprobación en producción una vez resuelto.
    // eslint-disable-next-line no-console
    console.error('Firebase configuration missing required value: projectId', firebaseConfig);
    throw new Error('Missing Firebase configuration value: "projectId". Ensure VITE_FIREBASE_PROJECT_ID is set at build time.');
}

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

