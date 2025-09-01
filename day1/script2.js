
 var size = prompt("Entr how many numbers :");
var sum = 0;
var count = 0;

if (isNaN(size) || size <= 0) {
    document.writeln("Invalid size");
} else {
    do {
        var n1 = prompt("Enter number " + (count + 1) + ":");


        
        if (isNaN(n1)) {
            document.writeln("Pls enter numeric value");
            continue;
        }

        n1 = Number(n1);

        if (n1 === 0) break;

        sum += n1;
        count++;

        
        if (sum > 100) break;

    } while (count < size);

    document.writeln("Total : " + sum);
}

