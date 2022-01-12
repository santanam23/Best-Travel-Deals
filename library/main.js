
fetch("https://booking-com.p.rapidapi.com/v1/hotels/reviews?hotel_id=1676161&locale=en-us&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=en-us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "booking-com.p.rapidapi.com",
		"x-rapidapi-key": "04bd301f6cmsh1b338aaf14cd39cp1a4eabjsn9117173b8711"
	}
})
.then((response)=> response.json())
.then((data)=> console.log(data))
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
// .then(response => response.json())
// .then(data => console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });
// fetch("https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=1&order_by=popularity&filter_by_currency=AED&checkout_date=2022-07-02&checkin_date=2022-07-01&units=metric&adults_number=2&dest_id=-553173&dest_type=city&locale=en-gb&children_number=2&children_ages=5%2C0&page_number=0&include_adjacency=true&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "booking-com.p.rapidapi.com",
// 		"x-rapidapi-key": "c0191d5e50msh3302e10f04da19bp1776bcjsne7f965d29469"
// 	}
// })

// .then(response => response.json())
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

// fetch("https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Houston&countryName=USA", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
// 		"x-rapidapi-key": "c0191d5e50msh3302e10f04da19bp1776bcjsne7f965d29469"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// // // Variables 

// // function start() {
// //     let key = "ec2aa4379af0f26074308c2598651fa7";
// //     let listStor = JSON.parse(localStorage.getItem('')) || [];




// // // Looping into the page
// //     for (let i = 0; i < localStorage.length; i++) {

// //         let item = localStorage.getItem(i);
// //         let items = $(".list").addClass("list");
// //     }
// // // deals page function
// //     function dealsFlight() {

// //       //  get Api's info

// //       let apiTransp="https://api.goswift.ly";
// //       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
// //       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// // var options = {
// //   method: 'GET',
// //   url: apiTraAdv
// // };


// //                 // Local storage
// //                 localStorage.setItem('', JSON.stringify());
// //     }

// //      for (let i = 0; i < localStorage.length; i++) {

// //         let item = localStorage.getItem(i);
// //         let items = $(".list").addClass("list");
// //     }
// // // deals page function
// //     function dealsBus() {

// //       //  get Api's info

// //       let apiTransp="https://api.goswift.ly";
// //       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
// //       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// // var options = {
// //   method: 'GET',
// //   url: apiTraAdv
// // };


// //                 // Local storage
// //                 localStorage.setItem('', JSON.stringify());
// //     }

// //     }
// //      for (let i = 0; i < localStorage.length; i++) {

// //         let item = localStorage.getItem(i);
// //         let items = $(".list").addClass("list");
// //     }
// // // deals page function
// //     function dealsUbber() {

// //       //  get Api's info

// //       let apiTransp="https://api.goswift.ly";
// //       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
// //       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// // var options = {
// //   method: 'GET',
// //   url: apiTraAdv
// // };


// //                 // Local storage
// //                 localStorage.setItem('', JSON.stringify());
// //     }

// //     start();

