export class HomeComponent {
    constructor() {
        console.log('hey');
    }
}

const comp:ng.IComponentOptions = {
    controller: HomeComponent,
    template: require('./home.component.html')
};

export default comp;
