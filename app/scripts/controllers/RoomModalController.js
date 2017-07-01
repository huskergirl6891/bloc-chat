(function() {
    function RoomModalController($uibModal) {
      var $ctrl = this;
      $ctrl.items = '';

      $ctrl.open = function () {

        var modalInstance = $uibModal.open({
          templateUrl: 'modal.html',
          controller: 'RoomModalInstanceController',
          controllerAs: '$ctrl',
          background: true,
          resolve: {
            items: function () {
              return $ctrl.items;
            },
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
    }



    angular
        .module('blocChat')
        .controller('RoomModalController', ['$uibModal', RoomModalController]);
})();
