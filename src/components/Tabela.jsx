import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="tableOrder">Quantidade</th>
                <th className="tableOrder">Descrição</th>
                <th className="tableOrder">Preços</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const linhas = props.pedido.map((linha, index) => {
        return (
            <tr key={index}>
                <td className="tableItems">{linha.quantidade}</td>
                <td className="tableItems">{linha.descricao}</td>
                <td className="tableItems">R$ {linha.preco}</td>
                <td className="tableItems"><i className="fa fa-trash" aria-hidden="true" onClick={() => { props.removeQuantidade(index, linha.preco) }}></i></td>
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
                <td className="tableItems" colSpan="4">Total: R$ {props.total}</td>
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