document.addEventListener("DOMContentLoaded", function () {

let dogs = [
    {
        name: "Coco",
        breed: "Border Collie",
        age: "6 months",
        image: "d1.png",
        background: "#f1c3b6"
        
    },
    {
        name: "Bailey",
        breed: "Siberian Huskey",
        age: "4 months",
        image: "d2.png",
        background: "#f7d8bb"
        
    },
    {
        name: " Charlie",
        breed: "Golden Retriever",
        age: "12 months",
        image: "d3.png",
        background: "#c7e1d3"
    },
    {
        name: " Sheero",
        breed: "Labrador Retriever",
        age: "12 months",
        image: "d4.png",
        background: "#93b4a7"
    },
    {
        name: "Dexter",
        breed: "Corgi",
        age: "2 months",
        image: "d5.png",
        background: "#f7d8bb"
    },
    {
        name: "Oliver",
        breed: "Corgi",
        age: "2 months",
        image: "d6.png",
        background: "#93b4a7"
    },
    {
        name: "Bella",
        breed: "Pomeranian",
        age: "14 months",
        image: "d7.png",
        background: "#f1c3b6"
    },
    {
        name: "Max",
        breed: "Corgi",
        age: "4 Months",
        image: "d8.png",
        background: "#c7e1d3"
    },
    {
        name: "Buzo",
        breed: "Golden Retriever",
        age: "2 Months",
        image: "d9.png",
        background: "#f7d8bb"
    },
    
    {
        name: "Sam",
        breed: "Golden Retriever",
        age: "24 months",
        image: "d10.png",
        background: "#93b4a7"
    }
];


const container = document.querySelector(".container");
const sortName = document.querySelector(".sort-name");
const sortAge = document.querySelector(".sort-age");


function sortdogsByName(){
    // compare strings in a locale-sensitive manner. It returns a value indicating whether one 
    // string comes before, after, or is the same as the compared string

    return dogs.sort((dog1 , dog2) => dog1.name.toLowerCase().localeCompare(dog2.name.toLowerCase()));
};

function sortdogsByAge(){
    return dogs.sort((dog1,dog2) => {

        // parseInt is taking a string a returning its integer value
        const age1=parseInt(dog1.age);
        const age2=parseInt(dog2.age);

        return age1-age2;
    });
};

function displaydogs(dogsToShow) {
    container.innerHTML = '';

    dogsToShow.forEach(dog => {
        const box = document.createElement('div');
        box.className='box';
        box.style.backgroundColor=dog.background;

        const detailBox=document.createElement('div');
        detailBox.className='detail-box';

        const name=document.createElement('a');
        name.className='name';
        name.innerHTML=`<h2>${dog.name}<\h2>`;

        const breed=document.createElement('a');
        breed.className='breed'
        breed.innerHTML=` ${dog.breed}`;

        const age=document.createElement('a');
        age.className='age';
        age.innerHTML=`${dog.age}`;

        detailBox.appendChild(name);
        detailBox.appendChild(breed);
        detailBox.appendChild(age);

        const slideImg = document.createElement('div');
        slideImg.className='slide-img';

        const img = document.createElement('img');
        img.src=dog.image;
        img.alt=dog.name;

        slideImg.appendChild(img);

        box.appendChild(detailBox);
        box.appendChild(slideImg);

        container.appendChild(box);
    });
}

sortName.addEventListener('click',function(){
    const sorteddogsNames = sortdogsByName();
    displaydogs(sorteddogsNames);
});

sortAge.addEventListener('click',function(){
    const sorteddogsAge = sortdogsByAge();
    displaydogs(sorteddogsAge);
});

displaydogs(dogs);
});