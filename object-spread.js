const countryPop = {
    Germany :37,
    Brazil:98,
    Eygpy: 45
}

console.log(countryPop)

let countryPopExtend = {
    ...countryPop,
    Indo:85,
    Japan:34
}
// give you Object properties (Key & Value)
console.log(countryPopExtend)

console.log(Object.entries(countryPopExtend))

let newCountryPopExtended = {}
// long and old
for( let key of Object.entries(countryPopExtend)){
    let country = key[0]
    let pop = key[1]
    // populating newCountry object above 
    newCountryPopExtended[country] = pop
}


// adding more object & keys 
newCountryPopExtended["Guyana"] = 299
newCountryPopExtended["Jamaica"] = 199

console.log(newCountryPopExtended)
// new and short
let copyOfCountryPopExtended = {
    ...newCountryPopExtended,
}

console.log(copyOfCountryPopExtended)