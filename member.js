function skillsMember() {
    return{
        restrict: 'E',
        templateUrl: 'app/components/skills-member/skills-member.html',
        scope: {
            member: '='
        },
        controller: function($scope) {
            $scope.skills = $scope.member.skills;
        }
    }
}