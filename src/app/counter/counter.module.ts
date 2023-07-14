import { NgModule } from "@angular/core";
import { CounterComponent } from "./ui-components/counter/counter.component";


@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {



}