/* eslint-disable react/no-unescaped-entities */
import './Tracks.css'

const Tracks = () => {
    return (
        <div className="Tracks">
            <div className="Tracks-overview">
                <div className="Tracks__container">
                    <h2>Cyber Security</h2> <hr />
                    <p> Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
                    <button type="button">Enroll now</button>
                </div>

                <div className="Tracks__container">
                    <h2>UI/UX design</h2> <hr />
                    <p>Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications.</p>
                    <button type="button">Enroll now</button>
                </div>

                <div className="Tracks__container">
                    <h2>Web development</h2> <hr />
                    <p>Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.</p>
                    <button type="button">Enroll now</button>
                </div>

                <div className="Tracks__container">
                    <h2>Mobile apps development</h2> <hr />
                    <p>Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.</p>
                    <button type="button">Enroll now</button>
                </div>

                <div className="Tracks__container">
                    <h2>Cloud engineering</h2> <hr />
                    <p>Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.</p>
                    <button type="button">Enroll now</button>
                </div>

                <div className="Tracks__container">
                    <h2>Power Platform</h2> <hr />
                    <p>Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency.</p>
                    <button type="button">Enroll now</button>
                </div>

            </div>

            <div className="form">
                <div className="form-img"></div>

                <div className="form-inputs">
                    <input type="text" name="" id="" placeholder='Enter Full Names' />
                    <input type="email" name="" id="" placeholder='Enter Email Address' />
                    <input type="text" name="" id="" placeholder='Enter Course of study' />
                    <input type="number" name="" id="" placeholder='Enter Year of Study' />
                    <select name="" id="" className='select'>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Cloud Engineering">Cloud Engineering</option>
                        <option value="Power Platform">Power Platform</option>
                    </select>
                </div>
            </div>
        </div>


    )
}

export default Tracks