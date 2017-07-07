(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.list = '';

    Message.newMessage = {
      username: $cookies.get('blocChatCurrentUser'),
      content: '',
      sentAt: new Date(),
      roomID: ''
      };

    Message.getByRoomId = function(roomID) {
        // Filter the messages by their room ID.
        if(roomID) {
          var temp = ref.orderByChild("roomID").equalTo(roomID);
          Message.list = $firebaseArray(temp);
        }

    };

    Message.send = function(newMessage) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      Message.newMessage.sentAt = new Date().toLocaleTimeString();
      messages.$add(newMessage);
      Message.newMessage.content = '';

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
