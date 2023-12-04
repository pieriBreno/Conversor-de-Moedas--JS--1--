const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertCurrencies() {
    const inputCurrencyValue =
        document.querySelector(".input-currency").value

    const currencyValueToConvert
        = document.querySelector(".currency-value-to-convert") // valor em real

    const currencyValueConverted =
        document.querySelector(".currency-value") // outras moedas



    const dolarToday = 4.92
    const euroToday = 5.36
    const libraToday = 6.25
    const bitcoinToday = 194750.50



    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }




    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency() {
    const currencyName = document.getElementById("USD")
    const currencyIMG = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyIMG.src = "./Assets/USAFlag.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyIMG.src = "./Assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyIMG.src = "./Assets/Libra.png"
    }

    if(currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyIMG.src = "./Assets/Bitcoin.png"
    }

    convertCurrencies()


}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertCurrencies)