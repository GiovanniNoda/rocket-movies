import { Contanier } from "./style"

export function Tag({ title, ...rest }) {
    return(
        <Contanier {...rest }>
            {title}
        </Contanier>
    )
}