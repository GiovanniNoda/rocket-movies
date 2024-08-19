import { Container } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movies' 
import { AiOutlinePlus } from "react-icons/ai"

export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <div class="title-movie">
          <h2>Meus filmes</h2>

          <div class="button-container">
            <Button> <AiOutlinePlus /> Adicionar filmes</Button>
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

