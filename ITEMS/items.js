document.addEventListener("DOMContentLoaded", function () {

    let items = [
        {
            title:"MaroSnacks",        
            image: "dogfood1.jpg.png",
            price:480,
            background: "#93b4a7",            
        },
        {
            title:"Dog Food",        
            image: "dogfood2.jpg.png",
            price:3540,
            background: "#f7d8bb"
            
        },
        {
            title:"Dog Food",        
            image: "dogfood3.jpg.png",
            price:1480,
            background: "#f1c3b6"
            
        },
        {
            title:"Cat Food",        
            image: "catfood1.png",
            price:1200,
            background: "#c7e1d3"
            
        },
        {
            title:"Cat Food",        
            image: "catfood2.png",
            price:900,
            background: "#f1c3b6"
            
        },
        {
            title:"Rabbit Food",        
            image: "rabbitfood1.png",
            price:1200,
            background:"#c7e1d3"
            
        },
        {
            title:"Rabbit Food",        
            image: "rabbitfood2.png",
            price:750,
            background: "#93b4a7"
            
        },
        {
            title:"Bird Food",        
            image: "birdfood1.png",
            price:1000,
            background: "#f7d8bb"
            
        },
        {
            title:"Bedding",        
            image: "bedding1.jpg.png",
            price:2700,
            background: "#93b4a7"
            
        },
        {
            title:"Bedding",
            image: "bedding2.jpg.png",
            price:4200,
            background:"#f1c3b6"
            
        },
        {
            title:"Bedding",
            image: "bedding3.jpg.png",
            price:1200,
            background: "#f7d8bb"
        },
        {
            title:"Bedding",
            image: "bedding4.jpg.png",
            price:3100,
            background: "#c7e1d3"
        },
        {
            title:"Bedding",
            image: "bedding5.png",
            price:800,
            background: "#f1c3b6"
        },
        {
            title:"Bedding",
            image: "bedding6.png",
            price:700,
            background: "#c7e1d3"
        },
        {
            title:"Bedding",
            image: "bedding7.png",
            price:900,
            background: "#93b4a7"
        },
        {
            title:"Bedding",
            image: "bedding8.png",
            price:800,
            background: "#f7d8bb"
        },
        {
            title:"Feeder",
            image: "feeder.png",
            price:1000,
            background:"#93b4a7"
        },
        {
            title:"Food Bowl",
            image: "bowl1.jpg.png",
            price:300,
            background: "#f7d8bb"
        },
        {
            title:"Food Bowl",
            image: "bowl2.jpg.png",
            price:300,
            background: "#f1c3b6"
        },
        {
            title:"Food Bowl",
            image: "bowl3.jpg.png",
            price:200,
            background: "#c7e1d3"
        },
        {
            title:"Food Bowl",
            image: "bowl4.png",
            price:200,
            background: "#f1c3b6"
        },
        {
            title:"Collar",
            image: "collar1.jpg.png",
            price:200,
            background: "#c7e1d3"
        },
        {
            title:"Collar",
            image: "collar2.jpg.png",
            price:100,
            background: "#93b4a7"
        },
        
        {
            title:"Collar",
            image: "collar3.jpg.png",
            price:300,
            background: "#f7d8bb"
        },
        {
            title:"Grooming Brush",
            image: "groomingbrush1.jpg.png",
            price:500,
            background: "#93b4a7"
        },
        {
            title:"Grooming Brush",
            image: "groomingbrush2.jpg.png",
            price:100,
            background:"#f7d8bb"
        },
        {
            title:"Cat Shampoo",
            image: "catshampoo.png",
            price:350,
            background:"#f1c3b6"
        },
        {
            title:"Dog Shampoo",
            image: "dogshampoo.png",
            price:400,
            background:"#c7e1d3"
        },
        {
            title:"Dog Soap",
            image: "dogsoap1.png",
            price:100,
            background:"#f1c3b6"
        },
        {
            title:"Dog Soap",
            image: "dogsoap2.png",
            price:100,
            background:"#c7e1d3"
        },
        {
            title:"Balls",
            image: "toy1.jpg.png",
            price:100,
            background: "#93b4a7"
        },
        {
            title:"Crocheted Toy",
            image: "toy2.jpg.png",
            price:100,
            background: "#f7d8bb"
        },
        {
            title:"Twisted Cotton Rope",
            image: "toy3.jpg.png",
            price:100,
            background:"#93b4a7"
        },
        {
            title:"Bird Ladder",
            image: "toy4.jpg",
            price:80,
            background:"#f7d8bb"
        },
        {
            title:"Bunny Fun Tree",
            image: "toy5.png",
            price:150,
            background:"#f1c3b6"
        }
    ];
    
    
    const container = document.querySelector(".container");
    function displayitems(itemsToShow) {
        container.innerHTML = '';
    
        itemsToShow.forEach(item => {
            const box = document.createElement('div');
            box.className='box';
            box.style.backgroundColor=item.background;
    
            const detailBox=document.createElement('div');
            detailBox.className='detail-box';

            const title=document.createElement('a');
            title.className='name';
            title.innerHTML=`<h2>${item.title}<\h2>`;
    
            const price=document.createElement('a');
            price.className='price';
            price.innerHTML=`<h2>₹${item.price}<\h2>`;
    

            
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
    
            container.appendChild(box);
        });
    }
    
    
    displayitems(items);
    });