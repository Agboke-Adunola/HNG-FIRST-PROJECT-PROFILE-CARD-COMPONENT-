const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();

    if (value === "") {
      setError(input, `${input.name.replace("-", " ")} is required`);
      isValid = false;
    } else if (input.type === "email" && !isValidEmail(value)) {
      setError(input, "Please enter a valid email");
      isValid = false;
    } else {
      setSuccess(input);
    }
  });

  if (isValid) {
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      form.reset();
      // optionally, remove success classes:
      inputs.forEach((input) => {
        const formControl = input.parentElement;
        formControl.classList.remove("success");
      });
    });
  }
});

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
