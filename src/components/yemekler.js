import React, {Component} from 'react';

class Yemekler extends Component {
    constructor(){
        super();
    this.state ={
            isVisible:false,
        };
    }
    onClickEvent=(e)=>{
        let ids=e.target.parentNode.id;
        this.props.onClickEvent(ids);


    }
    render() {
        const {isVisible}=this.state;
        const ymk=this.props.yemekler.map((elem,i)=>{
            if (elem.yemekAdi ==='' || elem.yemekTarifi===''){

            } else {


                return (

                    <div className="card mt-5" key={i + 1}>
                        <div className="card-header asd" id={i+1} onClick={this.onClickEvent.bind(this)}>
                            <center> {elem.yemekAdi}</center>
                        </div>
                        { elem.isVisible ?<div className="card-body" id={i+1}>
                            <p className="card-text">
                                {elem.yemekTarifi}
                            </p>
                        </div> :null
                        }

                    </div>
                )
            }
        })
  return (
            <div>
                {ymk}
            </div>
        );

    }
}

export default Yemekler;