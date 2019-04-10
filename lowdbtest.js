const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
var fetch = require('node-fetch');
const adapter = new FileSync('bus.json')
const db = low(adapter)
 

// Set some defaults
db.defaults({ busdata: [] })
  .write()

  //busdata=[1245, 12234]
  var url = 'https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]=1&include=trip';	

async function fetchData(){
  console.log("inside fethData")
	var res  = await fetch(url);
	var json = await res.json();
  //console.log(json)
	json.data.forEach(bus => {
    console.log("\n\n\n");
    //console.log(bus);
    db.get('busdata')
    .push(bus)
    .write()
	});
}
var startTime = new Date().getTime();
var intervalID = setInterval(() => {
  console.log("setInterval")
  if(new Date().getTime() - startTime > 1000 * 60 * 60){
    console.log(" stop time")
    clearInterval(intervalID);
    return;
}
  fetchData();
}, 15000);



