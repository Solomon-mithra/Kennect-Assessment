function isPrimeNumber(number)
{   
    let isPrime = true;
    if (number === 1) {
    console.log("1 is neither prime nor composite number.");
    }

    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return true;
    }
}

function nextPrime(N)
{
    if (N <= 0){
        console.log(`1 is the next prime number`);
        return 1;    
    }

    if (N <= 1){
        console.log(`2 is the next prime number`);
        return 2;    
    }
    let prime = N;
    let found = false;
    while (!found) {
        prime++;
 
        if (isPrimeNumber(prime))
            found = true;
    }
    console.log(`${prime} is the next prime number`);
    return prime;
}


const prompt=require("prompt-sync")({sigint:true}); 

// take input from the user
const number = (prompt("Enter a positive number: "));

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    if (isPrimeNumber(number)) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

// the next prime number
var nxtNumber = nextPrime(number);

// Difference between number and next prime number
var diff = nxtNumber - parseInt(number); 

console.log("The difference between number and next prime number")
console.log(`${nxtNumber} - ${number} = ${diff}`)
