# MMM-ComEdPrice5Min
MagicMirror module to get the current ComEd 5-Minute Price data for customers. This module only displays the most recent 5-minute price. 


## How it Works
This module uses the standard 5-minute API from ComEd, which returns all the 5-minute prices from the last 24 hours. While the original forked code is already written to loop through all the returned data, I simply use the first value and discard the rest of data. You could modify this to do something with the 24 hours of data that is returned from the API, or modify the API call for any timeframe you desire. By defaut, it will only display the most recent price. For more data on the ComEd API, see here: https://hourlypricing.comed.com/hp-api/


## API
Uses the open/free api that ComEd publishes: https://hourlypricing.comed.com/api?type=currenthouraverage

## Preview
![screenshot1](screenshot1.jpg) 

## Using the module
run git clone https://github.com/contactmike1/MMM-ComEdPrice5Min from inside your MagicMirror/modules folder

Add `MMM-ComEdPrice5Min` module to the `modules` array in the `config/config.js` file:
````javascript
modules: [
  {
    module: "MMM-ComEdPrice5Min",
    position: "top_right",
    header: "ComEd 5 Minute Pricing",
    config: {
        updateInterval: 5 * 60 * 1000, // every 5 minutes
    }
  },
]
