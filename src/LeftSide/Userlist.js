import React, {Component} from 'react';
import Userinfoleftside from './Userinfoleftside.js';
import {MdDelete} from 'react-icons/md';

class Userlist extends Component{

	constructor(props){

		super(props);

		this.state = {

			'checkeboxvalue' : []

		}

	}

	deleteuser = () => {

		this.props.deleteuser(this.state.checkeboxvalue);

		this.setState({

			'checkeboxvalue' : []

		})

	}

	changecheckboxvalue = (id , ischecked) => {

		let prevcheckboxvalue = this.state.checkeboxvalue;

		if(ischecked === true){

			prevcheckboxvalue.push(id);

		}
		else{

			var index = prevcheckboxvalue.indexOf(id);

				if (index > -1) {

				  prevcheckboxvalue.splice(index, 1);

				}

		}

		this.setState({

			'checkeboxvalue' : prevcheckboxvalue

		})

	}

	render(){

		let activeuserstyle={"background": "antiquewhite"}

		let usercontent = this.props.users.map( (data,index) =>{

			return(

				data.id === this.props.activeuserid

				?
					<Userinfoleftside
						key={index}
						checkedvalue = {this.state.checkeboxvalue}
						changecheckbox={this.changecheckboxvalue}
						index={data.id}
						data={data}
						changeactiveuser={this.props.changeactiveuser}
						style={activeuserstyle} />
				:
					<Userinfoleftside
						key={index}
						checkedvalue = {this.state.checkeboxvalue}
						changecheckbox={this.changecheckboxvalue}
						index={data.id}
						data={data}
						changeactiveuser={this.props.changeactiveuser} />

			);

		});


		return(

			<div className="col-sm-4 leftside" style={{"paddingRight": 0}}>

				<div className="headingclass">

					<span className="headingtag">People</span>

					<MdDelete className="deleteicon" onClick={this.deleteuser}/>

				</div>

				{usercontent}

			</div>
		);

	}


}

export default Userlist;