// Закусочная

// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:

// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера.

//Размеры гамбургеров:

Humburger.sizeSmall = {
    cost : 50,
    calorie : 20
};

Humburger.sizeLarge = {
    cost : 100,
    calorie : 40
};

// Виды начинок:

Humburger.cheese = {
    cost : 10,
    calorie : 20
};

Humburger.salad = {
    cost : 20,
    calorie : 5
};

Humburger.potatoes = {
    cost : 15,
    calorie : 10
};

// Добавки к гамбургеру:

Humburger.flavoring = {
    cost : 15,
    calorie : 0
};

Humburger.mayonnaise = {
    cost : 20,
    calorie : 5
};

function Humburger (size, stuffing) {

    var price = size.cost + stuffing.cost;
    var calories = size.calorie + stuffing.calorie;
    var addingToppings = [];
		
		
    
    // Функция добавления добавок (масло масляное)) ) 

    this.addTopping = function (toping) {  
        addingToppings.push(toping);
    };

    //Функция подсчета каллорий:

    this.calculateCalories = function (){  
        
        return addingToppings.reduce( function (sum, addTopping){
            return sum + addTopping.calorie;
        }, calories);
    };

    // Функция подсчета цены:

    this.calculatePrice = function (){

        return addingToppings.reduce( function (sum, addTopping){
            return sum + addTopping.cost;
        }, price);
    };
};


//Пример подсчета скопирован из примера задания:

// маленький гамбургер с начинкой из сыра

var hamburger = new Humburger (Humburger.sizeSmall, Humburger.cheese);

// добавка из майонеза

hamburger.addTopping(Humburger.mayonnaise);

// спросим сколько там калорий

console.log('Calories: ' + hamburger.calculateCalories());

// сколько стоит

console.log('Price: ' + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Humburger.flavoring);

// А сколько теперь стоит?

console.log('Price with sauce: ' + hamburger.calculatePrice());