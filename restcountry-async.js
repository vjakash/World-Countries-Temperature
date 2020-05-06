async function card(){
	var response=await fetch("https://restcountries.eu/rest/v2/all");
	var data=await 	response.json();
	for(let i=0;i<data.length;i+=3){
			var j=i+1;
			var k=i+2;
			var row=document.createElement("div");
			row.setAttribute("class","row");
			row.innerHTML=`<div class="card-group">
							  <div class="card">
							    <img src="`+data[i].flag+`" class="card-img-top" alt="..." onclick="weather('`+data[i].capital+`','`+data[i].name+`')">
							    <div class="card-body">
							      <h5 class="card-title">`+data[i].name+`</h5>
							      <p class="card-text">Population of the country: `+data[i].population+`<br>Region: `+data[i].region+`</p>
							      <p class="card-text"><small class="text-muted">NativeName: `+data[i].nativeName+`</small></p>
							    </div>
							  </div>
							  <div class="card">
							    <img src="`+data[j].flag+`" class="card-img-top" alt="..." onclick="weather('`+data[j].capital+`','`+data[j].name+`')">
							    <div class="card-body">
							      <h5 class="card-title">`+data[j].name+`</h5>
							      <p class="card-text">Population of the country: `+data[j].population+`<br>Region: `+data[j].region+`</p>
							      <p class="card-text"><small class="text-muted">NativeName: `+data[j].nativeName+`</small></p>
							    </div>
							  </div>
							  <div class="card">
							    <img src="`+data[k].flag+`" class="card-img-top" alt="..." onclick="weather('`+data[k].capital+`','`+data[k].name+`')">
							    <div class="card-body">
							      <h5 class="card-title">`+data[k].name+`</h5>
							      <p class="card-text">Population of the country: `+data[k].population+`<br>Region: `+data[k].region+`</p>
							      <p class="card-text"><small class="text-muted">NativeName: `+data[k].nativeName+`</small></p>
							    </div>
							  </div>
							</div>`;
			document.getElementById("container").append(row);
}
}
card();

async function weather(code,country){
		// fetch("https://api.openweathermap.org/data/2.5/weather?q={'"+code+"'}&appid={'22f21b4aa89c515710a22781d5dc6bf7'}")    London%252Cuk
	var response=await fetch("https://community-open-weather-map.p.rapidapi.com/weather?&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=JSON%252C%20html&q="+code, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "8aeeaa12a4mshe4d62969672e43fp18b393jsnaea8f2499f67"
	}
})
	var data=await response.json();
	alert("weather of "+country+" is:"+data["main"]["temp"]+" F");
}
