import React, {Component} from "react";

class Counter extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div>
                        <span style = {{fontSize: 20}}>
                            {}
                        </span>
                    </div>
                    <div>
                        <button className="btn btn-secondary" onClick={() => }>
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button className="btn btn-info m-2" onClick={() => }>
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}