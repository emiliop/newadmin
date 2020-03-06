import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class UpdateService extends Component {
  constructor(props){
    super(props);
    this.state = {serviceTitle: '',
                  serviceTitleColor: '',
                  serviceBody: '',
                  serviceBody2: '',
                  serviceHighlighted: '',

                  serviceImage: '', 
                  serviceMidImage: '',
                  serviceGalleryImage1: '',
                  serviceGalleryImage2: '',
                  serviceGalleryImage3: '',
                  serviceGalleryImage4: '',
                  serviceGalleryImage5: '',


                  serviceBackground: '', 
                  serviceProduct: '', 
                  serviceClient: '', 
                  serviceService1: '', 
                  serviceService2: '', 
                  serviceService3: '',
                  serviceDescription: '',
                  serviceDuration: '', 

                  selectedFile: null,
                  imageFile: null,
                  galleryFile1: null,
                  galleryFile2: null,
                  galleryFile3: null,
                  galleryFile4: null,
                  galleryFile5: null,

                  imagePreviewUrl: null, 
                  imageMidPreviewUrl: null,

                  imageGalleryPreviewUrl1: null,
                  imageGalleryPreviewUrl2: null,
                  imageGalleryPreviewUrl3: null,
                  imageGalleryPreviewUrl4: null,
                  imageGalleryPreviewUrl5: null,
                
                  data:'',
                  dataImage:'',

                  dataGallery1:'',
                  dataGallery2:'',
                  dataGallery3:'',
                  dataGallery4:'',
                  dataGallery5:''
                };


                this.handleTitleChange = this.handleTitleChange.bind(this);
                this.handleTitleColorChange = this.handleTitleColorChange.bind(this);
                this.handleHighlightedChange = this.handleHighlightedChange.bind(this);
                this.handleBodyChange = this.handleBodyChange.bind(this);
                this.handleBody2Change = this.handleBody2Change.bind(this);
                this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
                this.handleProductChange = this.handleProductChange.bind(this);
                this.handleClientChange = this.handleClientChange.bind(this);
                this.handleService1Change = this.handleService1Change.bind(this);
                this.handleService2Change = this.handleService2Change.bind(this);
                this.handleService3Change = this.handleService3Change.bind(this);
                this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
                this.handleDurationChange = this.handleDurationChange.bind(this);
                this.fileChangedHandler = this.fileChangedHandler.bind(this);
                this.imageChangedHandler = this.imageChangedHandler.bind(this);
                this.galleryChangedHandler1 = this.galleryChangedHandler1.bind(this);
                this.galleryChangedHandler2 = this.galleryChangedHandler2.bind(this)
                this.galleryChangedHandler3 = this.galleryChangedHandler3.bind(this)
                this.galleryChangedHandler4 = this.galleryChangedHandler4.bind(this)
                this.galleryChangedHandler5 = this.galleryChangedHandler5.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this);


  }

  componentDidMount(){
    console.log(this.props);
    axios.get(`/api/services/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ 
        serviceTitle: response.data.title,
        serviceTitleColor: response.data.titlecolor,
        serviceBody: response.data.body,
        serviceBody2: response.data.body2,
        serviceHighlighted: response.data.highlighted,
        serviceImage: response.data.image,
        serviceBackground: response.data.background,
        serviceProduct: response.data.product,
        serviceClient: response.data.client,
        serviceService1: response.data.service1,
        serviceService2: response.data.service2,
        serviceService3: response.data.service3,
        serviceDescription: response.data.description,
        serviceDuration: response.data.duration,
        serviceMidImage: response.data.midimage,
        serviceGalleryImage1: response.data.imagegallery1,
        serviceGalleryImage2: response.data.imagegallery2,
        serviceGalleryImage3: response.data.imagegallery3,
        serviceGalleryImage4: response.data.imagegallery4,
        serviceGalleryImage5: response.data.imagegallery5
       });
       console.log(this.state)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleTitleChange(e){
    this.setState({
      serviceTitle: e.target.value
    })
  }
  handleTitleColorChange(e){
    this.setState({
      serviceTitleColor: e.target.value
    })
  }
  handleHighlightedChange(e){
    this.setState({
      serviceHighlighted: e.target.value
    })
  }
  handleBodyChange(e){
    this.setState({
      serviceBody: e.target.value
    })
  }
  handleBody2Change(e){
    this.setState({
      serviceBody2: e.target.value
    })
  }
  handleBackgroundChange(e){
    this.setState({
      serviceBackground: e.target.value
    })
  }
  handleProductChange(e){
    this.setState({
      serviceProduct: e.target.value
    })
  }
  handleClientChange(e){
    this.setState({
      serviceClient: e.target.value
    })
  }
  handleService1Change(e){
    this.setState({
      serviceService1: e.target.value
    })
  }
  handleService2Change(e){
    this.setState({
      serviceService2: e.target.value
    })
  }
  handleService3Change(e){
    this.setState({
      serviceService3: e.target.value
    })
  }
  handleDescriptionChange(e){
    this.setState({
      serviceDescription: e.target.value
    })
  }
  handleDurationChange(e){
    this.setState({
      serviceDuration: e.target.value
    })
  }
  

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

    
    let datafile = new FormData();
    datafile.append('image', event.target.files[0], event.target.files[0].name)
    this.setState({
      data: datafile
    })
    
  }

  imageChangedHandler (e) {
    this.setState({
      imageFile: event.target.files[0]
    })
 
    let readermid = new FileReader();
     
    readermid.onloadend = () => {
      this.setState({
        imageMidPreviewUrl: readermid.result
      });
    }
 
    readermid.readAsDataURL(event.target.files[0])

    
    let datamid = new FormData();
    datamid.append('midimage', event.target.files[0], event.target.files[0].name)
    this.setState({
      dataImage: datamid
    })
    
  }

  galleryChangedHandler1 (e) {
    this.setState({
      galleryFile1: event.target.files[0]
    })
 
    let reader1 = new FileReader();
     
    reader1.onloadend = () => {
      this.setState({
        imageGalleryPreviewUrl1: reader1.result
      });
    }
 
    reader1.readAsDataURL(event.target.files[0])
    
    let data1 = new FormData();
    data1.append('gallery1', event.target.files[0], event.target.files[0].name)
    this.setState({
      dataGallery1: data1
    })
 }

 galleryChangedHandler2 (e) {
  this.setState({
    galleryFile2: event.target.files[0]
  })

  let reader2 = new FileReader();
   
  reader2.onloadend = () => {
    this.setState({
      imageGalleryPreviewUrl2: reader2.result
    });
  }

  reader2.readAsDataURL(event.target.files[0])
  
  let data2 = new FormData();
  data2.append('gallery2', event.target.files[0], event.target.files[0].name)
  this.setState({
    dataGallery2: data2
  })
}

galleryChangedHandler3 (e) {
  this.setState({
    galleryFile3: event.target.files[0]
  })

  let reader3 = new FileReader();
   
  reader3.onloadend = () => {
    this.setState({
      imageGalleryPreviewUrl3: reader3.result
    });
  }

  reader3.readAsDataURL(event.target.files[0])
  
  let data3 = new FormData();
  data3.append('gallery3', event.target.files[0], event.target.files[0].name)
  this.setState({
    dataGallery3: data3
  })
}

galleryChangedHandler4 (e) {
  this.setState({
    galleryFile4: event.target.files[0]
  })

  let reader4 = new FileReader();
   
  reader4.onloadend = () => {
    this.setState({
      imageGalleryPreviewUrl4: reader4.result
    });
  }

  reader4.readAsDataURL(event.target.files[0])
  
  let data4 = new FormData();
  data4.append('gallery4', event.target.files[0], event.target.files[0].name)
  this.setState({
    dataGallery4: data4
  })
}

galleryChangedHandler5 (e) {
  this.setState({
    galleryFile5: event.target.files[0]
  })

  let reader5 = new FileReader();
   
  reader5.onloadend = () => {
    this.setState({
      imageGalleryPreviewUrl5: reader5.result
    });
  }

  reader5.readAsDataURL(event.target.files[0])
  
  let data5 = new FormData();
  data5.append('gallery5', event.target.files[0], event.target.files[0].name)
  this.setState({
    dataGallery5: data5
  })
}

  async handleSubmit (e) {

    let settings = { headers: { 'content-type': 'multipart/form-data' } }

    e.preventDefault();
    
    let bannerImage = await axios.post('../api/services', this.state.data, settings)
    .then( res => {
      this.setState({
        serviceImage: res.data
      })                                              
                        }).catch(err=> console.log(err));                  

    let midImage = await axios.post('../api/services/mid', this.state.dataImage, settings)
    .then( respo => {
      this.setState({
        serviceMidImage: respo.data
      })                  
                        }).catch(err=> console.log(err));

    let galleryImage1 = await axios.post('../api/services/gallery1', this.state.dataGallery1, settings)
    .then( respoGallery1 => {
      this.setState({
        serviceGalleryImage1: respoGallery1.data
      })                        
                                            }).catch(err=> console.log(err));

    let galleryImage2 = await axios.post('../api/services/gallery2', this.state.dataGallery2, settings)
    .then( respoGallery2 => {
      this.setState({
        serviceGalleryImage2: respoGallery2.data
      })                    
                       }).catch(err=> console.log(err));

    let galleryImage3 = await axios.post('../api/services/gallery3', this.state.dataGallery3, settings)
    .then( respoGallery3 => {
      this.setState({
        serviceGalleryImage3: respoGallery3.data
      })                    
                      }).catch(err=> console.log(err));

    let galleryImage4 = await axios.post('../api/services/gallery4', this.state.dataGallery4, settings)
    .then( respoGallery4 => {
      this.setState({
        serviceGalleryImage4: respoGallery4.data
      })                    
                       }).catch(err=> console.log(err));

    let galleryImage5 = await axios.post('../api/services/gallery5', this.state.dataGallery5, settings)
    .then( respoGallery5 => {
      this.setState({
        serviceGalleryImage5: respoGallery5.data
      })                    
                       }).catch(err=> console.log(err));

    let newData = await axios.put(`/api/services/${this.props.match.params.id}}`, 
                  {
                    title: this.state.serviceTitle,
                    titlecolor: this.state.serviceTitleColor,
                    body: this.state.serviceBody,
                    body2: this.state.serviceBody2,
                    highlighted: this.state.serviceHighlighted,
                    background: this.state.serviceBackground,
                    product:this.state.serviceProduct,
                    client:this.state.serviceClient,
                    service1:this.state.serviceService1,
                    service2:this.state.serviceService2,
                    service3:this.state.serviceService3,
                    description:this.state.serviceDescription,
                    duration:this.state.serviceDuration,
                    image: this.state.serviceImage,
                    midimage:this.state.serviceMidImage,
                    imagegallery1:this.state.serviceGalleryImage1,
                    imagegallery2:this.state.serviceGalleryImage2,
                    imagegallery3:this.state.serviceGalleryImage3,
                    imagegallery4:this.state.serviceGalleryImage4,
                    imagegallery5:this.state.serviceGalleryImage5
                  }).then( response => {
                    this.setState({
                      title:'',
                      titlecolor:'',
                      body:'',
                      body2:'',
                      highlighted:'',
                      background:'',
                      product:'',
                      client:'',
                      service1:'',
                      service2:'',
                      service3:'',
                      description:'',
                      duration:'',
                      image:'',
                      midimage:'',
                      imagegallery1:'',
                      imagegallery2:'',
                      imagegallery3:'',
                      imagegallery4:'',
                      imagegallery5:''
                    })
                    this.props.history.push('/home');
                  }).catch(err=> console.log(err));
  }


    render() {

      let $imagePreview = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceImage} alt="icon" width="200" /> </div>);

      if (this.state.imagePreviewUrl) {
          $imagePreview = (<div className="image-container" ><br /><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
       }

       let $imageMidPreview = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceMidImage} alt="icon" width="200" /> </div>);

      if (this.state.imageMidPreviewUrl) {
          $imageMidPreview = (<div className="image-container" ><br /><img src={this.state.imageMidPreviewUrl} alt="icon" width="200" /> </div>);
       }

       let $imageGalleryPreview1 = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceGalleryImage1} alt="icon" width="200" /> </div>);

      if (this.state.imageGalleryPreviewUrl1) {
          $imageGalleryPreview1 = (<div className="image-container" ><br /><img src={this.state.imageGalleryPreviewUrl1} alt="icon" width="200" /> </div>);
       }

       let $imageGalleryPreview2 = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceGalleryImage2} alt="icon" width="200" /> </div>);

      if (this.state.imageGalleryPreviewUrl2) {
          $imageGalleryPreview2 = (<div className="image-container" ><br /><img src={this.state.imageGalleryPreviewUrl2} alt="icon" width="200" /> </div>);
       }

       let $imageGalleryPreview3 = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceGalleryImage3} alt="icon" width="200" /> </div>);

      if (this.state.imageGalleryPreviewUrl3) {
          $imageGalleryPreview3 = (<div className="image-container" ><br /><img src={this.state.imageGalleryPreviewUrl3} alt="icon" width="200" /> </div>);
       }

       let $imageGalleryPreview4 = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceGalleryImage4} alt="icon" width="200" /> </div>);

      if (this.state.imageGalleryPreviewUrl4) {
          $imageGalleryPreview4 = (<div className="image-container" ><br /><img src={this.state.imageGalleryPreviewUrl4} alt="icon" width="200" /> </div>);
       }

       let $imageGalleryPreview5 = (<div className="image-container" ><br /><img src={"../../images/" + this.state.serviceGalleryImage5} alt="icon" width="200" /> </div>);

      if (this.state.imageGalleryPreviewUrl5) {
          $imageGalleryPreview5 = (<div className="image-container" ><br /><img src={this.state.imageGalleryPreviewUrl5} alt="icon" width="200" /> </div>);
       }

      return (
      <div>
        <br />
        <h1>Update Service</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title:</label>
                <input value={this.state.serviceTitle} type="text" className="form-control" onChange={this.handleTitleChange} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Title Color:</label>
                        <div>
                          <select value={this.state.serviceTitleColor}
                          onChange={this.handleTitleColorChange}>
                              <option value="light">Claro</option>
                              <option value="dark">Oscuro</option>
                            </select>
                       </div>
                </div>
              </div>
            </div>
            <div className="App">
              <div>Principal Image:</div>
              { $imagePreview }
              <input type="file" name="avatar" onChange={this.fileChangedHandler} />
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Es servicio destacado?</label>
                        <div>
                          <select value={this.state.serviceHighlighted}
                          onChange={this.handleHighlightedChange}>
                              <option value="true">Si</option>
                              <option value="false">No</option>
                            </select>
                       </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Background:</label>
                  <textarea value={this.state.serviceBackground} className="form-control col-md-6" onChange={this.handleBackgroundChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Product:</label>
                      <div>
                          <select value={this.state.serviceProduct} 
                          onChange={this.handleProductChange}>
                                  <option value="web">Desarrollo Web</option>
                                  <option value="app">App</option>
                                  <option value="other">Otro</option>
                            </select>
                       </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Client:</label>
                  <textarea  value={this.state.serviceClient} className="form-control col-md-6" onChange={this.handleClientChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service:</label>
                        <div>
                          <select value={this.state.serviceService1} 
                          onChange={this.handleService1Change}>
                              <option value="Servicio Uno">Servicio Uno</option>
                              <option value="Servicio Dos">Servicio Dos</option>
                              <option value="Servicio Tres">Servicio Tres</option>
                            </select>
                       </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service 2:</label>
                    <div>
                          <select value={this.state.serviceService2} 
                          onChange={this.handleService2Change}>
                              <option value="Servicio Uno">Servicio Uno</option>
                              <option value="Servicio Dos">Servicio Dos</option>
                              <option value="Servicio Tres">Servicio Tres</option>
                            </select>
                    </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service 3:</label>
                      <div>
                          <select value={this.state.serviceService3} 
                          onChange={this.handleService3Change}>
                              <option value="Servicio Uno">Servicio Uno</option>
                              <option value="Servicio Dos">Servicio Dos</option>
                              <option value="Servicio Tres">Servicio Tres</option>
                            </select>
                       </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Body:</label>
                  <textarea value={this.state.serviceBody} className="form-control col-md-6" onChange={this.handleBodyChange}></textarea>
                </div>
              </div>
            </div>
            <div className="App2">  
              <div>Content Image:</div>
              { $imageMidPreview }
              <input type="file" name="avatar2" onChange={this.imageChangedHandler} />
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Body Second Part:</label>
                  <textarea value={this.state.serviceBody2} className="form-control col-md-6" onChange={this.handleBody2Change}></textarea>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Description:</label>
                  <textarea  value={this.state.serviceDescription} className="form-control col-md-6" onChange={this.handleDescriptionChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Duration:</label>
                  <textarea  value={this.state.serviceDuration} className="form-control col-md-6" onChange={this.handleDurationChange}></textarea>
                </div>
              </div>
            </div>
                        
            <br />
            <h1>Gallery</h1>
            <div className="App3">
              <div>Imagen de la Galleria 1:</div>
              { $imageGalleryPreview1 } 
              <input type="file" name="avatar3" onChange={this.galleryChangedHandler1} /> 
            </div>
            <br />
            <div className="App4">
             <div>Imagen de la Galleria 2:</div>
               { $imageGalleryPreview2 }
              <input type="file" name="avatar4" onChange={this.galleryChangedHandler2} />
            </div>
            <br />
            <div className="App5">
              <div>Imagen de la Galleria 3:</div>
              { $imageGalleryPreview3 }
              <input type="file" name="avatar5" onChange={this.galleryChangedHandler3} /> 
            </div>
            <br />
            <div className="App6">
               <div>Imagen de la Galleria 4:</div>
               { $imageGalleryPreview4 }
              <input type="file" name="avatar6" onChange={this.galleryChangedHandler4} />  
            </div>
            <br />  
            <div className="App7">
               <div>Imagen de la Galleria 5:</div>
               { $imageGalleryPreview5 }
              <input type="file" name="avatar7" onChange={this.galleryChangedHandler5} />
            </div>

            <br />

            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>Edit service</button>
            </div>
        </form>
  </div>
      )
    }
}
export default UpdateService;