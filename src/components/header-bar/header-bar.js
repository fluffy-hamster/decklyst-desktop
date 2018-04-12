(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Decklyst')
        .component('headerBar', {
            templateUrl: './header-bar.html',
            controller: HeaderBarController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

    HeaderBarController.$inject = ['$scope', 'User', '$timeout'];
    function HeaderBarController($scope, User, $timeout) {
        console.log(User)

        const connectedRef = firebase.database().ref(".info/connected");
        connectedRef.on("value", snap => {
            $timeout(() => {
                $scope.status = snap.val() ? 'online' : 'offline';
            })
        });

        ////////////////

    }
})();