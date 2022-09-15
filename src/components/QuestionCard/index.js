import "./index.css";

function QuestionCard({preguntaActual}){
    console.log(preguntaActual.answers )
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
                    <>
                    <input type= 'radio' id ={`${opcion.id}`} name={opcion.id} value={opcion.answer}  ></input>
                    <label htmlFor={`${opcion.id}`}> {opcion.answer}</label> 
                    <br/>
                    <br/>
                    </>
                ))
            }
            <br/>
            <br/>
        </div>
    )
}

export default QuestionCard;