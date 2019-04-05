import React, { Component } from 'react';
//Importar, axios e router

class BuscarUser extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            id: "",
            nome: "", //Refere-se ao nome do repositório
            descricao: "", //Refere-se à descrição do repositório
            dataCriacao: "", //Refere-se à data de criação do repositório
            tamanho: "" //Refere-se ao tamanho do repositório 
        }

        //Colocar this
    }

    listarUsers() {
        fetch('https://api.github.com/users/{user}/repos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ lista: data }))
            .then(erro => console.log(erro))
    }

    atualizaEstado(event) {
        this.setState(
            { id: event.target.value },
            { nome: event.target.value },
            { descricao: event.target.value },
            { dataCriacao: event.target.value },
            { tamanho: event.target.value },
        )
    }

    componentDidMount() { //Método de inicialização
        this.listarUsers();
    }


    render() {
        return (
            <div>

                <header>
                    {/* Terá um header? */}
                </header>

                <main>
                    <h1>GitHub</h1>
                    <div>
                        <h2>Busque um usuário...</h2>
                        <form onSubmit={this.listarUsers.bind(this)}>
                            <input type="text" value={this.value.nome} onChange={this.atualizaEstado} placeholder="Nome de um usuário" />
                            <button type="submit">Procurar</button>
                        </form>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Data de Criação</th>
                                    <th>Tamanho</th>
                                </tr>
                                <tbody>
                                    {
                                        this.state.lista.map(function (usuario) {
                                            return (
                                                <tr key={usuario.id}>
                                                    <td>{usuario.id}</td>
                                                    <td>{usuario.nome}</td>
                                                    <td>{usuario.descricao}</td>
                                                    <td>{usuario.dataCriacao}</td>
                                                    <td>{usuario.tamanho}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </thead>
                        </table>
                    </div>

                </main>

                <footer>
                    {/* Terá um footer? */}
                </footer>

            </div>
        );
    }
}

export default BuscarUser;
