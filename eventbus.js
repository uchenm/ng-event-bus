(function() {

  'use strict';

  angular
    .module('ngEventBus', [])
    .service('EventBus', eventBus);

  // TODO:
  // support for >1 listener per channel
  // unregister listener

  function eventBus() {

    var listeners = {};
    var pendingEvents = {};

    this.emit = function(name) {

      var args = arguments.slice(1);

      if (listeners.hasOwnProperty(name)) {
        listeners[name].apply(this, args);
      }
      else {
        // add to pending events
        if (pendingEvents.hasOwnProperty(name)) {
          pendingEvents[name].push(args);
        }
        else {
          pendingEvents[name] = [args];
        }
      }

    };

    this.on = function(name, listener) {

      listeners[name] = listener;

      // process pending events, delete after
      if (pendingEvents.hasOwnProperty(name)) {
        while (pendingEvents[name].length) {
          var args = pendingEvents[name].shift();
          this.emit.apply(this, name, args);
        }
        // clear cache
        delete pendingEvents[name];
      }

    };

    this.broadcast = this.emit;
  }

})();
