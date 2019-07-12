import React , {Component} from 'react';
import {Card} from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails';
import {Media} from "react-bootstrap";
import PromoCodeDiscount from "./components/PromoCode/PromoCode";
import {connect} from "react-redux";
import {handleChange} from "./actions/promoCodeActions";



import './App.css';



class App extends Component{

    constructor(props){
        super(props);



        this.state ={
            total: 1000,
            PickupSavings: -3.85,
            taxes: 0,
            estimatedTotal:0,
            disablePromoButton: false


        }
    }

componentDidMount=()=> {
       this.setState({
           taxes: (this.state.total + this.state.PickupSavings)*0.0875

    },
           function(){
           this.setState({
                       estimatedTotal: this.state.total +this.state.PickupSavings+ this.state.taxes
               }
           );
           }
    );

}

giveDiscountHandler = ()=> {
        if(this.props.promoCode === 'DISCOUNT')
            this.setState(
                {
                    estimatedTotal: (this.state.estimatedTotal * 0.9)
                },
                function(){
                    this.setState(
                        {
                            disablePromoButton: true
                        }
                    )
                }
            )
}


    render(){
    return (
      <div className = "container">
          < Card className= "purchase-card">
              <div>
                  <Media>
                      <img
                        width={20}
                        height={20}
                        align={"middle"}
                        hspace={145}
                        src={"data:image/png;base64,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"}
                      />
                  </Media>
              </div>
              <SubTotal price={this.state.total.toFixed(2)}/>
              <PickupSavings price={this.state.PickupSavings}/>
              <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
            <hr/>
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
            <ItemDetails price ={this.state.estimatedTotal.toFixed(2)}/>
            <hr/>
            <PromoCodeDiscount
                giveDiscount={() => this.giveDiscountHandler()}
                isDisabled={this.state.disablePromoButton}


            />
          </Card>
      </div>
    )
  }
}
const mapStateToProps = state=>({
        promoCode: state.promoCode.value
    }
);
export default connect(mapStateToProps,{ handleChange})(App);