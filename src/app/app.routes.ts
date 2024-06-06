import { Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

export const routes: Routes = [
    {
        path:'cabecera', component:CabeceraComponent
    },
    {
        path:'slider', component:SliderComponent
    },
    {
        path:'body', component:BodyComponent
    },
    {
        path:'footer', component:FooterComponent
    }

];
