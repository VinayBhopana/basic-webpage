const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const ybtn = document.querySelector('#YES');
const nbtn = document.querySelector('#NO');
const confirmation = document.querySelector('.confirmation');

const yans = () => {
    question.style.display ='none';
    confirmation.style.display='block';
}
const nans =() => {
    nbtn.style.position='absolute';
    
    const xpos = Math.random()*wrapper.clientWidth;
    const ypos = Math.random()*wrapper.clientHeight;
   

    nbtn.style.left= xpos>= wrapper.clientWidth/2? `${xpos-nbtn.clientWidth}px`: `${xpos}px`;
    nbtn.style.top= ypos>=wrapper.clientHeight/2? `${ypos-nbtn.clientHeight}px`: `${ypos}px`;
    //nbtn.style.left=`${xpos}px`;
    //nbtn.style.top=`${ypos}px`;
}


ybtn.addEventListener('click',yans)
nbtn.addEventListener('click',nans)







