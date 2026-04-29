import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyDi1ND91tW2RP23926SoY6j9GX9vKGCSOQ",
  authDomain: "nova-club-vinayak.firebaseapp.com",
  projectId: "nova-club-vinayak"
});

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

  const dash = document.getElementById("dashboardLink");
  const login = document.getElementById("loginBtn");
  const join = document.getElementById("joinBtn");
  const logout = document.getElementById("logoutBtn");

  if (user) {
    if (dash) dash.style.display = "block";
    if (logout) logout.style.display = "block";

    if (login) login.style.display = "none";
    if (join) join.style.display = "none";
  } else {
    if (dash) dash.style.display = "none";
    if (logout) logout.style.display = "none";

    if (login) login.style.display = "block";
    if (join) join.style.display = "block";
  }
});

/* 🔥 LOGOUT */
document.addEventListener("click", async (e) => {
  if (e.target.innerText === "Logout") {
    await signOut(auth);
    window.location.href = "index.html";
  }
});