document.addEventListener("DOMContentLoaded", function () {

    let cats = [
        {
            name: "Chloe",
            breed: "American Shorthair",
            age: "8 weeks",
            image: "c1.png",
            background: "#f1c3b6"
            
        },
        {
            name: "Misty",
            breed: "British Shorthair",
            age: "9 weeks",
            image: "c2.png",
            background: "#f7d8bb"
            
        },
        {
            name: "Kitty",
            breed: "Persian",
            age: "6 weeks",
            image: "c3.png",
            background: "#c7e1d3"
        },
        {
            name: "Jasper",
            breed: "Tabby",
            age: "11 weeks",
            image: "c4.png",
            background: "#93b4a7"
        },
        {
            name: "Oliver",
            breed: "American Shorthair",
            age: "7 weeks",
            image: "c5.png",
            background: "#f7d8bb"
        },
        {
            name: "Luna",
            breed: "Scottish Fold",
            age: "9 weeks",
            image: "c6.png",
            background: "#93b4a7"
        },
        {
            name: "Bella",
            breed: "Maine Coon",
            age: "11 weeks",
            image: "c7.png",
            background: "#f1c3b6"
        },
        {
            name: "Milo",
            breed: "British Shorthair",
            age: "9 weeks",
            image: "c8.png",
            background: "#c7e1d3"
        },
        {
            name: "Daisy",
            breed: "Persian",
            age: "8 weeks",
            image: "c9.png",
            background: "#f7d8bb"
        },
        
        {
            name: "Max",
            breed: "Tabby",
            age: "10 weeks",
            image: "c10.png",
            background: "#93b4a7"
        }
    ];
    
    const container = document.querySelector(".container");
    const sortName = document.querySelector(".sort-name");
    const sortAge = document.querySelector(".sort-age");
    


    function sortCatsByName(){
        // compare strings in a locale-sensitive manner. It returns a value indicating whether one 
        // string comes before, after, or is the same as the compared string

        return cats.sort((cat1 , cat2) => cat1.name.toLowerCase().localeCompare(cat2.name.toLowerCase()));
    };

    function sortCatsByAge(){
        return cats.sort((cat1,cat2) => {

            // parseInt is taking a string a returning its integer value
            const age1=parseInt(cat1.age);
            const age2=parseInt(cat2.age);

            return age1-age2;
        });
    };

    function displayCats(catsToShow) {
        container.innerHTML = '';

        catsToShow.forEach(cat => {
            const box = document.createElement('div');
            box.className='box';
            box.style.backgroundColor=cat.background;

            const detailBox=document.createElement('div');
            detailBox.className='detail-box';

            const name=document.createElement('a');
            name.className='name';
            name.innerHTML=`<h2>${cat.name}<\h2>`;

            const breed=document.createElement('a');
            breed.className='breed'
            breed.innerHTML=` ${cat.breed}`;

            const age=document.createElement('a');
            age.className='age';
            age.innerHTML=`${cat.age}`;

            detailBox.appendChild(name);
            detailBox.appendChild(breed);
            detailBox.appendChild(age);

            const slideImg = document.createElement('div');
            slideImg.className='slide-img';

            const img = document.createElement('img');
            img.src=cat.image;
            img.alt=cat.name;

            slideImg.appendChild(img);

            box.appendChild(detailBox);
            box.appendChild(slideImg);

            container.appendChild(box);
        });
    }

    sortName.addEventListener('click',function(){
        const sortedCatsNames = sortCatsByName();
        displayCats(sortedCatsNames);
    });

    sortAge.addEventListener('click',function(){
        const sortedCatsAge = sortCatsByAge();
        displayCats(sortedCatsAge);
    });

    displayCats(cats);
    
    });