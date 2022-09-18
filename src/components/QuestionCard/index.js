import "./index.css";

function QuestionCard({preguntaActual, selectedAnswers, setSelectedAnswers, mostrarResultado}){
    console.log(preguntaActual.answers )


    function seleccionarRespuesta(identificador,valorOpcion){
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        console.log(otrasRespuestas)
        setSelectedAnswers([...selectedAnswers, 
            {
                id: identificador,
                valorOpcion
            }
        ])
    }

    function mostrarColores(valor){
        let valorClase= '';
        if (mostrarResultado){
            if (valor === true){
                valorClase = 'has-text-primary';
            }else {
                valorClase= 'has-text-danger'
            }
 
        }
        return valorClase;
    }
    return (
        <div className="box">  
            <div  className="mi-clase">
                <span className="tag is-rounded is-info"> {preguntaActual.id}</span> 
                <span ><strong> {preguntaActual.question}</strong></span>
            </div> 
            <br/> 
            <br/> 
            {
                preguntaActual.answers.map((opcion) =>( //Map de respuestas 
                    <div 
                    
                    key={opcion.id} 
                    onChange={() => seleccionarRespuesta(preguntaActual.id,opcion.is_correct)}
                    
                    >
                    <input 
                    type= 'radio' 
                    id ={`${preguntaActual.id}`} 
                    name={preguntaActual.id} 
                    value={opcion.answer}  >

                    </input>
                    <label htmlFor={`${preguntaActual.id}`} 
                    
                    className={
                        mostrarColores(opcion.is_correct)
                    }> 

                    {opcion.answer}</label> 
                    <br/>
                    <br/>
                    </div>
                ))
            }
            <br/>
            <br/>
        </div>
    )
}

export default QuestionCard;