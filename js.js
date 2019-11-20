



// const city = 'Aalborg';
// const api = `https://api.weatherbit.io/v2.0/current?city=${city}&key=49f14301b81e4923afa0af7847419676`;


// fetch(api)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

// let weather = data.data

// let temp = data.data.temp
// document.getElementById('temp').innerHTML = temp


const city = 'Aalborg';
const lang = 'da';
const api = `https://api.weatherbit.io/v2.0/current?city=${city}&key=49f14301b81e4923afa0af7847419676&lang=${lang}`;

fetch(api)
.then(res => res.json())
.then(data => {
	let weather = data.data[0]

	const information =	document.getElementById('wrapper')
	
	let temp = data.data[0].temp
	information.insertAdjacentHTML('beforeend', "<div>" + temp + '&deg </div>');
	
	let appTemp = data.data[0].app_temp //Føltes som
	information.insertAdjacentHTML('beforeend', '<div>' + appTemp + '</div>');
	
	let city_name = data.data[0].city_name
	information.insertAdjacentHTML('beforeend', "<div>" + city_name + "</div>");

	let sunrise = data.data[0].sunrise
	let sunset = data.data[0].sunset
	information.insertAdjacentHTML('beforeend', "<div>" + "Solopgang: " + sunrise + "<br/>Solnedgang: " + sunset + "</div>");

	let forecast = data.data[0].weather.description
	information.insertAdjacentHTML('beforeend', forecast + '<br/>')
	//Time the last recording was sent
	/*let ob_time = data.data[0].ob_time
	information.insertAdjacentHTML('beforeend', ob_time);*/

	let forecastNumb = data.data[0].weather.code
	console.log(forecastNumb);
	switch (forecastNumb) {
		case '200'||'201'||'202'||'230'||'231'||'232'||'233':
			console.log("It's thundering");
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Thunder.svg'> ");
			break;
		
		case '300'||'301'||'302'||'500'||'501'||'502'||'511'||'520'||'521'||'522':
			console.log("It's raining");
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Raining.svg'> ");
			break;

		case '600'||'601'||'602'||'610'||'611'||'612'||'621'||'622'||'623':
			console.log('This is snow')
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Snow.svg'> ");
			break;

		case '700'||'711'||'721'||'731'||'741'||'751':
			console.log("It's foggy outside");
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Fog.svg'> ");
			break;

		case '800':
			console.log('The sun is out');
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Sunny.svg'> ");
			break;

		case '801'||'802'||'803'||'804':
			console.log("It's kinda cloudy outside ain't it");
			information.insertAdjacentHTML('beforeend', "<img src='SVG/Cloudy.svg'> ");
			break;

		case '900' :
			console.log('Hej');
			
			break;
		default:
		 	console.log('Unknown Precipitation');
		 	information.insertAdjacentHTML('beforeend', "Tag og kig ud af vinduet");
		 	break;
	}
})