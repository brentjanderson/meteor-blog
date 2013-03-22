(function (){
  'use strict';
  
  Template.postView.post = function() {
    return Session.get('post');
  };
  
  Template.postView.events = {
    'click a.delete-post': function() {
      Posts.remove({_id: Session.get('post')._id});
      Comments.find({ postId: Session.get('post')._id }).forEach(function(comment) {
        Comments.remove({_id: comment._id});
      });
      Session.set('post', undefined);
    }
  };
  
}());