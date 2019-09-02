import React from 'react';
import './App.css';
import YemekPaylas from './components/yemekPaylas';
import Yemekler from './components/yemekler';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      yemekler: [{
        yemekAdi:'Kek',
        yemekTarifi:'3 yumurta.\n' +
            '1 su bardağı toz şeker.\n' +
            '1 su bardağı süt.\n' +
            'Yarım su bardağı sıvı yağ\n' +
            '2,5 su bardağı un.\n' +
            '1 paket kabartma tozu.\n' +
            '1 paket vanilya.\n' +
            'Arzuya göre limon kabuğu ya da ceviz taneleri.',
        isVisible: false
      }]
    };
    this.paylas=this.paylas.bind(this);
    this.onClickEvent=this.onClickEvent.bind(this);

  }
  paylas(v1,v2){
      console.log(v1+" "+v2);
      let changeListo=this.state.yemekler;
      changeListo.push({
        yemekAdi:v1,yemekTarifi:v2,isVisible: false
      });

    this.setState({yemekler:changeListo});
  }
  onClickEvent(ids){

        let changeOn=this.state.yemekler;
        if ( changeOn[ids-1].isVisible===true) {
          changeOn[ids-1].isVisible=false;
        }else {
          changeOn[ids-1].isVisible=true;
        }
        this.setState({
            yemekler: changeOn
        })
  }
  render() {
    return (
        <div className={"container"}>
          <div className={"row"}>

            <div className={"col-3 mt-5"}>
              <YemekPaylas paylas={this.paylas}/>
            </div>
            <div className={"col-9 mt-3"}>

                <div className="basi mt-4">
                        <h5 className="card-title center" >YEMEK TARİFLERİM </h5>
                </div>
              <Yemekler yemekler={this.state.yemekler} onClickEvent={this.onClickEvent} />
            </div>
          </div>
        </div>
    );
  }

}

export default App;
