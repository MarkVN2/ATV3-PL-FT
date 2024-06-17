import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Service from "../models/service";

type props = {
    servicos: Service[],
}

export default function ListaServicos (props:props){



    function gerarListaServicos() {
        if (props.servicos.length <= 0) {
            return <>Não há serviços</>
        } else {
            let lista =
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.servicos.map((servico, index) =>
                            <tr key={index}>
                                <td>{servico.name}</td>
                                <td>{servico.getPrice}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            return lista
        }
    }
        return (
            <>
                <div className="container-fluid">
                    {gerarListaServicos()}
                </div>
            </>
        )
}