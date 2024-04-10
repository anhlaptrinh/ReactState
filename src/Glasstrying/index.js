import React, { Component } from 'react'
import data from "./dataGlasses.json";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlglass:"",
            name: "",
            price: 0,
            description: "",
            listglass: data,
        };
    }

    
    RenderGlass=()=>{
        return this.state.listglass.map((item)=>{
            return (
                <div className="text-center mb-2 ml-3" key={item.id}>
                  <>
                  <img
                    src={item.url}
                    alt="Clothing 1"
                    className="img-fluid item"
                  />
                  <button className="btn btn-primary mt-5" onClick={() => this.showGlass(item.url,item.name,item.price,item.desc)}>Thử Ngay</button>
                  </>
                </div>
                
            );
        });
    };

    showGlass=(url,name,price,desc)=>{
       this.setState({
        urlglass : url,
        name : name,
        price : price,
        description : desc
       });
    }


  render() {
    const {urlglass} = this.state;
    const {name}=this.state;
    const {price}=this.state;
    const {description}=this.state;
    return (
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img src="./img/model.jpg" alt="Avatar" className="avatar" />
              <div className="glass-show position-absolute">
                {urlglass !== "" && <img src={urlglass} alt="" />}
              </div>
              <div className="text-show position-absolute">
                    <h4>Name: {name}</h4>
                    <h5>Price: {price}</h5>
                    <p>Description: {description}</p>
              </div>
            </div>
            <div className="col-md-6">
                <div className="row d-flex  align-items-center ">{this.RenderGlass()}</div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

