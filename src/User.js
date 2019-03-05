import React, {Component} from 'react';
import './user.css';
import Header from './Header/Header.js';
import Userlist from './LeftSide/Userlist.js';
import Userinforightside from './RightSide/Userinforightside.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class User extends Component{

    constructor(props){

        super(props);

        this.state = {

            users : [
                {
                    'id' : 1,
                    'name' : "Kalpesh Prajapati",
                    'local-id' : 1702,
                    'description' : "Software Developer"
                },
                {
                    'id' : 2,
                    'name' : "Dinesh Prajapati",
                    'local-id' : 1602,
                    'description' : "Backend Developer"

                },
                {
                    'id' : 3,
                    'name' : "Vikas Prajapati",
                    'local-id' : 1502,
                    'description' : "Fronted Developer"

                },
                {
                    'id' : 4,
                    'name' : "Rushi Prajapati",
                    'local-id' : 1402,
                    'description' : "UI Developer"

                },
            ],

            activeuserid : 1,

            currentuserid : 5
        }

    }

    adduser = (user) => {

        let allusers = this.state.users;

        user.id = this.state.currentuserid;

        allusers.push(user);

        let activeuserid = this.state.activeuserid;

        if(activeuserid === 0){

            activeuserid = user.id;

        }


        this.setState({
            users : allusers,
            currentuserid : user.id + 1,
            activeuserid : activeuserid
        })

    }

    changeactiveuser = (key) => {

        this.setState({
            activeuserid : key
        });

    }

    deleteuser = (usersArray) => {

        let prevUsers = this.state.users;

        let newUsers = prevUsers.map( (user,index) => {

            let isavailable = usersArray.indexOf(user.id);

            if(isavailable > -1){
                return null;
            }
            else{
                return user;
            }

        });

        newUsers = newUsers.filter( (user) => {

            return user !== null;

        });

        let prevActiveuserid = this.state.activeuserid;

        let isdeletedActiveuser = usersArray.indexOf(prevActiveuserid);

        let currentActiveuserid = prevActiveuserid;

        if(isdeletedActiveuser > -1){

            currentActiveuserid = newUsers.length > 0 ? newUsers[0].id : 0 ;

        }

        this.setState({
            'activeuserid' : currentActiveuserid,
            'users' : newUsers
        })

    }

    render(){

        let activeuser = (this.state.users).filter( (user) => {

            return user.id === this.state.activeuserid;

        });

        activeuser  = activeuser.length > 0 ? activeuser[0] : null;

        return (

            <div>

                <Header adduser={this.adduser} />

                <div className="row">

                    <Userlist users={this.state.users}
                        deleteuser={this.deleteuser}
                        activeuserid={this.state.activeuserid}
                        changeactiveuser={this.changeactiveuser} />

                    <Userinforightside  activeuser={activeuser}/>

                </div>

            </div>
        );


    }



}

export default User;