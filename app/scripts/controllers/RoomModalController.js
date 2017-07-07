(function() {
    function RoomModalController($uibModal) {

      var $ctrl = this;

      $ctrl.open = function () {

        var modalInstance = $uibModal.open({
          templateUrl: 'modal.html',
          controller: 'RoomModalInstanceController',
          controllerAs: '$ctrl',
          resolve: {
            items: function () {
              return $ctrl.items;
            },
          }
        });

        modalInstance.result.then(function (roomname) {
          $ctrl.roomname = roomname;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
    }



    angular
        .module('blocChat')
        .controller('RoomModalController', ['$uibModal', RoomModalController]);
})();
