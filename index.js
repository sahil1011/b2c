var fs = require("fs");


var content = fs.readFileSync("customers.txt");
var t=JSON.parse(content);

function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; 
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
    function compare( a, b ) {
        if ( a.user_id < b.user_id){
          return -1;
        }
        if ( a.user_id > b.user_id ){
          return 1;
        }
        return 0;
      }
      t.sort( compare );
var lat1=53.339428;
var lon1=-6.257664;
var arr=[];
for(var i in t){
if(calcCrow(lat1,lon1,t[i].latitude,t[i].longitude).toFixed(0)>=100){
    arr.push(t[i]);
};
}
console.log(arr);
