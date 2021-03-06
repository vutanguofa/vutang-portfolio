import React from 'react';
import vutang from '../../assets/vutang.png';

function About() {
    return(
    <section class="page-section" id="about">
      <h2>About Me</h2>
      <div class="right-margin">
      <img class="portfolio-picture" src={vutang} alt="vu gray shirt" />
     
        <p>
        My name is, Vu Tang, and I am currently a student at UofA. I'm attending a bootcamp coding class and will be graduating in January, becoming an official fullstack developer.
        </p>
        <p>
        Aside from school, I enjoy building websites using WordPress and am familiar with using payment processing APIs with PayPal and Braintree. Additionally, I have over 5 years of experience with working with ecommerce platforms such as Magento and WooCoommerce.
        </p>
      </div>
    </section>

    )
}

export default About;