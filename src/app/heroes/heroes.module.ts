import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./ui-components/hero/hero.component";
import { ListComponent } from "./ui-components/list/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}