let nameUser = prompt('Введите ваша имя');
let year = +prompt('Введите текущий год');
let age = +prompt('Введите год рождение');

function user (a,b,){
    let primer = a - b
    return primer
}

alert(`${nameUser},Ваш возраст: ${user(year,age)}`);