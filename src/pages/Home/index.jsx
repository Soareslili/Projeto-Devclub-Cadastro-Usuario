import { useRef } from "react";
import api from "../../services/api";

import {
  Container,
  Title,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./style";


import Button from "../../components/Button";
import TopBackground from '../../components/TopBackground';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInput>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do Usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
