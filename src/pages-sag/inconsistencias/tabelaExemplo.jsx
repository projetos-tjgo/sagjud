import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table, Pagination } from "react-bootstrap";



export default function ExemploTabelaInconsistencias(){
  const [linhas, setLinhas] = useState([]);
  const [ qtdTR, setQtdTr ] = useState(0);
  const headertabela = ['Número', 'Comarca', 'Vara', 'Pendência', 'Movimentação', 'Localização'];

  const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const gerarLinhaAleatoria = () => {
    const ano = gerarNumeroAleatorio(1990, 2023);
    const numeroProcAleatorio = gerarNumeroAleatorio(1, 90000000000);
    const numCom = gerarNumeroAleatorio(1, 10);
    const numVar = gerarNumeroAleatorio(1, 10);
    const numPen = gerarNumeroAleatorio(1, 10);
    const numMov = gerarNumeroAleatorio(1, 10);
    const numLoc = gerarNumeroAleatorio(1, 10);
    const linha = [
      `${ano}${numeroProcAleatorio}`,
      'Comarca' + numCom,
      'Vara' + numVar,
      'Pendência' + numPen,
      'Movimentação' + numMov,
      'Localização' + numLoc
    ];
    return linha;
  };

  const qtde = gerarNumeroAleatorio(1, 10);

  React.useEffect(() => {
    const novasLinhas = [];
    for (let i = 0; i < qtde; i++) {
      novasLinhas.push(gerarLinhaAleatoria());
    }
    setLinhas(novasLinhas);
    setQtdTr(qtde)
  }, []);

  const paginacao = () => {
    if (qtdTR < 5 ){
      return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next /> <Pagination.Last />
        </Pagination>
        
      )
    }

    return (
      <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item >{2}</Pagination.Item>
            <Pagination.Item >{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>
            <Pagination.Item >{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
  }

  return (
    <>
    <Table responsive striped>
      <thead>
        <tr>
          {headertabela.map((cabecalho, index) => (
            <th key={index}>{cabecalho}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {linhas.map((linha, rowIndex) => (
          <tr key={rowIndex}>
            {linha.map((celula, cellIndex) => (
              <td key={cellIndex}>{celula}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
   
    <div style={{ display: "flex", justifyContent: "end" }}>
    {paginacao()}
                    
    </div>
</>
  );
}
                
        