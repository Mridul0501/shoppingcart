import React,{Component} from 'react';
import { Button,Collapse,Media,Card,Row,Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        const { open } = this.state;
        return(
        <div>
            <Button
                className="item-details-button"
                bsStyle="default"
                //color="red"
                onClick={() => this.setState({open: !open})}
            >
                {this.state.open === false ? 'See' : 'Hide'} item details
                {this.state.open === false ? '  +' : '  -'}

            </Button>
                <div>
                    <Card>
                        <Collapse in={this.state.open}>
                            <div>
                                <Media>

                                    <Media.Body>
                                        <p>
                                            iPhone XS Smartphone
                                        </p>
                                        <Row className="show-grid">
                                            <Col md={6}>
                                                <strong>{`$${this.props.price}`}</strong>
                                            <br/>
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                            </Col>
                                            <Col md={6}> Qty : 1
                                            </Col>
                                        </Row>


                                    </Media.Body>
                                    <img
                                        height={200}
                                        width={200}
                                        src="https://i5.walmartimages.com/asr/ce3abecd-19d8-4dae-aa8a-5571b02803cc_1.28a61d964a86914d257a1012186727c3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                                    />

                                </Media>

                            </div>
                        </Collapse>
                    </Card>
                </div>

        </div>
        );
    }
}