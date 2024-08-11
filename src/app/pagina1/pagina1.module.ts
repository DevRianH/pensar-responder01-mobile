import { NgModule } from "@angular/core";
import { Pagina1Component } from "./pagina1.component";
import { CommonModule } from "@angular/common";
import { Pagina1RoutingModule } from "./pagina1.routing.module";

@NgModule({
    declarations: [Pagina1Component],
    imports: [
        CommonModule,
        Pagina1RoutingModule
    ]
})
export class Pagina1Module {

}