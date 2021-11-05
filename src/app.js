//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )     
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let prime = true
        if (numbers[i] < 2) {
            console.log("En küçük asal sayı 2 dir")
        }
        else {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    prime = false
                }
            }
            if (prime) {
                console.log(numbers[i] + " Asal")
            }
            else {
                console.log(numbers[i] + " Asal Değil")
            }
        }
    }
}

findPrime(2, 5, 8, 21, 13)
findPrime(3, 5)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
function isFriendlyNumber(number1, number2) {
    let totalFactorNumber1 = 0
    let totalFactorNumber2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            totalFactorNumber1 = totalFactorNumber1 + i
        }
    }
    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            totalFactorNumber2 = totalFactorNumber2 + j
        }
    }
    if (totalFactorNumber1 == number2 && totalFactorNumber2 == number1) {
        console.log(number1 + " Ve " + number2 + " Arkadaş sayıdır")
    }
    else {
        console.log(number1 + " Ve " + number2 + " Arkadaş sayı değildir")
    }
}

isFriendlyNumber(2620, 2924)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumbers(limit = 1000) {
    let perfects = []
    for (let i = 2; i <= limit; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total = total + j
            }
        }
        if (total == i) {
            perfects.push(i)
        }
    }
    console.log(perfects)
}

perfectNumbers()


//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNumbers(limit = 1000) {
    let primes = []
    for (let i = 2; i <= limit; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    console.log(primes)
}

primeNumbers()