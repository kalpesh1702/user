import React from 'react';
import logo from './user.png';
import Alert from 'react-bootstrap/Alert'

function Userinforightside(props){

	if(props.activeuser ){

		return(

			<div className="col-sm-8 rightside">

				<img src={logo} />

				<div className="row userrightsideinfo">

					<div className="col-sm-1 labeltag"></div>

					<div className="col-sm-4 labeltag">
						Name :
					</div>

					<div className="col-sm-7 valuetag">
						{props.activeuser["name"]}
					</div>

				</div>
				<div className="row userrightsideinfo">

					<div className="col-sm-1 labeltag"></div>

					<div className="col-sm-4 labeltag">
						Local-Id :
					</div>

					<div className="col-sm-7 valuetag">
						{props.activeuser["local-id"]}
					</div>

				</div>
				<div className="row userrightsideinfo">

					<div className="col-sm-1 labeltag"></div>

					<div className="col-sm-4 labeltag">
						Description :
					</div>

					<div className="col-sm-7 valuetag">
						{props.activeuser["description"]}
					</div>

				</div>

			</div>

		);

	}
	else{
		return(

			<div className="col-sm-8" style={{"padding" : "50px"}}>
				<Alert variant="danger" style={{"textAlign":"center"}}>No User Found</Alert>
			</div>

		)
	}


}


export default Userinforightside;