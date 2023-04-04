let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let EUR = 4.67;
let USD = 4.29;
let GBP = 5.31;
let NOK = 0.41;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "GBP":
            result = amount * GBP;
            break;
        case "NOK":
            result = amount * NOK;
            break;
    }
    resultElement.innerText = `${amount} ${currency} = ${result.toFixed(2)} PLN`;
});

