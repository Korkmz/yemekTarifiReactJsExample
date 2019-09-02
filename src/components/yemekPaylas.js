import React, {Component} from 'react';

class YemekPaylas extends Component {
    paylas  =(e)=>{
        e.preventDefault();
        let ymkAdi=document.getElementById("exampleInputAdi").value;
        let ymkTarifi=document.getElementById("exampleInputTarif").value;
        if (ymkAdi==='' || ymkTarifi===''){

        } else{

        this.props.paylas(ymkAdi,ymkTarifi);
        }
    };
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title cds">YEMEK PAYLASIMI YAP </h5>
                    </div>
                    <div className="card-body">

                        <form onSubmit={this.paylas.bind(this)}>
                            <div className="form-group">
                                <label >Yemeğin Adı</label>
                                <input type="email" className="form-control" id="exampleInputAdi"
                                       aria-describedby="emailHelp"
                                       placeholder="Yemeğin Adı"/>
                            </div>
                            <div className="form-group">
                                <label >Tarifiniz</label>
                                <textarea className="form-control" id="exampleInputTarif" rows="3"
                                          placeholder="Tarifiniz"></textarea>
                            </div>

                            <button type="submit" onClick={this.paylas.bind(this)} className="btn btn-block btnel">PAYLAŞ</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default YemekPaylas;