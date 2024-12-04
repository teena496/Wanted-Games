import { useState, useEffect } from "react";
import canadaFlag from "./assets/canada-flag.svg";
import ukraineFlag from "./assets/ukraine-flag.svg";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";
import contactBackgroundImage from "./assets/contact-image.svg";
import { email, media, phone, social } from "./services";

export default function Contact() {
  const sampleEmails = [
    {
      address: "wanted.games.production@gmail.com",
      id: 1,
    },
  ];

  const samplePhoneNumber = [
    {
      id: 1,
      image_url: canadaFlag,
      number: "+1 416 818 7147",
      sort_id: 1,
    },
    {
      id: 2,
      image_url: ukraineFlag,
      number: "+38 093 266 2988",
      sort_id: 1,
    },
  ];

  const sampleSocialMedia = [
    {
      id: 1,
      image_url: instagramIcon,
      sort_id: 1,
      url: "https://www.instagram.com/wanted_games_ukr/",
    },
    {
      id: 2,
      image_url: facebookIcon,
      sort_id: 1,
      url: "https://www.facebook.com/wanted.games.ukr",
    },
    {
      id: 3,
      image_url: linkedinIcon,
      sort_id: 1,
      url: "https://www.linkedin.com",
    },
  ];

  const [emails, setEmails] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchEmailData();
    fetchPhoneData();
    fetchSocialData();
    fetchMediaData();
  }, []);

  const fetchEmailData = async () => {
    try {
      const data = await email();
      setEmails(data);
    } catch (error) {
      console.error("Error fetching emails", error);
    }
  };

  const fetchPhoneData = async () => {
    try {
      const data = await phone();
      setPhoneNumber(data);
    } catch (error) {
      console.error("Error fetching phone numbers", error);
    }
  };

  const fetchSocialData = async () => {
    try {
      const data = await social();
      setSocialMediaLinks(data);
    } catch (error) {
      console.error("Error fetching social media data", error);
    }
  };

  const fetchMediaData = async () => {
    try {
      const data = await media();
      let backgroundImage = data.find((x) => x.label === "background-image");
      setImageData(backgroundImage);
    } catch (error) {
      console.error("Error fetching media data", error);
    }
  };

  return (
    <div id="contact" className="container">
      <div
        className="d-flex justify-content-center align-items-center rounded-3 border shadow-lg contact-background-image"
        style={{
          backgroundImage: imageData?.image_url
            ? `url(${imageData.image_url})`
            : `url(${contactBackgroundImage})`,
        }}
      >
        <div className="d-flex flex-column p-5 m-5 rounded-5 border shadow-lg">
          <h1 className="display-4 lh-1 text-center m-5 fw-bold">Contact Us</h1>
          <p className="lead lh-6 fs-4 m-4 fw-bold">Email : </p>
          {emails.length
            ? emails.map((email) => {
                return (
                  <p key={email.id} className="lead lh-1 fs-4 m-4">
                    {email.address}
                  </p>
                );
              })
            : sampleEmails.map((email) => {
                return (
                  <p key={email.id} className="lead lh-1 fs-4 m-4">
                    {email.address}
                  </p>
                );
              })}

          <p className="lead lh-1 fs-4 m-4 fw-bold">
            Follow us :
            {socialMediaLinks.length
              ? socialMediaLinks.map((socialmedia) => {
                  return (
                    <a
                      key={`social-media-link-${socialmedia.id}`}
                      href={socialmedia.url}
                      target="_blank"
                    >
                      <img
                        key={`social-media-image-${socialmedia.id}`}
                        src={socialmedia.image_url}
                        alt="Icon"
                        height={30}
                        style={{ marginLeft: "20px" }}
                      />
                    </a>
                  );
                })
              : sampleSocialMedia.map((socialmedia) => {
                  return (
                    <a
                      key={`social-media-link-${socialmedia.id}`}
                      href={socialmedia.url}
                      target="_blank"
                    >
                      <img
                        key={`social-media-image-${socialmedia.id}`}
                        src={socialmedia.image_url}
                        alt="Icon"
                        height={30}
                        style={{ marginLeft: "20px" }}
                      />
                    </a>
                  );
                })}
          </p>
          <p className="lead lh-1 fs-4 m-4 fw-bold">Phone Number :</p>
          <div className="lead lh-base fs-4 m-4 d-flex justify-content-between flex-wrap">
            <ul className="list-inline">
              {phoneNumber.length
                ? phoneNumber.map((phone) => {
                    return (
                      <>
                        <li className="list-inline-item">
                          <img
                            className="m-2"
                            src={phone.image_url}
                            alt="Country icon"
                            height={30}
                          />
                          {phone.number}
                        </li>
                      </>
                    );
                  })
                : samplePhoneNumber.map((phone) => {
                    return (
                      <>
                        <li className="list-inline-item">
                          <img
                            className="m-2"
                            src={phone.image_url}
                            alt="Country icon"
                            height={30}
                          />
                          {phone.number}
                        </li>
                      </>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
