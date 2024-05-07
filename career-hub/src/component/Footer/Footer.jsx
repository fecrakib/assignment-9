import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='p-5'>
            <footer class="footer">
    <div class="footer-section">
        <h3>Company Info</h3>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div class="footer-section">
        <h3>Service</h3>
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
        </ul>
    </div>
    <div class="footer-section">
        <h3>Our Team</h3>
        <ul>
            <li>Team Member 1</li>
            <li>Team Member 2</li>
            <li>Team Member 3</li>
        </ul>
    </div>
    <div class="footer-section">
        <h3>Social Media</h3>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    </div>
</footer>

        </div>
    );
};

export default Footer;