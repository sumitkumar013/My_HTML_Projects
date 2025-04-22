function getByteLength() {
    var str = document.getElementById("inputString").value;

    // Convert to UTF-8 bytes using TextEncoder
    var byteLength = new TextEncoder().encode(str).length;

    document.getElementById("byteLengthResult").innerText =
      "Byte length: " + byteLength;}