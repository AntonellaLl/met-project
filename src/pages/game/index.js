import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";

const API_URL= "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game(){
    const[loading, setLoading] = useState(true); //primero va a estar cargando
    const[question, setQuestions] = useState([]); //en Questions estan las 'Preguntas'

    console.log('estado:', question )

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
                                <QuestionCard preguntaActual={questions} /> 
                                </div>
                             })

                        }
                        </form>
                    )
                }
                 
            </section>
        </div>
    )
}

export default Game;