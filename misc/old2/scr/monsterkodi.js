
Element.implement ({
  delayed_link: function() { window.location = window.delayed_loc; },
  delay_link: function() { this.getParent().getParent().fade('out'); window.delayed_loc = this.getParent().href; setTimeout( this.delayed_link, 600 ); },
})
