import { initializeApp } from "firebase/app";
// Don't import analytics directly — we will conditionally do it

const firebaseConfig = {
  apiKey: "AIzaSyASTk3K2L1z823PXfytlAA32B6PjYoAJtk",
  authDomain: "soccer-sync-final.firebaseapp.com",
  projectId: "soccer-sync-final",
  storageBucket: "soccer-sync-final.firebasestorage.app",
  messagingSenderId: "845228030050",
  appId: "1:845228030050:web:f9fb7ee523616cf115393b",
  measurementId: "G-Z16F1BVLG1",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export only the app here
export { app };

// Optionally initialize analytics ONLY on the client
export const initAnalytics = () => {
  if (typeof window !== "undefined") {
    import("firebase/analytics").then(({ getAnalytics }) => {
      const analytics = getAnalytics(app);
      // Optionally do something with analytics here
    });
  }
};

