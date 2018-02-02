# Lab2: Calling APIs with JQuery

In this assignment you will use JQuery to call APIs for the weather and for Stack Overflow
questions.

## Weather API

In `index.html`, build a form that includes a text input and a submit button:

![weather form](images/weatherForm.png)

Then, in `scripts.js` do the following:

1. Create a JavaScript event handler that triggers whenever something
is typed in the input field of the form. Inside this handler, use the
input to query a <a
href="http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=Pr">Utah
city API</a>.  This will provide a hint to the user about what cities
are available.  Put these options into an unordered list and modify
the DOM to show these hints.  See
[hints](https://github.com/BYU-CS260-Winter-2018/lab2/wiki/City-API)
for helpful information.

1. Create a JavaScript event handler that triggers when the Submit
button is clicked. Inside this handler, use the value of the input
field to send a request to the <a
href="http://www.wunderground.com/weather/api/d/docs">Weather
Underground API</a> to get the current weather for that city. See
[hints](https://github.com/orgs/BYU-CS260-WInter-2018/lab2/wiki/Weather-API)
for helpful information.

## Stack Overflow

In `index.html`, build a form that includes a text input and a submit
button, similar to the one for weather, but instead for querying Stack
Overflow.  Then, in `scripts.js` do the following:

1. Create a JavaScript event handler that triggers when the Submit
button is clicked. Inside this handler, use the value of the input
field to send a request to the <a
href="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=javascript">Stack
Overflow API</a> to get a list of matching questions. See
[hints](https://github.com/orgs/BYU-CS260-WInter-2018/lab2/wiki/Stack-Overflow-API)
for helpful information.

## Submission

Submit the URL for your website, which should be running on your DigitalOcean server.

## Rubric for Grading

When we grade these labs, we will award points using the following
rubric:

Item | Points
--- | ---
Correctly suggests cities based on the input value | 30
Search for current weather works | 30
Search on Stack Overflow works | 30
Uses good web design principles | 10

For the web design principles, you will receive 2 points for each for
**spacing**, **typography**, **color**, **consistency**, and
**responsive design**. We will subtract 1 point for a principle if you
need some work, 2 points if you need a lot of work.
