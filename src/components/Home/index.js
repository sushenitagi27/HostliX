import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logohome.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import {  useState } from 'react'
import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => 
{
    const [letterClass] = useState('text-animate')

    const nameArray = ['o','s','t','e','l','i','X']
    const jobArray = ['p','r','i','v','a','t','e',' ','l','i','m','i','t','e','d']
  
    // useEffect(() => {
    //   return setTimeout(() => {
    //     setLetterClass('text-animate-hover')
    //   }, 4000)
    // }, [])
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                
                <AnimatedLetters
                 letterClass={letterClass}
                 strArray={jobArray}
                 idx={21}
                 />
                </h1>
                <h2>| Economic Consultation | Wealth Expert |  </h2>
                <Link to='/contact' className='flat-button'>Reach Us</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='line-scale'></Loader>
        </>
    )


}

export default Home