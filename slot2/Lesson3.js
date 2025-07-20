// Main calculation function
function calculateResult() {
  const inputValue = document.getElementById("inputN").value.trim();
  const n = parseInt(inputValue);
  const operation = document.getElementById("operation").value;
  const resultField = document.getElementById("result");

  // Validate input is a number within the required range
  if (isNaN(n) || n <= 1 || n >= 100) {
    resultField.value = "Nhập n trong khoảng 1 < n < 100";
    return;
  }

  // Perform the selected operation
  switch (operation) {
    case "sum":
      resultField.value = calculateSum(n);
      break;
    case "factorial":
      resultField.value = calculateFactorial(n);
      break;
    case "oddNumbers":
      resultField.value = getOddNumbers(n);
      break;
    case "evenNumbers":
      resultField.value = getEvenNumbers(n);
      break;
    case "primeNumbers":
      resultField.value = isPrime(n)
        ? n + " là số nguyên tố"
        : n + " không phải số nguyên tố";
      break;
    default:
      resultField.value = "";
  }
}

// Calculate sum of n numbers (1 to n)
function calculateSum(n) {
  return (n * (n + 1)) / 2;
}

// Calculate n!
function calculateFactorial(n) {
  if (n > 20) {
    return "Số quá lớn để tính giai thừa";
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Get odd numbers from 1 to n
function getOddNumbers(n) {
  const oddNumbers = [];
  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}

// Get even numbers from 2 to n
function getEvenNumbers(n) {
  const evenNumbers = [];
  for (let i = 2; i <= n; i += 2) {
    evenNumbers.push(i);
  }
  return evenNumbers;
}

// Check a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
