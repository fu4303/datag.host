(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("indexCtrl", ['mainVisuals', indexCtrlFunc]);

    function indexCtrlFunc(mainVisuals){
        var vm = this;
        console.log('in controller index');
    };

})();
