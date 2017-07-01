(function() {
    function HomeCtrl(Room) {
      this.roomList = Room.all;
      //this.room = Room.add("test");
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
