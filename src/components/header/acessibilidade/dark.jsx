import React from "react";
import { AppSettings } from "../../../config/app-settings";

class Dark extends React.Component {
    static contextType = AppSettings;
	
	constructor(props) {
		super(props);
		
		this.state = {
			expand: false,
			theme: (localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'teal',
			darkMode: false
		}
		this.theme = ['red','pink','orange','yellow','lime','green','teal','cyan','blue','purple','indigo','dark'];
	}
	
	handleDarkMode = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppDarkMode(true);
		} else {
			this.context.handleSetAppDarkMode(false);
		}
	}

    render() {
		return (
			<AppSettings.Consumer>
				{({appDarkMode}) => (
                    <> <i className="fa fa-sun me-2 text-white"></i>
                    <div className="form-check form-switch mb-0">
                       
                    <input type="checkbox" className="form-check-input" name="app-theme-dark-mode" onChange={this.handleDarkMode} id="appThemeDarkMode" checked={appDarkMode} value="1" />
                    <label className="form-check-label" htmlFor="appThemeDarkMode">&nbsp;</label>
                    <i className="fa fa-moon me-3 text-white"></i>
                </div></>
                )}
            </AppSettings.Consumer>
        )
        }
}

export default Dark;