(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('Decklyst')
        .component('feed', {
            templateUrl: './feed.html',
            controller: FeedController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

    FeedController.$inject = ['$scope', '$http'];
    function FeedController($scope, $http) {

        //Get twitch search
        $http.get('https://api.twitch.tv/kraken/streams/?game=duelyst&client_id=um7kstg2y4224j1hcih75kou3i7eo9', {cache: true})
            .then(result => {
                $scope.twitch_feed = result.data.streams;
                console.log($scope.twitch_feed)
            })



        //Get youtube search
        $http.get('https://content.googleapis.com/youtube/v3/search?type=video&q=duelyst&maxResults=50&part=snippet&order=date&key=AIzaSyC4pNoJmLc9UZ79q98LpWbRGj25Ia3m3ps', {cache: true})
            .then(result => {
                const items = result.data.items;
                $scope.youtube_feed = items;

                console.log(items)
            })

        //Get reddit search
        $http.get('https://www.reddit.com/r/duelyst/.json?sort=hot', {cache: true})
            .then(result => {
                $scope.reddit_feed = result.data.data.children;
                console.log(result.data.data.children)
            })
    }
})();