mainmodule.controller('HomeController', ['$scope', '$state', '$rootScope', '$modal', '$http', '$cookies', 'toastr', '$dao', '$account',
    function ($scope, $state, $rootScope, $modal, $http, $cookies, toastr, $dao, $account) {

        $scope.goToBookingCar = function () {
            $state.go('main.bookingcar'); 
        };
        $scope.bookingCar = function () {
            $scope.goToBookingCar(); 
        }

        //var AccountInfo = $account.getAccountInfo();
        //var result = CheckAccountLoginAndChangePass(AccountInfo);
        //switch (result) {
        //    case 1: 
        //        $scope.goToLogin();
        //        break;
        //    case 2: 
        //        $scope.goToChangePassword();
        //        break;
        //    case 3:
        //        $scope.UserName = AccountInfo.ObjAccountInfo.FullName;
        //        break;
        //}

    }]);
           