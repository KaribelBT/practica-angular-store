import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../products/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<string> = new EventEmitter();
    today = new Date();
    constructor() {
        console.log('1 constructor');
    }
    /* ngOnChanges(changes: SimpleChanges) {
        console.log ('2 ngOnChanges', changes);
    } */
    ngOnInit () {
        console.log ('3 ngOnIn');
    }
    ngDoCheck () {
        console.log ('4 ngDoCheck');
    }
    ngOnDestroy () {
        console.log ('4 ngOnDestroy');
    }
    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
