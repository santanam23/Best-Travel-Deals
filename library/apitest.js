import { mjApi } from "./config.js";
//import { MY_API_KEY } from './config.js';
fetch("https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&order_by=popularity&filter_by_currency=USD&checkout_date=2022-07-02&checkin_date=2022-07-01&units=metric&adults_number=2&dest_id=-553173&dest_type=city&locale=en-us&children_number=2&children_ages=5%2C0&page_number=0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "booking-com.p.rapidapi.com",
		"x-rapidapi-key": "75fdea64c3msh809717eb693e58ap1d7d95jsn5d21a51f7ee3"
	}
})

.then((response)=> response.json()) 
.then((data)=> console.log(data))

.catch(err => {
	console.error(err);
});




