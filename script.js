window.addEventListener('load', () => document.querySelector('.preloader')
.classList.add('hidePreloader'))

const CreateCars = (()=>{
    //car data
 const cars = [];

 //car class
 class Car{
     constructor(make, country, img, special, model, price, type, trans, gas, color) {
         this.make = make;
         this.country = country;
         this.img = img;
         this.special = special;
         this.model = model;
         this.price = price;
         this.type = type;
         this.trans = trans;
         this.gas = gas;
         this.color = color;
       }
   }
   // car create function
   function makeCar(make, country, img = 'img/IMG_4266.jpg', special = true, model = 'A7', price =69900 , type = 'sports car', trans = 'automatic', gas = 19.3, color = 'black') {
       const car = new Car(make, country, img, special, model, price, 
        type, trans, gas, color);
        cars.push(car)
   }
   //produce cars for featured list
   function produceCars(){
       makeCar('Audi', 'germany', 'img/IMG_4266.jpg');
       makeCar('Bently', 'uk', 'img/bentayga.jpg', true, 'Bentayga', 177000, 'sports car', 'automatic', 22.5, 'green');
       makeCar('aston martin', 'uk', 'img/AMVantage.jpg', false,  177000, 'sports car', 'automatic', 22.5, 'green');
       makeCar('aston martin', 'uk', 'img/AMDB11.jpg', false,  177000, 'sports car', 'automatic', 22.5, 'green');
       makeCar('ferrari', 'italy', 'img/ferrariStra.jpg', false,  177000, 'sports car', 'automatic', 22.5, 'green');
       makeCar('ferrari', 'italy', 'img/ferraigtc4lusso.jpg', false);
       makeCar('bmw', 'germany', 'img/IMG_4269.jpg', false);
       makeCar('lamborghini', 'italy', 'img/LamboS.jpg', true, 'Aventador S');
       makeCar('lamborghini', 'italy', 'img/LamboU.jpg', true, 'Urus');
       makeCar('maserati', 'italy', 'img/01-desktop.jpg', true, 'MC20');
       makeCar('chevrolet', 'usa', 'img/IMG_4283.jpg', true, 'Tahoe');
       makeCar('chevrolet', 'usa', 'img/IMG_4284.jpg', false);
   }
   produceCars();
   console.log(cars);

   // special cars = cars created to be used for featured list
   const specialCars = cars.filter(car => car.special === true)
   console.log(specialCars);

   return{
       cars, 
       specialCars
   }
})(); 

const DisplaySpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;
    console.log(specialCars);

    const info = document.querySelector('.featured-info');

    // feautred loaded event
    document.addEventListener('DOMContentLoaded', ()=>{
        info.innerHTML = '';

        let data = "";

        specialCars.forEach(item =>{
            data +=`<!-- single item -->
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span data-img="${item.img}" class="featured-icon mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!-- end of items -->`
        })
        info.innerHTML = data;
    })
    //change img
    info.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains('featured-icon')) {
            const img = event.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
        }
    })
    
})(CreateCars);

