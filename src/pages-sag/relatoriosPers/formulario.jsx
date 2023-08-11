import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel.jsx';
import { Button, ButtonToolbar, Col, Form, InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { Autocomplete, Checkbox, TextField, ListItemText } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank, Report, AdminPanelSettings, RuleFolder, Balance, EventRepeat, RecentActors } from '@mui/icons-material';

import comarcas from './data.js';
import 'bootstrap-daterangepicker/daterangepicker.css';

import '../../locale/date-moment.js';

export default function RelatoriosPersonalizados(){
 
    //Funcionamento do wizard
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [estadoNav, setEstadoNav] = useState([]);  
    const etapasNav = ['Dados de localização', 'Dados do processo', 'Classificação do processo', 'Estado do processo'];  
   
    useEffect(() => { updateEstadoNav()}, [etapaAtual]);
  
    const updateEstadoNav = () => {
      const totalEtapas = etapasNav.length;
      const estadoNav = Array(totalEtapas).fill('disabled');
      estadoNav[etapaAtual] = 'active';
      if (etapaAtual > 0) {
        for (var i = 0; i < etapaAtual; i++) {
          estadoNav[i] = 'completed';
        }
      }
      setEstadoNav(estadoNav);
    };
    //fim
  
    //comportamento dos botões do formulário
    const handleNext = () => { setEtapaAtual((prevEtapa) => prevEtapa + 1)};
    const handlePrevious = () => {setEtapaAtual((prevEtapa) => prevEtapa - 1)};
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Ações necessárias com os dados do formulário
      alert('Fim');
      console.log("Comarca:", dadosCampo.campoComarca);
	  console.log("Critério de indicador:", dadosCampo.criteriosInd)
	  console.log("valor mínimo", causaValMin)
	  console.log("é vdd esse bilete?", procPrior)
    };

    //Elementos e funções dos elementos do formulário
    const [temFoco, setTemFoco] = useState(false);
    const handleFocus = () => {setTemFoco(true)};
    const handleBlur = () => {setTemFoco(false)};
    
        //campos da primeira etapa
    const [dadosCampo, setDadosCampo] = useState({ campoComarca: '', campoServ: '', criteriosInd: ''});
    const handleChangeDados = (event) => {
        const { name, value } = event.target;
        setDadosCampo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const [opcoesSelecionadasVara, setOpcoesSelecionadasVara] = useState([]);
    const opcoesCheckboxesVara = (event, values) => {setOpcoesSelecionadasVara(values)};

      //campos da segunda etapa
	const [rbAreas, setRbAreas ] = useState("");
	const clrbAreas = (event) => { setRbAreas("");
		  event.preventDefault();
	  };
    const [opcoesSelecionadasAreas, setOpcoesSelecionadasAreas] = useState([]);
    const opcoesCheckboxesAreas = (event, values) => {setOpcoesSelecionadasAreas(values)};

	const [rbCNat, setRbCNat ] = useState("");
	const clrbCNat = (event) => { setRbCNat("");
		  event.preventDefault()};
    const [opcoesSelecionadasClasses, setOpcoesSelecionadasClasses] = useState([]);
    const opcoesCheckboxesClasses = (event, values) => {setOpcoesSelecionadasClasses(values)};

	const [rbAssuntos, setRbAssuntos ] = useState("");
	const clrbAssuntos = (event) => { setRbAssuntos("");
		  event.preventDefault() };
    const [opcoesSelecionadasAssuntos, setOpcoesSelecionadasAssuntos] = useState([]);
    const opcoesCheckboxesAssuntos = (event, values) => {setOpcoesSelecionadasAssuntos(values)};

	const [rbMov, setRbMov] = useState("");
	const clrbMov = (event) => { setRbMov("");
		  event.preventDefault()};
    const [opcoesSelecionadasMovimentos, setOpcoesSelecionadasMovimentos] = useState([]);
    const opcoesCheckboxesMov = (event, values) => {setOpcoesSelecionadasMovimentos(values)};

	const [rbClasPjd, setRbClasPjd ] = useState("");
	const clrbClasPjd = (event) => { setRbClasPjd("");
		  event.preventDefault()};
    const [opcoesSelecionadasClassificadores, setOpcoesSelecionadasClassificadores] = useState([]);
    const opcoesCheckboxesClassif = (event, values) => {setOpcoesSelecionadasClassificadores(values)};
      
    //estados dos campos da terceira etapa
    const [causaValMin, setCausaValMin] = useState('');
	const handleChangeValMin = (event) => setCausaValMin(event.target.value);

	const [causaValMax, setCausaValMax] = useState('');
	const handleChangeValMax = (event) => setCausaValMax(event.target.value);

    const [numProcesso, setNumProcesso] = useState('');
	const handleChangeNumProc = (event, value) => setNumProcesso(value);

    const [startDateSpg, setStartDateSpg] = useState(null);
    const handleChangeStartDataSpg = (date) => {setStartDateSpg(date)};
    
    const [endDateSpg, setEndDateSpg] = useState(null);
    const handleChangeEndDataSpg = (date) => {setEndDateSpg(date)};

    const [startDateAutuacao, setStartDateAutuacao] = useState(null);
    const handleChangeStartDataAutuacao = (date) => {setStartDateAutuacao(date)};
    
    const [endDateAutuacao, setEndDateAutuacao] = useState(null);
    const handleChangeEndDataAutuacao = (date) => {setEndDateAutuacao(date)};

	//estados dos campos da quarta etapa
	const [rbArea, setRbArea ] = useState("");
	const clrbArea = (event) => { setRbArea("");
		  event.preventDefault()};

	const [rbSentenca, setRbSentenca ] = useState("");
	const clrbSentenca = (event) => { setRbSentenca("");
		  event.preventDefault()};

	const [rbSusp, setRbSusp ] = useState("");
	const clrbSusp = (event) => { setRbSusp("");
		  event.preventDefault()};

	const [ procPrior, setProcPrior] = useState(false);
	const toggleProcPrior = () => setProcPrior(!procPrior)

	const [ descConcluso, setDescConcluso] = useState(false);
	const toggleDescConcluso = () => setDescConcluso(!descConcluso);

	const [ reuPreso, setReuPreso ] = useState(false);
	const toggleReuPreso = () => setReuPreso(!reuPreso);

	const [ assistJud, setAssitJud ] = useState(false);
	const toggleAssitJud = () => setAssitJud(!assistJud);
	
	const [ semMovim, setSemMovim ] = useState(false);
	const toggleSemMovim = () => setSemMovim(!semMovim);
	

	//renderização dos campos do formulário e exemplos para opções.
    const renderFormFields = () => {    
       const Vara = opcoesSelecionadasVara;
       const Areas = opcoesSelecionadasAreas;
       const Classes = opcoesSelecionadasClasses;
       const Assuntos = opcoesSelecionadasAssuntos;
       const Classificadores = opcoesSelecionadasClassificadores;
       const Movimentos = opcoesSelecionadasMovimentos;


       //estilização do checkbox do chip do select multiple.
	   const checkVazio = <CheckBoxOutlineBlank fontSize='small' />
	   const checkPreenchido = <CheckBox fontSize='small' />
	   	/*Fim */

      switch (etapaAtual) {
        case 0: //dados de localização
          return (
            <>
             <Row className='mb-4'>
				<Col>
					<Form.Label for="comarca">Comarca</Form.Label>					
					<Form.Select name="campoComarca" value={dadosCampo.campoComarca} onChange={handleChangeDados} id="comarca">
					{comarcas.entrancia.map((comarca, index) => (<option key={index} value={comarca}>{comarca}</option>))}
					</Form.Select>					
				</Col>
				
				<Col>			
					<Form.Label for="serventia">Serventia</Form.Label>					
					<Form.Select name="campoServ" value={dadosCampo.campoServ} onChange={handleChangeDados} id="serventia">
						{comarcas.serventias.map((serventia, index) => <option key={index} value={serventia}>{serventia}</option>)}
					</Form.Select>	
				</Col>				
				</Row>
                <Row>
				<Col className="mb-4">
					<Form.Label for="op-varas">Vara</Form.Label>					
					<Autocomplete
						multiple
						id="op-varas"
						name="campoVara"						
						size='small'
						options={comarcas.varas}						
						disableCloseOnSelect
						getOptionLabel={(option) => option}
						renderOption={(props, option, { selected }) => (
							<li {...props}>
							<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							<ListItemText primary={option} />
							</li>
						)}
						value={Vara} onChange={opcoesCheckboxesVara}
						style={{ width: '100%' }}
						renderInput={(params) => (
							<TextField {...params} placeholder={temFoco ? '' : 'Pesquise e/ou escolha a opção desejada'} sx={{'& .MuiFormLabel-root': {
								  fontSize: '2px',},}} onFocus={handleFocus} onBlur={handleBlur} size='small' />
						)}
					/>				
				</Col>	
				</Row>				
            </>
          );
        case 1: //dados do processo
          return (
            <>
              <Row className='my-4'>
					<Col>					
						<div className="form-group">
						<div className="group-label-radio">
							<Form.Label>Areas de Ação: </Form.Label>
							<div className="radio-group">
							<Form.Check inline label="Iguais a" type="radio" name="rbAreas"	id="inlineRadio1" value="optionarea1" checked={rbAreas === "optionarea1"}
								onChange={(event) => setRbAreas(event.target.value)}/>								
							<Form.Check inline label="Diferente de" type="radio" name="rbAreas"	id="inlineRadio2" value="optionarea2" checked={rbAreas === "optionarea2"}
								onChange={(event) => setRbAreas(event.target.value)}/>								
								<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbAreas}></button>							
							</div>
						</div>
						<Autocomplete
							multiple
							id="areasAcao"
							name="campoAreas"
							size="small"
							options={comarcas.areasAtuacao}
							disableCloseOnSelect
							getOptionLabel={(option) => option}
							renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
								/>
								{option}
							</li>
							)}
							value={Areas}
							onChange={opcoesCheckboxesAreas}
							style={{ width: "100%" }}
							renderInput={(params) => (
							<TextField
								{...params}
								placeholder={
								temFoco ? "" : "Pesquise e/ou escolha a opção desejada"
								}
								onFocus={handleFocus}
								onBlur={handleBlur}
								size="small"
							/>
							)}
						/>
						</div>				
					</Col>
					<Col>					
						<div className="form-group">
						<div className="group-label-radio">
							<Form.Label>Classes ou Naturezas (SPG):	</Form.Label>
							<div className="radio-group">
							<Form.Check inline label="Iguais a"	type="radio" name="rbCNat"	id="inlineRadio1" value="optionarea3" checked={rbCNat === "optionarea3"}
								onChange={(event) =>setRbCNat(event.target.value)}/>								
							<Form.Check inline label="Diferentes de" type="radio" name="rbCNat" id="inlineRadio2" value="optionarea4"
								checked={rbCNat === "optionarea4"}	onChange={(event) =>setRbCNat(event.target.value)}/>							
								<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbCNat}></button>
							
							</div>
						</div>
						<Autocomplete
							multiple
							id="checkboxes-tags-demo"
							name="campoVara"
							size="small"
							options={comarcas.classesNatureza}
							disableCloseOnSelect
							getOptionLabel={(option) => option}
							renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
								/>
								{option}
							</li>
							)}
							value={Classes}
							onChange={opcoesCheckboxesClasses}
							style={{ width: "100%" }}
							renderInput={(params) => (
							<TextField
								{...params}
								placeholder={
								temFoco ? "" : "Pesquise e/ou escolha a opção desejada"
								}
								onFocus={handleFocus}
								onBlur={handleBlur}
								size="small"
							/>
							)}
						/>
						</div>					
					</Col>
				</Row>
				<Row className='my-4'>
					<Col>					
						<div className="form-group">
						<div className="group-label-radio">
							<Form.Label>Assuntos: </Form.Label>
							<div className="radio-group">
							<Form.Check inline label="Iguais a" type="radio" name="rbAssuntos"	id="inlineRadio7" value="optionarea7" checked={rbAssuntos === "optionarea7"}
								onChange={(event) => setRbAssuntos(event.target.value)}	/>							
							<Form.Check inline label="Diferente de"	type="radio" name="rbAssuntos"	id="inlineRadio8" value="optionarea8" checked={rbAssuntos === "optionarea8"}
								onChange={(event) => setRbAssuntos(event.target.value)}/>
								<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbAssuntos}></button> 
							
							</div>
						</div>
						<Autocomplete
							multiple
							id="checkboxes-tags-demo"
							name="campoVara"
							size="small"
							options={comarcas.assunt}
							disableCloseOnSelect
							getOptionLabel={(option) => option}
							renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
								/>
								{option}
							</li>
							)}
							value={Assuntos}
							onChange={opcoesCheckboxesAssuntos}
							style={{ width: "100%" }}
							renderInput={(params) => (
							<TextField
								{...params}
								placeholder={
								temFoco ? "" : "Pesquise e/ou escolha a opção desejada"
								}
								onFocus={handleFocus}
								onBlur={handleBlur}
								size="small"
							/>
							)}
						/>
						</div>
					
					</Col>
					<Col>					
						<div className="form-group">
						<div className="group-label-radio">
							<Form.Label>Classificadores (PJD):</Form.Label>
							<div className="radio-group">
							<Form.Check inline label="Iguais a"	type="radio" name="rbClasPjd" id="inlineRadio11" value="area11"	checked={rbClasPjd === "area11"}
								onChange={(event) =>setRbClasPjd(event.target.value)}/>															
							<Form.Check inline label="Diferentes de" type="radio" name="rbClasPjd" id="inlineRadio12" value="area12" checked={rbClasPjd === "area12"}
								onChange={(event) =>setRbClasPjd(event.target.value)}/>								
								<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbClasPjd}></button>
							
							</div>
						</div>
						<Autocomplete
							multiple
							id="checkboxes-tags-demo"
							name="campoVara"
							size="small"
							options={comarcas.classificPJD}
							disableCloseOnSelect
							getOptionLabel={(option) => option}
							renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
								/>
								{option}
							</li>
							)}
							value={Classificadores}
							onChange={opcoesCheckboxesClassif}
							style={{ width: "100%" }}
							renderInput={(params) => (
							<TextField
								{...params}
								placeholder={
								temFoco ? "" : "Pesquise e/ou escolha a opção desejada"
								}
								onFocus={handleFocus}
								onBlur={handleBlur}
								size="small"
							/>
							)}
						/>
						</div>
					
					</Col>
				</Row>
				<Row className='my-4'>
					<Col>					
						<div className="form-group">
						<div className="group-label-radio">
							<Form.Label>Movimentos ou Fases (SPG):</Form.Label>
							<div className="radio-group">
							<Form.Check inline label="Iguais a" type="radio" name="rbMov" id="inlineRadio9" value="area9" checked={rbMov === "area9"}
								onChange={(event) => setRbMov(event.target.value)}/>						
							<Form.Check inline	label="Diferente de" type="radio" name="rbMov" id="inlineRadio10" value="area10"	checked={rbMov === "area10"}
								onChange={(event) =>setRbMov(event.target.value)}/>							
								<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbMov}></button>
							
							</div>
						</div>
						<Autocomplete
							multiple
							id="checkboxes-tags-demo"
							name="campoVara"
							size="small"
							options={comarcas.movFases}
							disableCloseOnSelect
							getOptionLabel={(option) => option}
							renderOption={(props, option, { selected }) => (
							<li {...props}>
								<Checkbox
								checkVazio={checkVazio}
								checkPreenchido={checkPreenchido}
								style={{ marginRight: 8 }}
								checked={selected}
								/>
								{option}
							</li>
							)}
							value={Movimentos}
							onChange={opcoesCheckboxesMov}
							style={{ width: "100%" }}
							renderInput={(params) => (
							<TextField
								{...params}
								placeholder={
								temFoco ? "" : "Pesquise e/ou escolha a opção desejada"
								}
								onFocus={handleFocus}
								onBlur={handleBlur}
								helperText="Atenção! A situação do processo no PJD não é definida pelo último movimento. As pendências existentes no processo também influenciam a sua situação."
								size="small"
							/>
							)}
						/>
						</div>					
					</Col>
				</Row>
            </>
          );
        case 2:
          return (
            <>
              <Row className='my-4'>					
					<Col>
					<Form.Label className="">Utilizar critérios de busca do indicador</Form.Label>
					<Form.Select name='criteriosInd' value={dadosCampo.criteriosInd} onChange={handleChangeDados}>
						{comarcas.criteriosBusca.map((criterio, index) =>						
						(<option key={index} value={criterio}>{criterio}</option>))}
						
					</Form.Select>
					</Col>
					<Col>
					<Form.Label>Valor da Causa</Form.Label>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">Mínimo</InputGroup.Text>
						<Form.Control aria-describedby="basic-addon1" value={causaValMin} onChange={handleChangeValMin}	/>
						<InputGroup.Text id="basic-addon2">Máximo</InputGroup.Text>
						<Form.Control aria-describedby="basic-addon2" value={causaValMax} onChange={handleChangeValMax}	/>
					</InputGroup>
					</Col>
					<Col>
					<Form.Group>
						<Form.Label>Número do processo</Form.Label>
						<Form.Control type='text' value={numProcesso} onChange={(event) => handleChangeNumProc(event.target.value)}/>
					</Form.Group>
					</Col>
				</Row>	
				<Row>
					<Col>
					<Form.Label>Data da fase (SPG) ou do último movimento</Form.Label>
						<InputGroup className="mb-3">
							<DatePicker  className='form-control' locale={ptBR} startDate={startDateSpg} endDate={endDateSpg} dateFormat="dd/MM/yyyy" selected={startDateSpg}
              onChange={ handleChangeStartDataSpg }/>						
							<InputGroup.Text>Até</InputGroup.Text>							
							<DatePicker className='form-control' locale={ptBR} dateFormat="dd/MM/yyyy" startDate={startDateSpg} endDate={endDateSpg} selected={endDateSpg}
              onChange={ handleChangeEndDataSpg } />							
						</InputGroup>

																	
					</Col>
					<Col>
					<Form.Label>Data da autuação</Form.Label>
					<InputGroup className="mb-3">
							<DatePicker className='form-control' locale={ptBR} startDate={startDateAutuacao} endDate={endDateAutuacao} dateFormat="dd/MM/yyyy" selected={startDateAutuacao}
              onChange={ handleChangeStartDataAutuacao }/>						
							<InputGroup.Text>Até</InputGroup.Text>							
							<DatePicker className='form-control' locale={ptBR} startDate={startDateAutuacao} endDate={endDateAutuacao} dateFormat="dd/MM/yyyy" selected={endDateAutuacao}
              onChange={ handleChangeEndDataAutuacao }/>							
						</InputGroup>					
					</Col>
				</Row>
            </>
          );
        case 3:
          return (
            <>
              <Row className='my-4'>
					<Col>					
					<Form.Label>Área</Form.Label>	<div>				
						<Form.Check	label="Cível" inline name="rbArea" type='radio' value="area1" checked={rbArea === "area1"} onChange={(event) => setRbArea(event.target.value)}/>
						<Form.Check	label="Criminal" inline name="rbArea" type="radio" value="area2" checked={rbArea === "area2"} onChange={(event) => setRbArea(event.target.value)}/>
						<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbArea}></button>
						</div>										 
					</Col>
					<Col>
					<Form.Label>Sentença</Form.Label><div>					
						<Form.Check	label="Sentenciado" inline name="rbSentenca" type='radio' value="sent1" checked={rbSentenca === "sent1"} onChange={(event)=> setRbSentenca(event.target.value)}/>
						<Form.Check	label="Não sentenciado" inline name="rbSentenca" type="radio" value="sent2" checked={rbSentenca === "sent2"} onChange={(event)=> setRbSentenca(event.target.value)}/>
						<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbSentenca}></button>
						</div>											 
					</Col>
					<Col>
					<Form.Label>Suspensão do Prazo</Form.Label><div>			
						<Form.Check	label="Suspenso" inline name="rbSusp" type='radio' value="susp1" checked={rbSusp === "susp1"} onChange={(event) => setRbSusp(event.target.value)}/>
						<Form.Check	label="Não suspenso" inline name="rbSusp" type="radio" value="susp2" checked={rbSusp === "susp2"} onChange={(event) => setRbSusp(event.target.value)}/>
						<button className='btn-clear-formWizard' title="limpar opções" onClick={clrbSusp}></button>
						</div>										 
					</Col>
				</Row>
				<hr/>
				<div className='switch-wizard'>
				<Row className='my-3'>
					<Col className='d-flex'>
					<Report className={procPrior ? 'icone-inativo' : 'icone-ativo'}/>				
					<Form.Check type="switch" onChange={toggleProcPrior} checked={procPrior} label="Somente Processos com Prioridade"  />
					</Col>
					<Col className='d-flex'>
					<RuleFolder className={descConcluso ? 'icone-inativo' : 'icone-ativo'}/>
					<Form.Check type="switch" label="Desconsiderar Processos Conclusos" onChange={toggleDescConcluso} checked={descConcluso} />
					</Col>
					<Col className='d-flex'>
					<RecentActors className={reuPreso ? 'icone-inativo' : 'icone-ativo'}/>					
					<Form.Check type="switch" label=" Somente Réu Preso" onChange={toggleReuPreso} checked={reuPreso}/>
					</Col>
				</Row>
				<Row className='mb-3'>					
					<Col className='col-md-4 d-flex'>
					<Balance className={assistJud ? 'icone-inativo' : 'icone-ativo'} />					
					<Form.Check type="switch" label="Somente Processos com Assistência Judiciária" onChange={toggleAssitJud} checked={assistJud} />
					</Col>
			
								
					<Col className='col-md-8 d-flex'>	
					<EventRepeat className={semMovim ? 'icone-inativo' : 'icone-ativo'} />			
					<Form.Check type="switch"
					label="Processos sem movimentação há mais de 100 dias, exceto suspensos e arquivados provisoriamente" onChange={toggleSemMovim} checked={semMovim} />
					</Col>
					<Col className='col-md-1'>
					</Col>
				</Row>
				</div>
            </>
          );
  
        // Adicione casos para cada etapa adicional
  
        default:
          return null;
      }
    };
  
    const totalEtapas = estadoNav.length;
  
    return (
      <div>
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item active">Relatórios Personalizados</li>
        </ol>
        <h1 className="page-header">
          <b>Relatórios</b> Personalizados <small></small>
        </h1>
  
        <div className="row">
          <div className="col-xl-12">
            <Panel theme="default">
              <PanelHeader noButton={false}>Filtro de seleção</PanelHeader>
              <PanelBody>
                <div className="nav-wizards-container">
                  <nav className="nav nav-wizards-1 my-2">
                    {estadoNav.map((status, index) => (
                      <div className="nav-item col" key={index}>
                        <Link to={'#etapa-' + index} className={'nav-link ' + status} onClick={() => setEtapaAtual(index)}>
                          <div className="nav-no">{index + 1}</div>
                          <div className="nav-text">{etapasNav[index]}</div>
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
  
                <div className="card">
                  <div className="card-body wizard-body">
                    <form onSubmit={handleSubmit}>
                      <div className="card-body card-fixed">{renderFormFields()}</div>
  
                      <ButtonToolbar className="button-group-sag-right">
                        {etapaAtual !== 0 && (
                          <Button type="button" variant="light" className="me-2" onClick={handlePrevious}>
                            Anterior
                          </Button>
                        )}
                        {etapaAtual < totalEtapas - 1 && (
                          <>
                            <Button type="button" variant="primary" className="me-2" onClick={handleNext}>
                              Próximo
                            </Button>
                          </>
                        )}
                        {etapaAtual === totalEtapas - 1 && (
                          <Button type="submit" variant="success" className="me-2">
                            Enviar
                          </Button>
                        )}
                      </ButtonToolbar>
                    </form>
                  </div>
                </div>
              </PanelBody>
              <div className="hljs-wrapper"></div>
            </Panel>
          </div>
        </div>
      </div>
    );
  };
  
