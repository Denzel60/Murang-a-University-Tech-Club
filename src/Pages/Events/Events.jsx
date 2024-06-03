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
          <h2><span>Cyber Security</span></h2>
          <p className='icon'><span><GiCyberEye /></span></p>
          <p> Time: Every Monday from 4pm to 7pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Webster Ifedha</span></h3>
        </div>

        <div className="event-schedule">
          <h2><span> UI/UX design</span></h2>
          <p className='icon'><span><SiAdobeacrobatreader /></span></p>
          <p> Time: Every Monday from 4pm to 7pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Manase Gunga</span></h3>
        </div>

        <div className="event-schedule">
          <h2><span>Web development</span></h2>
          <p className='icon'><span><FaReact /></span></p>
          <p> Time: Every Wednesday from 6pm to 9pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Carolyne Githenduka</span></h3>
        </div>

        <div className="event-schedule">
          <h2><span>Mobile apps development</span></h2>
          <p className='icon'><span><SiAndroidstudio /></span>
          </p>
          <p> TIme: Thursday from 4pm to 7pm  </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Stanley Amunze</span></h3>
        </div>

        <div className="event-schedule">
          <h2><span>Cloud engineering</span></h2>
          <p className='icon'><span><IoIosCloudUpload /></span></p>
          <p> TIme: every Friday from 3pm to 6pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Paul Karanja</span></h3>
        </div>

        <div className="event-schedule">
          <h2><span>Power Platform</span></h2>
          <p className='icon'><span><RiFileExcel2Fill /></span></p>
          <p> TIme: Saturday from 1pm to 4pm </p>
          <p> Place: Computer lab F04</p>
          <h3> Led by: <span>Evyonn Mbithe</span></h3>
        </div>
      </div>
    </div >
  )
}

export default Events