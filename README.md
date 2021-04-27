# StoreFind Library
•JavaScript library that can be used to find closest location to you from a set of locations. <br>
•Similar to "find closest store/location to you" tool found on websites of businesses with multiple branches. <br>
•Provided a location the JavaScript library finds the closest locations to you from a set of locations.<br>

## Introduction
This library is useful for any business that has many branches. It will allow you to create a storefinder tool on your web app or website. This will allow your customers to quickly find the closest branch of your business to them. Your developers can focus on more important aspects of your application and simply use the Storefind JS lbrary to add a "stores near you" page on your website.

You simply import the Storefind library. Then use our addStore() function to add the store locations you would like to add. You can add as many stores as you like. Once you have added all the stores, you will use the function addSearchBar(). This is the search bar that your customers will use. They will input their postal code, address, or city and also the range to search within. Our library will create and display a table with your store or branch locations sorted by ascending distance from the customer. The table will have the columns: store name, location, distance from you, and directions. The directions column will hold a button that links to google maps with the repective stores location. The other columns are self explanatory. Download the repo and follow the guide below. The Storefind library has more details and documentation, and a demo to try.

## Guide
1. Download the repo.
2. Run "npm install" to install node_modules
3. Run "npm start"
4. Head over to http://localhost:9000/


## Images
![image](https://user-images.githubusercontent.com/66569506/116297297-20492000-a769-11eb-91ac-cabb81ccfbf2.png)
![image](https://user-images.githubusercontent.com/66569506/116296702-88e3cd00-a768-11eb-98d8-0c86c9aa8574.png)
![image](https://user-images.githubusercontent.com/66569506/116296739-939e6200-a768-11eb-8609-babe58fcf922.png)

## Notes
•You may go add your own locations in examples.js to test the storefinder further.
