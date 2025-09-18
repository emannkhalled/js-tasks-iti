function find(...numbers) {
 
    let mx = Math.max(...numbers);
    

    let mn = Math.min(...numbers);

    return [mn,mx];
}

let res = find(5,6,4,8,16);

console.log(" The Minimum Value: " + res[0]);
console.log(" The Maximum Value: " + res[1]);
