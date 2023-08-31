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
