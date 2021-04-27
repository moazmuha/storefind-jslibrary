"use strict";
const log = console.log
log("storefind.js")

var stores = []
var tableDiv = "body"
var postalCode
var sliderValue = 50;
var click = false;


function storeFind(){

    const self = {
        
        addSearchBar: (selector,placeholder)=>{
            var searchbar = "<input type='text' id='searchInput' placeholder='"+placeholder+"' name='search'>" +
                            "<button class='searchButton' type='submit' onclick='storeFind().sortStores()'><img width='10px' height='10px' src='images/searchIcon.png'></button>"
            $(selector).append(searchbar)
            // slider borrowed from w3schools
            var slider  = '<div id="sp"><input type="range" min="1" max="100" value="50" class="slider" id="myRange"><p id="specialP">Search Within: <span id="demo"></span> km</p></div>'
            $(selector).append(slider)
            var slider = document.getElementById("myRange");
            var output = document.getElementById("demo");
            output.innerHTML = slider.value;
            slider.oninput = function() {
                output.innerHTML = this.value;
                sliderValue = this.value
            }
        },


        addStore: (storeName,location,postalCode) =>{
            var store ={
                name: storeName,
                location: location,
                postalCode: postalCode,
                distance: 0
            }
            stores.push(store)
        },
        

        sortStores: ()=>{
            if (!click){
            click = true
            async function getLatLng(){
                let lat
                let lng
                postalCode = $("#searchInput").val()
                let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + postalCode + "&key=AIzaSyBoz1HmaGdnspMXq5Re5u8Qg5cK2qDN_rE"
                let response = await fetch(url)
                let data = await response.json()
                if(data.results[0]){
                    lat = data.results[0].geometry.location.lat
                    lng = data.results[0].geometry.location.lng
                }else{
                    alert("Not a Valid Postal Code")
                    window.location.reload()
                }
                let lat2
                let lng2
                let url2
                for(var i = 0; i<stores.length; i++){
                    url2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + stores[i].postalCode + "&key=AIzaSyBoz1HmaGdnspMXq5Re5u8Qg5cK2qDN_rE"
                    let response2 = await fetch(url2)
                    let data2 = await response2.json()
                    if(data2.results[0]){
                        lat2 = data2.results[0].geometry.location.lat
                        lng2 = data2.results[0].geometry.location.lng
                    }else{
                        alert("Not a Valid Postal Code")
                        window.location.reload()
                    }
                    stores[i].distance = self.distance(lat, lng, lat2, lng2, "K")
                }
                stores.sort(function(store, otherStore){
                    if(store.distance > otherStore.distance){
                        return 1
                    }else if (store.distance < otherStore.distance){
                        return -1
                    }
                    return 0
                })
                for(var i = 0; i<stores.length; i++){
                    if (stores[i].distance > sliderValue){
                        stores.splice(i)
                    }
                }

                self.createTable(tableDiv)
            }
            getLatLng()
            }
        },

        setDivForTable: (div)=>{
            tableDiv = div
        },

        createTable: (selector)=>{
            if (stores.length>0){
                var table ="<table><tr><th><h3>Store</h3></th><th><h3>Location</h3></th><th><h3>Distance From You</h3></th><th><h3>Directions</h3></th></tr>"
                for(var i = 0; i<stores.length; i++){
                    var link = "onclick=\"window.open('https://www.google.com/maps/search/"+stores[i].location+"', '_blank')\""
                    table = table + "<tr> <td><b>" +stores[i].name+ "</b></td>" + 
                    "<td>"+stores[i].location+"</td><td>"+ Math.round(stores[i].distance * 10) / 10 +" Km</td>" +
                    "<td><button class='bookButton'" +  link + ">Directions</button></td></tr>"
                }
                table = table + "</table>"
                $(selector).append("<h2>Stores Close to You:</h2>").hide().show(300)
                $(selector).append(table).hide().show(300)
                var searchAgain = "<button class='bookButton' onclick='window.location.reload()'>Search Again</button>"
                $(selector).append(searchAgain).hide().show(300)
                $("#round-container").hide(300)
            }else{
                var error = "<h2 style='text-decoration: none'>Sorry, no clinics were found with your search criteria :(</h2>"
                $(selector).append(error).hide().show(300)
                var searchAgain = "<button class='bookButton' onclick='window.location.reload()'>Search Again</button>"
                $(selector).append(searchAgain).hide().show(300)
                $("#round-container").hide(300)
            }
            
        },

        //distance function from https://www.geodatasource.com/developers/javascript
        distance: (lat1, lon1, lat2, lon2, unit)=>{
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return dist;
            }
        }


    }


    return self
}
