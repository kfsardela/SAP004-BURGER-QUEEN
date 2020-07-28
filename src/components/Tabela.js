import React, { Component } from 'react';


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="tabelaPedido">Quantidade</th>
                <th className="tabelaPedido">Descrição</th>
                <th className="tabelaPedido">Preços</th>
                <th className="tabelaPedido">Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const linhas = props.pedido.map((linha, index) => {
        return (
            <tr key={index}>
                <td className="tabelaItem">{linha.quantidade}</td>
                <td className="tabelaItem">{linha.descricao}</td>
                <td className="tabelaItem">{linha.preco}</td>
                <td className="tabelaItem"><button onClick={() => { props.removeQuantidade(index, linha.preco) }} 
                        className="btnRemove">Remove</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    )
};

const TableFoot = props => {
    return (
        <tfoot>
            <tr>
                <td className="tabelaItem" colSpan="4">Total: {props.total}</td>
            </tr>
        </tfoot>
    );
}

class Tabela extends Component {

    render() {
        const { pedido, remove, total } = this.props;

        return (
            <table className="table">
                <TableHead/>
                <TableBody pedido={pedido} removeQuantidade={remove}/>
                <TableFoot total={total}/>
            </table>

        );
    }
}

export default Tabela;