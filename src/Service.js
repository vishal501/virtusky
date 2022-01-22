import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Particle from "./Particle";
import {Link} from "react-router-dom";
import { Switch } from "@material-ui/core";
// import Devops from "./Services/Devops"

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
const Service = () => {
    

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
    return <>
 

 <Particle/>

<section class="about1" id="">
<div class="particles">

</div>
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Our<br/>Services</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/services.png" alt="1"/>
</div>
</div>

</div>
</section>

{/* Dgital Marketing */}

<section class="about2" id="">
<div class="max-width1" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">DEVOPS</div>
<h3>THE BEST DEVOPS CONSULTING COMPANY IN MUMBAI<br/>
<span>With our DevOps Consulting Services, construct a strong base for your software development requirements and get the best results. ShellCode Solutions offers DevOps Services to enterprises in need of a multi-functional skill-based team capable of pulling off software development from start to finish.
</span></h3><br/>
<a href="/devops">Learn More</a>

</div>
<div class=" left">
<img src="assets/images/devops.png" alt="1"/>
</div>
</div>

</div>
</section>




<section class="about2" id="">
<div class="max-width1" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/mobile.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Mobile App Development</div>
<h3>We will realize your dream into reality!<br/>
<span>We at ShellCode Solutions, the best Mobile Application Development Company in Mumbai, offer you a world-class experience in the form of the app best suited for your needs. We understand that an app defines your brand and customize your app accordingly.
Get your dream app!<br/>
We make your hustle hassle-free!<br/>
</span></h3>
<a href="/mobile">Learn More</a>
</div>

</div>

</div>
</section>



<section class="about2" id="">
<div class="max-width1" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Website Development</div>
<h3>Best Website Development for your Brand<br/>
<span>ShellCode Solutions, the best Website Development Company in Mumbai, is here for your every need. We create modern and sophisticated websites with engaging UI that keeps your consumers engaged and hooked. Our services come at pocket-friendly prices and are customizable as per your requirements. Ever heard a deal sound so good? Then what are you waiting for?
Get the website your brand deserves!<br/>
We establish you in the online market!<br/>
</span></h3>
<a href="/website">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/website.png" alt="1"/>
</div>
</div>

</div>
</section>

<section class="about2" id="">
<div class="max-width1" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/uiux.png" alt="1"/>
</div>

<div class=" right">
<div class="text">UX UI</div>
<h3>Get An Efficient UI and UX<br/>
<span>A lousy UI and UX can spell doom for your website. At ShellCode Solutions, the best UI UX developers in Mumbai, we ensure that such is not the case with what we deliver. Be it a user-friendly website or a sophisticated app, an efficient and attractive UI and UX is our priority. We only deliver the best!<br/>
</span></h3>
<a href="/uxui">Learn More</a>
</div>

</div>

</div>
</section>


<section class="about2" id="">
<div class="max-width1" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">SOCIAL MEDIA MARKETING</div>
<h3>Best social media marketing agency in Mumbai<br/>
<span>You have found for yourself the best social media marketing agency in Mumbai, ShellCode Solutions. Needless to say, now you do not have to pick your head about Social Media Marketing techniques to improve your presence in the digital sphere. ShellCode Solutions will do that for you. Our analysts and planners will create a Marketing plan specifically for your brand and get unbelievable results!<br/>
</span></h3>
<a href="/social">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/social.png" alt="1"/>
</div>
</div>

</div>
</section>


<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/seo.png" alt="1"/>
</div>

<div class=" right">
<div class="text">SEARCH ENGINE OPTIMIZATION</div>
<h3>Best Search Engine Optimization agency in Mumbai<br/>
<span>ShellCode Solutions, the best Search Engine Optimization agency in Mumbai, brings to you its Search Engine Optimization services on a pallet. SEO attracts searchers to your platform via search engine results that are organic and help to increase your brand awareness amongst users. We take over the responsibility for establishing your brand value by employing efficient Search Engine Optimization techniques.<br/>

</span></h3>
<a href="/seo">Learn More</a>
</div>

</div>

</div>
</section>


<section>
<div class="image12">
{/* <div class="box3"></div> */}


<div class="conta"> 
<form action="" onSubmit={sendEmail}>
<h2>Why not say hello</h2>
<p>Whatever your challenge, we would love to talk you about it.</p>
    <div class="form group">
    <label for="fname">Name</label><br/>
    <input type="text" class="form-control" name="name" required/>
    </div>

    <div class="form group">
    <label for="fname">Phone</label><br/>
    <input type="text" class="form-control" name="phone" required pattern="[0-9]{10-15}"/>
    </div>

    <div class="form group">
    <label for="fname">Email</label><br/>
    <input type="text" class="form-control" name="email" required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"/>
    </div>
   
    <div class="form group">
    <label for="fname">Tell Us How Can We Help</label><br/>
    <textarea class="form-control1" name="message"  required></textarea>
    </div>
    <div className="sentmsg">{result ? <Download/> : null}</div>
    <div className="sentmsg">{result ? <Result/> : null}</div>

    {/* <div class="form group">
    <input type="checkbox" id="terms"/>
    <label for="terms"> Terms and Condtions</label>
    </div> */}
    <div class="form group">
    <button type="submit" class="btn" value="Submit"
    onSubmit={(values, {resetform}) => {
      console.log('', values);
      resetform({values: ''})
    }
    }>Download Portfolio</button>
    </div>


</form>
</div>
</div>
</section>





</>
}

export default Service;