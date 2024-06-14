import './style.css';
import './style-menu.css';
import Image1 from './assest/1.jpg';
import Image2 from './assest/2.jpg';
import Image3 from './assest/3.jpg';
import Image4 from './assest/4.jpg';
import Image5 from './assest/5.jpg';
import Image6 from './assest/6.jpg';



export default function menu(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const section = document.createElement('div');






    home.classList.add('home');
    heading.classList.add('heading');
    section.classList.add('section');


    



    home.classList.add('home');
    heading.classList.add('heading');
    section.classList.add('section');
    
    


    heading.textContent = 'MENU';




    home.appendChild(heading);
    home.appendChild(section);


    const bgImages = [
        Image1,Image2,Image3,Image4,Image5,Image6
    ];

    const titles = [
        "DOSA",'BREAD OMELETTE','CHOLE BHATURE','MONGODE','ALOO PYAAZ PAKODI','CHOLE SAMOSA'
    ];


    // for (let i = 0; i < 6; i++) {
    //     // Create a new div element
    //     const gridItem = document.createElement('div');
    //     const img = document.createElement('div');
    //     const detail = document.createElement('div');

    //     img.classList.add('image');
    //     detail.classList.add('detail');
    //     // Add a class to the div
    //     gridItem.classList.add('grid-item');

    //     gridItem.appendChild(img);
    //     gridItem.appendChild(detail);



    //     // Set the background image for the grid item
    //     img.style.backgroundImage = bgImages[i];

    //     // Add content to the div (optional)

    //     // Append the new div to the grid container
    //     section.appendChild(gridItem);
    // }

    bgImages.forEach((src,index) => {
        // Create a new div element
        const gridItem = document.createElement('div');
        const img = document.createElement('img');
        const detail = document.createElement('div');
        const title = document.createElement('h1');
        const price = document.createElement('div');
        const align = document.createElement('div');
        //const description = document.createElement('div');

        img.classList.add('image');
        detail.classList.add('detail');
        title.classList.add('title');
        align.classList.add('align');
        // Add a class to the div
        gridItem.classList.add('grid-item');
        price.classList.add('price');
        //description.classList.add('description');
        align.appendChild(img);
        align.appendChild(detail);

        detail.appendChild(title);
        //detail.appendChild(description);
        // gridItem.appendChild(img);
        // gridItem.appendChild(detail);
        gridItem.appendChild(align);
        gridItem.appendChild(price);
        
    
        img.src=src;

        //description.textContent="batter of rice"
        title.textContent = titles[index];
        price.textContent = "Price : JUST ASK NICELY";
        // img.style.backgroundImage = `url(${src})`;

        // console.log(`Image ${index + 1} background:`, img.style.backgroundImage);
        // Append the div to the container
        section.appendChild(gridItem);
    });




    return home;

}