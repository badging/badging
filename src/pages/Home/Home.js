import {chaossLogo, gitLabLogo, githubSponsor } from '../../assets/images';
import '../../assets/styles/global.scss';
import Nav from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.scss';


const Home = () => {

  return (
    <div className='home-container '>
     <Nav />
    
     <div className='overlay'>
        <div className='bgRight'></div>
        <div className='bgCenter'></div>
        <div className='bgLeft'></div>
      </div>
     <section className='hero container-new'>
    
      
        <div className='hero-header'>
          <h1>CHAOSS DEI Badging Initiative</h1>
          <div>
            <p>
              The CHAOSS DEI Badging Initiative is a <a href="https://chaoss.community">CHAOSS</a> 
              project that awards badges to open-source projects 
              and events. These badges are used to showcase
               commitment to improving and supporting 
               diversity, equity, and inclusion. 
              </p>
          </div>
        </div>

        <div className='sponsors'>
          <div className='s-list'>
            <p>Founding Partner</p>
            <div className='sponsors-logo'>
            <img src={githubSponsor} alt="logo" width={80} height={20} />
            </div>
          </div>
          <div className='s-list'>
            <p>Contributing Partners</p>
            <div className='sponsors-logo'>
              <img src={gitLabLogo} alt="logo" width={90} height={20} />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* <div className='bgLeft'></div> */}
=======
>>>>>>> 4644e8a (fixing)
     </section>

     <Footer />
    </div>
  );
};

export default Home;
