# StoreFind Library
•JavaScript library that can be used to find closest location to you from a set of locations. <br>
•Similar to "find closest store/location to you" tool found on websites of businesses with multiple branches. <br>
•Provided a location the JavaScript library finds the closest locations to you from a set of locations.<br>

## Contents
1. [Introduction](#introduction)
2. [Testing the Library](#guide)
3. [Using the Library](#use)
4. [Function manual](#functions) 
5. [Images](#images)<br>
Note: All of the following documentation is also available when you open up examples.html. Testing Storefind using [the guide](#guide) is the best way to learn more about it and also access all the documentation on a webpage.

## Introduction
This library is useful for any business that has many branches. It will allow you to create a storefinder tool on your web app or website. This will allow your customers to quickly find the closest branch of your business to them. Your developers can focus on more important aspects of your application and simply use the Storefind JS lbrary to add a "stores near you" page on your website.

You simply import the Storefind library. Then use our addStore() function to add the store locations you would like to add. You can add as many stores as you like. Once you have added all the stores, you will use the function addSearchBar(). This is the search bar that your customers will use. They will input their postal code, address, or city and also the range to search within. Our library will create and display a table with your store or branch locations sorted by ascending distance from the customer. The table will have the columns: store name, location, distance from you, and directions. The directions column will hold a button that links to google maps with the repective stores location. The other columns are self explanatory. Download the repo and follow the guide below. The Storefind library has more details and documentation, and a demo to try.

## Guide
1. Download the repo.
2. Run "npm install" to install node_modules
3. Run "npm start"
4. Head over to http://localhost:9000/

## Use
To get started you will need to include the storefind.js script in your file. However, storefind.js uses jquery so you must first have the jquery script tag. You can simply provide the following script: script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" for jquery. You may use your own styles. If you would like to use the styles of the table in our example you can use our styles file.

## Functions
There are only 3 functions a user of storeFind library accessess. They are:

* addStore()
    * This function takes in 3 strings: Store Name, Store Address, and Postal Code. This function creates store objects which are used in the table when a customer searches for stores close to them.
* addSearchBar()
    * This function takes in 2 strings. The first is the div id of where you want to place the search bar. The 2nd string is the placeholder that you would like for the input field of the search bar. This function creates a search bar and search button. The search button, when clicked is set to call sortStores() private function users don't directly use. The sortStores() function sorts the stores that you added using addStore() by ascending distance from the postal code that was inputted into the search bar. sortStores() then calls another private function called createTable() this function actually creates the table of sorted stores with columns Name, Location, Distance From You, and Directions. The directions column will hold a button that redirects customers to google maps with the address of the location inputted into google maps.
* setDivForTable()
    * This Function takes in one string. It takes in the div id of where you want to place the table on your page when the search button is clicked.


## Images
![image](https://user-images.githubusercontent.com/66569506/116297297-20492000-a769-11eb-91ac-cabb81ccfbf2.png)
![image](https://user-images.githubusercontent.com/66569506/116296702-88e3cd00-a768-11eb-98d8-0c86c9aa8574.png)
![image](https://user-images.githubusercontent.com/66569506/116296739-939e6200-a768-11eb-8609-babe58fcf922.png)

## Notes
•Contributions and suggestions are welcome. If you would like to contribute, please message me or open an issue.

