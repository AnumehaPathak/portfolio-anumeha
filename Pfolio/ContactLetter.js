var lApp = angular
    .module("lModule", [])
    .controller("lController", function ($scope) {
        var letter = {
            name: null,
            email: null,
            message: null
        }
        $scope.letter = letter;
        
    });

   
