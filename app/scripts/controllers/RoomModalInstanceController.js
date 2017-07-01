(function() {
    function RoomModalInstanceController($uibModalInstance) {
      var $ctrl = this;
      $ctrl.text = 'newroom';
      $ctrl.newroom = '';

      $ctrl.ok = function () {
        $ctrl.submit = function() {
          if ($ctrl.text) {
            $ctrl.newroom = $ctrl.text;
            $ctrl.text = '';
          }
        };
        console.log("value of items = " + $ctrl.newroom);
        $uibModalInstance.close($ctrl.newroom);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('RoomModalInstanceController', ['$uibModalInstance', RoomModalInstanceController]);
})();
