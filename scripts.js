/* 1.a */
for(i = 0; i < 10; i++) {
    console.log(`wartość: ${i}`)
}
/* 1.b */
for(i = 9; i > -1; i--) {
    console.log(`wartość: ${i}`)
}
/* 1.c */ 
for(i = 5; i < 16; i++) {
    console.log(`wartość ${i}`)
}
/* 1.d */
for(i = 0; i > -11; i--) {
    console.log(`wartość: ${i}`)
}
/* 1.e */
for(i = 0; i <= 20; i += 2) {
    console.log(`co dwa w gore: ${i}`)
}
/* 1.f */
for(i = 10; i > -11; i -= 4) {
    console.log(`co cztery w dol: ${i}`)
}
/* 1.g */
for(i = 1; i <101; i *= 2) {
    console.log(`mnozone przez 2: ${i}`)
}
/* 2.a */
for(i = 0; i < 21; i++) {
    if(i % 2 == 0) 
    console.log(`parzyste: ${i}`)
}
/* 2.b */
for(i = 0; i < 20; i++) {
    if(i % 2 > 0)
    console.log(`nieparzyste ${i}`)
}
/* 2.c */
for(i = 0; i < 11; i++) {
    if(i % 2 == 0) {
        console.log(`liczba parzysta: ${i}`)}
    else(console.log(`liczba nieparzysta: ${i}`))    
    
}
/* 2.d */
for(i = 1; i < 31; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`)}
    else if(i % 5 == 0) {
        console.log(`${i} Buzz`)}
    else if(i % 3 == 0) {
        console.log(`${i} Fizz`)}
    else{console.log(`${i}`)}
}
/* 2.e */
for(i = 100; i >= 0;i -= 5) {
    if(i % 10 == 0) {
        console.log(`${i} Podzielna przez 10`)
    }
    else if(i == 0) {
        console.log(`${i} !!! DZIELENIE PRZEZ 0 !!!`)  /* tutaj chcialem dac na wypadek dzielenia przez 0 ale nie dzirga */
    }
    else {
        console.log(`${i}`)
    }
   
}
/* 3.a */
function loop1(number = 1) {
    for(i = 0;i <= number;i++ )
    console.log(`${i}`)
}
loop1(15)
/* 3.b */
function loop2(number) {
    for(i = number;i < 16; i++){
        console.log(`${i}`)
    }
}
loop2(3)
/* 3.c */
function loop3(number) {
    for(i = 0; i < 16; i += number) {
        console.log(`${i}`)
    }
}
loop3(3)
/* 3.d */
function loop4(number1, number2) {
    for(i = number1; i < number2 + 1; i++ ) {
        console.log(`${i}`)
    }
}
loop4(3, 16)
/* 3.e */
function loop5(number1, number2, number3) {
    for(i = number1; i < number2 + 1; i += number3 ) {
        console.log(`${i}`)
    }
}
loop5(5, 100, 10)

/* 4.a */
const array1 = [123, 14, 120, 34, 52]
for(i = 0; i < array1.length; i++) {
    console.log(`${array1[i]}`)
}
/* 4.b */
const person = ['Marek', 'Jaro', 'Gerwazy', 'Olgierd', 'Przemo']
for(i = 0; i < person.length; i++) {
    console.log(`Cześć ${person[i]}`)
}
/* 4.c  c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl w stringu "Przed Wami stoi {kolor} {model}",*/
const auta = [
    {
        marka: 'BMW',
        model: 'M3',
        kolor: 'grafitowy'
    },
    {
        marka: 'Opel',
        model: 'Insignia',
        kolor: 'niebieski',
    },
    {
        marka: 'Audi',
        model: 'A5',
        kolor: 'zielony',
    },
    {
        marka: 'Mercedes',
        model: 'AMG GT',
        kolor: 'niebieski',
    },
    {
        marka: 'Audi',
        model: 'S3',
        kolor: 'grafitowy'
    },
]
for(i = 0; i < auta.length; i++) {
    console.log(`Przed Wami stoi ${auta[i].marka} ${auta[i].model} kolor: ${auta[i].kolor}`)
}
/* 4.d d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy*/
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i = 0; i < array2.length; i++) {
    if(array2[i] % 2 == 0) {
        console.log(`${array2[i]}`)
    }
}
/* 4.e e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami, */
const array3 = [1, 5, 'cos tam', true, false, 'nic', 'coś', 20, 15,]
for(i = 0; i < array3.length; i++) {
    if(typeof array3[i] === "string") {
        console.log(`${array3[i]}`)
    }
}
/* 4.f f) ** stwórz tablice kilku elementową o różnych typach i wrzuć wszystkie elementy które w tej tablicy są numberami do nowej tablicy, */
const array4 = [1, 5, 'cos tam2', true, false, 'nic2', 'coś2', 20, 15,]
const array5 = []
for(i = 0; i < array4.length; i++) {
    if(typeof array4[i] === "number") {
        array5.push(array4[i])
    }
}
console.log(array5)
/* 5.a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy, */
const array6 = [1, 5, 6, 12, 45]

function sumArray(array) {
    let suma = 0
    for(i = 0; i < array.length; i++){
    suma += array[i]}
console.log(suma)
}
sumArray(array6)
/* 5.b b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi, */
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function evenOdd(array) {
    const evenArray = []
    const OddArray = []
    for(i = 0; i < array.length; i++)
    if(array[i] % 2 === 0) {
    evenArray.push(array7[i])}
    else {
        OddArray.push(array7[i])
    }
    console.log(`parzyste: ${evenArray}`)
    console.log(`nieparzyste: ${OddArray}`)
    
}
evenOdd(array7)
/* 5.c c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y" niech wyświetli Jest!, a w inny przypadku Nie ma! */
function hasY(string) {
    if(string.includes('y') === true) {
        console.log(`Jest!`)}
    else {console.log(`Nie ma`)}
    console.log(`słowo: ${string}`)    
    }
 hasY('cycki')
/* 5.d  d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1ego, np.
countResult(4) // 4 * 3 * 2 * 1 = 24
// Przykładowy wynik
// 24*/
function timesNumber(number) {
    
    for(i = number - 1; i > 0; i--) {
        number *= i
    }
    let wynik = number + number * i
console.log(wynik)
}
timesNumber(4)
/* 5.e e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego parametru niech funkcja
dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta */

const array9 = [1, 2, 3, 4, 'string1', 'string2', 'string3']
function addArray(array) {
    let string = ''
    let number = 0
   
    for(i = 0; i < array.length; i++)
    if(typeof array[i] === "number") {
        number += array[i]
    }
    else if(typeof array[i] === "string") {
        string += array[i]
    }
   console.log(string)
   console.log(number)
}
addArray(array9)

/* f) przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence. Niech będzie
to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego, */
const array10 = [
    {
        name: 'Marek',
        lastname: 'Kowalski',
        hasCar: true,
        hasDrivingLicense: true,
    },
    {
        name: 'Kamil',
        lastname: 'Krzak',
        hasCar: false,
        hasDrivingLicense: true,
    },
    {
        name: 'Ewa',
        lastname: 'Sawińska',
        hasCar: true,
        hasDrivingLicense: false,
    },
    {
        name: 'Jared',
        lastname: 'Mielecki',
        hasCar: false,
        hasDrivingLicense: false,
    },
]
function driveMeHome(array) {

    for(i = 0; i < array.length; i++)
        if(array[i].hasCar === true && array[i].hasDrivingLicense === true) {
            console.log(`${array[i].name} ${array[i].lastname} ma prawko i auto, nie pobrudź tapicerki`)
        }
        else if(array[i].hasCar === true && array[i].hasDrivingLicense === false) {
            console.log(`${array[i].name} ${array[i].lastname} nie ma prawka, ale za to ma auto, skombinuj kierowce`)
        }
        else if(array[i].hasCar === false && array[i].hasDrivingLicense === true) {
            console.log(`${array[i].name} ${array[i].lastname} ma prawko, ale nie ma auta, skombinuj gablote`)
        }
        else{
            console.log(`${array[i].name} ${array[i].lastname} nie ma prawka, ani auta, dzwoń po taxe`)
        }
}
driveMeHome(array10)

/* g) przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeiterować tablice sprawdzając czy już taki element w niej jest
jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat, */
const array11 = ['Grzegorz', 'Kamil', 'Gabi', 'Agata', 'Ola', 'Ania']
function checkNpush (array, element) {
    /* for(i = 0; i < array.length; i++), podczas iterowania występuje błąd że pushuje mi element tyle razy ile elementów znajduje się w tablicy, funkcja działa, tylko bez pętli :) */
        if(array.includes(element) === false) {
        array.push(element)
        } else if (array.includes(element) === true) {
            console.log(`Taki element juz istnieje!`)
        }
            
}
checkNpush(array11, 'Grzegorz')
console.log(array11)

/* Ogólnie pomimo potencjalnych błędów jestem bardzo zadowolony z tej pracy domowej XD, coraz bardziej juz zaczynam kumać */