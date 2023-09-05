const INPUT_STRING = "Hello world!!!!!";

function roundNumber(num: number): number {
  return Number(num.toFixed(2));
}

function sumTwoNumbers(a: number, b: number): number {
  const result = a + b;
  const roundedResult = roundNumber(result);

  return roundedResult;
}

// 1. funkcję countCharacters liczącą ilość znaków w stringu
function countCharacters(string: string): number {
  return string.length;
}

// 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
function isEven(number: number): boolean {
  return number % 2 === 0;
}

// 3. funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta
function getParityMessage(isEven: boolean): string {
  //   if (isEven) {
  //     return 'This number is even';
  //   }

  //   return 'This number is odd';

  return isEven ? "This number is even" : "This number is odd";
}

// 4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)
function processString(str: string): string {
  const stringLength = countCharacters(str);
  const isEvenLength = isEven(stringLength);
  const isEvenMessage = getParityMessage(isEvenLength);

  return `${str} - characters: ${stringLength} - ${isEvenMessage}`;
}

function Exercise1() {
  return (
    <div className="card">
      <h2>Exercise 1</h2>
      <p>Sum two numbers - {sumTwoNumbers(2.9999, 4.2)}</p>
      <p>Round number - {roundNumber(9999.8877)}</p>
      <p>Count characters - {countCharacters("String to be counted")}</p>
      <p>Number is even - {isEven(2).toString()}</p>
      <p>Is 3 even number - {getParityMessage(isEven(3))}</p>
      <p>{processString(INPUT_STRING)}</p>
    </div>
  );
}

export default Exercise1;
