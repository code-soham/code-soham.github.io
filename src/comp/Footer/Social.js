import { Typography, Tooltip } from "@mui/material";
import React from "react";
import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Twitter,
  GitHub,
} from "@mui/icons-material";
export default function Social() {
  const iconsData = [
    {
      icon: <LinkedIn fontSize="large" />,
      link: "https://www.linkedin.com/in/code-soham",
      name: "LinkedIn",
    },
    {
      icon: <Twitter fontSize="large" />,
      link: "https://www.twitter.com/sohamhasnt",
      name: "Twitter",
    },
    {
      icon: <GitHub fontSize="large" />,
      link: "https://www.github.com/code-soham",
      name: "GitHub",
    },
    {
      icon: <FacebookTwoTone fontSize="large" />,
      link: "https://www.facebook.com/soham.36.chowdhury",
      name: "Facebook",
    },
    {
      icon: <Instagram fontSize="large" />,
      link: "https://www.instagram.com/soham_hasnt_",
      name: "Instagram",
    },
  ];
  return (
    <React.Fragment>
      <div className="social-div">
        <Typography variant="h4">Connect With Me</Typography>
        <div className="social-links">
          {iconsData.map((icon, index) => (
            <Tooltip title={icon.name} key={index}>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="flipcon"
              >
                {icon.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
