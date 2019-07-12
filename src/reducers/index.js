import {combineReducers} from "redux/es/redux";
import promoCodeReducer from './promoCodeReducer';

export default combineReducers({

    promoCode: promoCodeReducer
    }


)