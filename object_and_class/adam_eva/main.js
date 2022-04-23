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

    isMale() {
        return this.gender.toLowerCase() == "male";
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

let adam = new Human("Adam", "male", 80);
let eva = new Human("Eva", "female", 50);

adam.say("I am Adam");
eva.say("I am Eva");

while(!apple.isEmpty()) {
    alert("Adam eat apple!");
    adam.eat(apple);
    alert("Adam weight is " + adam.getWeight());

    alert("Eva eat apple!");
    eva.eat(apple);
    alert("Eva weigh is " + eva.getWeight());

    alert("Apple weight is " + apple.getWeight());
}

alert("End!");