function convert() {
    const binary = document.getElementById("binary").value;
    if (binary == "") return  alert("plase enter binary number !!");
    binary.split('').map((char)=>{
        if(char !=='0' && char !=='1') return alert('plase enter valed binary');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById("dic-output").innerHTML = decimal;
    return true;
}