"use strict";
const log = console.log
log("storefind.js")


var stores = []
var validPostalCodes = ["1","2","3","4","5","6","7","8","9","10"]
var tableDiv = "body"
var postalCode

function storeFind(){

    const self = {
        
        addSearchBar: (selector,placeholder)=>{
            var searchbar = "<input type='text' id='searchInput' placeholder='"+placeholder+"' name='search'>" +
                            "<button class='searchButton' type='submit' onclick='storeFind().sortStores()'><img width='10px' height='10px' src='searchIcon.png'></button>"
            $(selector).append(searchbar)
        },


        addStore: (storeName,location,postalCode) =>{
            var store ={
                name: storeName,
                location: location,
                postalCode: postalCode,
            }
            stores.push(store)
        },
        

        sortStores: ()=>{
            postalCode = $("#searchInput").val()
            if(!validPostalCodes.includes(postalCode)){
                alert("Not a valid postal code, valid postal codes are " + validPostalCodes)
            }else{
                postalCode = parseInt(postalCode)
                stores.sort(function(store, otherStore){
                    if(Math.abs(postalCode-store.postalCode) > Math.abs(postalCode-otherStore.postalCode)){
                        return 1
                    }else if (Math.abs(postalCode-store.postalCode) < Math.abs(postalCode-otherStore.postalCode)){
                        return -1
                    }
                    return 0
                })
            self.createTable(tableDiv)
            }
            
        },

        setDivForTable: (div)=>{
            tableDiv = div
        },

        createTable: (selector)=>{
            var table ="<table><tr><th><h3>Store</h3></th><th><h3>Location</h3></th><th><h3>Distance From You</h3></th><th><h3>Link to Store</h3></th></tr>"
            for(var i = 0; i<stores.length; i++){
                var link = "onclick=\"location.href='https://www.google.com/maps/search/"+stores[i].location+"'\""
                table = table + "<tr> <td><b>" +stores[i].name+ "</b></td>" + 
                "<td>"+stores[i].location+"</td><td>"+Math.abs(stores[i].postalCode-postalCode)+"</td>" +
                "<td><button class='bookButton'" +  link + ">Directions</button></td></tr>"
            }
            table = table + "</table>"
            $(selector).append("<h2>Stores Close to You:</h2>").hide().show(1000)
            $(selector).append(table).hide().show(1000)
            var searchAgain = "<button class='bookButton' onclick='window.location.reload()'>Search Again</button>"
            $(selector).append(searchAgain).hide().show(1000)
            $("#round-container").hide(1500)
        }
    }


    return self
}

/**
 *change so I access elements creared by storeFind using storeFind created IDs and not user ids ($("#round-container").hide(1500)) should use saved ids
 */