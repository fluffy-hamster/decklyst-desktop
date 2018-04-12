(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Decklyst')
        .component('leftSidebar', {
            templateUrl: './left-sidebar.html',
            controller: LeftSidebarController,
            controllerAs: '$ctrl',
        });

    LeftSidebarController.$inject = ['$scope'];
    function LeftSidebarController($scope) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();