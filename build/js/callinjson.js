$(document).ready(function(){

  console.log('je charge');
// $.getJSON("db_projects/db.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });
  $.getJSON( "db_projects/db.json", function(json) {
  console.log( "JSON Data: " + json);
 });
});
