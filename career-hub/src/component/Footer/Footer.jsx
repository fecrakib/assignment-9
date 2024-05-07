import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
      <div className='contain '>
          <section className='p-5 '>
            <footer class="footer max-w-[1200px]  sm: grid grid-cols-2 md:flex justify-between">
    <div class="footer-section py-2">
        <h3>Company Info</h3>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div class="footer-section py-2">
        <h3>Service</h3>
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
        </ul>
    </div>
    <div class="footer-section py-2">
        <h3>Our Team</h3>
        <ul>
            <li>Team Member 1</li>
            <li>Team Member 2</li>
            <li>Team Member 3</li>
        </ul>
    </div>
    <div class="footer-section py-2">
        <h3>Social Media</h3>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    </div>
</footer>

        </section>
      </div>
    );
};

export default Footer;