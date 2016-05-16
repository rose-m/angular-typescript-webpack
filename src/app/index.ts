import Component from './app.component';
import Home from './home';

const app = angular
    .module('app', [
        'ui.router',
        Home.name
    ])
    .config(($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<app-home></app-home>'
            });

        $urlRouterProvider.otherwise('/home');
    })
    .component('app', Component);

export default app;
