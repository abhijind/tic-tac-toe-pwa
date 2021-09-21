import {NgModule} from '@angular/core';
import {SquareComponent} from './components/square/square.component';
import {BoardComponent} from './components/board/board.component';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [SquareComponent, BoardComponent, FooterComponent],
    exports: [CommonModule, BoardComponent, FooterComponent]
})
export class SharedModule {

}
