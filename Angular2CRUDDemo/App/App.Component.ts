import { Component } from "@angular/core";
import { CarsComponent } from './Student.component/Student.component';
@Component({
    selector: 'my-app',
    template: `<div id="digital-layout">          
                <section id="page-content">
                    <div id="data-container">
                        <of-car></of-car>
                    </div>
                </section>
            </div>
            `,
})
export class AppComponent {
    private show: boolean = false;
    private message: string;    
}


