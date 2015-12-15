/**
 * Created by hongbojing on 12/15/15.
 */
angular
    .module('gemStore')
    .controller('testController', testController)
;

function testController() {
    var vm = this;
    vm.test = 'Hello World';
}