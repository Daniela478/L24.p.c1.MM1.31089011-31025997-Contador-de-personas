export default class CL_cantidad {
    constructor() {
        this.contMujeres = 0;
        this.contHombres = 0;
    }

    procesarpersonas (p) {
     if (p.sexo == "F"){
        this.contMujeres++;
     }
     if (p.sexo == "M")
        this.contHombres++;
    }
    cantpersonas (){
        return (this.contMujeres + this.contHombres);
    }
    mostrarHombres (){
        return this.contHombres;
    }
    mostrarMujeres (){
        return this.contMujeres;
    }
}