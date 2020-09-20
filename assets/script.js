function initialize(){

    var cities = localStorage.getItem("searches")

    $(".history").html(" ")
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        
        var atag = $("<button>");
        atag.addClass("historyBtn")
        var divTag = $("<div>");
        
        var hbutton = atag.text(value);
        divTag.append(atag)
        $(".history").append(divTag)
    }
}


$(document).ready(function(){

    initialize();
    var savedLocations = [];
   
    
   
    function APIcall(){
        var city = $('.form-control').val();
        var APIkey = "&APPID=8935db265b7cc0c65699dd8b71cd06b1";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + APIkey;

        $.ajax({
            url: queryURL ,
            method: "GET",
        }).then(function(data){

            if(city != ""){
                var now = moment().format('l');
                
                console.log(data);
            
                //appending name of city and date entered on dashboard
                var cityName = $('#city-name');
                var weatherPic = data.weather[0].icon;
                cityName.html(data.name + " " + now );
                var currentPic = $("#current-pic");
                currentPic.attr("src" , "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" )
                currentPic.attr("alt",data.weather[0].description);

                //create and append temp
                var temperature = $('#temperature');
                temperature.html("Temperature: " + data.main.temp + " " + "Farenheit");

                //create and append humidity
                var humidity = $("#humidity");
                humidity.html("Humidity: " + data.main.humidity);

                //create and append windspeed
                var windSpeed = $("#wind-speed");
                windSpeed.html("Windspeed: " + data.wind.speed);

                var UVindex = $("#UV-index");
            }else{
                $(".error").html("field empty");
            }
        })

        secondQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial"+APIkey;
        $.ajax({

            url: secondQueryURL ,
            
            method: "GET",
        }).then(function(data){
            
            console.log(data);

            //forecast1
            var date = $("<p>")
            date.html(data.list[0].dt_txt.substring(0,10));
            $("#one").append(date);
            
            var firstpic = $("<img>");
            firstpic.attr("src" ,"https://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon +"@2x.png");
            $("#one").append(firstpic);

            var temp1 = $("<p>");
            temp1.html("Temp:"+data.list[0].main.temp);
            $("#one").append(temp1);

            var humidity1 = $("<p>");
            humidity1.html("Humidity:"+data.list[0].main.humidity);
            $("#one").append(humidity1);
            
           
           //forecast2
            var date2 = $("<p>")
            date2.html(data.list[6].dt_txt.substring(0,10));
            $("#two").append(date2);

            var secondpic = $("<img>");
            secondpic.attr("src" ,"https://openweathermap.org/img/wn/"+ data.list[6].weather[0].icon +"@2x.png");
            $("#two").append(secondpic);

            var temp2 = $("<p>");
            temp2.html("Temp:"+data.list[6].main.temp);
            $("#two").append(temp2);

            var humidity2 = $("<p>");
            humidity2.html("Humidity:"+data.list[6].main.humidity);
            $("#two").append(humidity2);

            //forecast3
            var date3 = $("<p>")
            date3.html(data.list[14].dt_txt.substring(0,10));
            $("#three").append(date3);

            var thirdpic = $("<img>");
            thirdpic.attr("src" ,"https://openweathermap.org/img/wn/"+ data.list[14].weather[0].icon +"@2x.png");
            $("#three").append(thirdpic);

            var temp3 = $("<p>");
            temp3.html("Temp:"+data.list[14].main.temp);
            $("#three").append(temp3);

            var humidity3 = $("<p>");
            humidity3.html("Humidity:"+data.list[14].main.humidity);
            $("#three").append(humidity3);


            //forecast4
            var date4 = $("<p>")
            date4.html(data.list[22].dt_txt.substring(0,10));
            $("#four").append(date4);

            var fourthpic = $("<img>");
            fourthpic.attr("src" ,"https://openweathermap.org/img/wn/"+ data.list[22].weather[0].icon +"@2x.png");
            $("#four").append(fourthpic);

            var temp4 = $("<p>");
            temp4.html("Temp:"+data.list[22].main.temp);
            $("#four").append(temp4);

            var humidity4 = $("<p>");
            humidity4.html("Humidity:"+data.list[22].main.humidity);
            $("#four").append(humidity4);


            //forecast5
            var date5 = $("<p>")
            date5.html(data.list[30].dt_txt.substring(0,10));
            $("#five").append(date5);

            var fifthpic = $("<img>");
            fifthpic.attr("src" ,"https://openweathermap.org/img/wn/"+ data.list[30].weather[0].icon +"@2x.png");
            $("#five").append(fifthpic);

            var temp5 = $("<p>");
            temp5.html("Temp:"+data.list[30].main.temp);
            $("#five").append(temp5);

            var humidity5 = $("<p>");
            humidity5.html("Humidity:"+data.list[30].main.humidity);
            $("#five").append(humidity5);
        })
           
        $(function(){
            console.log(city);
            savedLocations.push(city);
            console.log(savedLocations);
            localStorage.setItem(city, city);

            initialize();
        })

    }

});