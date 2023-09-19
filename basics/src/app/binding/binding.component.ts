import { Component } from '@angular/core';
import { Student, studentCollection} from 'src/models/student'; // importing more than one from same folder

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  collection: Array<Student> = []; // for bulinding variable of Students class datatype using array
  title: string = ''; // basic intilalizing variable -- strongly typed
  // ngOnChanges
  ngOnInit(){ // start fire (component load--> ngOnInit gets triggered)
    this.title='Harsh';
    // contant vs variable -- weakly typed (no datatypes are being defined)
    const a = 1; // constant throughout the code
    var b = 2; // var could be any datatype (int, bool, class)
    b=5;
    console.log('collection: ', this.collection); // this keyword is when we need to access class golabl variable
    this.initialiseStudents();
  }
  initialiseStudents(){
    // this.collection = new Array<Student>();
    // var s = new Student();
    // s.id = 1;
    // s.name = 'Swati'
    // s.address = 'sant nagar';
    // s.phone = 100;
    // this.collection.push(s)

    // var h = new Student();
    // s.id = 2;
    // s.name = 'Gopal'
    // s.address = 'sant nagar';
    // s.phone = 101;
    // this.collection.push(h);

    this.collection=studentCollection;
    console.log('collection: ', this.collection);
  }
}
