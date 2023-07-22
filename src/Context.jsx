import {useState, createContext} from "react"


const Context = createContext()

function ContextProvider({children}) {
   
    const [filmList, setFilmList] = useState([]) 
    const [filmListWrong, setFilmListWrong] = useState([]) 
    // const [list, setList] = useState(() => JSON.parse(localStorage.getItem("myShows")) || [])
    const [bestScore, setBestScore] = useState(() => JSON.parse(localStorage.getItem("myScore")) || 0)
    const [score, setScore] = useState(0)
    
    

      function finalFilmList(year, poster, realYear, imdb) {
        setFilmList(prevItems => [...prevItems, {y:year, p:poster, r:realYear, id:imdb}]) 
        setScore(filmList.length)      
    }
    
      function finalFilmListWrong(year, poster, realYear, imdb) {
        setFilmListWrong(prevItems => [...prevItems, {y:year, p:poster, r:realYear, id:imdb}])       
    }

    function clearFilmList() {
      setFilmList([])
      setFilmListWrong([])
    }
    
    return (
        <Context.Provider value={{
            filmList,
            finalFilmList,
            filmListWrong,
            finalFilmListWrong,
            clearFilmList,
            bestScore,
            setBestScore
            
            
          }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}