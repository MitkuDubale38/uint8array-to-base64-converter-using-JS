function encode() {
  // Get input
  var input = document.getElementById("input").value;

  // Encode to base64
  var base64 = bufferToBase64(input);
  // Output result
  document.getElementById("output").innerText = base64;
}

function bufferToBase64(buf) {
  var binstr = Array.prototype.map
    .call(buf, function (ch) {
      return String.fromCharCode(ch);
    })
    .join("");

  return btoa(binstr);
}

// Clipboard function
function copyToClipboard() {
  // Select the output text
  var output = document.getElementById("output");

  // Copy text
  navigator.clipboard.writeText(output.innerText);
  $("#msg").text("Copied!");
  $("#toast").addClass("show");

  // Hide after 2 secs
  setTimeout(() => {
    $("#toast").removeClass("show");
    document.getElementById("toast").classList.add("hidden");
  }, 2000);
}
input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = `${input.scrollHeight}px`;
});
