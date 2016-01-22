// Make sure to include the `ui.router` module as a dependency
var app = angular.module('app', ['ui.router', 'ngAnimate'])


.controller('MyController', ['$scope', '$state', function($scope, $state) {   



  $scope.showstate = function() {
    console.log('showstate: ' + $state.get());
        

    var sts = $state.get();
     console.log('stateobj.name: ' + stateobj.name);

    //$state.go('food');
    
     return ; 
  };



  $scope.dumpstate = function() {
    var sts = $state.get();

    sts.forEach(function(stateobj) {

     console.log('stateobj.name: ' + stateobj.name);

    });

    //$state.go('food');
    
     return ; 
  };




}])


    .run(function($rootScope) {

          $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
          });
          $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.log('$stateChangeError - fired when an error occurs during transition.');
            //console.log(arguments);

            console.log('arguments: ' + error);
            console.log('arguments: ' + toParams);
            console.log('arguments: ' + fromParams);

          });
          $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeSuccess to ' + toState.name + ' - fired once the state transition is complete.');

            console.log('arguments: toParams: ' + JSON.stringify(toParams));

          });
          $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
            // runs on individual scopes, so putting it in "run" doesn't work.
            console.log('$viewContentLoading - view begins loading - dom not rendered', viewConfig);


          });
          $rootScope.$on('$viewContentLoaded', function (event) {
            console.log('$viewContentLoaded - fired after dom rendered', event);
          });
          $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
            console.log(unfoundState, fromState, fromParams);
          });


        }

    )


.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider

      // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
      // Here we are just setting up some convenience urls.
      //.when('/c?id', '/contacts/:id')
      //.when('/user/:id', '/contacts/:id')

      // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
      //.otherwise('/');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider

      //////////
      // Home //
      //////////

      .state("home", {

        // Use a url of "/" to set a state as the "index".
        url: "/",
        template: 'Nobody home'
      })

	
      ///////////
      //Horses//
      ///////////       
      .state('horses', {
        url: '/horses',      
         views: {
          '': {
            template: '<img src="images/spottedhorse.jpg" />'
          } ,
		  'mview@horses': {
            template: '<img src="images/blackhorse.jpg" />'
          }

        }
      })


	 	
      ///////////
      //Brown Horse//
      ///////////       
      .state('brownhorse', {
        url: '/brownhorse',      
         views: {
          '': {
            template: '<img src="images/brownhorse.jpg" />'
          }

        }
      }) ;
	  
	  	  

    }
  ]
);

