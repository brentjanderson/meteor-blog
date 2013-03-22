(function (){
  'use strict';
  
  Template.postList.posts = function() {
    return Posts.find();
  };
  
  Template.postList.events = {
    'click a': function(e) {
      Session.set('post', this); // 'this' is the post that was used during the {{#each}} loop to make this link.
      e.preventDefault();
    }
  };
  
}());