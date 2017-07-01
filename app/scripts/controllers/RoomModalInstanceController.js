(function() {
    function RoomModalInstanceController($uibModalInstance, Room) {
      var $ctrl = this;

      $ctrl.ok = function () {

        $uibModalInstance.close(Room.add($ctrl.text));
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('RoomModalInstanceController', ['$uibModalInstance', 'Room', RoomModalInstanceController]);
})();
