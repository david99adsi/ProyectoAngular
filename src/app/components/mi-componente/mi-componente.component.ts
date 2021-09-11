import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
    /*template: `
        
    `*/
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola que tal, SOY UN COMPONENTE";
        this.comentario = "Yo soy el primer componente";
        this.year = 1;
        console.log("componenete mi-componente cargado Existosamente!!");
        console.log(this.titulo, this.comentario, this.year);
    }

}