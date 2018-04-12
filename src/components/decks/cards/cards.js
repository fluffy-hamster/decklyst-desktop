(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Decklyst')
        .component('cards', {
            templateUrl: './cards.html',
            controller: CardsController,
            controllerAs: '$ctrl',
        });

    CardsController.$inject = ['$scope', '$http'];
    function CardsController($scope, $http) {
        
        $http.get('https://raw.githubusercontent.com/Constitute/decklyst-desktop/cards/cards.json?v=' + Math.random())
            .then(result => {
                console.log(result.data)
            })

    }
})();