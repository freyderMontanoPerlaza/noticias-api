import axios from 'axios';
import { useState, useEffect, createContext } from 'react'





const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
    const [categoria, setCartegorias] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina ] = useState(1);
    const [totalDeNoticias, setTotalDeNoticias] = useState(0);

    //filtra las categoarias
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)
            console.log('cantidad de noticias', data)
            setNoticias(data.articles)
            setTotalDeNoticias(data.totalResults)
            setPagina(1)
        }

        consultarAPI();

    }, [categoria]);

    //escucha los cambios de mi pagina
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)
            console.log('cantidad de noticias', data)
            setNoticias(data.articles)
            setTotalDeNoticias(data.totalResults)
        }

        consultarAPI();

    }, [pagina]);
  
   

    const handleCategoria = e => {
        setCartegorias(e.target.value)
    }
   
    const handleChagePagina = (e, valor) =>{
        setPagina(valor)

    }





    return (

        <NoticiasContext.Provider

            value={{
                categoria,
                handleCategoria,
                noticias,
                totalDeNoticias,
                handleChagePagina,
                pagina
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