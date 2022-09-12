const{createStore}=require('redux');
import {menuReducer} from '../reducer/menu'

export const store=createStore(menuReducer);

