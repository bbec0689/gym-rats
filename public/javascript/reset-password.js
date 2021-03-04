async function resetPasswordFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const newPassword = document.querySelector("#reset-password").value.trim();

  if (email && password && newPassword) {
    const response = await fetch("/api/users/resetPassword", {
      method: "put",
      body: JSON.stringify({
        email,
        password,
        newPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".resetPassword-form")
  .addEventListener("submit", resetPasswordFormHandler);
