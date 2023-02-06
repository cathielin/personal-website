import React from "react";
import Icon from "../Icon/Icon.js";
import IconLabel from "../Icon/IconLabel.js";
import "./IconWithLabel.scss";

function IconWithLabel(props) {
  const { className, iconImage, iconLabel, setState } = props;

  return (
    <div className="container">
      <Icon
        className="icon"
        iconType={className}
        setState={setState}
        iconImage={iconImage}
      />
      <IconLabel className={className} iconLabel={iconLabel} />
    </div>
  );
}

export default IconWithLabel;
