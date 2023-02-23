import { LightningElement, track } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    //Two way data binding
    first = "I'm learning  " ;
    second ="Zero to hero";
    ChangeInput(event)
    {
        this.second= event.target.value;
    }
    //@track property
    @track address= {
        name: `pragati`,
        city: `Tumsar`,
        age: 22
    }
    ChangeCity(event){
        this.address.city = event.target.value;
    }
}