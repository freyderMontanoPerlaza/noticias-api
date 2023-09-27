import axios from 'axios';
import { useState, useEffect, createContext } from 'react'





const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
    const [categoria, setCartegorias] = useState('general')
    const [noticias, setNoticias] = useState([])


    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)
            setNoticias(data.articles)
        }

        consultarAPI();

    }, [categoria]);


    const handleCategoria = e => {
        setCartegorias(e.target.value)
    }






    return (

        <NoticiasContext.Provider

            value={{

                categoria,
                handleCategoria,
                noticias

            }}

        >

            {children}
        </NoticiasContext.Provider>
    )
}




export {
    NoticiasProvider
}


export default NoticiasContext;