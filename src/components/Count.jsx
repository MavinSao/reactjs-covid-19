import React, { Component } from 'react'
import {Card} from 'react-bootstrap';

export default class Count extends Component {
    render() {
        return (
            <div className="my-3">
                <Card border="light">
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Title style={{fontSize:"2em"}}>{this.props.total} {this.props.total > 1? 'people':'person'}</Card.Title>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
