function numInStr(arr) {
    return arr.filter(str => /\d/.test(str));
}

function runNumInStr() {
    console.log(numInStr(["1a", "a", "2b", "b"]));
    console.log(numInStr(["abc", "abc10"]));
    console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
    console.log(numInStr(["this is a test", "test1"]));
}

runNumInStr();
