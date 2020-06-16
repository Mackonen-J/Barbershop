import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterByValue, loadData, sortByPrice} from "./store";
import './App.css'; 
class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadData({count: 20}));
    }

    sortByInput(e){
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            this.props.dispatch(sortByPrice({direction}))
        } 
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div className="App">
                <section className='section'>
                    <div className='container'>
                        <h1 className="title"> Salong Search </h1> 
                        
                        <div className="filterPrice" style={{alignItems: "center"}}>
                            <div className="control">
                                <div className="select">
                                    <select onChange={e => {this.sortByInput(e)}}>
                                        <option value="" disabled selected>Sort by</option>
                                        <option value='price_asc'>Price - Lowest to Highest</option>
                                        <option value='price_desc'>Price - Highest to Lowest</option>
                                    </select>
                                </div>
                            </div> 
                        </div> 
                        <div className='salongs'>
                        {products && products.length && products.map((product, i) => {
                            i++
                            let index = i-1; 
                            return ( 
                                <div key={index} className={`card card-${index} tile is-parent is-3`}>
                                    <div className='cardBox tile is-child box'> 
                                        <div className="time">  
                                            {product.time}
                                        </div>
                                        <div className="cutType">  
                                            {product.type}
                                        </div>
                                        <div className="price">  
                                            {product.price}:-
                                        </div>
                                    </div> 
                                    <div className="meta"> 
                                    <span className={`rating rating-${product.rating}`}></span>
                                    <span className="appointment">
                                        {product.appointment} min
                                    </span>
                                    </div>
                                    <div className="address"> 
                                    {product.address}
                                    </div>
                                </div> 
                            )
                        })}
                        </div>
                    </div>
                </section>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);