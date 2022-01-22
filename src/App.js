import './App.css';
import Navbar from "./Navbar";
// import Slider from "./Slider";
import Footer from "./Footer";
import Particle from "./Particle";
import Home from './Home';
import Service from './Service';
import Technology from './Technology';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

import Devops from './Services/Devops';
import Mobile from './Services/Mobile';
import Website from './Services/Website';
import Social from './Services/Social';
import UXUI from './Services/UXUI';
import SEO from './Services/SEO';

import Python from './Technology/Backend/Python';
import Net from './Technology/Backend/Net';
import Php from './Technology/Backend/Php';
import Java from './Technology/Backend/Java';
import Node from './Technology/Backend/Node';

import ReactNative from './Technology/Frontend/ReactNative';
import Angular from './Technology/Frontend/Angular';
import Vuejs from './Technology/Frontend/Vue';
import Reactjs from './Technology/Frontend/React';
import Ios from './Technology/Frontend/Ios';
import Android from './Technology/Frontend/Android';
import Flutter from './Technology/Frontend/Flutter';
import Xamarin from './Technology/Frontend/Xamarin';

import Cloud from './Blog/Cloud';
import SocialMedia from './Blog/SocialMedia';
import Revamp from './Blog/Revamp';
import Build from './Blog/Build';
import Hiring from './Blog/Hiring';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";

function App() {
 
  return (
    <>
    <Particle/>
    <Router>
      
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        {/* <Route path="/slider" component={Slider} exact/> */}
          {/* <Home/>
        </Route> */}
        <Route path="/service" component={Service} exact/>      
        <Route path="/technology" component={Technology} exact/>         
        <Route path="/about" component={About} exact/>   
        <Route path="/blog" component={Blog} exact/>  
        <Route path="/projects" component={Projects} exact/>  
        <Route path="/devops" component={Devops} exact/>
        <Route path="/mobile" component={Mobile} exact/>
        <Route path="/website" component={Website} exact/>
        <Route path="/social" component={Social} exact/>
        <Route path="/uxui" component={UXUI} exact/>
        <Route path="/seo" component={SEO} exact/>

        <Route path="/python" component={Python} exact/>
        <Route path="/.net" component={Net} exact/>
        <Route path="/php" component={Php} exact/>
        <Route path="/java" component={Java} exact/>
        <Route path="/nodejs" component={Node} exact/>

        <Route path="/reactnative" component={ReactNative} exact/>
        <Route path="/angular" component={Angular} exact/>
        <Route path="/vuejs" component={Vuejs} exact/>
        <Route path="/reactjs" component={Reactjs} exact/>
        <Route path="/ios" component={Ios} exact/>
        <Route path="/android" component={Android} exact/>
        <Route path="/flutter" component={Flutter} exact/>
        <Route path="/xamarin" component={Xamarin} exact/>

        <Route path="/cloud" component={Cloud} exact/>
        <Route path="/socialmedia" component={SocialMedia} exact/>
        <Route path="/revamp" component={Revamp} exact/>
        <Route path="/build" component={Build} exact/>
        <Route path="/beforehiring" component={Hiring} exact/>



        
      </Switch>
      
      
      
    </Router>
    <Footer/>
    </>
    );
}

export default App;
