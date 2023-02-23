import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    first = "I'm learning  " ;
    second ="Zero to hero";
    ChangeInput(event)
    {
        this.second= event.target.value;
    }
}