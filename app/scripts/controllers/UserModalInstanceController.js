(function() {
    function UserModalInstanceController($uibModalInstance, $cookies) {
      var $user = this;

      $user.ok = function () {

        var tempName = $user.text;

        if (tempName !== undefined && tempName !== '') {
          $uibModalInstance.close($cookies.put('blocChatCurrentUser', $user.text));
        }

      };

    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceController', ['$uibModalInstance', '$cookies', UserModalInstanceController]);
})();
