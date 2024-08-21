import { Container } from "./style"
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Marker } from '../../components/Markers'
import { Button } from '../../components/Button'
import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

export function Create() {
    return(
        <Container>
            <Header />

            <main>
                <ButtonText title="Voltar" Icon={FaArrowLeft} />

                <h1>Novo filme</h1>

                <div class="input-wrapper">
                    <Input placeholder="Título" type="text" />

                    <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                </div>

                <textarea placeholder="Observações"></textarea>

                <h2>Marcadores</h2>

                <div class="markers-wrapper">
                    <Marker type="text" value="React" />

                    <Marker isNew placeholder="Novo marcador" />
                </div>

                <div class="button-wrapper">
                    <Button>
                        Excluir filme
                    </Button>

                    <Button>
                        Salvar alterações
                    </Button>
                </div>
            </main>
        </Container>
    )
}