import SiteLayout from "../components/SiteLayout";
import Image from "next/image";
import getConfig from "next/config";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Index = () => (
  <SiteLayout>
    <section className="w-screen home-color">
      <div className="flex items-center justify-center my-6">
        <div className="flex home-bgstyle bg-home rounded-lg grid grid-cols-2">
          <div className="rounded-lg h-auto my-6 mx-8">
            <Image
              className="rounded-full"              
              src = "/profile.png"
              alt="Picture of the author"
              width={300}
              height={400}            
            />
          </div>
          <div className="rounded-lg m-8">
            <div className="home-textbg rounded-10 shadow-2xl text-white mt-8">
              <p>
                My start at tecnology area was during my bachelor's degree in
                Computer Science.
              </p>
              <p>
                In 2020 something changed and a passion for develop projects and learn
                programming hit me like a meteor.
              </p>
              <br />
              <p>
                "The greatest act of kindness is to be able to somehow improve
                people's lives".
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg m-2 col-span-2">
            <div className="home-textbg rounded-10 shadow-2xl text-white">
              <button onClick={clickHandle} id="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </button>
              <button onClick={clickHandle} id="GitHub">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
              <button onClick={clickHandle} id="Instagram">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>
              <button onClick={clickHandle} id="Skype">
                <FontAwesomeIcon icon={faSkype} /> Skype
              </button>
              <button onClick={clickHandle} id="Whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>      
      {/* <div className="text-center">
        <button className="bg-gray-900 text-white font-small rounded-lg px-4 py-4 m-6 leading-tight">
          Leave a Like!
        </button>
        <br />
        <br />
      </div> */}
    </section>
  </SiteLayout>
);

const clickHandle = (event) => {
  switch (event.target.id) {
    case "LinkedIn": {
      // Logic to handle `Linkedin` case
      document.location.href = "https://linkedin.com/in/gustavo-morilla";
      break;
    }
    case "GitHub": {
      // Logic to handle `Linkedin` case
      document.location.href = "https://github.com/M0rilla";
      break;
    }
    case "Instagram": {
      // Logic to handle `Linkedin` case
      document.location.href = "https://www.instagram.com/guuh_morilla/";
      break;
    }
    case "Skype": {
      // Logic to handle `Linkedin` case
      document.location.href = "https://join.skype.com/invite/hfiwQSelIWGw";
      break;
    }
    case "Whatsapp": {
      // Logic to handle `Linkedin` case
      document.location.href =
        "https://api.whatsapp.com/send?phone=551999189187&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20atrav%C3%A9s%20de%20seu%20site!";
      break;
    }
  }
};

export default Index;
