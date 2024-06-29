// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketSale) {
  if (0 <= ticketSale) {
    const totalEarning = 120 * ticketSale;
    const totalExpense = 500 + 8 * 50;
    const remaining = totalEarning - totalExpense;
    return remaining;
  } else {
    return "Invalid Number";
  }
}

// Problem-02: Good Name , Bad Name
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const letters = ["a", "e", "i", "o", "u", "y", "w"];
  const lowerCaseName = name.toLowerCase();
  const lastLetter = lowerCaseName[lowerCaseName.length - 1];
  let isGood = false;
  for (const letter of letters) {
    if (letter === lastLetter) {
      isGood = true;
    }
  }
  if (isGood) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

// Problem 03 : Virus in my Array
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  const newArray = [];
  for (const element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

// Problem 04 : Make A Great Password
function password(obj) {
  if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("birthYear") || !obj.hasOwnProperty("siteName")) {
    return "invalid";
  } else {
    if (obj.birthYear.toFixed().length !== 4 || Object.keys(obj).length !== 3) {
      return "invalid";
    }
  }
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;
  const modifiedSiteName = siteName[0].toUpperCase() + siteName.slice(1);
  return `${modifiedSiteName}#${name}@${birthYear}`;
}

// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let tax = 0;
  let totalPayment = 0;
  for (const element of arr) {
    if (element >= 3000) {
      tax += (element * 20) / 100;
      totalPayment += element;
    } else {
      totalPayment += element;
    }
  }
  const savings = totalPayment - (tax + livingCost);
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
