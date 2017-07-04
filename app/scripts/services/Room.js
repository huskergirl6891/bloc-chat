(function() {
  function Room($firebaseArray, Message) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var selectedRoom = rooms[0];

    Room.all = rooms;

    Room.add = function(room) {
        //Use the firebase method $add here
        Room.all.$add(room).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          Room.all.$indexFor(id); // returns location in the array
        });
    };

    Room.setRoom = function(room) {
         HomeCtrl.activeRoom = room;
         Message.getByRoomId(HomeCtrl.activeRoom.$id);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'Message', Room]);
})();
