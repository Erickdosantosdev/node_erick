// Aqui você pode adicionar lógica para manipular usuários, como criar, atualizar e excluir.

let users = [];

// Função para criar um novo usuário
function createUser(name, email, password) {
    const newUser = {
        id: generateUserId(),
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);
    return newUser;
}

// Função para atualizar os detalhes de um usuário
function updateUser(id, updatedUser) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    }
    return null; // Usuário não encontrado
}

// Função para excluir um usuário
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

// Função para gerar um ID de usuário único
function generateUserId() {
    return users.length > 0 ? users[users.length - 1].id + 1 : 1;
}

// Exemplo de uso
createUser('João', 'joao@example.com', 'senha123');
createUser('Maria', 'maria@example.com', 'outrasenha');

console.log(users); // Mostrar usuários criados

// Atualizar o nome do usuário com ID 1
updateUser(1, { name: 'João Silva' });

console.log(users); // Mostrar usuários após atualização

// Excluir o usuário com ID 2
deleteUser(2);

console.log(users); // Mostrar usuários após exclusão
