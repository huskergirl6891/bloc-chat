(function() {
    function HomeCtrl(Room, Message) {
      this.roomList = Room.all;
      this.activeRoom = null;
      this.message = Message;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
