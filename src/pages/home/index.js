import Button from '../../components/Buttons';
import {useNavigate} from 'react-router-dom';
import isla from '../../assets/isla.jpg';

function Home(){
    const navigate = useNavigate();
    const onClickButton = () => {
        navigate('/game');
    }
    return(
        <selection className='hero is-medium is-fullheight' style={{backgroundImage: `url(${isla})`, backgroundSize: "cover"}}>
            <div className='hero-body'> 
                <div className='container has-text-centered'> 
                    <Button onClick={onClickButton} text='MerCamp Quiz'/>
                </div>
            </div>
        </selection>
    )
}
export default Home;