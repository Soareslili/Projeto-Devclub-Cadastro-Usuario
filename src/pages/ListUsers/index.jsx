import { useEffect, useState } from "react";
import api from "../../services/api";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";


import {
  Container,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  Title,
  AvatarUsers,
} from "./styles";
import Trash from "../../assets/trash.svg";


function ListUsers() {
  const [users, setUsers] = useState([]);
  const navegation = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

    async function deleteUsers(id){
      await api.delete(`/usuarios/${id}`)

      const upadatedUsers = users.filter(user => user.id !== id)

      setUsers(upadatedUsers)
    }
  
  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuário</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUsers
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navegation('/')}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
