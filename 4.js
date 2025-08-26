function countAll(str) {
    let letters = 0;
    let numbers = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) letters++;
        else if (/[0-9]/.test(char)) numbers++;
    }
    return { "HARFLAR": letters, "RAQAMLAR": numbers };
}

function runCountAll() {
    console.log(countAll("Hello World"));
    console.log(countAll("H3ll0 Wor1d"));
    console.log(countAll("149990"));
}

runCountAll();
