import {chaossLogo, gitLabLogo } from '../../assets/images';
import '../../assets/styles/global.scss';
import Footer from '../../components/new/Footer/Footer';
import Nav from '../../components/new/Nav/Nav';
import './home.scss';


const Home = () => {

  return (
    <div className='home-container '>
     <Nav />
     <section className='hero container-new'>
      <div className='overlay'>
      <div className='bgRight'></div>
      <div className='bgCenter'></div>
      <div className='bgLeft'></div>
      </div>
     
        <div className='hero-header'>
          <h1>CHAOSS DEI </h1>
          <h1>Badging Initiative</h1>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Potenti</p>
            <p> vitae tortor donec sodales sed in. </p>
          </div>
        </div>

        <div className='sponsors'>
          <div className='s-list'>
            <p>Founding Partners</p>
            <div className='sponsors-logo'>
            <img src={gitLabLogo} alt="logo" />
            <img src={gitLabLogo} alt="logo" />
            <img src={gitLabLogo} alt="logo" />
            </div>
          </div>
          <div className='s-list'>
            <p>Founding Partners</p>
            <div className='sponsors-logo'>
            <img src={gitLabLogo} alt="logo" />
            <img src={gitLabLogo} alt="logo" />
            <img src={gitLabLogo} alt="logo" />
            </div>
          </div>
        </div>
        {/* <div className='bgLeft'></div> */}
     </section>

     <Footer />
    </div>
  );
};

export default Home;
