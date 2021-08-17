'use strict';

let clas = {};
let mas = [];
let summ = 0;

function Students(id, name, sname){
    this.id = id;
    this.name = name;
    this.sname = sname;
    this.grade = [];
    this.atend = [];
    this.data = new Date();
}
 for(let i = 0; i < 20; i++){
        mas.push(new Students(i+1, `name${i+1}`, `sname${i+1}`));
    }
 for(let k = 0; k < mas.length; k++){
        mas[k].grade[k] = Math.random()*10;
        summ += mas[k].grade[k];

         if (Math.round(Math.random()*10) % 2 == 0 ) {
                mas[k].atend[k] = "x";
         }
         else {
                mas[k].atend[k] = "n";
            }
    }
console.log(mas);
clas.Students = mas;
clas.vidurkis = function(){
    console.log("klases studentu pazymiu vidurkis: ", summ / this.Students.length);
};
clas.vidurkis();

