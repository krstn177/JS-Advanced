function solve(car) {
    let result = {
        model: car.model,
        engine: {},
        carriage:{},
        wheels: []
    };
    result.model = car.model;
    if (car.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    } else if (car.power >90 && car.power <= 120 ){
        result.engine.power = 120;
        result.engine.volume = 2400;
    } else {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }

    result.carriage.type = car.carriage;
    result.carriage.color = car.color;
    car.wheelsize = Math.floor(car.wheelsize);
    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1;
    }
    for (let i = 0; i < 4; i++) {
        result.wheels.push(car.wheelsize);
    }
    return result;
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)