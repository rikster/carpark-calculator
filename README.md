<h1>Carpark React Application</h1> 

<h4>Database Access</h4>
<blockquote>
<a href="https://cloud.mongodb.com/"><strong>Mongo Atlas</strong></a>.<br>
<strong>Login:</strong> pkrammer965@gmail.com<br>
<strong>Pw:</strong><em>password</em><br>
<strong>Cluster:</strong>Carpark_Calculator<br>
<strong>Database:</strong>CarparkDB<br>
<strong>Collection:</strong>Carpark<br>
<strong>Node Connection String:</strong> <br>
mongodb+srv://test123:<password>@cluster0.yxhcs.mongodb.net/<dbname>?retryWrites=true&w=majority<br><br>
</blockquote>

   

This app for calculating car parking rates takes the Specification 
(see below) and extends it to a full stack MERN app showcasing 
technologies pertinent to FE development skills, mainly Javascript:
<h4>Frontend:</h4> 
React, Material UI Components, Styled components?
<h4>Authentication:</h4> 
JWT authentication.
<h4>Backend:</h4> 
Node, Express, MongoDB, Swagger<br>

<h4>Testing:</h4> 
Jasmine, Enzyme (Unit, Integration, E2E)   

All API endpoints are protected (via JWT Middleware) and each registered user has their own carparking record.

<h3>NOTE</h3>
The backend api could include all sorts of patterns to make it more sophisticated,
perhaps more suited to certain types of large enterprise backends (IOC, DI, REPO). 
However, in my experience getting to caught-up in patterns can often lead to YAGNI, 
code that is 'smart', 
however unnecessarily complex and hard to maintain. (eg. using Provider patterns on the premise 
you are going change out a DB is so rare, you have question its use in the 
1st place)

So, I have balanced this with a fairly straight forward backend to allow 
for a little more emphasis on the frontend.   

<h1>Specification</h1>

A rate calculation engine for a carpark, the inputs for this engine are:
1. Car Entry Date and Time 
2. Car Exit Date and Time 

Based on these 2 inputs the engine program should calculate the correct rate for the customer and display the name of the rate along with the total price to the customer using the following rates:  

Early Bird
  - Flat Rate
  - $13.0
  - Entry condition : Enter between 6:00 AM to 9:00 AM
 - Exit condition : Exit between 3:30 PM to 11:30 PM
   
Night Rate
  - Flat Rate
  - $6.50
  - Entry condition : Enter between 6:00 PM to midnight (weekdays)
  - Exit condition : Exit before 6 AM the following day
   
Weekend Rate
  - Flat Rate
  - $10.00 
  - Entry condition : Enter anytime past midnight on Friday to Sunday
  - Exit condition : any time before midnight of Sunday

Note: If a customer enters the carpark before midnight on Friday and if they 
qualify for Night rate on a Saturday morning, then the program should charge 
the night rate instead of weekend rate.
  
For any other entry and exit times the program should refer the following 
table for calculating the total price. 

<h2>Standard Rate</h2>

| Type | Hourly Rate |
| ------ | ------ |
| 0 - 1 | $5.00|
| 1 - 2 | $10.00|
| 2 - 3 | $15.00|
| 3+ | $20.00 * flat rate per day for each day of parking.|

Note: The customer should get the cheapest deal based on the rules which 
apply to the time period.


