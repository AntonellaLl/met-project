import Button from '../../components/Buttons';
import {useNavigate} from 'react-router-dom';


function Home(){
    const navigate = useNavigate();
    const onClickButton = () => {
        navigate('/game');
    }
    return(
        <Button onClick={onClickButton} text='MerCamp Quiz'/>
    )
}
export default Home;