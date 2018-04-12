(function () {
    'use strict';

    angular
        .module('Decklyst')
        .factory('User', User);

    User.$inject = [];
    function User() {
        var service = {
            getOnlineStatus
        };

        return service;

        ////////////////

        function getOnlineStatus() {
            return new Promise((resolve, reject) => {
                const connectedRef = firebase.database().ref(".info/connected");
                connectedRef.on("value", snap => resolve(snap.val()));
            })
        }
    }
})();