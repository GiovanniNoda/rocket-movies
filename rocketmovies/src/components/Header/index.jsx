import { Input } from '../Input'
import { Container, Profile, Form } from './style'
import { Link } from 'react-router-dom'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Form>
                <Input placeholder="Pesquisar pelo título" type="search" />
            </Form>

            <Profile to="/profile">
                <div>
                    <Link to="/profile">
                        <strong>Giovanni Noda</strong>
                    </Link>
                    <a href="#">sair</a>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/giovanninoda.png" alt="Foto de perfil do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}