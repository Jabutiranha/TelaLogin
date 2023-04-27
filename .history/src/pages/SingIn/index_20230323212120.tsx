import { FieldError, useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup'


import * as yup from 'yup';

import logo from '../../assets/login.svg'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'

import {
    Button,
    Container,
    Content,
    Content2,
    Content3,
    Image,
    Icons,
    Link,
    Remember,
    SubTitle,
    Title,
    Form,
} from './styles';



interface FormData {
    username: string;
    password: string;
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

export const SingIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <Container>
            <Image>
                <img src={logo} alt="Logo" width="90%" />
            </Image>
            <Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>LOGIN</Title>

                    <Input
                        label='Usuário'
                        placeholder='Digite o Usuário'
                        error={errors.username as FieldError}
                        {...register('username')}
                    />

                    <Input type={'password'}
                        label='Senha'
                        placeholder='Digite sua senha'
                        error={errors.password as FieldError}
                        {...register('password')}
                    />

                    <Content2>
                        <Remember>
                            <input type="checkbox" id="box" />
                            <label htmlFor="box">Remember-me</label>
                        </Remember>


                        <Link href="/">Esqueceu a senha?</Link>

                    </Content2>

                    <Button type='submit'>Entrar</Button>

                    <Content3>
                        <p>Não Tem Uma Conta?</p>
                        <Nav href="/register">Inscrever-se</Link>
                    </Content3>

                    <SubTitle>Logar Com</SubTitle>

                    <Icons>
                        <Link href="http://localhost:3000/" style={{ justifyItems: "center" }}>
                            <img src={facebook} alt="Face" width="50%"></img>
                        </Link>
                        <Link href="http://localhost:3000/">
                            <img src={google} alt="Face" width="50%" ></img>
                        </Link>
                        <Link href="http://localhost:3000/">
                            <img src={apple} alt="Face" width="50%"></img>
                        </Link>
                    </Icons>
                </Form>
            </Content>
        </Container>
    )
}