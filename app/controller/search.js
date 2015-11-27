searchModule.controller('searchController', ['$scope', '$rootScope','$http', 'addslotUtility',
    function ($scope, $rootScope,$http, addslotUtility) {
    $scope.siteList = [];
    var serverData;
    $scope.showSearchBox = false;
    $rootScope.$on('performSearch', function (event, arg) {
        $scope.showSearchBox = true;
        $scope.searchClass = 'center-container-grey';
        $scope.siteList= serverData
        $scope.showSearchList = true;   
    })
    $rootScope.$on('clearSearch', function (event, arg) {
        $scope.showSearchBox = false;
        $scope.siteList = [];
        $scope.searchClass = 'center-container';
        $scope.showSearchList = false;
        $scope.searchKeyword.text = "";
    })
    
    $scope.onLoad = function () {       
        $scope.searchClass = 'center-container';
        $scope.searchKeyword={};
        $scope.searchKeyword.text = "";
        $scope.showSearchList = false;
        $scope.filterTest = "Hasan";
        $http.get('http://localhost:3000/search')
        .success(function(data){
            debugger;
               serverData=data;
        }).error(function(err){
            debugger;
             console.log(err);
        })
    }

    $scope.searchSiteData = function ()
    {
        $scope.showSearchList = true;
        searchKeyword = $scope.searchKeyword.text;  
        var categoryIds = [];
        var siteData = [];
        $scope.siteList = [];

        var category = Enumerable.From(categories).Where(function (x) {
            if (x.description.indexOf(searchKeyword) >= 0)
                return x;
        }).ToArray();
        
        if (category.length != 0) {
            for (var i = 0; i < category.length; i++) {
                categoryIds.push(category[i].id);
            }
          
            siteData = Enumerable.From(serverData).Where(function (x) {
                
                var filteredSite = Enumerable.From(x.categoryIds).Intersect(categoryIds).ToArray();
                if (filteredSite.length != 0) {
                    return x;
                }
            }).ToArray();
        }
        else {
            siteData = Enumerable.From(serverData).Where(function (x) {
             
                return x.siteName.indexOf(searchKeyword) >= 0 || addslotUtility.parseUrl(x.siteUrl).host.indexOf(searchKeyword) >= 0 || x.description.indexOf(searchKeyword) >= 0;
            }).ToArray();
        }
        if (siteData.length > 0)
            $scope.siteList = siteData;
    }

   
}
]);