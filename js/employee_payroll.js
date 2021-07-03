class employee_payroll {
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(id,name,salary,gender,startDate){
    this.id= id;
    this.name=name;
    this.salary=salary;
    this.gender=gender;
    this.startDate = startDate;
    }

    get name() {
    return this.name;
    }
    /**
     * @param {any} name
     */
    set name(name){
    let nameRegex = regExp('^[A-Z]{1}[a-z A-Z \\s]{2,}$');
    if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect!';
    }
    toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" :
        this.startDate.toLocalDateString("en-US", options);
    return "id=" + this.id + ", name = '" + this.name + ", gender = '" + this.gender +
        ", profilePic = '" + this.profilePic + ", department = " + this.department +
        ", Salary = " + this.salary + "startDate = " + empDate + ", note = " + this.note;
    }
}