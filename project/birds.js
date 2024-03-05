document.addEventListener("DOMContentLoaded", function () {

    let birds = [
        {
            name: "Seraphina",
            breed: "Homing Pigeon",
            age: "6 months",
            image: "b1.png",
            background: "#f1c3b6"
            
        },
        {
            name: "Sunny",
            breed: "Peach shaped lovebird",
            age: "1 year",
            image: "b2.png",
            background: "#f7d8bb"
            
        },
        {
            name: "Angel",
            breed: "White Dove",
            age: "6 months",
            image: "b3.png",
            background: "#c7e1d3"
        },
        {
            name: "Lemmy",
            breed: "Cockatiel",
            age: "10 months",
            image: "b4.png",
            background: "#93b4a7"
        },
        {
            name: "Aurora",
            breed: "Major Mitchell's Cockatoo",
            age: "3 years",
            image: "b5.png",
            background: "#f7d8bb"
        },
        {
            name: "Buttercup",
            breed: "Lutino Cockatiel",
            age: "1 year",
            image: "b6.png",
            background: "#c7e1d3"
        },
        {
            name: "Pepper",
            breed: "Cockatiel",
            age: "8 months",
            image: "b7.png",
            background: "#f1c3b6"
        },
        {
            name: "Azure",
            breed: "Ring-necked Parakeet",
            age: "1.5 years",
            image: "b8.png",
            background: "#93b4a7"
        },
        {
            name: "Lemony",
            breed: "Lutino Cockatiel",
            age: "9 months",
            image: "b9.png",
            background: "#c7e1d3"
        },
        
        {
            name: "Snowy and Flake",
            breed: "Budgerigars(Budgies)",
            age: "4 months",
            image: "b10.png",
            background: "#f1c3b6"
        },
        {
            name: "Sky and Mist",
            breed: "Pacific Parrotlets",
            age: "7 months",
            image: "b11.png",
            background: "#f7d8bb"
        },
        {
            name: "Aqua and Breeze",
            breed: "Pacific Parrotlets",
            age: "11 months",
            image: "b12.png",
            background: "#93b4a7"
        }
    ];
    
    const container = document.querySelector(".container");
    const sortName = document.querySelector(".sort-name");
    const sortAge = document.querySelector(".sort-age");


    function sortbirdsByName(){
        // compare strings in a locale-sensitive manner. It returns a value indicating whether one 
        // string comes before, after, or is the same as the compared string

        return birds.sort((bird1 , bird2) => bird1.name.toLowerCase().localeCompare(bird2.name.toLowerCase()));
    };

    function sortbirdsByAge(){
        return birds.sort((bird1,bird2) => {

            // parseInt is taking a string a returning its integer value
            const age1=parseInt(bird1.age);
            const age2=parseInt(bird2.age);

            return age1-age2;
        });
    };

    function displaybirds(birdsToShow) {
        container.innerHTML = '';

        birdsToShow.forEach(bird => {
            const box = document.createElement('div');
            box.className='box';
            box.style.backgroundColor=bird.background;

            const detailBox=document.createElement('div');
            detailBox.className='detail-box';

            const name=document.createElement('a');
            name.className='name';
            name.innerHTML=`<h2>${bird.name}<\h2>`;

            const breed=document.createElement('a');
            breed.className='breed'
            breed.innerHTML=` ${bird.breed}`;

            const age=document.createElement('a');
            age.className='age';
            age.innerHTML=`${bird.age}`;

            detailBox.appendChild(name);
            detailBox.appendChild(breed);
            detailBox.appendChild(age);

            const slideImg = document.createElement('div');
            slideImg.className='slide-img';

            const img = document.createElement('img');
            img.src=bird.image;
            img.alt=bird.name;

            slideImg.appendChild(img);

            box.appendChild(detailBox);
            box.appendChild(slideImg);

            container.appendChild(box);
        });
    }

    sortName.addEventListener('click',function(){
        const sortedbirdsNames = sortbirdsByName();
        displaybirds(sortedbirdsNames);
    });

    sortAge.addEventListener('click',function(){
        const sortedbirdsAge = sortbirdsByAge();
        displaybirds(sortedbirdsAge);
    });

    displaybirds(birds);
    
    });