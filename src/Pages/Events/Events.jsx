import './Events.css'
import { GiCyberEye } from "react-icons/gi";
import { SiAdobeacrobatreader } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { IoIosCloudUpload } from "react-icons/io";
import { RiFileExcel2Fill } from "react-icons/ri";

const Events = () => {
  return (
    <div className='events'>
      <div className="heros">
        <h1>Welcome to our Events</h1>
      </div>

      <h2 className='events-title'>Our Events</h2>
      <div className="event">
        <div className="event-schedule">
          <h2>Cyber Security</h2>
          <p className='icon'><GiCyberEye /></p>
          <p> Time: Every Monday from 4pm to 7pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Webster Ifedha</h3>
        </div>

        <div className="event-schedule">
          <h2>UI/UX design</h2>
          <p className='icon'><SiAdobeacrobatreader /></p>
          <p> Time: Every Monday from 4pm to 7pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Manase Gunga</h3>
        </div>

        <div className="event-schedule">
          <h2>Web development</h2>
          <p className='icon'><FaReact /></p>
          <p> Time: Every Wednesday from 6pm to 9pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Carolyne Githenduka</h3>
        </div>

        <div className="event-schedule">
          <h2>Mobile apps development</h2>
          <p className='icon'><SiAndroidstudio />
          </p>
          <p> TIme: Thursday from 4pm to 7pm  </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Stanley Amunze.</h3>
        </div>

        <div className="event-schedule">
          <h2>Cloud engineering</h2>
          <p className='icon'><IoIosCloudUpload /></p>
          <p> TIme: every Friday from 3pm to 6pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Paul Karanja</h3>
        </div>

        <div className="event-schedule">
          <h2>Power Platform</h2>
          <p className='icon'><RiFileExcel2Fill /></p>
          <p> TIme: Saturday from 1pm to 4pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: Evyonn Mbithe</h3>
        </div>
      </div>
    </div>
  )
}

export default Events