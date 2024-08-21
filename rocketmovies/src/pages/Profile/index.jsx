import { Container, Form, Avatar } from "./style"
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FaArrowLeft } from "react-icons/fa"
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" Icon={FaArrowLeft} />
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/giovanninoda.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                     placeholder="Nome" type="text" icon={FiUser} 
                />

                <Input 
                    placeholder="E-mail" type="text" icon={FiMail} 
                />

                <Input 
                    placeholder="Senha atual" type="password" icon={FiLock} 
                />

                <Input 
                    placeholder="Nova senha" type="password" icon={FiLock} 
                />

                <Button>
                    Salvar
                </Button>
            </Form>
        </Container>
    )
}