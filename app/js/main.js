(function () {

    var moduleName = 'app',
        requires = [];

    angular.module(moduleName, requires)
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope) {
        $scope.name = '';
    }
    AppCtrl.$inject = ['$scope'];

})();