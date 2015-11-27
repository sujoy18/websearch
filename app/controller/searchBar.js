searchModule.controller('searchBar', ['$scope', '$rootScope',
 function ($scope,
 $rootScope
 ) {

    $scope.onLoad = function ()
    {
      
        $scope.showSearchIcon = true;
    }
    $scope.searchCustomer = function ()
    {
       $rootScope.$emit('performSearch', $scope.searchKey)
       $scope.showSearchIcon = false;
    }
    $scope.clearSearch = function ()
    {
        $scope.showSearchIcon = true;
        $rootScope.$emit('clearSearch', $scope.searchKey)
    }

}]) 