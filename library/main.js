


/*
fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": mjApi
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://priceline-com.p.rapidapi.com/cars/location/search?q=Seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "priceline-com.p.rapidapi.com",
		"x-rapidapi-key": mjApi
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Houston&countryName=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
		"x-rapidapi-key": mjApi
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/
/*
function start() {
  // Variables
  let listStor = JSON.parse(localStorage.getItem("search")) || [];
  let inputEl = document.getElementsByClassName("inputBox");
  let search = $(".btn");
  const hotelListEl = document.getElementById("hotel-container");
  console.log(listStor);

  //  let resp= ["SFO", "160",
  //"LAX","1 hr 25 min","01/11/2022","2:25 PM","3:50 PM","Economy","Alaska","01/15/2022"];

  // Looping into the page
  console.log(localStorage.length + "LENGHT");
  for (let i = 0; i < localStorage.length; i++) {
    let item = localStorage.getItem(i);
    console.log(item + " item");
    let items = $(".list-group").addClass("list-group");
    console.log(items + "Items");
  }
  search.click(function () {
    let cityName = $(".inputBox").val();
    let guessNumb = $(".inputBox").val();
    let arrival = $(".inputBox").val();
    let leaving = $(".inputBox").val();
    console.log(
      cityName +
        "CITYNAME" +
        guessNumb +
        "GUESSNUMBER" +
        arrival +
        "ARRIVAL" +
        leaving +
        "LEAVING"
    );
    dealsRoom(cityName, guessNumb, arrival, leaving);
  });

  // let origin="SFO";
  // let dest ="LAX";
  // let date="2022-01-10"
  // let duraction="1 hr 25 min";
  // let price="160";

  function dealsRoom() {
    fetch(
      "https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&order_by=popularity&filter_by_currency=AED&checkout_date="+leaving+"&checkin_date="+arrival+"&units=metric&adults_number="+guessNumb+"&dest_id=-553173&dest_type=city&locale=en-gb&children_number=2&children_ages=5%2C0&page_number=0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "booking-com.p.rapidapi.com",
          "x-rapidapi-key": mjApi,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("before res");

    hotelListEl.innerHTML = "";
    console.log("hotelListEl");
    console.log(listStor.length);
    for (let i = 0; i < listStor.length; i++) {
      const histValue = document.createElement("inputBox");
      console.log("histValue");
      histValue.setAttribute("type", "text");
      console.log("type");
      histValue.setAttribute("readonly", true);
      histValue.setAttribute("class", "width: 250px; d-block bg-white");
      console.log("histValue1");
      histValue.setAttribute("value", listStor[i]);
      console.log("historylist");

      dealsRoom(histValue.value);
      hotelListEl.append(histValue);
      console.log(hotelListEl + " hotelListEl");
    }
    if (res != "") {
      console.log(res);
      // Local storage
      const room = inputEl.value;

      // listStor.push(origin);
      // listStor.push(dest);
      // listStor.push(date);
      // listStor.push(duraction);
      // listStor.push(price);
      listStor.push(room);
      localStorage.setItem("search", JSON.stringify(listStor));

      // Start append
      var curr = $(".list-group").append("<div>").addClass("btn");
      curr.empty();
      var curRoom = curr.append("<p>");

      curr.append(curRoom);

      // Adjust Date
      var time = new Date(res.dt * 1000);
      curRoom.append(resp.name + " " + time.toLocaleDateString("en-US"));
      // Add Origin
      var curHotel = curRoom.append("<p>");
      curRoom.append(curHotel);
      curHotel.append("<p>" + "City: " + res.city + "</p>");
      // Add Destination
      curHotel.append("<p>" + "Room: " + res.room_number + "</p>");
      // Add price
      curHotel.append("<p>" + "In: " + res.checkin_date + "</p>");
      // Add price
      curHotel.append("<p>" + "Out: " + res.checkout_date + "</p>");
    }
  }
}

start();
*/

