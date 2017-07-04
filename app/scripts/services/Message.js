(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.list = '';

    Message.getByRoomId = function(roomID) {
        // Filter the messages by their room ID.
        if(roomID) {
          var temp = ref.orderByChild("roomID").equalTo(roomID);
          Message.list = $firebaseArray(temp);
        }

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
