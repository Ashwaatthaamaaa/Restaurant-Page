import './style.css';

export default function home(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const image = document.createElement('div');
    const para = document.createElement('p');

    home.classList.add('home');
    image.classList.add('momImage');
    para.classList.add('intro');
    heading.classList.add('heading');

    heading.textContent = "MOM's Kitchen";
    para.textContent=`Welcome to "Mom's Kitchen", where love and culinary expertise create an unforgettable dining experience. Our menu, though not extensive,  is crafted with care and dedication. Each bite is a tribute to a mother's love, aiming to evoke the warmth of home-cooked meals. At "Mom's Kitchen", we serve not just food, but a slice of home and a  dash of nostalgia. Welcome to a dining experience that's truly out of this world.`;



    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(para);

    return home;
}