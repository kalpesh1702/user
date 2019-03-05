import React , {Component} from 'react';
import Modalcontent from './Modalcontent.js';
import DialogModal from 'sweetalert';

class Header extends Component{

	constructor(props){

		super(props);

		this.state = {

			usermodal : false,

		}

		this.nameRef = React.createRef();

		this.localidRef = React.createRef();

		this.descriptionRef = React.createRef();

	}

	showUserModal = () => {

		this.setState({usermodal : true});

	}

	hideUserModal = () => {

		this.setState({usermodal : false});

	}

	submitHandler = () => {

		let name = this.nameRef.current.value;

		let localid = this.localidRef.current.value;

		let description = this.descriptionRef.current.value;

		if(!name){

			DialogModal('Please Enter Name.');

			return;

		}
		if(!localid){

			DialogModal('Please Enter Local-Id.');

			return;

		}

		this.hideUserModal();

		DialogModal("Add User", "User has been saved Successfully!!","success");

	    let user = {};

	    user["name"] = name;

	    user["local-id"] = localid;

	    user["description"] = description;

		this.props.adduser(user);
	}

	render(){

		let usermodalbodycontent = [

			<div key="1" className="form-group">

				<label>Name</label>

				<input ref={this.nameRef} type="text" className="form-control" id="name" />

			</div>

			,

			<div key="2" className="form-group">

				<label>Local-Id</label>

				<input ref={this.localidRef} type='text' className='form-control' id='localid' />

			</div>

			,

			<div key="3" className="form-group">

				<label>Description</label>

				<textarea ref={this.descriptionRef}
					className="form-control rounded-0"  rows="2" id="description" />

			</div>

		];

		return (

			<div className="headingclass">

				<div className="row">

					<div className="col-sm-6 subjectText text-right">
						Users' Information
					</div>

					<div className="col-sm-6 text-right">
						 <button type="button"
						 	onClick={this.showUserModal}
						 	className="commonbutton btn btn-sm btn-primary">Add User</button>
					</div>

				</div>

				<Modalcontent
					modalbodycontent={usermodalbodycontent}
					size="md"
					heading="Add User"
					show={this.state.usermodal}
					onHide={this.hideUserModal}
					saveData={this.submitHandler} />

			</div>

		)

	}


}

export default Header;