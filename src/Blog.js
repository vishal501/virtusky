import React from "react";
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core';
import Particle from "./Particle";
const Blog = () => {
    

      const classes = useStyles()
      const [value,setValue]=React.useState(0)
      const handleChange=(e,val)=>{
          console.warn(val)
          setValue(val)
      }
  
    return <>


<Particle/>
    {/* <nav class="navbar">
<div class="max-width">
<div class="logo"><a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a></div>
<ul class="menu">
<li><a href="/Service" class="menu-btn">Services</a></li>
<li><a href="/technology" class="menu-btn">Technology</a></li>
<li><a href="/about" class="menu-btn">About Us</a></li>
<li><a href="/blog" class="menu-btn">Blog</a></li>
<li><a href="/projects" class="menu-btn">Projects</a></li>

</ul>
</div>
</nav> */}


<section class="about1" id="">
<div class="max-width" >

<div class="about-content">

<div class=" right">
<div class="text">Blog</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/blog.png" alt="1"/>
</div>
</div>
</div>
</section>


<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">

<div class=" right">
<div class="blog-text">10 questions to ask before hiring a Mobile App Development Company</div>
<h3><span>How do you find the one? No, we are not talking about romance here. Although, finding the correct mobile app developers for your mobile application development needs can be even more difficult than finding the love of your life. Why? Here are certain questions you should be asking your mobile app developers and certain answers they should be providing. 
</span></h3>
<a href="/beforehiring">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/qa.png" alt="1"style={{width: "40%"}}/>
</div>

</div>
</form>
</div>

</div>
</section>
<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/build.png" alt="1"style={{width: "40%"}}/>
</div>

<div class=" right">
<div class="blog-text">How long does it take to build a website?</div>
<h3><span>Genies and magic lamps are a thing of fairytales. But it is agreed that even a genie can not give you a top-notch website within hours. Usually, it takes time to build a website, depending on the requirements of the client. If you have come across a meticulous team of website developers like ShellCode Solutions, chances are that your product will be delivered to your doorstep in perfect time. However, here we ponder upon the time it takes to build a website.
</span></h3>
<a href="/build">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>

<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">

<div class=" right">
<div class="blog-text">Why a website revamp is more important in 2021 than ever</div>
<h3><span>With the world continually shifting towards a "new normal" post the pandemic, more and more businesses are shifting towards the online platform. There have been changes in consumer behavior and attitude towards businesses. In such perilous times when more and more users have been spending more time on the screen, one does not have to think twice before deciding to revamp their existing website. In 2021, a website redesign is not only recommended. It is inevitable.
</span></h3>
<a href="/revamp">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/revamp.png" alt="1"style={{width: "50%"}}/>
</div>

</div>
</form>
</div>

</div>
</section>
<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/social.png" alt="1"style={{width: "40%"}}/>
</div>

<div class=" right">
<div class="blog-text">How to find the best Social Media Marketing Agency in Mumbai</div>
<h3><span>Many businesses may feel overwhelmed when faced with the decision of choosing the correct Social Media Marketing Agency for them. This choice is an important one since these agencies can be a valuable resource for business. So if you are one of them and are wondering about what tactics to use, we are here for you. Here is a step-by-step guide to finding the best Social Media Marketing Agency in Mumbai.
</span></h3>
<a href="/socialmedia">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>
<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">

<div class=" right">
<div class="blog-text">Why choose Firebase over other Cloud Platforms</div>
<h3><span>If you are looking for the most appropriate Cloud platform, Firebase is here for you. Firebase is a software development platform that provides Backend-as-a-Service solutions both for mobile and web applications. BaaS solutions allow for eliminating the need to manage backend databases and obtaining corresponding hardware. One can plug them into the apps through APIs. Firebase offers seven services that cover all the backend technologies of an app. Firebase integrates platforms like Android, iOS, Web, etc. Here’s why you should choose Firebase over other Cloud platforms. It has its perks.
</span></h3>
<a href="/cloud">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/cloud.png" alt="1"style={{width: "40%"}}/>
</div>

</div>
</form>
</div>

</div>
</section>

{/* <section class="about6" id="">

<div class="max-width" >
<div class="cardview">

<div class="about-content">
<div class=" left">
<img src="assets/images/sample.jpeg" alt="1"/>
</div>

<div class=" right">

<p><span>New</span> Other</p>
<h3>Agency Growth Event: Merging Is Not The Only Way</h3><br/>

<a href="#teams">Learn More</a>
</div>
</div>
</div>
</div>
</section> */}


{/* <section class="topstories">

<h2>Top Stories</h2>

<div class="about-content">


<div class="horizontal-slide">
<div class="ro1">
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>


<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>

<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
</div>
</div>
<div class="right">
<div class="imageright">
<form class="img-box">
<p><span>New</span>Other <br/>
Get To Know Platform Advertising With Crite</p>
<img src="assets/images/sample.jpeg" alt="1"/>
</form>
</div>
<div class="imageright">
<form class="img-box">
<p><span>New</span>Other <br/>
Get To Know Platform Advertising With Crite</p>
<img src="assets/images/sample.jpeg" alt="1"/>
</form>
</div>
</div>



</div>
</section> */}



{/* <div class="tab-heading">
                <h1>Heading</h1>
                
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
          scrollButtons="auto" classes={{indicator: classes.customStyleOnActiveTab}}
            aria-label="some text" class="tabs1">
              <Tab label={<span className={ value === 0 ? classes.activeTab : classes.customStyleOnTab}>All</span>}/>
                        <Tab label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>Blog</span>}/>
                        <Tab label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>Content marketing</span>}/>
                        <Tab label={<span className={ value === 3 ? classes.activeTab : classes.customStyleOnTab}>Ecommerce</span>}/>
                        <Tab label={<span className={ value === 4 ? classes.activeTab : classes.customStyleOnTab}>Email Marketing</span>}/>
                        <Tab label={<span className={ value === 5 ? classes.activeTab : classes.customStyleOnTab}>Events</span>}/>
                        
                       
                    </Tabs>
                
<TabPanel value={value} index={0}>
<div class="horizontal-slide">
<div class="ro">

<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>

<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
<div class="col1">
<img src="assets/images/sample.jpeg" alt="1"/>
<h5>Get To Know Platform Advertising With Criteo</h5>
</div>
</div>


</div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <div class="tabques">
                <h2>10 questions to ask before hiring a Mobile App Development Company</h2>
                <p>How do you find the one? No, we are not talking about romance here. Although, finding the correct mobile app developers for your mobile application development needs can be even more difficult than finding the love of your life. Why? Here are certain questions you should be asking your mobile app developers and certain answers they should be providing. </p>
                <h3>1. Sharing portfolio</h3>
                <p>Mobile app development can take a good amount of time before the product gets delivered to your doorstep. Ask them how much time their process generally takes. Usually, it takes three to four months to launch a mobile app after proper testing. If they are delivering within weeks, it's not a great sign!</p>
                <h3>2. Ask them for their time</h3>
                <p>We at ShellCode Solutions do not forget to provide information about the development process we undertake. We believe that a scalable and robust designing process goes a long way and builds long-lasting relations. Do not forget to ask the person you hire about the development model they are using. This will give you an idea about the kind of process you really want and whether they are the right fit for you.</p>
                <h3>3. Ask them about their development model</h3>
                <p>ShellCode Solutions, the best Mobile app development company in Mumbai, combines state-of-the-art technology with meticulous employees who deliver on time. The first and foremost question you should be asking your mobile app developers is the kind of process and tools they are using so that you can find the right match!</p>
                <h3>4. Ask them about the tools and technologies they use</h3>
                <p>Frameworks like React Native, Xamarin, etc are a huge help when it comes to mobile app development. ShellCode Solutions makes use of Framework technology to deliver the best mobile applications you will ever see. This is something you want to know about your mobile app developers.</p>
                <h3>5. Find out if they can get their hands on Framework</h3>
                <p>Frameworks like React Native, Xamarin, etc are a huge help when it comes to mobile app development. ShellCode Solutions makes use of Framework technology to deliver the best mobile applications you will ever see. This is something you want to know about your mobile app developers.</p>
                <h3>6. Choosing the right platform</h3>
                <p>Knowing whether you want an Android app or an iOS one can be a hard task. It depends on what you want with your application in the long run. Cross-platform app development is preferable in case you have a huge budget. Our advice? Hire ShellCode Solutions and go for a single platform before you venture into cross-platform app development.</p>
                <h3>7. Ask them about launch and Deployment</h3>
                <p>Believe it or not, not all mobile app developers publish your app in the play store. Launching and deployment after proper testing is an essential part of mobile app development and ShellCode Solutions does that with great effBelieve it or not, not all mobile app developers publish your app in the play store. Launching and deployment after proper testing is an essential part of mobile app development and ShellCode Solutions does that with great efficiency. So what are you waiting for?iciency. So what are you waiting for?</p>
                <h3>8. Maintenance is important. So is marketing!</h3>
                <p>After you have got your hands on your app, their work isn't over. Maintenance and support are an essential part of the development process, and not many developers provide them. ShellCode Solutions is available anywhere, any time. We also offer to market your app on social media platforms and carry out marketing campaigns for you!</p>
                <h3>9. Ask for updates</h3>
                <p>Believe it or not, it is your developer's responsibility to keep you updated and in the loop! ShellCode Solutions ensures a transparent process so that you are updated, always. Ensure that you are the sole owner of your code and the code is secure.</p>
                <h3>10. Don't forget the paperwork!</h3>
                <p>Agreements and paperwork is the most important aspect of your relationship. Ask them about the papers both parties will sign. Usually, a non-disclosure agreement is involved so that both parties maintain secrecy. Sign a Service Legal Agreement which ensures an easy exit if your requirements are not met by your developer.</p>

                </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Creative <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
               
                <p>Creative <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Marketing <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Marketing <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Developers <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Developers <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
            </div> */}



    </>
}

const useStyles = makeStyles({
  customStyleOnTab:{
    fontSize:'2.8vmin',
    fontWeight:'600',
    display: 'flex',
    // padding: '0 1vmin',
    color:'black'
  },
  customStyleOnActiveTab:{
    color:'red'
  },
  activeTab:{
    fontSize:'3vmin',
    fontWeight:'600',
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

export default Blog;