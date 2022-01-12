
function start() {
  // Variables
  let listStor = JSON.parse(localStorage.getItem("search")) || [];
  let inputEl = document.getElementsByClassName("inputBox");
  let search = $(".btn");
  const hotelListEl = document.getElementsByClassName("list-group");
  //console.log(listStor);


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
   // dealsRoom(cityName, guessNumb, arrival, leaving);

  });

  let cityName="Boston";
  let guessNumb = "2";
  let arrival = "2022-01-13";
  let leaving = "2022-01-15";
  let cityId="4190847";
/*
   function searchHistor() {
    hotelListEl.innerHTML = " ";
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

    console.log("after histValue");
  }

    searchHistor();

*/
  function dealsRoom(cityName) {
    fetch("https://booking-com.p.rapidapi.com/v1/hotels/locations?name="+cityName+"&locale=en-us", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": "75fdea64c3msh809717eb693e58ap1d7d95jsn5d21a51f7ee3"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
      
    console.log("before res");
    

    fetch("https://booking-com.p.rapidapi.com/v1/hotels/room-list?locale=en-us&checkin_date="+arrival+"&hotel_id=4190847&adults_number_by_rooms="+guessNumb+"&checkout_date="+leaving+"&currency=USD&units=imperial", {
	   "method": "GET",
	   "headers": {
		   "x-rapidapi-host": "booking-com.p.rapidapi.com",
		   "x-rapidapi-key": "75fdea64c3msh809717eb693e58ap1d7d95jsn5d21a51f7ee3"
	}
})
.then((res) => res.json())
.then((res) => {console.log(res);
})
.catch((err) => {
  console.error(err);
});

console.log("before res");


    if (guessNumb != "" && arrival != "" && leaving !="") {
      console.log(guessNumb,arrival,leaving);
      // Local storage
      const room = inputEl.value;
      listStor.push(room);
      localStorage.setItem("search", JSON.stringify(listStor));

      // Start append
      var curr = $(".list-group").append("<div>").addClass("text");
      curr.empty();
      var curRoom = curr.append("<p>");

      curr.append(curRoom);

      // Adjust Date
      var time = new Date(res.dt * 1000);
      curRoom.append(res.name + " " + time.toLocaleDateString("en-US"));
      // Add hotel
      var curHotel = curRoom.append("<p>");
      curRoom.append(curHotel);
      curHotel.append("<p>" + "City: " + res.main.city + "</p>");
      // Add room numb
      curHotel.append("<p>" + "Room: " + res.main.adults_number_by_rooms + "</p>");
      // Add arrival date
      curHotel.append("<p>" + "In: " + res.main.checkin_date + "</p>");
      // Add leaving date
      curHotel.append("<p>" + "Out: " + res.main.checkout_date + "</p>");
      
    }
    
    
  }
  
   dealsRoom(cityName);
}

start();


