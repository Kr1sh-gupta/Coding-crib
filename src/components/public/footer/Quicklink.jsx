import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading3 from "@components/Heading3";
import {

  faRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Quicklink = () => {
  return (
    <>
      <Heading3 headingText={"QUICK LINKS"} />

      <div className="p-4 text-gray-300 grid gap-6 mx-auto">
        {/* ==== Address === */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faRightLong}
          />
          <button>GALLERY</button>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faRightLong}
          />
          <button>Timetable</button>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faRightLong}
          />
          <button>Contact us</button>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faRightLong}
          />
          <button>Fee Structure</button>
        </div>

      
      </div>
    </>
  );
};

export default Quicklink;
