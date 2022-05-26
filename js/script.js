"use strict"

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 5; size++) {
        if (size == 3) {
            break firstFor;
        }
        console.log(size);
    }
}