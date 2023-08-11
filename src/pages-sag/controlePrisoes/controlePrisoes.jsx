import React, {useState, useEffect} from "react";
import { Panel, PanelHeader, PanelBody } from "../../components/panel/panel";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar, Card, Row, Col, Form, Container, Table, Pagination } from "react-bootstrap";
import comarcas from "../relatoriosPers/data";
import $ from 'jquery';


export default function ControlePrisoes(){
    const [dadosCampo, setDadosCampo] = useState({ campoComarca: '', campoServ: '', criteriosInd: ''});
    const handleChangeDados = (event) => {
        const { name, value } = event.target;
        setDadosCampo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
	
    const [mostraResultados, setMostraResultados] = useState(false);
    const resultados = () => {setMostraResultados(true)}

    return(
        <div>
            <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>					
            <li className="breadcrumb-item active">Controle de Prisões</li>
        </ol>
        <h1 className="page-header"><b>Controle de Prisões</b></h1>

        <div className="row">
        <div className="col-xl-12">
        
        <Panel theme="default" id="detalhesIndicadores">
            <PanelHeader noButton={true}>
                  Gerar Relatório
                </PanelHeader>
                <PanelBody>
                {/* <div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="head-filtro">
						
							<button className="accordion-button collapsed panel-light-300 px-3 py-10px text-black pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
							
							<Button variant="outline-secondary" className="btn-outline-sag" title="Filtrar inconsistências"><i className="fa fa-search"></i> </Button>
							</button>
						</div>
						<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
						<div className="accordion-body panel-light text-black">				
							
							<div className="row mx-5">
								<div className="col-md-6">
									<div className="row mb-3">
										<label className="form-label col-form-label col-md-3">Pesquisa</label>
										<div className="col-md-7">
											<input type="text" className="form-control" placeholder="" />
										</div>
									</div>	
									<div className="row mb-3">
										<label className="form-label col-form-label col-md-3">Pesquisa</label>
										<div className="col-md-7">
											<select type="text" className="form-select" placeholder="">
												<option value=""></option>
												<option value="">opção</option>
												<option value="">opção</option>
												<option value="">opção</option>
											</select>
										</div>
									</div>			
								</div>				
								<div className="col-md-6">
									<div className="row mb-3">
										<label className="form-label col-form-label col-md-3">Pesquisa</label>
										<div className="col-md-7">
										<select type="text" className="form-select" placeholder="">
												<option value=""></option>
												<option value="">opção</option>
												<option value="">opção</option>
												<option value="">opção</option>
											</select>
										</div>
									</div>	
									<div className="row mb-3">
										<label className="form-label col-form-label col-md-3">Pesquisa</label>
										<div className="col-md-7">
											<input type="text" className="form-control" placeholder="" />
										</div>
									</div>			
								</div>					
							</div>
							<div className='d-flex justify-content-end'>
							<button type="button" className="btn btn-primary">
								Filtrar
							</button>
							</div>
						</div>
						</div>
					</div>
				</div> */}
				<Container className="mb-4">
                <Row className='mb-4'>
				<Col>
					<Form.Label for="comarca">Comarca</Form.Label>					
					<Form.Select name="campoComarca" value={dadosCampo.campoComarca} onChange={handleChangeDados} id="comarca">
					{comarcas.entrancia.map((comarca, index) => (<option key={index} value={comarca}>{comarca}</option>))}
					</Form.Select>					
				</Col>
				
				<Col>			
					<Form.Label for="serventia">Vara</Form.Label>					
					<Form.Select name="campoServ" value={dadosCampo.campoServ} onChange={handleChangeDados} id="serventia">
						{comarcas.serventias.map((serventia, index) => <option key={index} value={serventia}>{serventia}</option>)}
					</Form.Select>	
				</Col>				
				</Row>
                <Row className='mb-4'>
				<Col>
					<Form.Label for="comarca">Tipo de Prisão</Form.Label>					
					<Form.Select name="campoComarca" value={dadosCampo.campoComarca} onChange={handleChangeDados} id="comarca">
					{comarcas.entrancia.map((comarca, index) => (<option key={index} value={comarca}>{comarca}</option>))}
					</Form.Select>					
				</Col>
				
				<Col>			
					<Form.Label for="serventia">Tipo de Evento</Form.Label>					
					<Form.Select name="campoServ" value={dadosCampo.campoServ} onChange={handleChangeDados} id="serventia">
						{comarcas.serventias.map((serventia, index) => <option key={index} value={serventia}>{serventia}</option>)}
					</Form.Select>	
				</Col>				
				</Row>
                <ButtonToolbar className="button-group-sag-right">
                    <Link to="/home"><Button type="button" variant="light" className="me-2">
                        Voltar
                    </Button></Link>
                    <Button type="button" variant="primary" className="me-2" onClick={resultados}>
                        Filtrar
                    </Button>
                </ButtonToolbar>
							
				</Container>
				
                {mostraResultados &&(
                <Card className="mb-4">
                    <Card.Header className="default-header">
                        Resultado da busca <div  className="qtdDetalhe">5</div>
                    </Card.Header>
                    <Card.Body>
                    <Table responsive striped>
                    <thead>
                        <tr>
                        <th>Comarca</th>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <th key={index}>Cabeçalho</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Acreúna</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Célula {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>Acreúna</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Célula {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>Acreúna</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Célula {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>Acreúna</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Célula {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>Acreúna</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Célula {index}</td>
                        ))}
                        </tr>
                    </tbody>
                    </Table>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                        </Pagination></div>
                    </Card.Body>
                </Card>
                )}
                
                
                </PanelBody>
            </Panel>
        </div>
        </div>
        </div>
)}