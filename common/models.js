/** These are our models. Please check out http://docs.meteor.com/#dataandsecurity for more information on how to properly set these up securely. For now, we do this very insecurely, because it's convenient and easy to get started with. **/
var Posts = new Meteor.Collection("posts");
var Comments = new Meteor.Collection("comments");