import {NgModule} from '@angular/core';
import {ComputerComponent} from './computer/computer.component';
import {ManualComponent} from './manual/manual.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const ROUTES: Routes = [
    {path: 'computer', component: ComputerComponent},
    {path: 'manual', component: ManualComponent}
]

@NgModule({
    declarations: [
        ComputerComponent,
        ManualComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES), SharedModule
    ]
})
export class PlayModule {
}
