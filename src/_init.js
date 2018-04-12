import angular from 'angular';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import * as router from '@uirouter/angularjs';

(function () {
    'use strict';


    angular.module('Decklyst', [
        'ui.router'
    ])

        .config(($stateProvider, $urlRouterProvider) => {
            var homeState = {
                name: 'home',
                url: '/',
                templateUrl: 'home.html'
            }

            var decksState = {
                name: 'decks',
                url: '/decks',
                templateUrl: 'decks.html'
            }

            $urlRouterProvider.otherwise('/');

            $stateProvider.state(homeState);
            $stateProvider.state(decksState);
        })

        .run(() => {
            var config = {
                apiKey: "AIzaSyBRLBUdf__RvOTaXFur-RS9HwJ82BvgfbM",
                authDomain: "decklyst-7342d.firebaseapp.com",
                databaseURL: "https://decklyst-7342d.firebaseio.com",
                projectId: "decklyst-7342d",
                storageBucket: "decklyst-7342d.appspot.com",
                messagingSenderId: "955045409922"
            };
            firebase.initializeApp(config);
        })
})();