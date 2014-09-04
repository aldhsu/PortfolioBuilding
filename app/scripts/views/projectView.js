var app = app || {};

app.projectView = Backbone.Views.extend({
  render: function() {
    var temp = Handlebars.compile(app.templates.projectView);
    var html = temp(this.model.toJSON());
    return html;
  }
})