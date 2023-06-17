import {useState, createContext} from "react"


const Context = createContext()

function ContextProvider({children}) {
   
    const [filmList, setFilmList] = useState([]) 
    const [filmListWrong, setFilmListWrong] = useState([]) 
    // const [list, setList] = useState(() => JSON.parse(localStorage.getItem("myShows")) || [])
   
    

      function finalFilmList(year, poster, realYear) {
        setFilmList(prevItems => [...prevItems, {y:year, p:poster, r:realYear}])       
    }
    
      function finalFilmListWrong(year, poster, realYear) {
        setFilmListWrong(prevItems => [...prevItems, {y:year, p:poster, r:realYear}])       
    }
    
    return (
        <Context.Provider value={{
            filmList,
            finalFilmList,
            filmListWrong,
            finalFilmListWrong
            
          }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}