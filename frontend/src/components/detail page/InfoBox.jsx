import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const InfoBox = () => {
  return (
    <div>
      <div className="px-3 my-3 fs-00">
        <p className="fs-4 fs-000">Location and Contact</p>
        <div className="my-2">
          <iframe
            title="this is map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24506.996404258454!2d94.70645042557179!3d16.803004675251024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ4JzQxLjUiTiA5NMKwNDInMjcuOCJF!5e0!3m2!1sen!2smm!4v1733498718763!5m2!1sen!2smm"
            allowfullscreen=""
            className="w-100"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="fs-6">
          <FontAwesomeIcon icon={faHouse} className="me-2" />
          No.123, Than Pat Ward, Thit Pote Kone Village, Pathein, Myanmar
        </p>
        <p className="fs-6">09 123 456 789</p>
        <p className="fs-6">sample@gmail.com </p>
        <p className="fs-6">Opening Hours: </p>
      </div>
    </div>
  );
};

export default InfoBox;
