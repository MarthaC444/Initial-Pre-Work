# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser checks DNS records for the URL https://www.techtonic.com/ and gets its IP address. Then the browser makes a HTTP request to the IP address.

## From start to finish, how does data reach you to be rendered in the browser?

If the browser and server acknowledge each other and say it’s okay to make a connection, the browser sends an HTTP GET request to the server for certain information. The request is broken down into packets and sent to the server that has the code for this website on it. The server side code puts the packets back together, retrieves the requested code from its database, tacks on some extra info about what it is sending, makes it’s own packets out of that information and sends it back to the client browser. Client browser puts the packets back together and renders the HTML web page in browser window.

## What code is rendered in the browser?

Usually a combination of HTML, CSS, and JavaScript.

## What is the server-side code’s main function?

To respond to HTTP requests by serving web page code and other information possibly from a database.

## What is the client-side code’s main function?

To render web pages and allow a user to interact with them.

## What is runtime?

The more official sources say “runtime is the period of time between when a program begins executing and ends”. However, there appear to be many assertions on stack overflow that runtime can also refer to the engine/environment that runs your code during its runtime and any other software and runtime libraries that may be used during the runtime that is the time your program is running. The first definition makes more sense and seems more clear to me. 

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

1

## How many instances of the server-side code are available at any given time?

1 typically. However there are reasons to have more than one:  protect against server failure, load balancing to keep the site loading quickly, also servers in many locations can decrease load time. 

## How many instances of the databases connected to the server application are created?

1 typically. However a backup would be a good idea! And there appear to be some uses for multiple databases in larger applications that help an application run faster.