export function maxLengthInput(input) {
  if (input.value.length > 256) {
    // console.log("trop long");
    input.setCustomValidity("Trop de caractères ! Max.256");
  } else {
    input.setCustomValidity("");
  }
}
