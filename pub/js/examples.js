"use strict";

log("examples.js")

storeFind().addStore("The Home Depot Oakville","2555 Bristol Cir, Oakville, ON", "L6H 5W9")
storeFind().addStore("The Home Depot Milton","1013 Maple Ave, Milton, ON", "L9T 0A5")
storeFind().addStore("The Home Depot Mississauga","2920 Argentia Rd, Mississauga, ON", "L5N 7X8")
storeFind().addStore("The Home Depot Toronto","2121 St Clair Ave W, Toronto", "M6N 4X9")
storeFind().addSearchBar("#round-container", "Enter Postal Code")
storeFind().setDivForTable("#round-container2")