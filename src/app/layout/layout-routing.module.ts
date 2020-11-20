import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductDetailComponent } from '../products/components/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
              path: '',
              redirectTo: '/inicio',
              pathMatch: 'full',
            },
            {
              path: 'inicio',
              loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
            },
            {
              path: 'productos',
              loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
            },
            {
              path: 'productos/:id',
              component: ProductDetailComponent
            },
            {
              path: 'contacto',
              loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
            }
          ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]

})

export class LayoutRoutingModule { }
