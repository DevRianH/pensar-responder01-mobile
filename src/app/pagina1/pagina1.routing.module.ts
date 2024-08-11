import { RouterModule, Routes } from "@angular/router";
import { Pagina1Component } from "./pagina1.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: Pagina1Component}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Pagina1RoutingModule {}