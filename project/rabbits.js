document.addEventListener("DOMContentLoaded", function () {

    let rabbits = [
        {
            name: "Tabby",
            breed: "Angora",
            age: "2 months",
            image: "r1.png",
            background: "#f1c3b6"
            
        },
        {
            name: "Marby",
            breed: "Holland Lop",
            age: "4 months",
            image: "r2.png",
            background: "#f7d8bb"
            
        },
        {
            name: "Hazel",
            breed: "Netherland Dwarf",
            age: "2 months",
            image: "r3.png",
            background: "#c7e1d3"
        },
        {
            name: "ButterScotch",
            breed: "Mini Lop",
            age: "4 months",
            image: "r4.png",
            background: "#93b4a7"
        },
        {
            name: "Loony",
            breed: "Flemish Giant",
            age: "9 months",
            image: "r5.png",
            background: "#f7d8bb"
        },
        {
            name: "Misty",
            breed: "Holland Lop",
            age: "5 months",
            image: "r6.png",
            background: "#93b4a7"
        },
        {
            name: "Caramel",
            breed: "Polish Rabbit",
            age: "5 months",
            image: "r7.png",
            background: "#f1c3b6"
        },
        {
            name: "Sunny",
            breed: "Mini Lop",
            age: "3 months",
            image: "r8.png",
            background: "#c7e1d3"
        },
        {
            name: "Bisci",
            breed: "Hallmark Dwarf",
            age: "2 months",
            image: "r9.png",
            background: "#f1c3b6"
        },
        
        {
            name: "Snowball",
            breed: "New Zealand White",
            age: "3.5 months",
            image: "r10.png",
            background: "#93b4a7"
        },

        {
            name: "Cocoa",
            breed: "Rex Rabbit",
            age: "5 months",
            image: "r11.png",
            background: "#f7d8bb"
        }
    ];
    
    const container = document.querySelector(".container");
    const sortName = document.querySelector(".sort-name");
    const sortAge = document.querySelector(".sort-age");
    

    function sortrabbitsByName(){
        // compare strings in a locale-sensitive manner. It returns a value indicating whether one 
        // string comes before, after, or is the same as the compared string

        return rabbits.sort((rabbit1 , rabbit2) => rabbit1.name.toLowerCase().localeCompare(rabbit2.name.toLowerCase()));
    };

    function sortrabbitsByAge(){
        return rabbits.sort((rabbit1,rabbit2) => {

            // parseInt is taking a string a returning its integer value
            const age1=parseInt(rabbit1.age);
            const age2=parseInt(rabbit2.age);

            return age1-age2;
        });
    };

    function displayrabbits(rabbitsToShow) {
        container.innerHTML = '';

        rabbitsToShow.forEach(rabbit => {
            const box = document.createElement('div');
            box.className='box';
            box.style.backgroundColor=rabbit.background;

            const detailBox=document.createElement('div');
            detailBox.className='detail-box';

            const name=document.createElement('a');
            name.className='name';
            name.innerHTML=`<h2>${rabbit.name}<\h2>`;

            const breed=document.createElement('a');
            breed.className='breed'
            breed.innerHTML=` ${rabbit.breed}`;

            const age=document.createElement('a');
            age.className='age';
            age.innerHTML=`${rabbit.age}`;

            detailBox.appendChild(name);
            detailBox.appendChild(breed);
            detailBox.appendChild(age);

            const slideImg = document.createElement('div');
            slideImg.className='slide-img';

            const img = document.createElement('img');
            img.src=rabbit.image;
            img.alt=rabbit.name;

            slideImg.appendChild(img);

            box.appendChild(detailBox);
            box.appendChild(slideImg);

            container.appendChild(box);
        });
    }

    sortName.addEventListener('click',function(){
        const sortedrabbitsNames = sortrabbitsByName();
        displayrabbits(sortedrabbitsNames);
    });

    sortAge.addEventListener('click',function(){
        const sortedrabbitsAge = sortrabbitsByAge();
        displayrabbits(sortedrabbitsAge);
    });

    displayrabbits(rabbits);
    
    });