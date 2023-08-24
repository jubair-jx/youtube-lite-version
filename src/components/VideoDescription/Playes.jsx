import React from "react";

const Playes = ({ link, title }) => {
  return (
    <>
      <iframe
        width="100%"
        class="aspect-video"
        src={link}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Playes;
