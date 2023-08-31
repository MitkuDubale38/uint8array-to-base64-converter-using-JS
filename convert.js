function encode() {
  // Get input
  var input = document.getElementById("input").value;

  // Encode to base64
  var base64 = bufferToBase64(input);

  //   let lines = output.innerText.split("\n");

  //   if (lines.length > 10) {
  //     output.classList.add("hidden");
  //   } else {
  //     output.innerText = encodedString;
  //   }

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
}
