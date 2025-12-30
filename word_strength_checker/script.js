    const password = document.getElementById("password");
    const strengthText = document.getElementById("strength");

    password.addEventListener("input", function () {
        const value = password.value;
        let strength = "Weak";

        if (value.length > 8 && /[A-Z]/.test(value) && /[0-9]/.test(value) && /[\W]/.test(value)) {
            strength = "Strong";
        } else if (value.length >= 6) {
            strength = "Medium";
        }

        strengthText.textContent = `Strength:${strength}`;
    });