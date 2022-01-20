import React, {Component} from "react";

class Counter extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div>
                        <span style = {{fontSize: 20}}>
                        </span>
                    </div>
                    <div>
                        <button className="btn btn-secondary"
                            // onClick={() => }
                            >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-info m-2"
                            // onClick={() => }
                            // disabled={}
                            >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                            // onClick={() => }
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Counter;