# javascript-challenge

Serve index.html via LiveServer in Visual Studio Code.
A page will load that asks you to enter a date.
When you click the filter button, only results matching that date will be returned.

This is homework 14 based on material covered March 31, April 3, and April 5, 2021 in Data Analytics and Visualization Boot Camp at the University of Minnesota.

This creates a table dynamically based on the JSON file provided, called data.js.


The dataset is an array of objects (akin to a list of dictionaries in Python) that looks like this:

var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green...my front door."
  },
  {}...
]


The HTML contains a table with the following header

              <thead>
                <tr>
                  <th class="table-head">Date</th>
                  <th class="table-head">City</th>
                  <th class="table-head">State</th>
                  <th class="table-head">Country</th>
                  <th class="table-head">Shape</th>
                  <th class="table-head">Duration</th>
                  <th class="table-head">Comments</th>
                </tr>
              </thead>

These instructions are found at
https://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/uofm-stp-data-pt-12-2020-u-c/tree/master/02-Homework/14-Intro-To-JavaScript/Instructions

This repo is published at
https://github.com/papadiscobravo/javascript-challenge
