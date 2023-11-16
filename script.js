document.getElementById("age-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const ageInput = document.getElementById("age");
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    alert("Insira uma idade válida.");
    return;
  }

  let ageRange;

  if (age >= 0 && age <= 2) {
    ageRange = "Bebé";
  } else if (age > 2 && age < 12) {
    ageRange = "Criança";
  } else if (age >= 12 && age <= 16) {
    ageRange = "Adolescente";
  } else if (age > 16 && age < 18) {
    ageRange = "Jovem Adulto";
  } else if (age >= 18 && age < 50) {
    ageRange = "Adulto";
  } else if (age >= 50 && age <= 65) {
    ageRange = "Adulto de Meia Idade";
  } else if (age > 65 && age < 100) {
    ageRange = "Idoso";
  } else if (age >= 100 && age < 130) {
    ageRange = "Lendário";
  } else if (age >= 130) {
    ageRange = "Imortal";
  }

  const ageRangeElement = document.getElementById("age-range");
  const ageImageElement = document.getElementById("age-image");

  ageRangeElement.textContent = ageRange;
  ageImageElement.src = "imagens/" + ageRange.toLowerCase() + ".jpg";
});
