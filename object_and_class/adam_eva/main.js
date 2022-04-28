class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        if(this.weight > 0) {
            this.weight--;
        }
    }

    isEmpty() {
        return this.weight == 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;

    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        return !apple.isEmpty();
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.weight++;
        }
    }

    say(something) {
        alert(something);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}

alert("Create apple!");
let apple = new Apple();
alert("Apple was created!");

let adam = new Human("David", "male", 80);
let eva = new Human("Victoria", "female", 50);

adam.say("I am " + adam.getName());
eva.say("I am " + eva.getName());

while(!apple.isEmpty()) {
    alert(adam.getName() + " eat apple!");
    adam.eat(apple);
    alert(adam.getName() + " weight is " + adam.getWeight());

    alert(eva.getName() + " eat apple!");
    eva.eat(apple);
    alert(eva.getName() + " weight is " + eva.getWeight());

    alert("Apple weight is " + apple.getWeight());
}

alert("End!");