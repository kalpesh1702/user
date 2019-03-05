import React from 'react';
import {MdPerson} from 'react-icons/md';

function Userinfoleftside(props){

	let changecheckbox = (event, value) => {

		props.changecheckbox(value, event.target.checked);

	}

	return(

		<div key={props.index} className="row userinfo" style={props.style}>

			<div className="col-sm-1" style={{"paddingRight" : "0px"}}>

				<input
					type="checkbox"
					className="selectionuser"
					checked={props.checkedvalue.indexOf(props.index) > -1 ? true : false}
					onChange={(e) => changecheckbox(e,props.index)} />

			</div>

			<div className="col-sm-3 changeuser"
				onClick={() => props.changeactiveuser(props.index)}>

				<MdPerson className="userpic"/>

			</div>

			<div className="col-sm-8 changeuser"
				style={{"paddingTop" : "12px"}}
				onClick={() => props.changeactiveuser(props.index)}>

				<span className="username">{props.data.name}</span>

			</div>

		</div>

	);

}

export default Userinfoleftside;