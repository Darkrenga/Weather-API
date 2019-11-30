
// let x = document.getElementById('Output');

// function geoLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }   else {
//         x.innerHTML = "Geolocation isn't supported in the browser";
//     }
// }

// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     x.innerHTML = "Lat " + lat + " | Long " + long
// }


// // const key = 'e26df03d468b4b82a1630c5eb9b468a5';
// // const city = 'Aalborg';
// // const lang = 'da';
// // const api = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}&lang=${lang}`;

// function fetchApi() {
// fetch(api)
// .then(res => res.json())
// then(data => {
//     console.log(data);
// })
// }

// fetchApi();



//======================================================
//Geolocation in JS
// var lat;
// var long;


// var showLocation = document.getElementById("Output");

// document.body.onload = function(){
//     userLocation ();
// };



// function userLocation () {
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPoints);
//   } else {
//     showLocation.innerHTML = "Your browser does not support this feature.";
//   }
// }

// function showPoints (position) {
//   //showLocation.innerHTML = "Latitude: " + position.coords.latitude +
//   //"<br> Longitude: " + position.coords.longitude;
//   var lat = position.coords.latitude;
//   console.log(lat);
// }
// console.log(lat);

//=============================================================================================================

// Function based fetch
// function apifetch() {
//     let city = "Aalborg";
//     const api = `https://api.weatherbit.io/v2.0/current?city=${city}&key=49f14301b81e4923afa0af7847419676`;
//     fetch(api)
// .then(res => res.json())
// .then(data => console.log(data))
// }

// let hej = "hej";
// if(navigator.geolocation) {
//     function Hello() {
//         alert('hej');
//         document.getElementById('Output').innerHTML = "HEJ";
//     }
// }else {
//     document.getElementById('Output')
// }
// Hello();

let Output = document.getElementById('Output');

function InsertHTML() {
    Output.innerHTML = "hej";
}

// let hej = "hej";
// if (hej == "hej") {
//     alert('hej = hej')
//     InsertHTML();
// } else {
//     Output();
//     alert('Hej');
// }

/*
document.body.onload = function() {
    userLocation();
}

function userLocation () {
   if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPoints);
    } else {
    showLocation.innerHTML = "Your browser does not support this feature.";
    }
}

function showPoints (position) {
    Output.innerHTML = "Latitude: " + position.coords.latitude +
    "<br> Longitude: " + position.coords.longitude;
    var lat = position.coords.latitude;
    console.log(lat);
}
console.log(lat);*/

/*
var lat;
var lon;
document.body.onload = function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPoints);
        function showPoints(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat);
        }
    } else {
        Output.innerHTML = "Desværre";
    }
}*/

/*===================================      I start creating my dom      ========================================*/
//Adding stylesheet to the head
link = document.createElement('link');//Saying what tag its going to be
link.href='css/new.css';//Adding the href
link.rel="Stylesheet";//adding the relation
document.getElementsByTagName('head')[0].appendChild(link);//appending it


//Connecting to my output
const div = document.getElementById('Output');

//Creating my form and setting attributes
const form = document.createElement('form');
form.setAttribute('id', 'form');
form.setAttribute('onsubmit', 'return false;')

//Creating my search and adding attributes to it
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'userInput');

//Creating the send and adding its attributes
const input2 = document.createElement('input');
input2.setAttribute('type', 'submit');
input2.setAttribute('onclick', 'cityName()');

const information = document.createElement('div');
information.setAttribute('id', 'information');

//Creating the output of the city name and adding attributes to it
const cityNameOutput = document.createElement('div');
cityNameOutput.setAttribute('id', 'CityName')

//Create Temp for the city
tempOutput = document.createElement('div');
tempOutput.setAttribute('id', 'temp');

//Create feels like
const appTempOutput = document.createElement('div');
appTempOutput.setAttribute('id', 'appTemp')

//Weather description
const weatherDescriptionOutput = document.createElement('div');
weatherDescriptionOutput.setAttribute('id', 'weatherDescription')


//Weather Animaiton
const weatherAnimationOutput = document.createElement('div');
weatherAnimationOutput.setAttribute('id', 'weatherAnimation')



//Building my Dom
form.appendChild(input); //This one along side
form.appendChild(input2);//This
div.appendChild(form);// And this all go together to create my form
div.appendChild(information);
information.appendChild(cityNameOutput);
information.appendChild(tempOutput);
information.appendChild(appTempOutput);
information.appendChild(weatherDescriptionOutput);
information.appendChild(weatherAnimationOutput);





function fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentLocation);
    } else { console.log(`Couldn't get position`) }
}

var lat;
function currentLocation(position) {
    lat = position.coords.latitude; 
    lon = position.coords.longitude;
    Logging();
}
function Logging() {
    console.log(lat);
    console.log(lon);
    fetch(`https://api.weatherbit.io/v2.0/current?key=e26df03d468b4b82a1630c5eb9b468a5&lang=da&lat=${lat}&lon=${lon}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
	let weather = data.data[0]
	
    let temp = weather.temp
    document.getElementById('temp').innerHTML = temp;
	
	let appTemp = weather.app_temp //Føltes som
	document.getElementById('appTemp').innerHTML = appTemp;
	
    let city_name = weather.city_name
    document.getElementById('CityName').innerHTML = city_name;

	let forecast = weather.weather.description
    document.getElementById('weatherDescription').innerHTML = forecast;
    


	//make these into image paths. and replace these in the svg file
	let weatherAnimationDivStart = `<div class='weatherAnimation'>`;
	let weatherAnimationDivEnd = `</div>`
	let Thunder = `<img src="SVG/Thunder.svg" />`; 
	let Rain = `<img src="SVG/Raining.svg"/>`;
	let Snow = `<img src="SVG/Snow.svg" />`;
	let Fog = `<img src="SVG/Fog.svg" />`;
	let Cloudy = `<img src="SVG/Cloudy.svg" />`;
    let Sunny = `
				<div class="DivRotate">
					<img src="SVG/Sunny.svg" />
				</div>`;
    
    let forecastNumb = weather.weather.code
    
    switch (forecastNumb) {
        case '200'||'201'||'202'||'230'||'231'||'232'||'233':
            console.log("It's thundering");
            document.getElementById('weatherAnimation').innerHTML = Thunder;
            break;
            
        case '300'||'301'||'302'||'500'||'501'||'502'||'511'||'520'||'521'||'522':
			console.log("It's raining");
            document.getElementById('weatherAnimation').innerHTML = Rain;
            break;
        
        case '600'||'601'||'602'||'610'||'611'||'612'||'621'||'622'||'623':
            console.log('This is snow')
            document.getElementById('weatherAnimation').innerHTML = Snow;
            break;
            
        case '700'||'711'||'721'||'731'||'741'||'751':
            console.log("It's foggy outside");
            document.getElementById('weatherAnimation').innerHTML = Fog;
			break;
        
        case '800':
			console.log('The sun is out');
            document.getElementById('weatherAnimation').innerHTML = Sunny;
            break;
            
        case '801'||'802'||'803'||'804':
			console.log("It's kinda cloudy outside ain't it");
			document.getElementById('weatherAnimation').innerHTML = Cloudy;
			break;

        default:
            break;
    }

    })
    
}
//Calling my function
fetchLocation();



function cityName() {
    let location = document.getElementById("userInput").value;
    //document.getElementById('Output').insertAdjacentHTML('beforeend', location + '</br>');
    fetch(`https://api.weatherbit.io/v2.0/current?key=e26df03d468b4b82a1630c5eb9b468a5&city=${location}&lang=da`)
    .then(res => res.json())
    .then(data => {
        //Logging all the data so I can view it in the console and doublecheck
        console.log(data)

        //I create the variable Path here so i can easier access get my information
        let path = data.data[0];

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let tempData = path.temp;
        document.getElementById('temp').innerHTML = tempData;

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let appTempData = path.app_temp;
        document.getElementById('appTemp').innerHTML = appTempData;

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let cityData = path.city_name;
        document.getElementById('CityName').innerHTML = cityData;

        //Weather description
        let weatherData = path.weather.description;
        document.getElementById('weatherDescription').innerHTML = weatherData;

        //Weather animation
        let weatherCode = path.weather.code;
        document.getElementById('weatherAnimation').innerHTML = weatherCode;
    })
} // create a catch that writes that you need to check for the correct name of the city or find a solution that takes something simulair


/*
let html = "<section>\n";
    html += "Hejsa\n";
    html += "</section>\n";
document.getElementById('kewl').innerHTML = html;// Hvis der er html I, laver den HTML'en tags'en om til HTML
document.getElementById('kewl').innerText = html; // Skyder teksten ind, giver ikke en fuck om der er html I
*/