import { FaStar } from "react-icons/fa";
import "./css.css";
function StarIcon({ isWhite }: { isWhite?: boolean }) {
  return <FaStar className={`star ${isWhite && "white-color"}`} />;
}
export { StarIcon };
