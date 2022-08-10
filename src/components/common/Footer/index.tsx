import { BiWorld } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import LogoIcon from "../../../assets/icons/logoIcon";
import Button from "../Button";
import {
  copyrights,
  headingNewsleter,
  headingSocialMedias,
  languageLabel,
  link1,
  link2,
  link3,
  link4,
  storeName,
  subscribeButton,
  subscribeNewsleter,
  subscribePlaceholder,
  summarySubtitle,
} from "../locales";
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
          <p>{summarySubtitle}</p>
          <p>{copyrights}</p>
        </SummaryContainer>

        <LinksContainer>
          <h4>QUICK LINKS</h4>
          <p>{link1} </p>
          <p>{link2}</p>
          <p>{link3}</p>
          <p>{link4}</p>
        </LinksContainer>

        <NewsletterContainer>
          <h4>{headingNewsleter}</h4>
          <p>{subscribeNewsleter}</p>
          <input type="email" placeholder={subscribePlaceholder} />
          <Button width="10rem" height="3.125rem" color="white">
            {subscribeButton}
          </Button>
        </NewsletterContainer>

        <SocialMediaContainer>
          <h4>{headingSocialMedias}</h4>
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
              {languageLabel}
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
