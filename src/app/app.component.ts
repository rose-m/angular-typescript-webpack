require('./app.component.scss');

export class AppComponent {
    url = 'https://github.com/rose-m/angular-typescript-webpack';

    constructor() {
    }
}

const component:ng.IComponentOptions = {
    controller: AppComponent,
    template: require('./app.component.html')
};

export default component;
