const API = "http://localhost:3000/api/auth";

async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  document.getElementById("regResult").textContent = JSON.stringify(data, null, 2);
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  document.getElementById("loginResult").textContent = JSON.stringify(data, null, 2);
}
