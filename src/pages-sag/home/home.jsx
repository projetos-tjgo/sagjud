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

class HomeSag extends React.Component {
	static contextType = AppSettings;
	
	handleGetDate(minusDate) {
		var d = new Date();
				d = d.setDate(d.getDate() - minusDate);
		return d;
	}
	
	visitorChartData = {
		series: [
			{ 
				name: 'Processos atendidos pela Vara', 
				data: [
					[this.handleGetDate(77), 13], [this.handleGetDate(76), 13], [this.handleGetDate(75), 6 ], 
					[this.handleGetDate(73), 6 ], [this.handleGetDate(72), 6 ], [this.handleGetDate(71), 5 ], [this.handleGetDate(70), 5 ], 
					[this.handleGetDate(69), 5 ], [this.handleGetDate(68), 6 ], [this.handleGetDate(67), 7 ], [this.handleGetDate(66), 6 ], 
					[this.handleGetDate(65), 9 ], [this.handleGetDate(64), 9 ], [this.handleGetDate(63), 8 ], [this.handleGetDate(62), 10], 
					[this.handleGetDate(61), 10], [this.handleGetDate(60), 10], [this.handleGetDate(59), 10], [this.handleGetDate(58), 9 ], 
					[this.handleGetDate(57), 9 ], [this.handleGetDate(56), 20], [this.handleGetDate(55), 9 ], [this.handleGetDate(54), 9 ], 
					[this.handleGetDate(53), 8 ], [this.handleGetDate(52), 8 ], [this.handleGetDate(51), 8 ], [this.handleGetDate(50), 8 ], 
					[this.handleGetDate(49), 8 ], [this.handleGetDate(48), 7 ], [this.handleGetDate(47), 7 ], [this.handleGetDate(46), 6 ], 
					[this.handleGetDate(45), 6 ], [this.handleGetDate(44), 6 ], [this.handleGetDate(43), 6 ], [this.handleGetDate(42), 5 ], 
					[this.handleGetDate(41), 5 ], [this.handleGetDate(40), 4 ], [this.handleGetDate(39), 4 ], [this.handleGetDate(38), 5 ], 
					[this.handleGetDate(37), 5 ], [this.handleGetDate(36), 5 ], [this.handleGetDate(35), 7 ], [this.handleGetDate(34), 7 ], 
					[this.handleGetDate(33), 7 ], [this.handleGetDate(32), 10], [this.handleGetDate(31), 9 ], [this.handleGetDate(30), 9 ], 
					[this.handleGetDate(29), 10], [this.handleGetDate(28), 11], [this.handleGetDate(27), 11], [this.handleGetDate(26), 8 ], 
					[this.handleGetDate(25), 8 ], [this.handleGetDate(24), 7 ], [this.handleGetDate(23), 8 ], [this.handleGetDate(22), 9 ], 
					[this.handleGetDate(21), 8 ], [this.handleGetDate(20), 9 ], [this.handleGetDate(19), 10], [this.handleGetDate(18), 9 ], 
					[this.handleGetDate(17), 10], [this.handleGetDate(16), 16], [this.handleGetDate(15), 17], [this.handleGetDate(14), 16], 
					[this.handleGetDate(13), 17], [this.handleGetDate(12), 16], [this.handleGetDate(11), 15], [this.handleGetDate(10), 14], 
					[this.handleGetDate(9) , 24], [this.handleGetDate(8) , 18], [this.handleGetDate(7) , 15], [this.handleGetDate(6) , 14], 
					[this.handleGetDate(5) , 16], [this.handleGetDate(4) , 16], [this.handleGetDate(3) , 17], [this.handleGetDate(2) , 7 ], 
					[this.handleGetDate(1) , 7 ], [this.handleGetDate(0) , 7 ]
				]
			},
			{ 
				name: 'Processos atendidos pelo TJGO', 
				data: [
					[this.handleGetDate(77), 14], [this.handleGetDate(76), 13], [this.handleGetDate(75), 15], 
					[this.handleGetDate(73), 14], [this.handleGetDate(72), 13], [this.handleGetDate(71), 15], [this.handleGetDate(70), 16], 
					[this.handleGetDate(69), 16], [this.handleGetDate(68), 14], [this.handleGetDate(67), 14], [this.handleGetDate(66), 13], 
					[this.handleGetDate(65), 12], [this.handleGetDate(64), 13], [this.handleGetDate(63), 13], [this.handleGetDate(62), 15], 
					[this.handleGetDate(61), 16], [this.handleGetDate(60), 16], [this.handleGetDate(59), 17], [this.handleGetDate(58), 17], 
					[this.handleGetDate(57), 18], [this.handleGetDate(56), 2], [this.handleGetDate(55), 15], [this.handleGetDate(54), 15], 
					[this.handleGetDate(53), 19], [this.handleGetDate(52), 19], [this.handleGetDate(51), 18], [this.handleGetDate(50), 18], 
					[this.handleGetDate(49), 17], [this.handleGetDate(48), 16], [this.handleGetDate(47), 18], [this.handleGetDate(46), 18], 
					[this.handleGetDate(45), 18], [this.handleGetDate(44), 16], [this.handleGetDate(43), 14], [this.handleGetDate(42), 14], 
					[this.handleGetDate(41), 13], [this.handleGetDate(40), 14], [this.handleGetDate(39), 13], [this.handleGetDate(38), 10], 
					[this.handleGetDate(37), 9 ], [this.handleGetDate(36), 10], [this.handleGetDate(35), 11], [this.handleGetDate(34), 11], 
					[this.handleGetDate(33), 11], [this.handleGetDate(32), 10], [this.handleGetDate(31), 9 ], [this.handleGetDate(30), 10], 
					[this.handleGetDate(29), 13], [this.handleGetDate(28), 14], [this.handleGetDate(27), 14], [this.handleGetDate(26), 13], 
					[this.handleGetDate(25), 12], [this.handleGetDate(24), 11], [this.handleGetDate(23), 13], [this.handleGetDate(22), 13], 
					[this.handleGetDate(21), 13], [this.handleGetDate(20), 13], [this.handleGetDate(19), 14], [this.handleGetDate(18), 13], 
					[this.handleGetDate(17), 13], [this.handleGetDate(16), 19], [this.handleGetDate(15), 21], [this.handleGetDate(14), 22],
					[this.handleGetDate(13), 25], [this.handleGetDate(12), 24], [this.handleGetDate(11), 24], [this.handleGetDate(10), 22], 
					[this.handleGetDate(9) , 16], [this.handleGetDate(8) , 15], [this.handleGetDate(7) , 12], [this.handleGetDate(6) , 12], 
					[this.handleGetDate(5) , 15], [this.handleGetDate(4) , 15], [this.handleGetDate(3) , 15], [this.handleGetDate(2) , 18], 
					[this.handleGetDate(2) , 18], [this.handleGetDate(0) , 17]
				] 
			}
		],
		options: {
			colors: [this.context.color.dark, '#348fe2'],
			fill: {
				opacity: .75,
				type: 'solid'
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
				offsetY: 15,
				offsetX: 10,
				labels: {
					colors: '#858585'
				}
			},
			xaxis: {
				type: 'datetime',
				tickAmount: 6,
				labels: {
					style: {
						colors: '#858585'
					}
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: '#858585'
					}
				}
			},
			tooltip: { y: { formatter: function (val) { return  val + " processos" } } },
			chart: { height: '100%', type: 'area', toolbar: { show: true, tools: {pan: false} }, stacked: true },
			plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
			dataLabels: { enabled: false },
			grid: { 
				show: true, borderColor: this.context.borderColor,
				xaxis: {
					lines: {
						show: true
					}
				},   
				yaxis: {
					lines: {
						show: true
					}
				},
				padding: {
					top: 10,
					right: 3,
					bottom: 0,
					left: 10
				},
			},
			stroke: { 
				show: false,
				curve: 'straight'
			}
		}
	};
	
	render() {
		var convertNumberWithCommas = function(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		};
		
		this.formatDate = (d) => {
			console.log(d);
			var monthsName = ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
			d = new Date(d);
			d = monthsName[d.getMonth()] + ' ' + d.getDate();
			return d;
		}
		this.getDate = (minusDate) => {
			var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
			return d;
		}
		
		this.map = {
			center: {
				lat: 59.95,
				lng: 30.33
			},
			zoom: 9
		}
		this.date = new Date();
		
    this.totalSalesChart = {
			options: {
				chart: {
					type: 'line',
					width: 200,
					height: 36,
					sparkline: {
						enabled: true
					},
					stacked: true
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: this.context.color.blue,
							opacity: 1
						},
						{
							offset: 100,
							color: this.context.color.indigo,
							opacity: 1
						}]
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return + convertNumberWithCommas(value) },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 130
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 200
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [9452.37, 11018.87, 7296.37, 6274.29, 7924.05, 6581.34, 12918.14]
			}]
		};

		this.secondAreaChart ={
			options: {
				chart: {
				  height: 250,
				  type: 'area',
				  toolbar: {
					tools: {
						pan: false
					}
				  }
				},	
				stroke: { 
					show: true,
					curve: 'straight'
				},
				legend: {
					labels: {
						colors: '#858585',
					}					
				},
				xaxis: {
					labels: {
						style: {
							colors: '#858585'
						}
					}
				},
				yaxis: {
					labels: {
						style: {
							colors: '#858585'
						}
					}
				},
				grid: { 
					show: true, borderColor: this.context.borderColor,
					xaxis: {
						lines: {
							show: true
						}
					},   
					yaxis: {
						lines: {
							show: true
						}
					},
					padding: {
						top: 10,
						right: 3,
						bottom: 0,
						left: 10
					},
				},			
			  },
			  series: [{
					name: 'Vara Criminal',
					data: [31, 40, 28, 51, 42, 109, 100]
				}, 

				{
					name: 'Vara Criminal',
					data: [31, 50, 81, 25, 42, 12, 35]
				}, 
				
				{
					name: 'Vara da Infância e Juventude',
					data: [11, 32, 45, 32, 34, 52, 41]
			  }]
		};
		

		this.conversionRateChart = {
			options: {
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					}
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: this.context.color.red,
							opacity: 1
						},
						{
							offset: 50,
							color: this.context.color.orange,
							opacity: 1
						},
						{
							offset: 100,
							color: this.context.color.lime,
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				xaxis: {
					crosshairs: {
						width: 1
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return value + '%' },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [2.68, 2.93, 2.04, 1.61, 1.88, 1.62, 2.80]
			}]
		};
		this.storeSessionChart = {
			options: {
				chart: {
					type: 'line',
					width: 160,
					height: 28,
					sparkline: {
						enabled: true
					},
					stacked: false
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				fill: {
					type: 'gradient',
					gradient: {
						opacityFrom: 1,
						opacityTo: 1,
						colorStops: [{
							offset: 0,
							color: this.context.color.teal,
							opacity: 1
						},
						{
							offset: 50,
							color: this.context.color.blue,
							opacity: 1
						},
						{
							offset: 100,
							color: this.context.color.indigo,
							opacity: 1
						}]
					},
				},
				labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
				xaxis: {
					crosshairs: {
						width: 1
					},
				},
				tooltip: {
					theme: 'dark',
					fixed: {
						enabled: false
					},
					x: {
						show: false
					},
					y: {
						title: {
							formatter: function (seriesName) {
								return ''
							}
						},
						formatter: (value) => { return convertNumberWithCommas(value) },
					},
					marker: {
						show: false
					}
				},
				responsive: [{
					breakpoint: 1500,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 1300,
					options: {
						chart: {
							width: 100
						}
					}
				},{
					breakpoint: 1200,
					options: {
						chart: {
							width: 160
						}
					}
				},{
					breakpoint: 900,
					options: {
						chart: {
							width: 120
						}
					}
				},{
					breakpoint: 576,
					options: {
						chart: {
							width: 180
						}
					}
				},{
					breakpoint: 400,
					options: {
						chart: {
							width: 120
						}
					}
				}]
			},
			series: [{
				data: [10812, 11393, 7311, 6834, 9612, 11200, 13557]
			}]
		};
		
		this.startDate = Moment().subtract(7, 'days');
		this.endDate = Moment();
		
		this.dateRange = {
			currentWeek: Moment().subtract('days', 7).format('D MMMM YYYY') + ' - ' + Moment().format('D MMMM YYYY'),
			prevWeek: Moment().subtract('days', 15).format('D MMMM') + ' - ' + Moment().subtract('days', 8).format('D MMMM YYYY')
		}
		
		this.handleDateApplyEvent = (event, picker) => {
			var startDate = picker.startDate;
			var endDate = picker.endDate;
			var gap = endDate.diff(startDate, 'days');
			
			var currentWeek = startDate.format('D MMMM YYYY') + ' - ' + endDate.format('D MMMM YYYY');
			var prevWeek = Moment(startDate).subtract('days', gap).format('D MMMM') + ' - ' + Moment(startDate).subtract('days', 1).format('D MMMM YYYY');
			
			this.dateRange.currentWeek = currentWeek;
			this.dateRange.prevWeek = prevWeek;
			
			this.setState(dateRange => ({
				currentWeek: currentWeek,
				prevWeek: prevWeek
			}));
		}
	
		return (
			<div>
				<ol className="breadcrumb float-xl-end">
					<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
					<li className="breadcrumb-item active">Painel de entrada</li>
					
				</ol>
				<h1 className="page-header"><b>Painel</b> de entrada</h1>

				<div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="head-filtro">
							<button className="accordion-button collapsed panel-medio text-white px-3 py-10px pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
								<i className="fa fa-search  text-teal me-2 "></i> Filtro de Pesquisa  
							</button>
						</div>
						<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
						<div className="accordion-body panel-light text-black">
							<div className="d-sm-flex align-items-center mb-3">
								<DateRangePicker 
								startDate={this.startDate} endDate={this.endDate} onApply={this.handleDateApplyEvent}>
									<button className="btn btn-inverse me-2 text-truncate">
										<i className="fa fa-calendar fa-fw text-white text-opacity-50 ms-n1 me-1"></i> 
										<span>{this.dateRange.currentWeek}</span>
										<b className="caret ms-1 opacity-5"></b>
									</button>
								</DateRangePicker>
								<div className="text-gray-600 fw-bold mt-2 mt-sm-0">compared to <span>{this.dateRange.prevWeek}</span></div>
							</div>
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
				
				<div className="row">
					<div className="col-xl-6">
						<div className="card border-0 mb-3 overflow-hidden panel-light text-black">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-12 col-lg-12">
										<div className="mb-3 text-color-800">
											<b>ATENDIMENTOS TOTAIS</b>
											<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Percentage of sessions that resulted in orders from total number of sessions.</Tooltip>}>
											<span className="ms-2" style={{ cursor: 'help' }}>
												<i className='fa fa-info-circle'></i>
											</span>
											</OverlayTrigger>
										</div>
										<div className="d-flex mb-1 text-color-800">
											<h2 className="mb-0">64,559.25</h2>
											<div className="ms-auto mt-n1 mb-n1">
												<Chart type="line" height={'36px'} options={this.totalSalesChart.options} series={this.totalSalesChart.series} />
											</div>
										</div>
										<div className="mb-3 text-color-800">
											<i className="fa fa-caret-up"></i> 33.21% em comparação com a semana passada
										</div>
										<hr className="bg-white-transparent-2" />
										<div className="row text-truncate">
											<div className="col-6">
												<div className="fs-12px text-color-800">Total de atendimentos</div>
												<div className="fs-18px mb-5px fw-bold">1,568</div>
												<div className="progress h-5px rounded-3 text-color-100 mb-5px">
													<div className="progress-bar progress-bar-striped rounded-right bg-teal progress-bar-animated" style={{width: '55%'}}></div>
												</div>
											</div>
											<div className="col-6">
												<div className="fs-12px text-color-800">Média de atendimentos</div>
												<div className="fs-18px mb-5px fw-bold">41.20</div>
												<div className="progress h-5px rounded-3 text-color-100 mb-5px">
													<div className="progress-bar progress-bar-striped rounded-right progress-bar-animated" style={{width: '55%'}}></div>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="row">
							<div className="col-sm-6">
								<div className="card border-0 text-truncate mb-3 panel-light">
									<div className="card-body text-color-800">
										<div className="mb-3">
											<b className="mb-3">PROCESSOS AUTUADOS HÁ MAIS DE 5 ANOS</b> 
											<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Percentage of sessions that resulted in orders from total number of sessions.</Tooltip>}>
											<span className="ms-2" style={{ cursor: 'help' }}>
												<i className='fa fa-info-circle'></i>
											</span>
											</OverlayTrigger>
											
										</div>
										<div className="d-flex align-items-center mb-1">
											<h2 className="mb-0">2.19%</h2>
											<div className="ms-auto">
												<Chart type="line" height={'28px'} options={this.conversionRateChart.options} series={this.conversionRateChart.series} />
											</div>
										</div>
										<div className="mb-4">
											<i className="fa fa-caret-down"></i> 0.50% comparado com a última semana
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-red fs-8px me-2"></i>
												Added to cart
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 262%</div>
												<div className="w-50px text-end ps-2 fw-bold">3.79%</div>
											</div>
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-warning fs-8px me-2"></i>
												Reached checkout
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 11%</div>
												<div className="w-50px text-end ps-2 fw-bold">3.85%</div>
											</div>
										</div>
										<div className="d-flex">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-lime fs-8px me-2"></i>
												Sessions converted
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 57%</div>
												<div className="w-50px text-end ps-2 fw-bold">2.19%</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card border-0 text-truncate mb-3 panel-light">
									<div className="card-body text-color-800">
										<div className="mb-3">
											<b className="mb-3">PROCESSOS ARQUIVADOS PROVISORIAMENTE</b> 
											<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Percentage of sessions that resulted in orders from total number of sessions.</Tooltip>}>
											<span className="ms-2" style={{ cursor: 'help' }}>
												<i className='fa fa-info-circle'></i>
											</span>
											</OverlayTrigger>
										</div>
										<div className="d-flex align-items-center mb-1">
											<h2 className="mb-0">70,719</h2>
											<div className="ms-auto">
												<Chart type="line" height={'28px'} options={this.storeSessionChart.options} series={this.storeSessionChart.series} />
											</div>
										</div>
										<div className="mb-4">
											<i className="fa fa-caret-up"></i> 9.5% comparado com a última semana
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-teal fs-8px me-2"></i>
												Mobile
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 25.7%</div>
												<div className="w-50px text-end ps-2 fw-bold">53,210</div>
											</div>
											<button data-bs-toggle="modal" data-bs-target="#verTabela" className='btn btn-primary ms-3 btn-icon btn-circle btn-sm'>Ver</button>
										</div>
										<div className="d-flex mb-2">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-blue fs-8px me-2"></i>
												Desktop
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 16.0%</div>
												<div className="w-50px text-end ps-2 fw-bold">11,959</div>
											</div>
											<button data-bs-toggle="modal" data-bs-target="#verTabela" className='btn btn-primary ms-3 btn-icon btn-circle btn-sm'>Ver</button>
										</div>
										<div className="d-flex">
											<div className="d-flex align-items-center">
												<i className="fa fa-circle text-indigo-900 fs-8px me-2"></i>
												Tablet
											</div>
											<div className="d-flex align-items-center ms-auto">
												<div className="small"><i className="fa fa-caret-up"></i> 7.9%</div>
												<div className="w-50px text-end ps-2 fw-bold">5,545</div>
											</div>
											<button data-bs-toggle="modal" data-bs-target="#verTabela" className='btn btn-primary ms-3 btn-icon btn-circle btn-sm'><i className='fa fa-arrow-up-right'></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
					<div className="accordion mb-3" id="accordion">
					<div className="accordion-item border-0">
						<div className="accordion-header accordion-sag" id="headingTwo">
						<button className="accordion-button panel-medio text-white px-3 py-10px pointer-cursor collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
							<i className="fa fa-circle fa-fw text-red me-2 fs-8px"></i> Gráfico analítico
						</button>
						</div>
						<div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordion">
						<div className="accordion-body panel-light text-black">
						<div className="row">
							<div className="col-xl-12 col-lg-10">
								<div className="card border-0 mb-3 panel-light text-color-800">
									<div className="card-body panel-light text-color-800">
										<div className="mb-3">
											<b>PROCESSOS ATENDIDOS</b>
											<span className="ms-2"><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels." data-original-title="" title=""></i></span>
										</div>
										<div className="row">
											<div className="col-xl-3 col-4">
												<h3 className="mb-1">127.1K</h3>
												<div>New Visitors</div>
												<div className="small text-truncate"><i className="fa fa-caret-up"></i> 25.5% from previous 7 days</div>
											</div>
											<div className="col-xl-3 col-4">
												<h3 className="mb-1">179.9K</h3>
												<div>Returning Visitors</div>
												<div className="small text-truncate"><i className="fa fa-caret-up"></i> 5.33% from previous 7 days</div>
											</div>
											<div className="col-xl-3 col-4">
												<h3 className="mb-1">766.8K</h3>
												<div>Total Page Views</div>
												<div className="small text-truncate"><i className="fa fa-caret-up"></i> 0.323% from previous 7 days</div>
											</div>
										</div>
									</div>
									<div className="card-body p-0">
										<div style={{height: '269px'}}>
											<div className="widget-chart-full-width pe-4" style={{height: '254px'}}>
												<Chart type="area" height="254" width="100%" options={this.visitorChartData.options} series={this.visitorChartData.series} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						</div>
					</div>
					
				</div>
					</div>
					<div className="col-md-6">
					<Panel>
							<PanelHeader>Dados da Semana</PanelHeader>
							<PanelBody className="p-0">
								<p className="mb-0 p-3">
									Processos analizados dentro da Serventia
								</p>
								<Chart type="line"  height="391" width="95%" options={this.secondAreaChart.options} series={this.secondAreaChart.series} />
							</PanelBody>
					</Panel>
					</div>
				</div>
				

				<div className="modal modal-message fade" id="verTabela">
					<div className="modal-dialog">
						<div className="modal-content modal-content-sag">
							<div className="modal-header">
								<h4 className="modal-title"></h4>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
							</div>
							<div className="modal-body">
							<div className="row">
								<div className="col-xl-12 col-lg-10">
									<div className="card border-0 mb-3 panel-light text-black">
										<div className="card-body">
											<Tabela />
										</div>
									</div>
								</div>
							</div>
							</div>
							<div className="modal-footer">
								<button className="btn btn-dark" data-bs-dismiss="modal">Close</button>
								
							</div>
						</div>
					</div>
				</div>

				


				
			</div>
			
		)
	}
};

export default HomeSag;