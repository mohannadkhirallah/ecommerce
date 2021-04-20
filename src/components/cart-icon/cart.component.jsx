import React from 'react';
import './cart.style.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden,itemCount}) => 
(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps =createStructuredSelector ({
    itemCount :selectCartItemCount
})
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);

