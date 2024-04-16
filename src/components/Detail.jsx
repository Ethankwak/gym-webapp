import React from "react";
import PropTypes from "prop-types";
import BodyImg from "../assets/body.png"
import TargetImg from "../assets/target.png"
import EquipmentImg from "../assets/equipment.png"

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  

  const details = [
    {
      icon: BodyImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    }
  ]

  return (
    <div
      className="
    flex 
    flex-col
    lg:flex-row
    items-center
    p-5
    gap-14

    "
    >
      <img src={gifUrl} alt={name} loading="lazy" />
      <div
        className="
        flex
        flex-col
        lg:gap-8
        xs:gap-5
        "
      >
        <h2
          className="
            text-4xl
            font-bold
            capitalize
            "
        >
          {name}
        </h2>
        <span>
        <span
          className="
            capitalize
            "
        >
          {name}{" "}
          </span>
        <span
          className="
            
            "
        >
          is a great workout for your{" "}
          {bodyPart}. The workout requires {equipment}s to properly target the{" "}
          {target}.
        </span>
        </span>
        {details.map((item) => (
          <div key={item.name} className="
          flex
          flex-row
          gap-6
          items-center
          "> 
            <button className="
            rounded-full
            w-24
            h-24
          bg-blue-200
            flex
            justify-center
            items-center
            ">
              <img src={item.icon} alt={bodyPart} className="
              w-12
              h-12
              text-middle
              "/>
            </button>
            <div className="
            capitalize
            ">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    bodyPart: PropTypes.string,
    gifUrl: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
    equipment: PropTypes.string,
  }).isRequired,
};
export default Detail;
