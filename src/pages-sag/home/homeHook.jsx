import React from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Moment from 'moment';
import { AppSettings } from '../../config/app-settings.js';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Tabela from '../../pages-example/table/tabela.js';
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel.jsx';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import '../../locale/date-moment.js';

export default function PainelGestao(){
    return(
        <div>
        <ol className="breadcrumb float-xl-end">
					<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
					<li className="breadcrumb-item active">Painel de entrada</li>
					
				</ol>
				<h1 className="page-header"><b>Painel</b> de entrada</h1>

    <div className="row">
    <div className="col-xl-12">
    
    
    <div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="head-filtro">
							<button className="accordion-button collapsed panel-medio text-white px-3 py-10px pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
								<i className="fa fa-search  text-teal me-2 "></i> Filtro de Pesquisa  
							</button>
						</div>
						<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
						<div className="accordion-body panel-light text-black">
							{/* <div className="d-sm-flex align-items-center mb-3">
								<DateRangePicker 
								startDate={this.startDate} endDate={this.endDate} onApply={this.handleDateApplyEvent}>
									<button className="btn btn-inverse me-2 text-truncate">
										<i className="fa fa-calendar fa-fw text-white text-opacity-50 ms-n1 me-1"></i> 
										<span>{this.dateRange.currentWeek}</span>
										<b className="caret ms-1 opacity-5"></b>
									</button>
								</DateRangePicker>
								<div className="text-gray-600 fw-bold mt-2 mt-sm-0">compared to <span>{this.dateRange.prevWeek}</span></div>
							</div> */}
							<hr class="bg-white-transparent-2"></hr>
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
        
    </div>
    </div>
    </div>
    )
}