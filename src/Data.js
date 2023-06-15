import { FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,  FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagramSquare, FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "contact"]

export const socialIcons = [
  <a title='Follow me on Instagram' href="https://www.instagram.com/kleinedev/" target="_blank" rel="noreferrer"><FaInstagram /></a>,
  <a title='Connect with me on LinkedIn' href="https://www.linkedin.com/in/kleine-ahia-235463248/" target="_blank" rel="noreferrer"><FaLinkedin /></a>,
  <a title='Follow me on Twitter' href="https://twitter.com/kleinedev" target="_blank" rel="noreferrer"><FaTwitter/></a>,
  <a title="Let's discuss on whatsapp" href="https://wa.me/2348157474347?text=Hello___" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Iheme Doris Eziaku"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+2348157474347"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dorisiheme14@gmail.com"
  }
]

export const icons = [ <FaInstagramSquare/>, <FaTwitter/>, <FaLinkedin/>, <FaFacebookSquare/>, <FaWhatsapp/>, <FaFacebookMessenger/>]

export const experiences = [
  {
    id: 1,
    year: "2022 - present",
    position: "Social media Manager",
    company: "ACE-FUELS"
  },
  {
    di: 2,
    year: "2019 - 2023",
    position: "Personal Assistant",
    company: "FUTO"
  }
]
export const finishes = [
  {
    id: 1,
    number: '5+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "50+",
    itemName: "Satisfied Clients"
  },
  {
    id: 3,
    number: "70+",
    itemName: "Projects"
  },
  {
    id: 4,
    number: "100+",
    itemName: "Contents created"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Lagos, Nigeria."
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dorisiheme14@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+234-815-747-4347"
  }
]
