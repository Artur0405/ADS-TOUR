// Получаем название тура из URL
const params = new URLSearchParams(window.location.search);
const tour = params.get("tour");

if (tour) {
  document.getElementById("selected-tour").textContent = tour;
  document.getElementById("tour-name").value = tour;
}

// Обработка формы через fetch
const form = document.querySelector("form");
const messageEl = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      messageEl.style.color = "green";
      messageEl.textContent = "✅ Application sent successfully!";
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = "❌ Sending error. Try again later.";
    }
  } catch (error) {
    messageEl.style.color = "red";
    messageEl.textContent = "⚠️ Network failure. Check your connection.";
  }
});
