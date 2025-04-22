function addStrings() {
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;

    var result = (str1 + str2).toUpperCase();

    document.getElementById("result").innerText = result;}