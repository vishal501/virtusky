import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core';
import Particle from "./Particle";
const Projects = () => {
    
    
    const breakPoints = [
        
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 2},
        // { width: 768, itemsToShow: 3 },
        // { width: 1200, itemsToShow: 4 },
      ];
    const classes = useStyles()
    const [value,setValue]=React.useState(0)
    const handleChange=(e,val)=>{
        console.warn(val)
        setValue(val)
    }



    
    
      
    
    return(
        <>


<Particle/>



<section class="about1" id="">
<div class="max-width" >

<div class="about-content">

<div class=" right">
<div class="text">Our Work</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>

</div>
</div>
</section>



<section class="about7" id="">

<div class="max-width2" >

<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/sample.jpeg" alt="1"/>
<h3>An enthusiastic team delivering beautiful results.</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>

<br/>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
</div>

{/* <div class=" right">

<h3>An enthusiastic team delivering beautiful results.</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>

<br/>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>

</div> */}

</div>
</form>
</div>
</div>
</section>


{/* <h1 style={{ textAlign: "center" }}>Example react</h1> */}
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item className="twoslide">
              <div className="col">
              <img src="assets/images/projects/FarmersKart.jpg"/>
              </div>
              <div className="col">
              <h3>Farmers FarmersKart</h3>
              </div>
              <div className="col">
              <p>Grocery Delivery App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
              <img src="assets/images/projects/DesiiMeat.jpg"/>
              </div>
              <div className="col">
              <h3>Desii Meat</h3>
              </div>
              <div className="col">
              <p>Food Delivery App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/GOOGLEMEET.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Sabak</h3>
              </div>
              <div className="col">
              <p>Business meeting App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/Lagnakariya.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Lagnakariya</h3>
              </div>
              <div className="col">
              <p>Matrimonial App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/GreenTiger.jpg" alt="1"/>              </div>
              <div className="col">
              <h3>Green Tiger </h3>
              </div>
              <div className="col">
              <p>Ecommerce Web App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/company.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Check App</h3>
              </div>
              <div className="col">
              <p>Employee Managment App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/Dryclean.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Chiago Dry Cleaners</h3>
              </div>
              <div className="col">
              <p>Laundry App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/al.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Al-Hisab</h3>
              </div>
              <div className="col">
              <p>Community Money Managment App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/milk.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Dairy App</h3>
              </div>
              <div className="col">
              <p>Order management App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/plan.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>NRI Vichola</h3>
              </div>
              <div className="col">
              <p>US Matrimonial App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/dashboard.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Tutor app</h3>
              </div>
              <div className="col">
              <p>Elearning App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/labour.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>ServicExpertz</h3>
              </div>
              <div className="col">
              <p>House Keeping & Personal Services App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/Pharma.jpg" alt="1" class="resp"/>
              </div>
              <div className="col">
              <h3>Bsb Pharma</h3>
              </div>
              <div className="col">
              <p>Order Managment App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/HomeGuru.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Home Guru</h3>
              </div>
              <div className="col">
              <p>Housekeeping and personal Services Web App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide">
          <div className="col">
          <img src="assets/images/projects/food.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>Ulrapi </h3>
              </div>
              <div className="col">
              <p>Food Delivery App</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          <Item className="twoslide1">
          <div className="col">
          <img src="assets/images/projects/website.jpg" alt="1"/>
              </div>
              <div className="col">
              <h3>FOR </h3>
              </div>
              <div className="col">
              <p>Restaurant Consultancy</p>
              </div>
              <div className="col">
              <a href="#teams">Learn More</a>
              </div>
          </Item>
          
          
        </Carousel>
      </div>


{/* <div class="tab-heading1">
                
              
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
          scrollButtons="auto" classes={{indicator: classes.customStyleOnActiveTab}}
            aria-label="some text" class="tabs1">
                        <Tab label={<span className={ value === 0 ? classes.activeTab : classes.customStyleOnTab}>All</span>}/>
                        <Tab label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>Website Design</span>}/>
                        <Tab label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>App Development</span>}/>
                        <Tab label={<span className={ value === 3 ? classes.activeTab : classes.customStyleOnTab}>Ecommerce</span>}/>
                        <Tab label={<span className={ value === 4 ? classes.activeTab : classes.customStyleOnTab}>Digital Marketing</span>}/>
                        <Tab label={<span className={ value === 5 ? classes.activeTab : classes.customStyleOnTab}>UI UX</span>}/>
                        
                    </Tabs>
               
<TabPanel value={value} index={0} >
<div class="row1">
<img src="assets/images/sample.jpeg" alt="1"/>
<img src="assets/images/sample.jpeg" alt="1"/>
<img src="assets/images/sample.jpeg" alt="1"/>
<img src="assets/images/sample.jpeg" alt="1"/>
<img src="assets/images/sample.jpeg" alt="1"/>
<img src="assets/images/sample.jpeg" alt="1"/>
</div>
</TabPanel>
                
                <TabPanel value={value} index={1}>
                <div class="uiux">
                <h3>Best Website Development for your Brand</h3>
                <p>ShellCode Solutions, the best Website Development Company in Mumbai, is here for your every need. We create modern and sophisticated websites with engaging UI that keeps your consumers engaged and hooked. Our services come at pocket-friendly prices and are customizable as per your requirements. Ever heard a deal sound so good? Then what are you waiting for?</p>
                <h3>Our Website Development strategy</h3>
                  <p>We are here for you always! Whether you are an established brand or a small and flourishing business, we will design the perfect website for you. Our team of developers is flexible in their development processes according to your requirements. Your wish becomes our command. We research extensively about your niche and industry so that we can target the correct consumer base. We build SEO-friendly websites with a responsive UI and UX, attracting leads and increasing your conversion rate. With us, you get to rule the online market. The choice is yours!</p>
                <h3>User Experience Design</h3>
                <p>An engaging and interactive UI and UX is a key to an attractive website, which pulls more leads. Our designers give you customizable options in UI and UX and build the best platform for your enterprise. By treating every client differently, we ensure that the client gets the best possible service. We analyze and monitor user engagement through the UI we have created and make the required changes. Our process puts your needs on top, and your growth becomes our priority.</p>
                <h3>Website Development</h3>
                <p>The developers at ShellCode Solutions, the best Website Development Company in Mumbai, are meticulous and work hard to get what you want. Our designers have worked with many clients across different industries. We provide our services on a global scale and give you a website that is worthy of your cause. </p>
                <h3>Website Testing</h3>
                <p>A website is not finished until it has gone through all rounds of testing. Even after building the perfect website, the experience can get ruined if you come across bugs. Bugs are something we despise. That is why we conduct multiple rounds of testing to ensure that your website is a safe and secure platform.</p>

                </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
               
                <div class="uiux">
                <h3>We will realize your dream into reality!</h3>
                <p>ShellCode Solutions, the best Website Development Company in Mumbai, is here for your every need. We create modern and sophisticated websites with engaging UI that keeps your consumers engaged and hooked. Our services come at pocket-friendly prices and are customizable as per your requirements. Ever heard a deal sound so good? Then what are you waiting for?</p>
                <h3>Our Success Strategy to develop Mobile Apps</h3>
                  <p>We are here for you always! Whether you are an established brand or a small and flourishing business, we will design the perfect website for you. Our team of developers is flexible in their development processes according to your requirements. Your wish becomes our command. We research extensively about your niche and industry so that we can target the correct consumer base. We build SEO-friendly websites with a responsive UI and UX, attracting leads and increasing your conversion rate. With us, you get to rule the online market. The choice is yours!</p>
                <h3>User Experience Design</h3>
                <p>An engaging and interactive UI and UX is a key to an attractive website, which pulls more leads. Our designers give you customizable options in UI and UX and build the best platform for your enterprise. By treating every client differently, we ensure that the client gets the best possible service. We analyze and monitor user engagement through the UI we have created and make the required changes. Our process puts your needs on top, and your growth becomes our priority.</p>
                <h3>User Experience Design</h3>
                <p>The developers at ShellCode Solutions, the best Website Development Company in Mumbai, are meticulous and work hard to get what you want. Our designers have worked with many clients across different industries. We provide our services on a global scale and give you a website that is worthy of your cause. </p>
                <h3>Mobile App Testing</h3>
                <p>A website is not finished until it has gone through all rounds of testing. Even after building the perfect website, the experience can get ruined if you come across bugs. Bugs are something we despise. That is why we conduct multiple rounds of testing to ensure that your website is a safe and secure platform.</p>
                
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

                <TabPanel value={value} index={5}>
                <div class="uiux">
                <h3>Get An Efficient UI and UX</h3>
                <p>A lousy UI and UX can spell doom for your website. At ShellCode Solutions, the best UI UX developers in Mumbai, we ensure that such is not the case with what we deliver. Be it a user-friendly website or a sophisticated app, an efficient and attractive UI and UX is our priority. We only deliver the best!</p>
                <h3>BEST UX UI Developers in Mumbai developing world-class UI and UX<br/>
                  Our UX UI development strategy</h3>
                  <p>We understand that your platform must reflect your brand. That is why we spend our time understanding your brand so that we can get it just right! We build an easily navigable surface so that your consumers do not find it difficult to access your platform. We offer maintenance and support even after delivering and ensure that you do not face any problems and get the best UX and UI.</p>
                <h3>Get the best UI and UX Design</h3>
                <p>When it comes to design, we are simply the best! Our team of dedicated UX UI developers puts your needs on top of our priority list and delivers accordingly. A responsive and modern UI and UX makes the platform attractive and efficient and guarantees user satisfaction. Your users should not find it a struggle to scroll through your platform. We take care of that!</p>
                <h3>Best UX UI Designers in Mumbai assigned on front end development</h3>
                <p>We are the best team you can get! We understand that an interactive and smooth UI and UX needs research and analysis. We conduct proper research for your niche and industry to determine what your user base demands. And then we deliver just what you need in a reasonable timeframe!</p>
                <h3>24x7 support from The best UX UI developers in Mumbai</h3>
                <p>We understand why your platform needs a responsive UI and UX. To make sure that you only get the best for yourself, we stay and offer one year of technical support and maintenance. We jump upon any chance to improve the Interface we have designed and keep your platform updated as and when it needs improvement.</p>
                </div>
                </TabPanel>
            </div> */}




        </>
    )
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

export default Projects;

