// Get variables
let temperatureDescription = document.querySelector(".temperature-desc");
let temperatureDegree = document.querySelector(".temperature-degree");
let timezone = document.querySelector(".location-timezone");
let city = document.querySelector(".location-city");
let lan, long;
let err_code;
// Function to get Weather data
function getWeather() {
  let location = document.getElementById("input_location").value;
  console.log(location);
  const test_api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const lat_lon_test_api = "https://api.openweathermap.org/data/2.5/weather?";
  const unit_key = "&units=metric&appid=88be660411fbf31290f307a42b5a312c";

  // Join api with input from input box

  const api = test_api + location + unit_key;

  // fetch and consume data from api in json format
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // try to catch errors
      err_code = data.cod;
      if (err_code == 404) {
        alert("Enter a valid location");
      } else {
        var iconID = data.weather[0].icon;
        timezone.textContent = "Timezone";
        city.textContent = location;

        lat = data.coord.lat;
        long = data.coord.lon;
        temperatureDegree.textContent = data.main.temp;
        temperatureDescription.textContent = data.weather[0].description;
        let iconURL = "https://openweathermap.org/img/wn/" + iconID + "@2x.png";

        $(".weather-icon").html("<img src='" + iconURL + "'>");
        const timezone_api =
          "https://api.timezonedb.com/v2.1/get-time-zone?key=8KHQC990S2AQ&format=json&by=position&lat=" +
          lat +
          "&lng=" +
          long +
          "";
        fetch(timezone_api)
          .then((response) => {
            return response.json();
          })
          .then((timezone_data) => {
            // var timezone =
            console.log(timezone_data);
            timezone.textContent = timezone_data.zoneName;
          });
      }

      console.log(lat, long);
    });

  // to get timezone of the current location

  // console.log(response);
  // .catch(err => {
  //     console.log(err);
  // });
}
