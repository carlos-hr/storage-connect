import { BiWorld } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import LogoIcon from "../../../assets/icons/logoIcon";
import Button from "../Button";
import { storeName } from "../locales";
import {
  FooterContainer,
  FooterContent,
  LinksContainer,
  NewsletterContainer,
  SocialMediaContainer,
  SocialMediaIcon,
  SummaryContainer,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SummaryContainer>
          <div>
            <LogoIcon />
            <h3>{storeName}</h3>
          </div>
          <p>
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>
          <p>© StorageConnect 2022, All Rights Reserved</p>
        </SummaryContainer>

        <LinksContainer>
          <h4>QUICK LINKS</h4>
          <p>Active Listings </p>
          <p> Self your Self Storage</p>
          <p> Free Evaluation Learn</p>
        </LinksContainer>

        <NewsletterContainer>
          <h4>NEWSLETER</h4>
          <p>Get latest updates right in your inbox</p>
          <input type="email" placeholder="Enter your email" />
          <Button width="10rem" height="3.125rem" color="white">
            Subscribe Now
          </Button>
        </NewsletterContainer>

        <SocialMediaContainer>
          <h4>LET'S GET SOCIAL</h4>
          <div>
            <SocialMediaIcon>
              <BsFacebook />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <BsLinkedin />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <BsTwitter />
            </SocialMediaIcon>
            <SocialMediaIcon>
              <BsInstagram />
            </SocialMediaIcon>
          </div>

          <div>
            <label htmlFor="lang-select">
              <BiWorld />
              English - En
            </label>
            <select name="lang-select" id="lang-select">
              <option></option>
            </select>
          </div>
        </SocialMediaContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
