import React, {useState } from "react";
import { alertasPrime } from "../alertasPrime";
import { Panel, PanelHeader, PanelBody } from "../../../components/panel/panel";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Chart from 'react-apexcharts';
import ptBr from 'apexcharts/dist/locales/pt-br.json'


export default function DetalhesIndicador(){

	const [options, setOptions] = useState({
		chart: {
		  locales: [ptBr],
		  defaultLocale: 'pt-br',
		  height: 250,
		  type: "area",
		  toolbar: {
			tools: {
			  pan: false,
			  zoom: false
			},
		  },
		},
		colors: ["#ff5b57", "#f59c1a", "#32a932"],
		stroke: {
		  show: true,
		  curve: "straight",
		},
		legend: {
		  labels: {
			colors: "#858585",
		  },
		},
		xaxis: {
		  categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
		  labels: {
			style: {
			  colors: "#858585",
			},
		  },
		},
		yaxis: {
		  labels: {
			style: {
			  colors: "#858585",
			},
		  },
		},
		grid: {
		  show: true,
		  borderColor: "#858585",
		  xaxis: {
			lines: {
			  show: true,
			},
		  },
		  yaxis: {
			lines: {
			  show: true,
			},
		  },
		  padding: {
			top: 10,
			right: 3,
			bottom: 0,
			left: 10,
		  },
		},
	  });
	  
	  const [series, setSeries] = useState([
		{
		  name: "Crítico",
		  data: [31, 40, 28, 51, 42, 109, 100],
		},
	  
		{
		  name: "Alerta",
		  data: [31, 50, 81, 25, 42, 12, 35],
		},
	  
		{
		  name: "Regular",
		  data: [11, 32, 45, 32, 34, 52, 41],
		},
	  ]);



    return(
        <div>
            <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>					
            <li className="breadcrumb-item"><Link to="/alertas-prime">Indicadores</Link></li>
            <li className="breadcrumb-item active">Detalhes</li>
        </ol>
        <h1 className="page-header"><b>Indicadores</b></h1>

        <div className="row">
        <div className="col-xl-12">
        
        <Panel theme="default" id="detalhesIndicadores">
            <PanelHeader noButton={true}>
                  Detalhes de <b>Indicador 1</b>
                </PanelHeader>
                <PanelBody>
                <div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="head-filtro">
						
							<button className="accordion-button collapsed panel-light-300 px-3 py-10px text-black pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
							<Link to="/alertas-prime"><Button variant="outline-secondary" title="Voltar para o painel de alertas" className="me-3 btn-outline-sag"><i class="fa-solid fa-arrow-left"></i></Button></Link>
							<Button variant="outline-secondary" className="btn-outline-sag" title="Filtrar indicadores"><i className="fa fa-search "></i></Button>
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
				</div>
				<Card className="mb-4">
					<Card.Body>
						<Chart type="line" options={options} series={series} height="250px"/>
					</Card.Body>
				</Card>
				
				
                <Card className="mb-4" border="danger">
                    <Card.Header className="red-header" >
                        Crítico
						<div className="qtdDetalhe">54</div>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
                <Card className="mb-4" border="warning">
                    <Card.Header className="orange-header">
                        Alerta
						<div  className="qtdDetalhe">76</div>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
                <Card className="mb-4" border="success">
                    <Card.Header className="green-header">
                        Regular <div  className="qtdDetalhe">1</div>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
                </PanelBody>
            </Panel>
        </div>
        </div>
        </div>
)}