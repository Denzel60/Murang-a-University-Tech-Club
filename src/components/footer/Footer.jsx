/* eslint-disable react/no-unescaped-entities */
import './footer.css'

const Footer = () => {
    return (
        <div>

            <div className="reach">
                <div className="reach-about">
                    <h1>About us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis
                    </p>
                </div>

                <div className="reach-about">
                    <h1>Reach Us</h1>
                    <p>
                        Our Contacts: <br />
                        County: Murang'a, Kenya <br />
                        Call: +254718764327 <br />
                        Email: mutc@club.com
                    </p>
                </div>

                <div className="reach-about">
                    <h1>Follow Us</h1>
                    <p><a href="mutc@club.com">Facebook</a></p>
                    <p><a href="mutc@club.com">Instagram</a></p>
                    <p><a href="mutc@club.com">Twitter</a></p>
                </div>
            </div>

        </div>
    )
}

export default Footer