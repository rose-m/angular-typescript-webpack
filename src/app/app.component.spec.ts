import App from './index';
import {AppComponent} from './app.component';

describe('App', () => {
    let $componentController:ng.IComponentControllerService;

    beforeEach(angular.mock.module(App.name));
    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('should have an url', () => {
        const comp:AppComponent = <any> $componentController('app', null);
        expect(comp.url).toBe('https://github.com/rose-m/angular-typescript-webpack');
    });

});
