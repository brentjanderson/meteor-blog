# Sample Meteor Blog

> "Because sometimes you just want to see how it works!"

## What's this?
A group of ISYS Jr. Core students met to play around with [MeteorJS](http://www.meteor.com) one night, and this was the result. Be sure to check out the [Meteor docs](http://docs.meteor.com) to get a far more detailed description of what's going on here. Also note that this project might break as Meteor evolves - they're changing stuff every day!

## How to use this project
__Windows:__ Visit [Win.Meteor.com](http://win.meteor.com) to get the Meteor Preview for Windows. Follow the instructions there.  
__Mac/Linux:__ Run `curl https://install.meteor.com | /bin/sh` from your command line

Once you have Meteor [Download the code](http://github.com/brentjanderson/meteor-blog/archive/master.zip) (or click the "ZIP" button above), run `cd ~/path/to/the/meteor/folder` and then just run `meteor`! Start playing around with the code.

## Project structure
This project uses Meteor's conventions with one addition:

* client - Contains code that will go only to the client
* public - Contains anything you want to be served by Meteor as a normal file - pictures, sounds, or anything. Note that CSS, Javascript, CoffeeScript, LESS, and other "executable" code is automatically packaged by Meteor and shipped to the client, so this is for stuff you'd like to include the "old-school" way.
* server - Contains code that will go only to the server
* tests - Contains code for unit testing, but that is never pushed to client or server
* common - A folder that I add to my Meteor projects. `common` is not reserved by Meteor for anything, which means that any files in it will be shared between client _and_ server (hence, it's called the common folder)

Meteor doesn't really care about project structure beyond this, but for the specifics on how it handles structure and files, [check out their docs.](http://docs.meteor.com/#structuringyourapp)

## A few caveats
There is no authentication. This app was written in a little over an hour and doesn't use any authentication. It also uses meteor's autopublish package (meaning all data is accessible and can be manipulated by anyone from anywhere).

## License
Copyright (c) Brent Anderson 2013

Licensed under the MIT License (like Meteor!)

See the LICENSE file for the license
