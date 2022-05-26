import React, {Component} from "react";
import { Button } from 'reactstrap';
import "./post-status-filter.css"

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const {onFilterSelect, filter} = this.props
            const active = filter === name
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            // console.log(this.props.filter);
            console.log(filter)

            return (
                <Button outline
                        type = "button"
                        key={name}
                        className={`btn ${clazz}`}
                        onClick = {() => onFilterSelect(name)}
                        >{label}
                </Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
        
    }

}

