(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Decklyst')
        .component('stats', {
            templateUrl: './stats.html',
            controller: StatsController,
            controllerAs: '$ctrl',
        });

    StatsController.$inject = ['$scope'];
    function StatsController($scope) {

    }
})();