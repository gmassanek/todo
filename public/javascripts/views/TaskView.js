namespace('Todo.views', {
  TaskView : Backbone.View.extend({
    tagName : 'li',
	initialize: function(opts) {
		this.parent = opts.parent;
	},
	events : {
		'click .complete_task' : 'complete_task'
	},
    render : function () {
      var html = JST['task']({description: this.model.get("description"), 
								complete: this.model.get("complete")});
      $(this.el).html(html);
      return this;
    },
	complete_task : function(event) {
		checked = event.currentTarget.checked;
		this.model.save({complete: checked});
	}
  })
});
