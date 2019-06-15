/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\ProductList\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import {IconButton, CircularProgress, Grid, Typography} from '@material-ui/core';
import {ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon} from '@material-ui/icons';
import {DefaultLayout} from 'components/demo_05/layouts';
import ProductsToolbar from './components/ProductsToolbar';
import ProductCard from './components/ProductCard';
import {getProducts} from 'components/demo_05/services/product';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 3
        }, 
        content: {
            marginTop: theme.spacing.unit * 2
        }, 
        progressWrapper: {
            paddingTop: '48px', 
            paddingBottom: '24px', 
            display: 'flex', 
            justifyContent: 'center'
        }, 
        pagination: {
            marginTop: '24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end'
        }
    });

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: false, 
        limit: 6, 
        products: [], 
        productsTotal: 0, 
        error: null
    };
    signal = true;
    async getProducts(limit) {
        try {
            this.setState({
                isLoading: true
            });
            const {
                products, 
                productsTotal
            } = await getProducts(limit);
            if (this.signal) {
                this.setState({
                    isLoading: false, 
                    products, 
                    productsTotal, 
                    limit
                });
            }
        } 
        catch (error) {
            if (this.signal) {
                this.setState({
                    isLoading: false, 
                    error
                });
            }
        } 
    }
    componentWillMount() {
        this.signal = true;
        const {
            limit
        } = this.state;
        this.getProducts(limit);
    }
    componentWillUnmount() {
        this.signal = false;
    }
    renderProducts() {
        const {
            classes
        } = this.props;
        const {
            isLoading, 
            products
        } = this.state;
        if (isLoading) {
            return  (
                    <div className={classes.progressWrapper}>
                        <CircularProgress>
                        </CircularProgress>
                    
                    </div>
                )
            ;
        }
        if (products.length === 0) {
            return  (
                    <Typography variant="h6">
                    There are no products available</Typography>
                )
            ;
        }
        return  (
                <Grid container spacing={3}>
                {
                    products.map((product) =>  (
                            <Grid item key={product.id} lg={4} md={6} xs={12}>
                                <Link to="#">
                                    <ProductCard product={product}>
                                    </ProductCard>
                                
                                </Link>
                            
                            </Grid>
                        )
                    )
                }</Grid>
            )
        ;
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Products">
                    <div className={classes.root}>
                        <ProductsToolbar>
                        </ProductsToolbar>
                    
                        <div className={classes.content}>
                        {
                            this.renderProducts()
                        }</div>
                    
                        <div className={classes.pagination}>
                            <Typography variant="caption">
                            1-6 of 20</Typography>
                        
                            <IconButton>
                                <ChevronLeftIcon>
                                </ChevronLeftIcon>
                            
                            </IconButton>
                        
                            <IconButton>
                                <ChevronRightIcon>
                                </ChevronRightIcon>
                            
                            </IconButton>
                        
                        </div>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
ProductList = compose(withStyles(styles))(ProductList)
;
export default ProductList;
