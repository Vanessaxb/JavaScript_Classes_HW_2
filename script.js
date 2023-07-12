//*Static Methods and Properties
class Governor {
    static integrity(){
        return 'No Penalty';
    }
    static background(){
        return 'Hard worker';

    }
}
console.log(Governor.integrity());
console.log(Governor.background());

// static addCohort(newCohort) {
//     this.cohorts.push(newCohort);

class Person{
    constructor(name, age, maritalstatus){
        this.name = name;
        this.age = age;
        this.maritalstatus = maritalstatus
    }

    getName(name) {
        console.log(this.name.toUppercase);
    }

    getAge(age) {
        return `Your age is ${this.age}*10 years old`;
    }

    getMaritalStatus(maritalstatus) {
        console.log(`Are you ${this.maritalstatus}?`);
    }

}
class PostalWorker extends Person {
    delivery() {
        console.log('You\'ve got mail');
    }
    delay() {
      console.log(`No mail for ${this.name} today`);  
    }
}

class Chef extends Person {
    dinner() {
        console.log(`${this.name}, what would you like for dinnner?`);
    }
    dessert() {
        return 'getting full'
    }
}

const PostalWorker1 = new PostalWorker('John', '38', 'single');
const PostalWorker2 = new PostalWorker('Mia', '20', 'single');
const Chef1 = new Chef('Michael', '42', 'married');
const Chef2 = new Chef('Becky', '50', 'married');
console.log(Chef1.dessert());