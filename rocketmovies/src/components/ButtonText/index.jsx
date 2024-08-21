import { Container } from "./style"

export function ButtonText({ title, Icon: Icon, ...rest }) {
    return(
        <Container type="button">
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}