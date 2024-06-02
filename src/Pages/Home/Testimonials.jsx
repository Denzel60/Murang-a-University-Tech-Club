import './Home.css'
import studentImg from '../../assets/student.jpg'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className="alumni">
                <img src={studentImg} alt="Images for John Doe" className='alumniImg' />
                <h3>Alumni John Doe</h3>
                <p className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus officiis fugit qui, provident ipsa molestias sit dolor ad sunt unde earum fugiat minima ipsum, fuga nesciunt amet nobis debitis?
                </p>
            </div>

            <div className="alumni">
                <img src={studentImg} alt="Images for John Doe" className='alumniImg' />
                <h3>Alumni John Doe</h3>
                <p className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus officiis fugit qui, provident ipsa molestias sit dolor ad sunt unde earum fugiat minima ipsum, fuga nesciunt amet nobis debitis?
                </p>
            </div>

            <div className="alumni">
                <img src={studentImg} alt="Images for John Doe" className='alumniImg' />
                <h3>Alumni John Doe</h3>
                <p className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus officiis fugit qui, provident ipsa molestias sit dolor ad sunt unde earum fugiat minima ipsum, fuga nesciunt amet nobis debitis?
                </p>
            </div>
        </section>
    );
};
export default Testimonials;

