var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
var details_europe = res.filter((ele)=>ele.region == "Europe");
console.log(details_europe);
var details_asia = res.filter((ele)=>ele.region == "Asia");
console.log(details_asia);
var details_data = details_asia.map((ele)=>ele.name.common);
console.log(details_data);
var details_asia= res.filter((ele)=>ele.region == "Asia");
console.log(details_asia);
var countryData = JSON.parse(this.response);
  const populationLessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with population less than 2 lakhs:",
    populationLessThan2Lakh
  );
  var countryData = JSON.parse(this.response);
  countryData.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
    var countryData = JSON.parse(this.response);
  const totalPopulation = countryData.reduce(
    (accumulator, country) => accumulator + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);
  var res = JSON.parse(req.response);
  var currency = res.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code === "USD") {
        return element;
      }
    }
  });
  console.log(currency);
  });
}