import React, {useState, useEffect} from "react";
import { Panel, PanelHeader, PanelBody } from "../../components/panel/panel";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ExemploTabelaInconsistencias from "./tabelaExemplo";

        


export default function Inconsistencias(){
	const [isCollapseOpen, setIsCollapseOpen] = useState(false);
	const [isCollapseOpen1, setIsCollapseOpen1] = useState(false);
	const [isCollapseOpen2, setIsCollapseOpen2] = useState(false);

	const toggleCollapse = () => { setIsCollapseOpen(!isCollapseOpen);};
	const toggleCollapse1 = () => { setIsCollapseOpen1(!isCollapseOpen1);};
	const toggleCollapse2 = () => { setIsCollapseOpen2(!isCollapseOpen2);};

	const [mostraResultados, setMostraResultados] = useState(false);
    const resultados = () => {setMostraResultados(true)}
	
    return(
        <div>
            <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>					
            <li className="breadcrumb-item active">Alertas</li>
        </ol>
        <h1 className="page-header"><b>Alertas</b></h1>

        <div className="row">
        <div className="col-xl-12">
        
        <Panel theme="default" id="detalhesIndicadores">
            <PanelHeader noButton={true}>
                  Processo com inconsistências
                </PanelHeader>
                <PanelBody>
                <div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="head-filtro">
						
							<button className="accordion-button collapsed panel-light-300 px-3 py-10px text-black pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePesquisa">
							
							<Button variant="outline-secondary" className="btn-outline-sag me-3" title="Filtrar inconsistências"><i className="fa fa-search"></i> </Button>
							<Button variant="outline-secondary" className="btn-outline-sag me-3" onClick={toggleCollapse} title="Processos sem Pendências" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className={`fa ${isCollapseOpen ? 'fa-minus fa-xs me-1' : 'fa-plus fa-xs me-1'}`}></i> Sem Pendências </Button>
							<Button variant="outline-secondary" className="btn-outline-sag me-3" onClick={toggleCollapse1} title="Processos Físicos (SPG)" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"><i className={`fa ${isCollapseOpen1 ? 'fa-minus fa-xs me-1' : 'fa-plus fa-xs me-1'}`}></i> SPG </Button>
							<Button variant="outline-secondary" className="btn-outline-sag me-3" onClick={toggleCollapse2} title="Processos com dados de parte incompletos" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"><i className={`fa ${isCollapseOpen2 ? 'fa-minus fa-xs me-1' : 'fa-plus fa-xs me-1'}`}></i> Dados Incompletos </Button>
							</button>
						</div>
						<div id="collapsePesquisa" className="accordion-collapse collapse" data-bs-parent="#accordion">
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
							<div className='d-flex justify-content-end mb-3'>
							<button type="button" className="btn btn-primary" onClick={resultados}>
								Filtrar
							</button>
							</div>

							{mostraResultados && (<Card className="mb-4">
                    <Card.Header className="default-header">
                        Resultado da pesquisa 
                    </Card.Header><Card.Body><ExemploTabelaInconsistencias /></Card.Body></Card>)}
						</div>
						</div>
					</div>
				</div>
				
				<div className="accordion mb-3" id="accordion">
							<div className="accordion-item border-0">
								<div className="accordion-header accordion-sag" id="headingOne">
									<button className="accordion-button collapsed sag-header px-3 py-10px pointer-cursor" onClick={toggleCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
										Processos sem Pendências <div  className="qtdInconsistencia">5</div>
									</button>
								</div>
								<div id="collapseOne" className={`accordion-collapse collapse ${isCollapseOpen ? 'show' : ''}`} data-bs-parent="#accordion">
									<div className="accordion-body panel-light text-black">
										<ExemploTabelaInconsistencias />
									</div>
								</div>
							</div>
							<div className="accordion-item border-0">
								<div className="accordion-header accordion-sag" id="headingTwo">
									<button className="accordion-button collapsed sag-header px-3 py-10px pointer-cursor collapsed" onClick={toggleCollapse1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
										Processos Físicos (SPG) <div  className="qtdInconsistencia">28</div>
									</button>
								</div>
								<div id="collapseTwo" className={`accordion-collapse collapse ${isCollapseOpen1 ? 'show' : ''}`} data-bs-parent="#accordion">
									<div className="accordion-body panel-light text-black">
										<ExemploTabelaInconsistencias />
									</div>
								</div>
							</div>
							<div className="accordion-item border-0">
								<div className="accordion-header accordion-sag" id="headingThree">
									<button className="accordion-button collapsed sag-header px-3 py-10px pointer-cursor collapsed" onClick={toggleCollapse2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
										Processos com dados de parte incompletos <div  className="qtdInconsistencia">13</div>
									</button>
								</div>
								<div id="collapseThree" className={`accordion-collapse collapse ${isCollapseOpen2 ? 'show' : ''}`} data-bs-parent="#accordion">
									<div className="accordion-body panel-light text-black">
										<ExemploTabelaInconsistencias />
									</div>
								</div>
							</div></div>
				
				
                {/* <Card className="mb-4" >
                    <Card.Header className="sag-header" >
                        Processos sem pendências<div  className="qtdDetalhe">5</div>
                    </Card.Header>
                    <Card.Body>
						<ExemploTabelaInconsistencias />
                    </Card.Body>
                </Card>
                <Card className="mb-4">
                    <Card.Header className="sag-header">
                        Processos Físicos (SPG) <div  className="qtdDetalhe">0</div>
                    </Card.Header>
                    <Card.Body>
						<ExemploTabelaInconsistencias />
                    </Card.Body>
                </Card>
                <Card className="mb-4">
                    <Card.Header className="sag-header">
                        Processos com dados de parte incompletos <div  className="qtdDetalhe">15</div>
                    </Card.Header>
                    <Card.Body>
						<ExemploTabelaInconsistencias />
                    </Card.Body>
                </Card> */}
                
                </PanelBody>
            </Panel>
        </div>
        </div>
        </div>
)}