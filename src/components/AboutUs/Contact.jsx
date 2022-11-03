import React from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/contact.scss";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contactAll">
        <div className="contactDash">
          <div className="about">İLETİŞİM</div>
          <div className="slogan">Tel: 0555 000 0000</div>
          <div className="aboutContent">
            Sitemiz, daha kolay, daha kısa zamanda ve daha uygun maliyette
            işlerinizi yaptırabilmeniz için siz değerli kullanıcılarımıza
            **.**.2022 tarihinde hizmete geçmiştir. Sizlerle yardımcı olmaktan
            mutluluk duyuyor, bizi tercih ettiğiniz için çok teşekkür ediyoruz.
          </div>
          <div className="icons-container">
            <div className="contact-icons">
              <div className="social-icons spinned">
                <a className="item facebook" href="https://www.facebook.com/">
                  <em className="fa fa-facebook"></em>
                </a>
                <a className="item twitter" href="https://twitter.com/">
                  <em className="fa fa-twitter"></em>
                </a>
                <a className="item linkedin" href="https://www.linkedin.com/">
                  <em className="fa fa-linkedin"></em>
                </a>
                <a className="item instagram" href="https://www.instagram.com/">
                  <em className="fa fa-instagram"></em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
