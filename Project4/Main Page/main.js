
function getRandomProfile(){

    // making an array to hold the arrays of all the different animals
    const allAnimals=[dogs,cats,birds,rabbits];

    // making another profiles which will hold the random profiles which will be selected
    const selectedProfiles=[];

    // looping through each array of different animal present in allAnimal
    for(const paticularAnimal of allAnimals){

        // Math.random returns a floating point number 0(inclusive) and 1 (exclusive)
        // multiplying it with length of the array will give a random index(float) of the array
        // rounding of the floating index
        const randomIndex = Math.floor(Math.random()*paticularAnimal.length);

        // storing the profile in a variable
        const selectedProfile=paticularAnimal[randomIndex];

        // appending that profile to the array
        selectedProfiles.push(selectedProfile);

    }
    return selectedProfiles;
};

    const container = document.querySelector(".container");
    const randomAnimalProfiles = getRandomProfile();
    console.log(randomAnimalProfiles);

    function displayProfiles(randomAnimalProfiles) {
        // Clear the container content before adding new profiles
        container.innerHTML = '';
      
        randomAnimalProfiles.forEach(animal => {
          // Create a new box element for each profile
          const box = document.createElement('div');
          box.className = 'box';
          box.style.backgroundColor=animal.background;
      
          // Create a detail box element
          const detailBox = document.createElement('div');
          detailBox.className = 'detail-box';
      
          // Create elements for name, breed, and age (assuming properties exist)
          const name = document.createElement('h2');
          name.className = 'name';
          name.textContent = animal.name;
      
          const breed = document.createElement('p');
          breed.className = 'breed';
          breed.textContent = `Breed: ${animal.breed}`;
      
          const age = document.createElement('p');
          age.className = 'age';
          age.textContent = `Age: ${animal.age}`;
      
          // Append name, breed, and age to the detail box
          detailBox.appendChild(name);
          detailBox.appendChild(breed);
          detailBox.appendChild(age);
      
          // Create an image container and image element
          const slideImg = document.createElement('div');
          slideImg.className = 'slide-img';
      
          const img = document.createElement('img');
          img.src = animal.image;
          img.alt = animal.name;
      
          // Append the image to the image container
          slideImg.appendChild(img);
      
          // Append the detail box and image container to the box element
          box.appendChild(detailBox);
          box.appendChild(slideImg);
      
          // Append the box element to the container
          container.appendChild(box);
        });
      };

function goToAnimalPage(){
  const userInput = document.querySelector('.search-bar1').value.toLowerCase();

  if(userInput.includes("dog")){
    window.location.href = "/breed-dog/dogs.html";
  }

  else if(userInput.includes("cat")){
    window.location.href = "/breed-cat/cats.html";
  }

  else if(userInput.includes("bird")){
    window.location.href = "/breed-bird/birds.html";
  }

  else if(userInput.includes("rabbit")){
    window.location.href = "/breed-rabbit/rabbits.html";
  }
}

const searchIcon=document.querySelector('.serach-icon');

searchIcon.addEventListener('click',function(){
  goToAnimalPage();
})

function randomProducts(n) {
  return items.sort(() =>
      Math.random() - 0.5).slice(0, n);
}

const productsArray = randomProducts(4);

const container1= document.querySelector('#container1');
function displayitems(productsArray) {
  container1.innerHTML = '';

  productsArray.forEach(item => {
      const box = document.createElement('div');
      box.className='box';
      box.style.backgroundColor=item.background;

      const detailBox=document.createElement('div');
      detailBox.className='detail-box';

      const title=document.createElement('a');
      title.className='name';
      title.innerHTML=`<h3>${item.title}<\h3>`;

      const price=document.createElement('a');
      price.className='price';
      price.innerHTML=`<p>₹${item.price}<\p>`;


      
      detailBox.appendChild(title);
      detailBox.appendChild(price);


      const slideImg = document.createElement('div');
      slideImg.className='slide-img';

      const img = document.createElement('img');
      img.src=item.image;
      img.alt=item.title;
      img.alt=item.price;

      slideImg.appendChild(img);

      box.appendChild(detailBox);
      box.appendChild(slideImg);

      container1.appendChild(box);
  });
}

displayProfiles(randomAnimalProfiles);
displayitems(productsArray);