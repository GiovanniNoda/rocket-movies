import { Input } from '../Input'
import { Container, Profile } from './style'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" type="search" />

            <Profile>
                <div>
                    <strong>Giovanni Noda</strong>
                    <a href="#">sair</a>
                </div>

                <img src="https://github.com/giovanninoda.png" alt="Foto de perfil do usuário" />
            </Profile>
        </Container>
    )
}