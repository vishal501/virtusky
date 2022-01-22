import React, { useState } from "react";
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core';
import emailjs from 'emailjs-com';
import ReactDOM from "react-dom";
import Particle from "./Particle";


const Result = () => {
  return(
    <p>We will contact you soon... </p>
  );
}
const Download = () => {
  return(
    <div className="Portfolio">
    <a href="assets/Shellcode_Portfolio.zip" download><pre><i class="fa fa-download" aria-hidden="true"></i> Portfolio</pre></a>
    </div>
  );
}

const About = () => {
    
    
    
    const classes = useStyles()
    const [value,setValue]=React.useState(0)
    const handleChange=(e,val)=>{
        console.warn(val)
        setValue(val)
    }



    // contact details to email
    const[result, showResult] = useState(false);
      
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm(
        "serviceID",// emailjs Service ID
        "templateID",// template ID
        e.target,
        "user_**********"// emailjs Integration init("user_**********");

      )
     

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true);
    }
  
      
        
        return (
            <>


<Particle/>

<section class="about1" id="">
<div class="max-width" >

<div class="about-content">

<div class=" right">
<div class="text">About<br/>ShellCode</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/about.png" alt="1"/>
</div>
</div>
</div>
</section>


            




<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/mission.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Our Mission</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>We at ShellCode Solutions aim to conquer the digital world with our mission. Our mission is to create a digital platform for all businesses. If you are a small and thriving business, we are here for you. Our ambition is to guide you create your digital assets by helping you establish your brand in the digital market.<br/>
</span></h3>
{/* <a href="#teams">Learn More</a> */}
</div>

</div>

</div>
</section>



<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Our <br/>Achievements</div>

<h3><span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results.<br/>
</span></h3>
</div>

<div class=" left">
<img src="assets/images/achievements.png" alt="1"/>
</div>



</div>

</div>
</section>






<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/vision.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Our Vision</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<h3><span>We began this enterprise with a vision to help businesses grow. We aim to accomplish this by creating a digital identity for them. Our developers are dexterous and hard-working and add value to our team. We make use of top-notch technology to assist you in creating your digital presence. By ensuring our clients’ growth, we aim to lead the field of software development and have been inching closer towards our goal.<br/>
</span></h3>
{/* <a href="#teams">Learn More</a> */}
</div>

</div>

</div>
</section>




<section class="about5" id="">
{/* <div class="max-width" > */}
<h1>Our Projects</h1>
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">
   

<div class=" left">
<div class="projects-box">
<img src="assets/images/projects/FarmersKart.jpg" alt="1"/>
<h3>Farmers FarmersKart<br/>
<span>Grocery Delivery App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/DesiiMeat.jpg" alt="1"/>
<h3>Desii Meat <br/>
<span>Food Delivery App</span></h3>
</div>
{/* </div> */}

{/* <div class=" right"> */}
<div class="projects-box">
<img src="assets/images/projects/GOOGLEMEET.jpg" alt="1"/>
<h3>Sabak<br/>
<span>Business meeting App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/Lagnakariya.jpg" alt="1"/>
<h3>Lagnakariya <br/>
<span>Matrimonial App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/GreenTiger.jpg" alt="1"/>
<h3>Green Tiger <br/>
<span>Ecommerce Web App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/company.jpg" alt="1"/>
<h3>Check App <br/>
<span>Employee Managment App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/Dryclean.jpg" alt="1"/>
<h3>Chiago Dry Cleaners<br/>
<span>Laundry App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/al.jpg" alt="1"/>
<h3>Al-Hisab <br/>
<span>Community Money Managment App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/milk.jpg" alt="1"/>
<h3>Dairy App<br/>
<span>Order management App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/plan.jpg" alt="1"/>
<h3>NRI Nichola <br/>
<span>US Matrimonial App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/dashboard.jpg" alt="1"/>
<h3>Tutor app <br/>
<span>Elearning App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/labour.jpg" alt="1"/>
<h3>ServicExpertz<br/>
<span>House Keeping & Personal Services App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/Pharma.jpg" alt="1" class="resp"/>
<h3>Bsb Pharma<br/>
<span>Order Managment App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/HomeGuru.jpg" alt="1"/>
<h3>Home Guru <br/>
<span>Housekeeping and personal Services Web App</span></h3>
</div>



<div class="projects-box1">
<img src="assets/images/projects/food.jpg" alt="1"/>
<h3>Ulrapi <br/>
<span>Food Delivery App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/website.jpg" alt="1"/>
<h3>FOR <br/>
<span>Restaurant Consultancy</span></h3>
</div>
</div>

</div>
<a href="#teams">Learn More</a>
{/* </div> */}
</section>





<section class="quote">
<div class="max-width">
<div class="quote-content">
<div class=" left">
<h3>Get a quo<span>te </span></h3>
<img src="assets/images/1.png" alt="1"/>
</div>
<div class=" right">
<div class="menu2">
<ul>
<li><a href="/service">Services</a></li>
<li><a href="/technology">Technology</a></li>
<li><a href="/projects">Projects</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="https://wa.me/+918097355922">Contact Us</a></li>
</ul>
</div>
</div>
</div>
</div>



{/* <!-- contact --> */}

{/* <!-- contact section start --> */}

<div class="max-width1">
<div class="contact-content">
{/* <div class="column left">

<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals 
<br/><br/>Our contact details</span>
<div class="head">987654321<br/>abc@gmail.com</div>
<div class="icons">
</div>
</div> */}
<div class="column right">
<form action="" onSubmit={sendEmail}>
<div class="fields">
<div class="field name">
<input type="text" placeholder="Name"  name="name" required/>
</div>
<div class="field email">
<input type="text" placeholder="Company" name="company" required />
</div>
</div>
<div class="fields">
<div class="field name">
<input type="text" placeholder="Phone" name="phone" required pattern="[0-9]{10-15}"/>
</div>
<div class="field email">
<input type="text" placeholder="Email" name="email" required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"/>

</div>
</div>

<div class="field textarea">
<textarea placeholder="Message.." 
name="message"  required></textarea>
</div>
<div className="sentmsg">{result ? <Download/> : null}</div>
<div className="sentmsg">{result ? <Result/> : null}</div>
<div class="button-area" >
<button type="submit" 
onSubmit={(values, {resetform}) => {
  console.log('', values);
  resetform({values: ''})
}
}>Download Portfolio</button>
{/* <a href="assets/portfolio.pdf" download>Send</a> */}
</div>



</form>
</div>
</div>
</div>

</section>






            
            </>
          
        );

}
const useStyles = makeStyles({
  customStyleOnTab:{
    fontSize:'2.4vmin',
    fontWeight:'500',
    // padding: '0 1vmin',
    color:'black'
  },
  customStyleOnActiveTab:{
    color:'red'
  },
  activeTab:{
    fontSize:'2.6vmin',
    fontWeight:'500',
    color:'red'
  }
})

function TabPanel(props){
const {children, value, index}=props;

    return(<div>
        {
            value===index && (
                <h1>{children}</h1>
            )
        }
    </div>)
}
export default About;

