import { initializeApp } from "firebase/app";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyASTk3K2L1z823PXfyt1AA32B6PjYoAJtk",
  authDomain: "soccer-sync-final.firebaseapp.com",
  projectId: "soccer-sync-final",
  storageBucket: "soccer-sync-final.appspot.com",
  messagingSenderId: "845228803050",
  appId: "1:845228803050:web:f9fb7ee523616cf115393b",
  measurementId: "G-Z16F1BVLG1",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export { app };

// Conditionally initialize analytics (client only)
export const initAnalytics = () => {
  if (typeof window !== "undefined") {
    import("firebase/analytics").then((analyticsModule) => {
      const analytics = analyticsModule.getAnalytics(app);
      // Optionally do something with analytics here
    });
  }
};


