(function() {
  $.ui.dialog.prototype._focusTabbable = function() {
    return this.uiDialog.focus();
  };

}).call(this);
