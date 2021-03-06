/**
 * Created by Rannn505 on 9/27/2015.
 */

angular.module('exampleModule',['ngScopeStorage'])
    .controller('exampleCtrl', function ($scope,$vms) {

        $vms.config({scope:$scope, ctrlName:'exampleCtrl', prefix:'exampleApp'});

        $vms.variableToBind = 'Im in $scope and in browser storage';
        $vms.counter = 0;

        $vms.increase = function () {
            $vms.counter += 1;
            console.log(localStorage.getItem($vms.prefix.concat("variableToBind")));
        };
    });
