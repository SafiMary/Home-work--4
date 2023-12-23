let car ={
    manufacturer:'VAZ',
    model:'2110',
    year:'2010-06-14',
    average_speed:210
};

info(car);
timeTravel();
yearAgo('2010-06-14');

function info(obj){
    alert(`Производитель: ${obj.manufacturer},\nМодель: ${obj.model},\nГод выпуска: ${obj.year},\nСредняя скорость: ${obj.average_speed}  км`);
}

function timeTravel(){
    let distance = prompt("Введите расстояние");
    let average_speed = prompt("Введите среднюю скорость");
    let timePath = distance/average_speed;
    let timeRelax = (timePath%4 == 0)? (timePath/4 | 0) - 1: timePath/4| 0;
    let timeTotal = distance/average_speed + timeRelax;
alert(`Время в пути составило: ${timeTotal} часов`);
    
}

function yearAgo(year){
    var now =  new Date();
    var year_issue = new Date(year);
    var age = now.getFullYear() - year_issue.getFullYear();
    var m = now.getMonth() - year_issue.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < year_issue.getDate())) {
        age--;
    }
    alert(`Вашему авто ${age} лет`);
    return age;
    
}
