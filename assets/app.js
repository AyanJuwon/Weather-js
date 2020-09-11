window.addEventListener("load", () => {
  let lat;
  let long;
  let location;
  // let inp_location = document.getElementById('input_location').value;
  // console.log(inp_location)
  let temperatureDescription = document.querySelector(".temperature-desc");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let timezone = document.querySelector(".location-timezone");
  let iconURL;
  // const api = 'api.openweathermap.org/data/2.5/weather?q=ibadan&appid=88be660411fbf31290f307a42b5a312c

  var btn = document.getElementById;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      location = "Ibadan";
      const test_api = "http://api.openweathermap.org/data/2.5/weather?q=";
      const lat_lon_test_api =
        "http://api.openweathermap.org/data/2.5/weather?";
      const unit_key = "&units=metric&appid=88be660411fbf31290f307a42b5a312c";

      const api = test_api+location+unit_key;

     
    //   const api =
    //     "" + lat_lon_test_api + "lat=" + lat + "&" + "lon=" + long + unit_key;
      console.log(api);

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.main.temp);
          console.log(data.name);
          console.log(data.weather[0].icon);

          var iconID = data.weather[0].icon;

          let iconURL =
            "http://openweathermap.org/img/wn/" + iconID + "@2x.png";

          $(".weather-icon").html("<img src='" + iconURL + "'>");

          timezone.textContent = data.name;

          temperatureDegree.textContent = data.main.temp;
          temperatureDescription.textContent = data.weather[0].description;
        });
    });
  }
});
