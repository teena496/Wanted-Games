import { useState, useEffect } from "react";
import { email, media, phone, social } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function Contact() {
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
      setEmails(data);
    } catch (error) {
      console.error("Error fetching emails", error);
    }
  };

  const fetchPhoneData = async () => {
    try {
      const data = await phone();
      setPhoneNumbers(data);
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
      let backgroundImage = data.find((x) => x.label === "background_image");
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
          backgroundImage: imageData.image_url
            ? `url(${imageData.image_url})`
            : placeholderImage,
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
                    src={
                      socialmedia.image_url
                        ? socialmedia.image_url
                        : placeholderImage
                    }
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
                        src={
                          phone.image_url ? phone.image_url : placeholderImage
                        }
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
