function user(name, hobbies){
    this.name = name;
    this.hobbies = hobbies; 
}

user.prototype.introduce = function(){
    console.log(this.name + "hobbies are "+ this.hobbies);
}

let person1 = new user("Vidya", ["coding", "cooking", "music"]);
let person2 = new user("Bhargavi", ["coding", "gaming"]);
//console.log(person1.introduce());

person2.introduce();
//person2.introduce();


//var name = input();

