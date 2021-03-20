import ListItem from './classes/list-item.js';
import { Validator } from "./library/validator.js";
import { formGroupConfig } from "./configs/form-config.js";
import Human from './classes/human.js';
import Student from './classes/student.js';
import Teacher from './classes/teacher.js';

function range(){
	return Array.from({length: 5}, (v,k) => Math.round( Math.random() * 10 ));
}

let humanContainer = document.getElementById('human-container');
const humanList = new ListItem(humanContainer);

let btnAddStart = document.getElementById('btn-add-start');
let btnAddEnd = document.querySelector('#btn-add-end');
let btnRemove = document.querySelector('#btn-remove');
let btnRefrhesh = document.querySelector('#btn-refresh');
let btnSort = document.querySelector('#btn-sort');
let teacher = new Teacher ({group: [], firstName: 'David', lastName: 'Billson', age: 54});

btnRefrhesh.onclick = function() {
    let list = document.getElementById('group-list');
    list.innerHTML = null;
    teacher.group.forEach(function (item){
        list.innerHTML += `<li> ${item.firstName} ${item.lastName} </li>`
    });
}

btnSort.onclick = function () {
    let list = document.getElementById('group-list');
    list.innerHTML = null;
    teacher.getListOfNamesByAverageMark()
    teacher.group.forEach(function (item){
        list.innerHTML += `<li> ${item.firstName} ${item.lastName} </li>`
    });
}

btnRemove.onclick = function () {
    humanList.removeById(5);
}

btnAddEnd.onclick = function () {
    let id = ++Human.count;
    let form = document.querySelector('#human-form');
    const VALID = Validator.validate(formGroupConfig, form);
    let nameForm = document.getElementById('human-form').elements.firstname.value;
    let surnameForm = document.getElementById('human-form').elements.lastname.value;
    let ageForm = document.getElementById('human-form').elements.age.value;

    if(!VALID) {
        console.log(Validator.errors);
        Object.entries(Validator.errors).forEach(([name, error]) => {
            console.log(name, error);
            let messageError = form.querySelector(`[data-for="${name}"]`);
            form.elements[name].classList.add('error');
            messageError.innerHTML = Object.values(error || {}).map(message => `<span>${message}</span>`).join('')
            messageError.style.display = 'block';
        } )
    } else {
        humanList.add(
         new Human({
            firstName: `${nameForm}`,
            lastName: `${surnameForm}`,
            age: ageForm,
            id: id,
         }),
        'end'
     )
        teacher.group.push(new Student({
        		firstName: `${nameForm}`, 
        		rating: range(),
        		lastName: `${surnameForm}`, 
        		age: ageForm,
                id: id
        	}));
        }
}

btnAddStart.onclick = function () {
    let id = ++Human.count;
    let form = document.querySelector('#human-form');
    const VALID = Validator.validate(formGroupConfig, form);
    let nameForm = document.getElementById('human-form').elements.firstname.value;
    let surnameForm = document.getElementById('human-form').elements.lastname.value;
    let ageForm = document.getElementById('human-form').elements.age.value;
    
    if(!VALID) {
        console.log(Validator.errors);
        Object.entries(Validator.errors).forEach(([name, error]) => {
            console.log(name, error);
            let messageError = form.querySelector(`[data-for="${name}"]`);
            form.elements[name].classList.add('error');
            messageError.innerHTML = Object.values(error || {}).map(message => `<span>${message}</span>`).join('')
            messageError.style.display = 'block';
        } )
    } else {
        // ...
        humanList.add(
            new Human({
                firstName: `${nameForm}`,
                lastName: `${surnameForm}`,
                age: ageForm,
                id
            }),
            'start'
        )
        teacher.group.push(new Student({
            firstName: `${nameForm}`, 
            rating: range(),
            lastName: `${surnameForm}`, 
            age: ageForm,
            id: id
        }));
    }
}



// let form = document.getElementById('human-form').elements.firstname.value;


// let group = [];
// for (let i = 0; i < 5; i++){
// 	group[i] = new Student({
// 		name: `Student ${i}`, 
// 		rating: range(),
// 		surname: `Surname ${i}`, 
// 		age: 20 + i,
// 	});
// }


console.log(teacher);