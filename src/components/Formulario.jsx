import { FormControl, MenuItem, Select, Button, InputLabel, Box } from '@mui/material';
import useNoticias from '../hooks/useNoticias';

useNoticias
const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]




const Formulario = () => {


    //extraer categorias y funcion
    const {categoria, handleCategoria } = useNoticias()



    return (

        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>

                <Select 
                label='Categoria'
                onChange={handleCategoria}
                value={categoria}

                
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem key={categoria.value} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}

                </Select>


                <Box sx={{ marginTop: 2 }}>
                    <Button fullWidth variant='contained'>
                        Buscador de Noticias
                    </Button>
                </Box>







            </FormControl>






        </form>

    )
}

export default Formulario
