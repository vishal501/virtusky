import React from "react";

const Footer = () => {
    return(
        <>
        <footer class="footer">
<div class="container">
<div class="row">
<div class="footer-col">
<div className="circl">
<a href="/"><img src="assets/images/logos.jpeg" alt=""/></a>
</div>
<ul>
<li><a href="#"><br/>About Virtusky</a></li>

</ul>
</div>
{/* <div class="footer-col">
<h4>Contact</h4>
<ul>
<li><a href="#">+91 8097355922</a></li>
<li><a>biz@shellcode.co.in</a></li>
</ul>
</div> */}
<div class="footer-col">
<h4>Explore</h4>
<ul>
<li><a href="/service">Services</a></li>
<li><a href="/technology">Technology</a></li>
<li><a href="/projects">Projects</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="https://wa.me/+918097355922">Contact Us</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Follow Us</h4>
<ul>
<li><a href="https://instagram.com/shellcode_it_services?utm_medium=copy_link">Instagram</a></li>
<li><a href="https://www.linkedin.com/company/shellcode-solutions">Linkediin</a></li>
<li><a href="https://twitter.com/login?lang=en">Twitter</a></li>
<li><a href="https://m.facebook.com/shellcodesolutions/">Facebook</a></li>
</ul>
</div>
</div>
</div>

</footer>
{/* <div class="black-footer">
    <div class="copyright">Copyright © 2020 Shellcode Solutions Technologies, All Rights Reserved</div>
    <h4 class="hyperlink">Designed and Developed by <a href="https://www.shellcode.co.in">Shellcode Solutions.com</a></h4>
</div> */}
</>
    );
}
export default Footer;