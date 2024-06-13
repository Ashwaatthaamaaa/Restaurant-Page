import './style.css';
import './style-about.css';


export default function about(){
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const para = document.createElement('div');
    const timing = document.createElement('div')
    const About = document.createElement('div');
    const timing_1 = document.createElement('h2');
    const timing_2 = document.createElement('h5');
    const About_1 = document.createElement('h2');
    const About_2 = document.createElement('h5');




    para.classList.add('about');
    para.appendChild(timing);
    timing.appendChild(timing_1);
    timing.appendChild(timing_2);
    About.appendChild(About_1);
    About.appendChild(About_2);
    para.appendChild(About);




    timing.classList.add('timing');
    About.classList.add('About');
    home.classList.add('home');    
    heading.classList.add('heading');



    timing_1.textContent="Timings";
    timing_2.textContent="24/7:) BUT DON'T BE CRUEL"

    About_1.textContent = "Contact Us";
    About_2.textContent = "94543039**"

    heading.textContent = 'About Us';
    //About.textContent = "MOM's Kitchen is more than just a restaurant; it's a heartfelt tribute to the timeless art of home cooking. We pride ourselves on the simplicity and authenticity of our offerings, where every dish is infused with the love and passion reminiscent of a mother's touch. Though our menu may be small, each item is crafted to perfection, promising an unforgettable culinary experience that feels like a warm hug from mom. At MOM's Kitchen, we aim to rekindle cherished memories and create new ones with every bite. Come and savor the essence of home, where the greatest hands, love, and passion come together on your plate";



    home.appendChild(heading);
    home.appendChild(para);

    return home;

}