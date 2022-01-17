import React, { Component }from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';

class Home extends Component{
  state = {
    imageArray: [],
    loader: true,
  }
  componentDidMount(){
    let imageArray = [];
    for (let i=0; i<10; i++){
      imageArray.push({imageUrl: "./img/portfolio/", key: i})
    }
    console.log(imageArray);
    this.setState({
      imageArray: imageArray,
      // loader: false,
    })
  }
  render(){
    setTimeout(()=>{this.setState({loader:false})}, 5000)
    // if(this.state.loader === true){
    //   console.log('Loading.....')
    //  return  (
    //   <div style={{marginTop: 200,backgroundColor: 'red'}}>
    //    <Spinner animation="border" variant="dark" />
    //    </div>)
    // }else{
      return(
        <div style={this.state.loader? {height: 1000000, width: '100%', backgroundColor: 'black'}: null}>
     {this.state.loader? (<div style={{position:'absolute', height: '100%', width: '100%', top:'45%', left: '50%'}}>
        {/* <Spinner animation="border" variant="dark" /> */}
        <div className="loader">
          <div className="loader__container">
            <div className="loader__film">
              <img className="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
              <img className="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
            </div>
            <img className="loader__camera" src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1" alt="" />
          </div>
        </div>
        </div>): null}
      <div className="wrapper"> 
        <div className="flex-row d-flex" id="slide"  style={{width: '400%'}}>
          {/* <div> */}
          {this.state.imageArray.map((image, index)=>{
            // console.log("this is map function",image.imageUrl, index);
            return(<div key={image.key} style={{width: '10%'}}>
              <img src={require(`${image.imageUrl}${index+1}.jpg`)} height={180} width={'100%'}/>
            </div>);
          })}
          {this.state.imageArray.map((image, index)=>{
            // console.log("this is map function",image.imageUrl, index);
            return(<div key={image.key} style={{width: '10%'}}>
              <img src={require(`${image.imageUrl}${index+1}.jpg`)} height={180} width={'100%'}/>
            </div>);
          })}
          {/* </div> */}
            {/* <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div>
            <div><img src={require('./img/portfolio/1.jpg')} height={undefined} width={'100%'}/></div> */}
        </div>
    </div>
    </div>
    )
  }
}
export default Home;