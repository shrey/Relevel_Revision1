import React, {Component} from "react";
import Counter from './counter';

class Counters extends Component{
    render(){
        const {onReset, onIncrement, onDelete, onDecrement, counters, onRestart} = this.props;
        return (
            <div>
                <div className="row">
                    <div>
                        <button
                            className="btn btn-success m-2"
                            onClick={onReset}
                            disabled={counters.length === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-refresh" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-primary m-2"
                            onClick={onRestart}
                            disabled={counters.length === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-recycle" aria-hidden="true" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Counters;