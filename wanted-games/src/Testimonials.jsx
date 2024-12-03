export default function Testimonials() {
  return (
    <div className="container">
      <div className="m-5 p-1">
        <h1 className="text-center m-5">Video reviews of our games</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          <iframe
            className="m-5"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rQ-EY4vki8A?si=MFLXQ849tHh8llbl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="m-5"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g-7EbtUsL0k?si=7twsVKC7pV6n6ftQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
