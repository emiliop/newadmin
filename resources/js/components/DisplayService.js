import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DisplayService extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', services: [], forms:[]};
     }
     componentDidMount(){
       axios.get('/api/services')
       .then(response => {
         this.setState({ services: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })

       axios.get('/api/forms')
       .then(response => {
         this.setState({ forms: response.data });
         console.log(this.state.forms);
       })
       .catch(function (error) {
         console.log(error);
       })
     }

     handleDelete(id){
       console.log('sadasdsd');
     axios.delete(`api/services/${id}`,{
     }).then( response => { 
      this.setState({});
      this.props.history.push('/home');
     }).catch(err=> console.log(err));
     this.componentDidMount();
   }
               


  render(){
    return (
      <div>
        <h1>Proyects</h1>


        <div className="row">
          <Link to="/create" className="btn btn-primary col-md-3 m-2 btn-sm mr-2">Add service</Link> 
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Proyect Title</td>
                <td>Proyect Body</td>
                <td>Proyect Background</td>
                <td>Proyect Image</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              {
                this.state.services !==null ? this.state.services.map( service => (
                  <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.title}</td>
                <td>{service.body}</td>
                <td>{service.background}</td>
                <td><img src={"../../images/" + service.image} alt="icon" width="200" /></td>
                <td>
                  <button  className="btn btn-primary" onClick={() => this.handleDelete(service.id)}>delete</button>
                  <Link to={"/edit/"+service.id} className="btn btn-secondary ml-2">edit</Link>
                </td>
           
            </tr>
                )) 
                :null
              }
              
            </tbody>
        </table>

        <h1>Comments</h1>

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Form Name</td>
                <td>Form Mail</td>
                <td>Form Phone</td>
                <td>Form Comment</td>
            </tr>
            </thead>
            <tbody>
              {
                this.state.forms !==null ? this.state.forms.map( form => (
                  <tr key={form.id}>
                <td>{form.id}</td>
                <td>{form.name}</td>
                <td>{form.mail}</td>
                <td>{form.phone}</td>
                <td>{form.comment}</td>
                
           
            </tr>
                )) 
                :null
              }
              
            </tbody>
        </table>

    </div>
    )
  }
}
export default DisplayService;