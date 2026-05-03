const user = localStorage.getItem("elyraUser");

const loginBtn = document.getElementById("loginBtn");
const joinBtn = document.getElementById("joinBtn");
const dashboardLink = document.getElementById("dashboardLink");
const logoutBtn = document.getElementById("logoutBtn");

if (user) {
  loginBtn && (loginBtn.style.display = "none");
  joinBtn && (joinBtn.style.display = "none");
  dashboardLink && (dashboardLink.style.display = "block");
  logoutBtn && (logoutBtn.style.display = "block");
} else {
  loginBtn && (loginBtn.style.display = "block");
  joinBtn && (joinBtn.style.display = "block");
  dashboardLink && (dashboardLink.style.display = "none");
  logoutBtn && (logoutBtn.style.display = "none");
}

logoutBtn && logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("elyraUser");
  location.reload();
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const app = initializeApp({
  apiKey:"AIzaSyDi1ND91tW2RP23926SoY6j9GX9vKGCSOQ",
  authDomain:"nova-club-vinayak.firebaseapp.com",
  projectId:"nova-club-vinayak"
});

const auth = getAuth(app);

// 🔥 GLOBAL AUTH SYNC
onAuthStateChanged(auth, (user) => {

  const loginBtn = document.getElementById("loginBtn");
  const joinBtn = document.getElementById("joinBtn");
  const dashboardLink = document.getElementById("dashboardLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if(user){
    if(loginBtn) loginBtn.style.display="none";
    if(joinBtn) joinBtn.style.display="none";
    if(dashboardLink) dashboardLink.style.display="block";
    if(logoutBtn) logoutBtn.style.display="block";
  } else {
    if(loginBtn) loginBtn.style.display="block";
    if(joinBtn) joinBtn.style.display="block";
    if(dashboardLink) dashboardLink.style.display="none";
    if(logoutBtn) logoutBtn.style.display="none";
  }

});

// 🔥 LOGOUT (GLOBAL)
const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
  logoutBtn.onclick = async ()=>{
    await signOut(auth);
    location.href = "index.html"; // 🔥 force refresh all pages
  };
}