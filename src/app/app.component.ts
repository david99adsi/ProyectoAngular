import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Tenica';

  datosMenu=[{
    'titulo':'GOOGLE',
    'icon':'fas fa-home',
    'url':'https://www.google.com/'
   },
   {
     'titulo':'bootstrap',
     'icon':'fas fa-clock',
     'url':'https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp'
    }];

}



