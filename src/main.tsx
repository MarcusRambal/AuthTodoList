import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./types/firebase/firebaseConfig.ts";


import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://4b50cb8207542ddad6a7fc2f4f318561@o4510444352045056.ingest.us.sentry.io/4510444361809920",
  sendDefaultPii: true,
});

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
