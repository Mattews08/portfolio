import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Matheus Lima. All Rights Reserved.`,
    author: {
        name: "Matheus Lima",
        accounts: [
            {
                url: "https://github.com/Mattews08",
                label: "Github Account",
                type: "gray",
                icon: <FaGithub />
            },
            {
                url: "https://twitter.com/mathLima8",
                label: "Twitter Account",
                type: "twitter",
                icon: <FaTwitter />
            },

            {
                url: "https://www.linkedin.com/in/matheusl08/",
                label: "LinkedIn Account",
                type: "linkedin",
                icon: <FaLinkedin />
            },
            {
                url: "mailto:mattheus.l08@gmail.com",
                label: "Mathe's Lima",
                type: "gray",
                icon: <FiMail />
            }
        ]
    }
};

export default siteConfig;