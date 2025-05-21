
// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl_hztwVOm15wBtiD_NShJEwNPS13Ytfo",
  authDomain: "celerika-53a28.firebaseapp.com",
  projectId: "celerika-53a28",
  storageBucket: "celerika-53a28.firebasestorage.app",
  messagingSenderId: "646996328282",
  appId: "1:646996328282:web:119d27096a5858e7307d63",
  measurementId: "G-2XP9PQMEKZ"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);