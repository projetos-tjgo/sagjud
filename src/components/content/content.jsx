import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import Footer from '../footer/footer.jsx';

/*
function setTitle(path, routeArray) {
	var appTitle;
	for (var i=0; i < routeArray.length; i++) {
		if (routeArray[i].path === path) {
			appTitle = 'Color Admin | ' + routeArray[i].title;
		}
	}
	document.title = (appTitle) ? appTitle : 'Color Admin | React App';
}*/

class Content extends React.Component {
	componentDidMount() {
		//setTitle(this.props.history.location.pathname, routes);
	}
	//componentWillMount() {
    //this.props.history.listen(() => {
			//setTitle(this.props.history.location.pathname, routes);
    //});
  //}
  
	render() {
		return (
			<AppSettings.Consumer>
				{({appContentClass}) => (
					<div className={'app-content '+ appContentClass} id="page-content">
						<div id="content-wrap">
							<Outlet />	
						</div>
						<Footer />					
					</div>
									)
			}
			</AppSettings.Consumer>
		)
	}
}

export default Content;
