import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logohome.png';
import './index.scss';
const Home = () => 
{
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <img src={LogoTitle} alt="developer"/>
                osteliX
                <br/>
                private limited
                </h1>
                <h2>| Economic Consultation | Wealth Expert |  </h2>
                <Link to='/contact' className='flat-button'>Reach Us</Link>
            </div>

        </div>
    )


}

export default Home