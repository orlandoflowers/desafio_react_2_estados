import "./SocialButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = (props) => {
  return (
    <div className="iconContainer">
      <FontAwesomeIcon className="icon" icon={props.facebook} />
      <FontAwesomeIcon className="icon" icon={props.github} />
      <FontAwesomeIcon className="icon" icon={props.linkedin} />
    </div>
  );
};

export default SocialButton;
