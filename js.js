// const city = 'Aalborg';
// const api = `https://api.weatherbit.io/v2.0/current?city=${city}&key=49f14301b81e4923afa0af7847419676`;


// fetch(api)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

// let weather = data.data

// let temp = data.data.temp
// document.getElementById('temp').innerHTML = temp

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

	const information =	document.getElementById('wrapper')
	
	let temp = weather.temp
	information.insertAdjacentHTML('beforeend', "<div>" + temp + '&deg C</div>');
	
	let appTemp = weather.app_temp //Føltes som
	information.insertAdjacentHTML('beforeend', '<div>' + appTemp + '</div>');
	
	let city_name = weather.city_name
	information.insertAdjacentHTML('beforeend', "<div>" + city_name + "</div>");

	let sunrise = weather.sunrise
	let sunset = weather.sunset
	information.insertAdjacentHTML('beforeend', "<div>" + "Solopgang: " + sunrise + "<br/>Solnedgang: " + sunset + "</div>");

	let forecast = weather.weather.description
	information.insertAdjacentHTML('beforeend', forecast + '<br/>')
	//Time the last recording was sent
	/*let ob_time = data.data[0].ob_time
	information.insertAdjacentHTML('beforeend', ob_time);*/


	//make these into image paths. and replace these in the svg file
	let weatherAnimationDivStart = `<div class='weatherAnimation'>`;
	let weatherAnimationDivEnd = `</div>`
	let Thunder = `<img src="svg/Thunder.svg" />`; 
	let Rain = `<img src="svg/Rainging.svg"/>`;
	let Snow = `<img src="svg/Snow.svg" />`;
	let Fog = `<img src="svg/Fog.svg" />`;
	let Sunny = `
				<div class="DivRotate">
					<img src="svg/sunny.svg" />
				</div>`;
	let Cloudy = `<img src="svg/cloudy.svg" />`;
	let forecastNumb = weather.weather.code
	
	switch (forecastNumb) {
		case '200'&&'201'&&'202'&&'230'&&'231'&&'232'&&'233':
			console.log("It's thundering");
			information.insertAdjacentHTML('beforeend', weatherAnimationDivStart + Thunder + weatherAnimationDivEnd );
			break;
		
		case '300'&&'301'&&'302'&&'500'&&'501'&&'502'&&'511'&&'520'&&'521'&&'522':
			console.log("It's raining");
			information.insertAdjacentHTML('beforeend', weatherAnimationDivStart + Rain + weatherAnimationDivEnd);
			break;

		case '600'&&'601'&&'602'&&'610'&&'611'&&'612'&&'621'&&'622'&&'623':
			console.log('This is snow')
			information.insertAdjacentHTML('beforeend', weatherAnimationDivStart + Snow + weatherAnimationDivEnd);
			break;

		case '700'&&'711'&&'721'&&'731'&&'741'&&'751':
			console.log("It's foggy outside");
			information.insertAdjacentHTML('beforeend', weatherAnimationDivStart + Fog + weatherAnimationDivEnd);
			break;

		case '800':
			console.log('The sun is out');
			information.insertAdjacentHTML('beforeend',weatherAnimationDivStart + Sunny + weatherAnimationDivEnd);
			break;

		case '801'&&'802'&&'803'&&'804':
			console.log("It's kinda cloudy outside ain't it");
			information.insertAdjacentHTML('beforeend', weatherAnimationDivStart + Cloudy + weatherAnimationDivEnd);
			break;

		case '900' :
			console.log('Hej');
			
			break;
	}

    })
    
}
//Calling my function
fetchLocation();