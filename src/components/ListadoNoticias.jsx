import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';







const ListadoNoticias = () => {

    const { noticias, totalDeNoticias, handleChagePagina, pagina } = useNoticias()
    const totalDePaginas = Math.ceil(totalDeNoticias / 20)


    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component='h2'
            >
                Últimas Noticias

            </Typography>


            {/* Contenedor de noticias */}
            <Grid container spacing={2}>
                {noticias.map(noticia => (
                    <Noticia key={noticia.url}
                        noticia={noticia} />

                ))}
            </Grid>

            {/*paginador de noticias */}
            <Stack
                sx={{ marginY: 5 }}
                spacing={2}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}


            >

                <Pagination
                    count={totalDePaginas}
                    color="primary"
                    onChange={handleChagePagina}
                    page={pagina}
                />

            </Stack>

        </>
    )
}

export default ListadoNoticias
