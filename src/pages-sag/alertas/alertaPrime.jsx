import React, {useState, useEffect} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { locale } from 'primereact/api';
import { alertasPrime } from "./alertasPrime";
import { Panel, PanelHeader, PanelBody } from './../../components/panel/panel.jsx';
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";    
import { Link } from "react-router-dom";
import '../../locale/primereactlocale';
import { Popover, OverlayTrigger, PopoverBody, PopoverHeader } from "react-bootstrap";
import $ from 'jquery';
import styled from "styled-components";

const Grupo = styled.div`    
    line-height: 1.3;
    color: #a0a0a0;
    font-size: smaller;
    margin-top: 8px;
    padding-right: 50%;
`

const SpaceGrupo = styled.div`
    display: flex;
    justify-content: space-between;
`

const GrupoSmall = styled.div`
    font-size: smaller;
    line-height: 1;
    position: relative;
    overflow: hidden;
`

const GrupoWrap = styled.div`    
    white-space: nowrap;
`

export default function AlertaPrime() {

    const [indicadores, setIndicadores] = useState([]);

    useEffect(() => { alertasPrime.getAlertasMedium().then((data) => setIndicadores(data)); }, []);
    useEffect(() => { locale('pt-BR')}, []);
    useEffect(() => { $('.p-column-filter-menu-button').attr({'data-bs-title' : 'filtro de pesquisa', 'data-toggle': 'tooltip', 'title': 'Filtro de pesquisa'})})
    
    
    //renderizando coluna de comarcas e varas
    const comarcaBodyTemplate = (rowData) => {
        const popoverVara = (
            <Popover id="popoverCelComarca">
              <PopoverHeader as="h2">{rowData.representacao.comarca}</PopoverHeader>
                <PopoverBody>
                   <strong>{rowData.representacao.vara}</strong><br />
                   <div>
                    <SpaceGrupo><i className="me-3">Entrada no período de 12 meses:</i><span> 56</span></SpaceGrupo>
                    <SpaceGrupo><i className="me-3">Saída no período de 12 meses:</i><span> 5</span></SpaceGrupo>
                    <SpaceGrupo><i className="me-3">Total de processos em acervo:</i><span> 85</span></SpaceGrupo>
                    </div>           
                    
                </PopoverBody>             
            </Popover>
          );

        return(
            <div className="celulaComarca">                
                <OverlayTrigger overlay={popoverVara} trigger={'hover'} placement="top">
                    <div>
                    <div>
                      <span className="font-bold">{rowData.representacao.comarca}</span><br></br>
                    <GrupoSmall><GrupoWrap>{rowData.representacao.vara}</GrupoWrap></GrupoSmall></div>  
                
                    <Grupo>
                        <SpaceGrupo>Entrada: <strong>56</strong></SpaceGrupo>
                        <SpaceGrupo>Saída: <strong>5</strong></SpaceGrupo>
                        <SpaceGrupo>Acervo: <strong>85</strong></SpaceGrupo>
                    </Grupo>
                    </div>
                </OverlayTrigger>
                
                <div className="totais">Total</div>
            </div>
        )        
    }

    const rowClassName = (rowData) => {
        if(rowData.cor === 'vermelho') {
            return 'alertaVermelho';
        } 
        if (rowData.cor === 'verde'){
            return 'alertaVerde'
        }
        if (rowData.cor === "amarelo"){
            return 'alertaAmarelo'
        }
        if (rowData.cor === "total"){
            return 'total'
        }
    };

    const corpoCelula = (rowData, columnField, header) => {
        const value = rowData[columnField];
        return value === 0 ? <Link to="/detalheIndicador">-</Link> : <Link to="/detalheIndicador">{value}</Link> ;
    }

    const corpoCelulaFull = (rowData, columnField, msgTitle, msg) => {
        const mensagem = msg;
        const titulo = msgTitle;
        const value = rowData[columnField];
        const popover = (
            <Popover>
              <PopoverHeader as="h2">{titulo}</PopoverHeader>
                <PopoverBody>
                    {mensagem}
                </PopoverBody>             
            </Popover>
          );
          
        if(msgTitle, msg){
        if (value === 0){
            return <OverlayTrigger trigger={'hover'} overlay={popover} placement="right">
                        <Link to="/detalheIndicador">-</Link>
                    </OverlayTrigger>
        }
        return <OverlayTrigger trigger={'hover'} overlay={popover} placement="right">
                    <Link to="/detalheIndicador">{value}</Link>
                </OverlayTrigger> ;
        }

        return value === 0 ? <Link to="/detalheIndicador">-</Link> : <Link to="/detalheIndicador">{value}</Link> ;
    }

    
    return(
        <div>
            <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>					
            <li className="breadcrumb-item active">Indicadores</li>
        </ol>
        <h1 className="page-header"><b>Indicadores</b> <small></small></h1>

        <div className="row">
        <div className="col-xl-12">
        
        <Panel theme="default">
            <PanelHeader noButton={true}>
                  Tabela de indicadores por comarcas
                </PanelHeader>
                <PanelBody>
                    <div className="statusProcessos">
                    <span className="me-4"><i className="fa fa-circle text-red me-2"></i>  Crítico </span>
                    <span className="me-4"><i className="fa fa-circle text-orange me-2"></i>  Alerta </span>
                    <span className="me-4"><i className="fa fa-circle text-green me-2"></i>  Regular </span>
                    </div>                    
                    <DataTable value={indicadores}  emptyMessage="Nenhum resultado encontrado"
                    rowGroupMode='rowspan' groupRowsBy="designacao" sortMode="single" sortField="designacao" sortOrder={1}
                    tableStyle={{ maxHeight: '80vh' }} filterLocale="pt-BR" scrollable scrollHeight="78vh" rowClassName={rowClassName}>
                        <Column field='designacao' filter filterPlaceholder="Filtrar Comarcas" frozen header='Comarca' body={comarcaBodyTemplate} 
                        style={{ minWidth: '150px' }} className="colunaComarca"></Column>
                        <Column field='ind1' header="Indicador 1" body={(rowData => corpoCelulaFull(rowData, 'ind1', 'Titulo do indicador', 'Indicadores de primeira classe'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind2' header="Indicador 2" body={(rowData => corpoCelulaFull(rowData, 'ind2',  'Titulo do indicador 2', 'Indicadores de segunda classe'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind3' header="Indicador 3" body={(rowData => corpoCelulaFull(rowData, 'ind3'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind4' header="Indicador 4" body={(rowData => corpoCelulaFull(rowData, 'ind4'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind5' header="Indicador 5" body={(rowData => corpoCelulaFull(rowData, 'ind5'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind6' header="Indicador 6" body={(rowData => corpoCelulaFull(rowData, 'ind6'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind7' header="Indicador 7" body={(rowData => corpoCelulaFull(rowData, 'ind7'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind8' header="Indicador 8" body={(rowData => corpoCelulaFull(rowData, 'ind8'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind9' header="Indicador 9" body={(rowData => corpoCelulaFull(rowData, 'ind9'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind10' header="Indicador 10"  body={(rowData => corpoCelulaFull(rowData, 'ind10'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind11' header="Indicador 11"  body={(rowData => corpoCelulaFull(rowData, 'ind11'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind12' header="Indicador 12"  body={(rowData => corpoCelulaFull(rowData, 'ind12'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind13' header="Indicador 13"  body={(rowData => corpoCelulaFull(rowData, 'ind13'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind14' header="Indicador 14"  body={(rowData => corpoCelulaFull(rowData, 'ind14'))} style={{ minWidth: '95px' }}></Column>
                        {/* <Column field='ind15' header="Indicador 15" body={(rowData => corpoCelula(rowData, 'ind15'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind16' header="Indicador 16" body={(rowData => corpoCelula(rowData, 'ind16'))} style={{ minWidth: '95px' }}></Column>
                        <Column field='ind17' header="Indicador 17" body={(rowData => corpoCelula(rowData, 'ind17'))} style={{ minWidth: '95px' }}></Column> */}
                    </DataTable>
                </PanelBody>
        </Panel>
    </div>
</div> 
</div>  )
}