import { Button } from './styles'


function DefaultButton({children, ...props}){


    return(
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton