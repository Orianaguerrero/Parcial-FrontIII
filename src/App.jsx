import "./App.css"
import {useState} from "react";
import Card from "./Card"

function App() {
  const [card, setCard] = useState({
    name: "",
    singer: "",
    song: ""
  })

  const [error, setError] = useState('')

  const[submitCard, setSubmitCard] = useState(null)

  const handleChange = (event) => {
    const {name, value} = event.target
    setCard({
        ...card,
        [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(card.name.length < 3 && card.name.trim() === "") {
      setError('La información enviada es incorrecta.')
      setSubmitCard(null)
      return;
    }

    if(card.singer.length < 6) {
      setError('El nombre del cantante debe tener más de 6 caracteres.')
      setSubmitCard(null)
      return;
    }

    setError('')
    setSubmitCard(card)
    setCard({
      name: "",
      singer: "",
      song: ""
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Formulario</h2>
        <input 
        type="text" 
        placeholder="Escribe tu nombre..."
        name="name"
        id="name"
        value={card.name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        placeholder="¿Quién es tu artista favorito?"
        name="singer"
        id="singer"
        value={card.singer}
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="¿Cuál es la canción que más te gusta de ese artista?"
        name="song"
        id="singer"
        value={card.song}
        onChange={handleChange}
         />
         <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submitCard && (
        <Card data={submitCard}/>
      )}
    </div>
  );
}

export default App;
