import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class CreateService extends Component {
  constructor(props){
    super(props);
    this.state = {serviceTitle: '', serviceBody: '', serviceImage: '', serviceBackground: '', selectedFile: null, imagePreviewUrl: null, data:'' };


    this.handleTitleChange = this.handleTitleChange.bind(this);
     this.handleBodyChange = this.handleBodyChange.bind(this);
     this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    // this.handleImagenChange = this.handleImagenChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);


  }
  handleTitleChange(e){
    this.setState({
      serviceTitle: e.target.value
    })
  }
  handleBodyChange(e){
    this.setState({
      serviceBody: e.target.value
    })
  }
  handleBackgroundChange(e){
    this.setState({
      serviceBackground: e.target.value
    })
  }
  // handleImagenChange(e){
  //   this.setState({
  //     serviceImage: e.target.value
  //   })
  // }
 
 
  fileChangedHandler (e) {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])

    
    let data2 = new FormData();
    data2.append('image', event.target.files[0], event.target.files[0].name)
    this.setState({
      data: data2
    })
    
  }

  submit(e){
    let settings = { headers: { 'content-type': 'multipart/form-data' } }

    e.preventDefault();

    axios.post('api/services', this.state.data, settings)
    .then( response => {
      this.setState({
        serviceImage: response.data
      })                    
      console.log(response.data);
                          
                        }).catch(err=> console.log(err));
  }

  async handleSubmit (e) {

    let settings = { headers: { 'content-type': 'multipart/form-data' } }

    e.preventDefault();
    
    let ddwqd = await axios.post('api/services', this.state.data, settings)
    .then( res => {
      this.setState({
        serviceImage: res.data
      })                    
      console.log(res.data);
                          
                        }).catch(err=> console.log(err));

                        console.log(this.state.serviceImage);
                        
    let wqewqee = await axios.post('api/services/add', 
                  {
                    title:this.state.serviceTitle,
                    body:this.state.serviceBody,
                    background:this.state.serviceBackground,
                    image:this.state.serviceImage
                  })
                  .then( response => {
                                        console.log(response.data);
                                        this.props.history.push('/home');
                                      }).catch(err=> console.log(err));

    
  }


    render() {

      let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);

      if (this.state.imagePreviewUrl) {
          $imagePreview = (<div className="image-container" ><br /><br /><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
       }

      return (
      <div>
        <h1>Create Service</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Service Title:</label>
                <input type="text" className="form-control" onChange={this.handleTitleChange} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service Body:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleBodyChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service Background:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleBackgroundChange}></textarea>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service Image:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleImagenChange}></textarea>
                </div>
              </div>
            </div> */}
            <div className="App">
              <input type="file" name="avatar" onChange={this.fileChangedHandler} />
              {/* <button type="button" onClick={this.submit} > Upload </button> */}
              { $imagePreview }
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>Add Service</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateService;