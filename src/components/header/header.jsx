import React from 'react';
import { Link } from 'react-router-dom';
import DropdownNotification from './dropdown/notification.jsx';
import DropdownLanguage from './dropdown/language.jsx';
import DropdownProfile from './dropdown/profile.jsx';
import SearchForm from './search/form.jsx';
import DropdownMegaMenu from './dropdown/mega.jsx';

import { AppSettings } from './../../config/app-settings.js';

import Logo from '../../assets/img/logo/logo_corregedoria.png';
import LogoSag from '../../assets/img/logo/logoSAG.png';
import Dark from './acessibilidade/dark.jsx';

class Header extends React.Component {
	render() {
		return (
			<AppSettings.Consumer>
				{({toggleAppSidebarMobile, toggleAppSidebarEnd, toggleAppSidebarEndMobile, toggleAppTopMenuMobile, appHeaderLanguageBar, appHeaderMegaMenu, appHeaderInverse, appSidebarTwo, appTopMenu, appSidebarNone}) => (
					<div id="header" className={'app-header ' + (appHeaderInverse ? 'app-header-inverse' : '')}>
						<div className="navbar-header">
							{appSidebarTwo && (
								<button type="button" className="navbar-mobile-toggler" onClick={toggleAppSidebarEndMobile}>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							)}
							<Link to="/" className="navbar-brand"><span className='logo-tj'><img src={ Logo } alt='Logomarca da Corregedoria Geral de Justiça'></img></span>
							</Link>
							
							{appHeaderMegaMenu && (
								<button type="button" className="navbar-mobile-toggler" data-bs-toggle="collapse" data-bs-target="#top-navbar">
									<span className="fa-stack fa-lg text-inverse">
										<i className="far fa-square fa-stack-2x"></i>
										<i className="fa fa-cog fa-stack-1x"></i>
									</span>
								</button>
							)}
							{appTopMenu && !appSidebarNone && (
							<button type="button" className="navbar-mobile-toggler" onClick={toggleAppTopMenuMobile}>
								<span className="fa-stack fa-lg text-inverse">
									<i className="far fa-square fa-stack-2x"></i>
									<i className="fa fa-cog fa-stack-1x"></i>
								</span>
							</button>
							)}
							{appSidebarNone && appTopMenu && (
								<button type="button" className="navbar-mobile-toggler" onClick={toggleAppTopMenuMobile}>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							)}
							{!appSidebarNone && (
								<button type="button" className="navbar-mobile-toggler" onClick={toggleAppSidebarMobile}>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							)}
						</div>
						
						{appHeaderMegaMenu && (
							<DropdownMegaMenu />
						)}
						
						<div className="navbar-nav">
						<span className='navbar-cgj me-4'><img src={ LogoSag } style={{width:'1.5em' }} className='me-2 mb-2' alt='Logomarca da SAGJUD'></img><b>SAG</b> JUD</span>
							{/* <SearchForm /> */}
							<Dark />
							
							
							{appHeaderLanguageBar && (
								<DropdownLanguage />
							)}
							
							
							
							{appSidebarTwo && (
								<div className="navbar-divider d-none d-md-block"></div>
							)}
							
							{appSidebarTwo && (
								<div className="navbar-item d-none d-md-block">
									<Link to="/" onClick={toggleAppSidebarEnd} className="navbar-link icon">
										<i className="fa fa-th"></i>
									</Link>
								</div>
							)}
						</div>
					</div>
				)}
			</AppSettings.Consumer>
		)
	}
}

export default Header;
