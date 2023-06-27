import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MKTypography from "components/MKTypography";
import logo from "./plogo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "PenielTech",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "home", href: "/" },
        { name: "about us", href: "/pages/about-us" },
        { name: "careers", href: "/pages/career" },
        { name: "blog", href: "/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "/" },
        { name: "bits & snippets", href: "/" },
        { name: "affiliate program", href: "/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/pages/contact-us" },
        { name: "knowledge center", href: "/" },
        { name: "custom development", href: "/" },
        { name: "sponsorships", href: "/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/" },
        { name: "privacy policy", href: "/" },
        { name: "licenses", href: "/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        PenielTech
      </MKTypography>
      .
    </MKTypography>
  ),
};
