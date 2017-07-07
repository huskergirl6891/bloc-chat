(function() {
    function UserModalInstanceController($uibModalInstance) {
      var $ctrl = this;

      $ctrl.ok = function () {

        $uibModalInstance.close($cookies.put('blocChatCurrentUser', '$user.text'));
      };

    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceController', ['$uibModalInstance', UserModalInstanceController]);
})();
