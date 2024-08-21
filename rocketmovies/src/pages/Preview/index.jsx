import { Container } from "./style"
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { MoviePreview } from '../../components/MoviePreview'
import { FaArrowLeft } from "react-icons/fa"

export function Preview() {
    return(
        <Container>
            <Header />
            <main>
                <ButtonText title="Voltar" Icon={FaArrowLeft} />
                <MoviePreview title="Interestellar" />
            </main>
        </Container>
    )
}