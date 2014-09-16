(function() {
  ActiveAdmin.flash = {
    error: function(message) {
      return this.abstract(message, 'error');
    },
    notice: function(message) {
      return this.abstract(message, 'notice');
    },
    abstract: function(message, type) {
      return $('.flashes').append($("<div>").addClass("flash flash_" + type).text(message));
    }
  };

}).call(this);
