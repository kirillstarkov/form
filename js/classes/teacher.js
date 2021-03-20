import Human from './human.js';
export default class Teacher extends Human {
	constructor ({group, ...info}){
		super(info);
		this.group = group ;
	}

	getListOfNamesByAverageMark() {
		return this.group.sort((a,b) => a.averageMark(a.rating) > b.averageMark(b.rating) ? -1 : 1);
	}

	getStudentByName(name) {
		return this.group.find(i => i.name == name);	
	}

	deleteStudentByName(name){
		return this.group.filter( student => student.name != name );
	}

	updateStudentByName(name, info){
		this.group.splice(group.indexOf(group.find(i => i.name == name), 0), 1, new Student (info));
	}
}