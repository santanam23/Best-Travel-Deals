//import { MY_API_KEY } from './config.js';

fetch("https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SFO&arrival_airport_code=LAX&flight_class=Economy", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-flights-search.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {

  console.log("testingGoogle");
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "hotels4.p.rapidapi.com",
// 		"x-rapidapi-key": MY_API_KEY
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// fetch("https://priceline-com.p.rapidapi.com/cars/location/search?q=Seattle", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "priceline-com.p.rapidapi.com",
// 		"x-rapidapi-key": MY_API_KEY
// 	}
// })
// .then(response => response.json())
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// // Variables 

// function start() {
//     let key = "ec2aa4379af0f26074308c2598651fa7";
//     let listStor = JSON.parse(localStorage.getItem('')) || [];




// // Looping into the page
//     for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsFlight() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//      for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsBus() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//     }
//      for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsUbber() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//     start();
