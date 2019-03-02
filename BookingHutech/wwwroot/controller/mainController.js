
// vùng hiển thị dự liệu chính. 
mainmodule.controller('mainController', ['$scope', '$state', '$rootScope', '$modal', '$http', '$cookies', 'toastr', '$dao',  '$account',
    function ($scope, $state, $rootScope, $modal, $http, $cookies, toastr, $dao, $account) {

       
        $scope.goToChangePassword = function () {
            $state.go('changePassword');
            return;
        };
        $scope.goToLogin = function () {
            $state.go('login');
            return;
        };
        var AccountInfo = $account.getAccountInfo();
        var result = CheckAccountLoginAndChangePass(AccountInfo);
        switch (result) {
            case 1:  
                $scope.goToLogin(); 
                break; 
            case 2: 
                $scope.goToChangePassword(); 
                break; 
            case 3:
                $scope.UserName = AccountInfo.ObjAccountInfo.FullName;  
                break; 
        }

        $scope.logout = function () {

            var AccountInfo = $account.getAccountInfo();
            $scope.goToLogin = function () {
                //$cookies.remove("AccountInfo");
                //$cookies.remove("AccountInfo_");
                //$cookies.remove("ObjRoleCode");
                $account.RemoveAccountInfo();
               // $scope.close();
                $state.go('login');
            };

            if (checkNull(AccountInfo) === true) {
                $scope.goToLogin();
                return;
            }
            $scope.reqLogout = {
                Account_ID: AccountInfo.ObjAccountInfo.Account_ID,
            }

            //*** Funciton 1: Gọi hàm logout 
            $account.Logout($scope.reqLogout, function (res) {

                switch (res.data.ReturnCode) {
                    case 0:
                        toastr.error($rootScope.initMessage('LogoutFail'));
                        break;
                    case 1:
                       // $modalInstance.close();
                        $scope.goToLogin();
                        break;
                }

            });















            ////toastr.success("Logout");
            //var modalInstance = $modal.open({
            //    animation: true,
            //    ariaLabelledBy: 'modal-title',
            //    ariaDescribedBy: 'modal-body',
            //    templateUrl: '/wwwroot/views/pages/account/popupLogout.html',
            //    controller: 'LogoutController',
            //    controllerAs: 'content',
            //    backdrop: 'static',
            //    size: 'sm',
            //    resolve: {
            //        RequestData: function () {
            //            return null;
            //        },
            //    }
            //});
            //modalInstance.result.then(function () {

            //});
        }
    }]);



 