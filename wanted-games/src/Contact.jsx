import { useState, useEffect } from "react";
import { email, media, phone, social } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function Contact() {
  const sampleMediaData = {
    id: 1,
    image_url: placeholderImage,
    label: "background_image",
  };
  const sampleEmails = [
    {
      address: "wanted.games.production@gmail.com",
      id: 1,
    },
  ];

  const samplePhoneNumbers = [
    {
      id: 1,
      image_url: placeholderImage,
      number: "+1 416 818 7147",
      sort_id: 1,
    },
    {
      id: 2,
      image_url: placeholderImage,
      number: "+38 093 266 2988",
      sort_id: 2,
    },
  ];

  const sampleSocialMedia = [
    {
      id: 1,
      image_url: placeholderImage,
      sort_id: 1,
      url: "https://www.instagram.com/wanted_games_ukr/",
    },
    {
      id: 2,
      image_url: placeholderImage,
      sort_id: 2,
      url: "https://www.facebook.com/wanted.games.ukr",
    },
    {
      id: 3,
      image_url: placeholderImage,
      sort_id: 3,
      url: "https://www.linkedin.com",
    },
  ];

  const [emails, setEmails] = useState([]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
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
      setEmails(data.length ? data : sampleEmails);
    } catch (error) {
      setEmails(sampleEmails);
      console.error("Error fetching emails", error);
    }
  };

  const fetchPhoneData = async () => {
    try {
      const data = await phone();
      setPhoneNumbers(data.length ? data : samplePhoneNumbers);
    } catch (error) {
      setPhoneNumbers(samplePhoneNumbers);
      console.error("Error fetching phone numbers", error);
    }
  };

  const fetchSocialData = async () => {
    try {
      const data = await social();
      setSocialMediaLinks(data.length ? data : sampleSocialMedia);
    } catch (error) {
      setSocialMediaLinks(sampleSocialMedia);
      console.error("Error fetching social media data", error);
    }
  };

  const fetchMediaData = async () => {
    try {
      const data = await media();
      let backgroundImage = data.find((x) => x.label === "background_image");
      setImageData(backgroundImage ? backgroundImage : sampleMediaData);
    } catch (error) {
      setImageData(sampleMediaData);
      console.error("Error fetching media data", error);
    }
  };

  return (
    <div id="contact" className="container">
      <div
        className="d-flex justify-content-center align-items-center rounded-3 border shadow-lg contact-background-image"
        style={{
          backgroundImage: `url(${imageData.image_url})`,
        }}
      >
        <div className="d-flex flex-column p-5 m-5 rounded-5 border shadow-lg">
          <h1 className="display-4 lh-1 text-center m-5 fw-bold">Contact Us</h1>
          <p className="lead lh-6 fs-4 m-4 fw-bold">Email : </p>
          {emails.map((email, index) => {
            return (
              <p key={`email-${index}`} className="lead lh-1 fs-4 m-4">
                {email.address}
              </p>
            );
          })}

          <p className="lead lh-1 fs-4 m-4 fw-bold">
            Follow us :
            {socialMediaLinks.map((socialmedia, index) => {
              return (
                <a
                  key={`social-media-link-${index}`}
                  href={socialmedia.url}
                  target="_blank"
                >
                  <img
                    key={`social-media-image-${index}`}
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
              {phoneNumbers.map((phone, index) => {
                return (
                  <>
                    <li
                      key={`phone-number-${index}`}
                      className="list-inline-item"
                    >
                      <img
                        key={`country-code-image-${index}`}
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
