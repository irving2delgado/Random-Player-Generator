/*global $*/

alert("hello there");
//  var playerName;
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
  
//   success: function(data) {
//     console.log(data);
// 	playerName = data;

//   }
// });



      


$("#buttonG").click(function() {
	$("#guardImg").attr("src", "https://i.ytimg.com/vi/Ph6zgx_IA34/maxresdefault.jpg");
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;

}
	var shootingIn = getRandomInt(20,70);
	var shootingOut = getRandomInt(60,100);
	var handling = getRandomInt(60,100);
	var passing = getRandomInt(60,100);
	var steal = getRandomInt(30,100);
	var block = getRandomInt(20,70);
	var speed = getRandomInt(60,100);
	var strength = getRandomInt(35,85);
	var vert = getRandomInt(10,60);

	var playerName;
	var firstName;
	var lastName;
	$.ajax({
		url: 'https://randomuser.me/api/?gender=male&nat=us',
		dataType: 'json',
  
	success: function(data) {
    	console.log(data);
	playerName = data;
	// console.log(playerName.results[0].name.first);
	firstName = playerName.results[0].name.first;
	lastName = playerName.results[0].name.last;
	
	
		$("#outputG").append( firstName + " " + lastName + "<br/> <br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert + "<br/><br/>");


  }
});

      
	
	// $("#outputG").append( "<br/> <br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert);
});



$("#buttonF").click(function() {
	$("#fwdImg").attr("src", "https://i.ytimg.com/vi/K15cgtcrpqk/maxresdefault.jpg");
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;

}
	var shootingIn = getRandomInt(50,100);
	var shootingOut = getRandomInt(45,85);
	var handling = getRandomInt(40,85);
	var passing = getRandomInt(35,85);
	var steal = getRandomInt(20,85);
	var block = getRandomInt(40,90);
	var speed = getRandomInt(40,85);
	var strength = getRandomInt(45,100);
	var vert = getRandomInt(25,90);

	var playerName;
	var firstName;
	var lastName;
	$.ajax({
		url: 'https://randomuser.me/api/?gender=male&nat=us',
		dataType: 'json',
  
	success: function(data) {
    	console.log(data);
	playerName = data;
	// console.log(playerName.results[0].name.first);
	firstName = playerName.results[0].name.first;
	lastName = playerName.results[0].name.last;
	
	
		$("#outputF").append( firstName + " " + lastName + "<br/> <br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert + "<br/><br/>");


  }
});



	// $("#outputF").append("<br/><br/> Interior Shooting " + shootingIn, "<br/> Perimeter Shooting " + shootingOut + "<br/> Ball Handling " + handling + "<br/> Passing " + passing +  "<br/> Steal " + steal + "<br/> Block " + block + "<br/> Speed " + speed + "<br/> Strength " + strength + "<br/> Vert " + vert);
});

