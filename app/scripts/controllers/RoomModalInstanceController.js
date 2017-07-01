(function() {
    function RoomModalInstanceController($uibModalInstance, items) {
      var $ctrl = this;
      $ctrl.items = items;

      $ctrl.ok = function () {
        console.log("value of items = " + $ctrl.items);
        $uibModalInstance.close($ctrl.items);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('RoomModalInstanceController', ['$uibModalInstance', 'items', RoomModalInstanceController]);
})();
