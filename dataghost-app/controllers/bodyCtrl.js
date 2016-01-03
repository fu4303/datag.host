(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("bodyCtrl", ['$rootScope', 'mainVisuals', bodyCtrlFunc]);

    function bodyCtrlFunc($rootScope, mainVisuals){
        var vm = this;
        console.log('in controller body');
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.bodyClass = toState.name;
        });

        vm.getClass = function() {
          return $rootScope.bodyClass;
        };

        vm.lightOrDark = function() {
          if($rootScope.bodyClass == 'visuals') {
            return 'light';
          } else {
            return 'dark';
          }
        };

        vm.main_visuals = mainVisuals.main_visuals;
        vm.isCurrentSlideIndex() = mainVisuals.isCurrentSlideIndex();
        vm.setCurrentSlideIndex() = mainVisuals.setCurrentSlideIndex();

        vm.single_echo = "A ghost made out of data,<br>persistent data,<br>independent from it's source.";

    };

})();
