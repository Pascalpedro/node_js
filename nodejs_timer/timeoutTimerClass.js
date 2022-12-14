// Node.js program to demonstrate the Timeout Class methods
 
// Setting Timeout by setTimeout Method
var Timeout = setTimeout(function alfa() {
    console.log("0.> Setting Timeout", 12);
});

// Printing Timeout.hasRef method
console.log("1 =>", Timeout.hasRef());
// returns true

// Printing Timeout.ref before unref
console.log("2 =>", Timeout.ref());
Timeout.unref()
Timeout.ref()
// Returns timer reference

// Printing Timeout.refresh before unref
console.log("3 =>", Timeout.refresh());
// Returns timer reference

// Printing Timeout.unref method
console.log("4 =>", Timeout.unref());
// Returns Timeout reference and sets hasRef to false
 
// Printing Timeout.hasRef before unref
console.log("5 =>", Timeout.hasRef());
// Returns false

// Clears setInterval Timeout
clearTimeout(Timeout);
// Prints after clearing Timeout

console.log("6 => Printing after clearing Timeout");
