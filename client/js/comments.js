(function (){
  'use script';
  
  Template.addCommentForm.events = {
    'click button': function(e, t) {
      var title = t.find('input').value;
      var content = t.find('textarea').value;
      var date = new Date().toLocaleDateString();
      Comments.insert({
        title: title, 
        content: content,
        date: date, 
        postId: Session.get('post')._id
      });
      
      t.find('input').value = '';
      t.find('textarea').value = '';
    }
  };
  
  Template.commentsList.comments = function() {
    return Comments.find({postId: Session.get('post')._id});
  };
  
  Template.commentsList.events = {
    'click a.delete-comment': function(e, t) {
      e.preventDefault();
      Comments.remove(this._id);
    }
  };
}());