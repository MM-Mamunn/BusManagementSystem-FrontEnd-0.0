import Header from '../components/nav'
import busImage from './bus2.png';
export default function Home(){
    return(
        <>
        
        <Header/>
        <img className="" src={busImage} alt="Bus" />
        </>
    )
}