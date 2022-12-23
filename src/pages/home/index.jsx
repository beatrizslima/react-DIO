import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
    return ( <>
        <h1>Home</h1>
        <Button title="Teste"></Button>
        <Button variant='secondary' title="Teste 2">Teste 2</Button>
        <Link to="/login">Fazer Login</Link>
        </>
    )
}

export {Home}