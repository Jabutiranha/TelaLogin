import { FieldError, useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { Button, Container, Content, Form, LogIn, SingInButton, Title } from "./styles"

interface RegisterData {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
});

export const Register = () => {

    const { register, formState, handleSubmit } = useForm<RegisterData>({
        resolver: yupResolver(schema)
    })

    const errors = formState.errors;

    const onSubmit = (data: RegisterData) => {
        console.log(data);
    }

    return (
        <Container>
            <LogIn>
                <Form>
                    <Title>Já tem uma conta?</Title>
                    <a href="/" >
                        <SingInButton><a href="/" >Entrar</a></SingInButton>
                    </a>
                </Form>
            </LogIn>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Title>Cadastre-se</Title>

                    <Input
                        label='Nome Completo'
                        placeholder='Digite seu nome'
                        error={errors.name}
                        {...register('name')}
                    />
                    <Input
                        label='Usuário'
                        placeholder='Digite seu Usuário'
                        error={errors.username}
                        {...register('username')}
                    />
                    <Input type="password"
                        label='Senha'
                        placeholder='Digite sua Senha'
                        error={errors.password}
                        {...register('password')}
                    />
                    <Input type="password"
                        label='Confirme sua Senha'
                        placeholder='Confirme senha'
                        error={errors.confirmPassword}
                        {...register('confirmPassword')}
                    />

                    <Button>Cadastrar</Button>

                </Form>
            </Content>
        </Container>
    )
}