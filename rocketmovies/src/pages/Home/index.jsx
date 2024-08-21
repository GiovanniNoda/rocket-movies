import { Container } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movies' 
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from 'react-router-dom'

export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <div class="title-movie">
          <h2>Meus filmes</h2>

          <div class="button-container">
            <Link to="/create">
            <Button> <AiOutlinePlus /> Adicionar filmes</Button>
            </Link>
          </div>
        </div>

        <div class="movies-container">
          <Movie title="Interestellar" />
          <Movie title="Interestellar" />
          <Movie title="Interestellar" />
        </div>
      </main>
    </Container>
  )
}

