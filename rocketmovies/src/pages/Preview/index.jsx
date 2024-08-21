import { Container } from "./style"
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { MoviePreview } from '../../components/MoviePreview'
import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

export function Preview() {
    return(
        <Container>
            <Header />
            <main>
                <Link to="/">
                    <ButtonText title="Voltar" Icon={FaArrowLeft} />
                </Link>
                <MoviePreview title="Interestellar" />
            </main>
        </Container>
    )
}