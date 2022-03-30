import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutHomeComponent } from "./components/layout-home/layout-home.component";

const rotas: Routes = [
    {path: 'home', component: LayoutHomeComponent},
    {path: '**', component: LayoutHomeComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule{}
