import './Footer.css';
import logo from './blackicon.png';

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="f-container">
          <div className="row justify-content-center" style={{width: '100%'}}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0px 0px 10px 0',
            }}>
              <img src={logo} alt="Robotix Club NITRR" style={{
                width: '100px',
                height: 'auto',
                color:'black',
                 filter: 'grayscale(100%)', 
              }} />
              <p  className="color_black"style={{ marginTop: '5px' }}>Robotix Club NITRR</p>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3  className="color_black">Robotix Club</h3>
              <ul>
                <li><a href="#">Robolympiad 2024</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3  className="color_black">Links</h3>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/teams">Team</a></li>
              </ul>
            </div>
            <div className="col-lg-3 item social" style={{marginTop : '10px'}}>
              <a href="https://www.instagram.com/robotix_nitrr/"><i className="icon ion-social-instagram"></i></a>
              <a href="https://twitter.com/RobotixR"><i className="icon ion-social-twitter"></i></a>
              <a href="https://github.com/rohitmondal03/Robotix-Club-Website"><i className="icon ion-social-github"></i></a>
              <a href="https://in.linkedin.com/company/robotix-club-nit-raipur"><i className="icon ion-social-linkedin"></i></a>
              <p className="copyright">Crafted by Robotix Club&apos;s Web Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;