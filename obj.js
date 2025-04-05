let person={
    Name:"Saranya",
    Age:17,
    City:"paris"
}
console.log("person")

for(let i in person ) {
    console.log(i);
    console.log(i, person[i]);
}
for(let i in person ) {
    console.log(i, person[i]);
}
console.log(person.name);
console.log(person.age);
console.log(person["city"]);
//update

//add
person.mobile="xxx-xxxx-xxx"
console.log(person);
//delete
delete person.city
console.log(person);

//objct in object 
let university={
Name:Parul university
Place:Vadodara
}
student:{
    stud_name:"abc",
    stud_marks:89,
    stud_roll:2403031460118
} 
 