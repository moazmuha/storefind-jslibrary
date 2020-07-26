"use strict";

log("examples.js")

storeFind().addStore("The Home Depot Oakville","2555 Bristol Cir, Oakville, ON", 1)
storeFind().addStore("The Home Depot Milton","1013 Maple Ave, Milton, ON", 5)
storeFind().addStore("The Home Depot Mississauga","2920 Argentia Rd, Mississauga, ON", 6)
storeFind().addStore("The Home Depot Toronto","2121 St Clair Ave W, Toronto", 9)
storeFind().addSearchBar("#round-container", "Enter Postal Code")
storeFind().setDivForTable("#round-container2")