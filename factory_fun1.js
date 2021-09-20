var Person = function (name, age) {
    var person = {}; 
    person.name = name;
    person.age = age;
    person.greeting = function () {
        return (
            'Hello I am ' + person.name 
                + '. I am ' + person.age 
                + ' years old. '
        );
    };
    return person;
};

var person1 = Person('Durga', 20);
console.log(person1.greeting());

var person2 = Person('Sanu', 19);
console.log(person2.greeting());