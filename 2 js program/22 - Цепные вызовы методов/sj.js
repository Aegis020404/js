var Vec2 = function(x,y) { // класс для работы с двухмерными объектами
    this.x = x;
    this.y = y;
};

Vec2.prototype.add = function(vec){
    this.x += vec.x;
    this.y += vec.y;
    return this;
}

var world ={//для хранения гравитации
    gravity: new Vec2(0,1) ,
    airResistance: .9, //коэффицент сопротивления воздуха
    wind: new Vec2(10, 1),//ветер
    control: new Vec2(-3 ,-5)//сила контролируемая пользователем
};

Vec2.prototype.multScalar = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
    return this;
}

var object = {
    position: new Vec2(10,20),//x=10;y=20
    speed: new Vec2(1,3),     //x=1;y=3
    upadate: function(){//update object state
        
        this.speed
        .add(world.gravity) 
        .add(world.wind)
        .add(world.control)
        .multScalar(world.airResistance);

        


    return this.position.add(this.speed);
        
    } 
};

console.log(object.upadate());
console.log(object.upadate());
console.log(object.upadate());
console.log(object.upadate());
console.log(object.upadate());
