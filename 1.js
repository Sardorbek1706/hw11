function similarPairs(words) {
    let map = {};
    for (let word of words) {
        let key = Array.from(new Set(word)).sort().join('');
        if (map[key] === undefined) map[key] = 0;
        map[key]++;
    }
    let res = 0;
    for (let key in map) {
        let n = map[key];
        res += n * (n - 1) / 2;
    }
    return res;
}

