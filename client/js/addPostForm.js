(function (){
  'use strict';
  
  Template.addPostForm.events = {
    'click button': function(event, template) {
      var title = template.find('input').value;
      var content = template.find('textarea').value;
      var date = new Date().toLocaleDateString();
      Posts.insert({title: title, content: content, date: date});
      
      template.find('input').value = '';
      template.find('textarea').value = '';
    }
  };
  
  
  
}());