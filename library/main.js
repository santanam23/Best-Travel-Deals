//import { MY_API_KEY } from './config.js';

// fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "hotels4.p.rapidapi.com",
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
fetch("https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&order_by=popularity&filter_by_currency=AED&checkout_date=2022-07-02&checkin_date=2022-07-01&units=metric&adults_number=2&dest_id=-553173&dest_type=city&locale=en-gb&children_number=2&children_ages=5%2C0&page_number=0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "booking-com.p.rapidapi.com",
		"x-rapidapi-key": "c0191d5e50msh3302e10f04da19bp1776bcjsne7f965d29469"
	}
})

.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
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


