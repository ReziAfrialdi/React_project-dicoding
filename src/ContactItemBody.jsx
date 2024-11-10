import React from "react";

function ContactItemBody({ nama, tags }) {
  return (
    <div className="contact-item_body">
      <h3 className="contact-item_title">{nama}</h3>
      <p className="contact-item_username">@{tags}</p>
    </div>
  );
}

export default ContactItemBody;
