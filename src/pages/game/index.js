import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import QuestionCard from "../../components/QuestionCard";
import Resultado from "../../componentes/Resultado";

const API_URL= "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game(){
    const[loading, setLoading] = useState(true); //primero va a estar cargando
    const[question, setQuestions] = useState([]); //en Questions estan las 'Preguntas'
    const[selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState(0);
    const[mostrarResultado, setMostrarResultado] = useState(false);

    function calcularResultado(){
        console.log('Hello')
        const respuestasCorrectas= selectedAnswers.filter((respuesta) => respuesta.valorOpcion ===true)
        setResult(respuestasCorrectas.length)
        setMostrarResultado(true)
    }
    useEffect(() =>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false)) //termina de cargar cuando haya traido las preguntas, en el Finally trae las preguntas
    },[])

    return(
        <div className="container">
            <section className="section"> 
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                        
                    </ul>
                </nav>
                {
                    loading &&(
                        <div>Cargando...</div>
                    )
                }

                {
                    !loading &&(
                        <form>
                        {
                             question.map((questions) => {
                                
                                return <div key= {questions.id}> 
                                <QuestionCard  
                                preguntaActual={questions} 
                                selectedAnswers={selectedAnswers}
                                setSelectedAnswers={setSelectedAnswers}
                                mostrarResultado={mostrarResultado }
                                
                                /> 
                                </div>
                             })

                        }
                        </form>
                    )
                }
                <div className="level">
                <div className="level-left">
                        {
                            mostrarResultado &&
                            <Resultado valorResultado={result} />
                        // {/* <>
                        // { result < 4 && <img src={mal}/>}
                        // { result > 4 && result < 7 && <img src={medio}/>}
                        // { result >= 7 && <img src={bien}/>}
                        //     <>
                        //     <p>{result}/{`${question.length}`}</p>
                            
                        //     </>
                        
                        // </> */}
                        }

                </div>
                    <div className="level-right">
                        
                        <Button 
                        disabled = {
                            selectedAnswers ?.length !== question.length || mostrarResultado} 
                            onClick= {() => calcularResultado()} text= 'Validar'></Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Game;