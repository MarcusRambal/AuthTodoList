import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './types/firebase/firebaseConfig.ts';

createRoot(document.getElementById('root')!).render(
  <App />
)
