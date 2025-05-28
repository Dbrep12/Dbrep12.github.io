document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.getElementById("gender").value;
  const agree = document.getElementById("agree").checked;
  const error = document.getElementById("error");

  // Validasi
  if (nama.length < 3) {
    error.textContent = "Nama minimal 3 huruf.";
    return;
  }

  if (email === "" || !email.includes("@") || !email.includes("."))  {
    error.textContent = "Email tidak valid.";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Kata sandi minimal 6 karakter.";
    return;
  }

  if (gender === "") {
    error.textContent = "Silakan pilih jenis kelamin.";
    return;
  }

  if (!agree) {
    error.textContent = "Anda harus menyetujui syarat dan ketentuan.";
    return;
  }

  error.style.color = "green";
  error.textContent = "Pendaftaran berhasil!";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1300);
});
