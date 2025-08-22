'use strict';


const testimonial1 = document.querySelector(".testimonialsConent1");
const testimonial2 = document.querySelector(".testimonialsConent2");
const testimonial3 = document.querySelector(".testimonialsConent3");
const testimonial4 = document.querySelector(".testimonialsConent4");
const testimonial5 = document.querySelector(".testimonialsConent5");
const testimonial6 = document.querySelector(".testimonialsConent6");
const testimonial7 = document.querySelector(".testimonialsConent7");
const testimonial8 = document.querySelector(".testimonialsConent8");
const testimonial9 = document.querySelector(".testimonialsConent9");
const testimonial10 = document.querySelector(".testimonialsConent10");
const testimonial11 = document.querySelector(".testimonialsConent11");
const testimonial12 = document.querySelector(".testimonialsConent12");
const testimonial13 = document.querySelector(".testimonialsConent13");
const testimonial14 = document.querySelector(".testimonialsConent14");
const testimonial15 = document.querySelector(".testimonialsConent15");
const testimonial16 = document.querySelector(".testimonialsConent16");
const testimonial17 = document.querySelector(".testimonialsConent17");
const testimonial18 = document.querySelector(".testimonialsConent18");
const testimonial19 = document.querySelector(".testimonialsConent19");
const testimonial20 = document.querySelector(".testimonialsConent20");


document.querySelector(".startButton").addEventListener("click", function(){
    document.querySelector(".contributorImage").style.display = 'none';
    document.querySelector(".testimonialBox").style.display = 'block';
    document.querySelector(".nextTestimonial").style.display = 'block';
    document.querySelector(".closeTestimonial").style.display = 'block';
    document.querySelector(".startButton").style.display = 'none';
});

document.querySelector(".closeTestimonial").addEventListener("click", function(){
    document.querySelector(".contributorImage").style.display = 'none';
    document.querySelector(".testimonialBox").style.display = 'none';
    document.querySelector(".nextTestimonial").style.display = 'none';
    document.querySelector(".closeTestimonial").style.display = 'none';
    document.querySelector(".startButton").style.display = 'block'; 
});

document.querySelector(".nextTestimonial").addEventListener("click",function(){
    let randomNumber = Math.trunc((Math.random() * 20) + 1);
    console.log(randomNumber);
    if(randomNumber == 1){
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';        
        testimonial1.style.display = 'block';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://raw.githubusercontent.com/thedevguy365/testimonialSlider/refs/heads/main/image1.jpg';
    }
    else if (randomNumber == 2){
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'block'
        document.querySelector(".contributorImage").style.display = 'block'        
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image2.jpg';
    }
    else if (randomNumber == 3){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'block';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image3.jpg';
    }
    else if (randomNumber == 4){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'block';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';        
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image4.jpg';
    }
    else if (randomNumber == 5){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'block';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image5.jpg';
    }
    else if (randomNumber == 6){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'block';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image6.jpg';
    }
    else if (randomNumber == 7){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'block';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image7.jpg';
    }
    else if (randomNumber == 8){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'block';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image8.jpg';
    }
    else if (randomNumber == 9){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'block';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image9.jpg';
    }
    else if (randomNumber == 10){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'block';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image10.jpg';
    }
    else if (randomNumber == 11){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'block';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image11.jpg';
    }
    else if (randomNumber == 12){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'block';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image12.jpg';
    }
    else if (randomNumber == 13){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'block';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image13.jpg';
    }
    else if (randomNumber == 14){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'block';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image14.jpg';
    }
    else if (randomNumber == 15){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'block';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image15.jpg';
    }
    else if (randomNumber == 16){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'block';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image16.jpg';
    }
    else if (randomNumber == 17){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'block';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image17.jpg';
    }
    else if (randomNumber == 18){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'block';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image18.jpg';
    }
    else if (randomNumber == 19){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'block';
        testimonial20.style.display = 'none';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image19.jpg';
    }
    else if (randomNumber == 20){
        testimonial1.style.display = 'none';
        testimonial2.style.display = 'none';
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        testimonial5.style.display = 'none';
        testimonial6.style.display = 'none';
        testimonial7.style.display = 'none';
        testimonial8.style.display = 'none';
        testimonial9.style.display = 'none';
        testimonial10.style.display = 'none';
        testimonial11.style.display = 'none';
        testimonial12.style.display = 'none';
        testimonial13.style.display = 'none';
        testimonial14.style.display = 'none';
        testimonial15.style.display = 'none';
        testimonial16.style.display = 'none';
        testimonial17.style.display = 'none';
        testimonial18.style.display = 'none';
        testimonial19.style.display = 'none';
        testimonial20.style.display = 'block';
        document.querySelector(".contributorImage").style.display = 'block'
        document.querySelector(".contributorImage").src = 'https://github.com/thedevguy365/testimonialSlider/blob/main/image20.jpg';
    }
    else alert("Something went wrong");
});

/*
**Example Usage:**

*   Testimonial quote text: `#E0E0E0`
*   Author name/title: `#FAFAFA`
*   Star ratings:  Accent color (e.g., `#FFD700`)
*   Background of individual testimonial blocks: `#1F1F1F`
*   Overall page background: `#121212`

*/

document.querySelector(".darkMode").addEventListener("click", function(){
    document.querySelector(".testimonialContent").style.color = '#E0E0E0';
    document.querySelector(".contributorName").style.color = '#FAFAFA';
    document.querySelector(".pageBody").style.backgroundColor = '#121212';
    document.querySelector(".darkMode").style.display = 'none';
    document.querySelector(".lightMode").style.display = 'block';
    document.querySelector(".pageHeader").style.color = '#FAFAFA';
        testimonial2.style.backgroundColor = '#1F1F1F';
        testimonial3.style.backgroundColor = '#1F1F1F';
        testimonial4.style.backgroundColor = '#1F1F1F';
        testimonial5.style.backgroundColor = '#1F1F1F';
        testimonial6.style.backgroundColor = '#1F1F1F';
        testimonial7.style.backgroundColor = '#1F1F1F';
        testimonial8.style.backgroundColor = '#1F1F1F';
        testimonial9.style.backgroundColor = '#1F1F1F';
        testimonial10.style.backgroundColor = '#1F1F1F';
        testimonial11.style.backgroundColor = '#1F1F1F';
        testimonial12.style.backgroundColor = '#1F1F1F';
        testimonial13.style.backgroundColor = '#1F1F1F';
        testimonial14.style.backgroundColor = '#1F1F1F';
        testimonial15.style.backgroundColor = '#1F1F1F';
        testimonial16.style.backgroundColor = '#1F1F1F';
        testimonial17.style.backgroundColor = '#1F1F1F';
        testimonial18.style.backgroundColor = '#1F1F1F';
        testimonial19.style.backgroundColor = '#1F1F1F';
        testimonial20.style.backgroundColor = '#1F1F1F';        
        testimonial1.style.backgroundColor = '#1F1F1F';
});

document.querySelector(".lightMode").addEventListener("click", function(){
    document.querySelector(".testimonialContent").style.color = 'white';
    document.querySelector(".contributorName").style.color = 'white';
    document.querySelector(".pageBody").style.backgroundColor = '#f8edeb';
    document.querySelector(".darkMode").style.display = 'block';
    document.querySelector(".lightMode").style.display = 'none';
    document.querySelector(".pageHeader").style.color = '#009ffd';
        testimonial2.style.backgroundColor = '#72ddf7';
        testimonial3.style.backgroundColor = '#72ddf7';
        testimonial4.style.backgroundColor = '#72ddf7';
        testimonial5.style.backgroundColor = '#72ddf7';
        testimonial6.style.backgroundColor = '#72ddf7';
        testimonial7.style.backgroundColor = '#72ddf7';
        testimonial8.style.backgroundColor = '#72ddf7';
        testimonial9.style.backgroundColor = '#72ddf7';
        testimonial10.style.backgroundColor = '#72ddf7';
        testimonial11.style.backgroundColor = '#72ddf7';
        testimonial12.style.backgroundColor = '#72ddf7';
        testimonial13.style.backgroundColor = '#72ddf7';
        testimonial14.style.backgroundColor = '#72ddf7';
        testimonial15.style.backgroundColor = '#72ddf7';
        testimonial16.style.backgroundColor = '#72ddf7';
        testimonial17.style.backgroundColor = '#72ddf7';
        testimonial18.style.backgroundColor = '#72ddf7';
        testimonial19.style.backgroundColor = '#72ddf7';
        testimonial20.style.backgroundColor = '#72ddf7';        
        testimonial1.style.backgroundColor = '#72ddf7';
});
