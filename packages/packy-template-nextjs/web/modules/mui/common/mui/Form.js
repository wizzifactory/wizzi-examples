/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Form.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import InfoDialog from './InfoDialog';
const styles = theme => (
    {});

class Form extends React.Component {
    state = {
        meta: null, 
        values: {}, 
        controls: [], 
        infoOpen: false, 
        infoUrl: '', 
        infoTitle: ''
    };
    setControlsAndValues = (meta) => {
        const values = {};
        const controls = meta.controls ? meta.controls.map((c, i) => {
                const { id, type, data, info, value } = c;
                values[id] = value;
                // log 'createControl', id, type, value
                return  (
                        <Control id={id} key={id} type={type} value={value} data={data} info={info} onChangeValue={this.handleChangeValue} onInfoRequest={this.handleInfoRequest}>
                        </Control>
                    )
                ;
            }) : [];
        this.setState({
            meta: meta, 
            values: values, 
            controls: controls
        });
    }
    componentDidMount() {
        const {
            meta
        } = this.props;
        this.setControlsAndValues(meta);
    }
    componentWillReceiveProps(nextProps) {
        // log '--- cssbuilder.Form.will-receive-props-1'
        // if nextProps.meta !== this.state.meta
        // log '--- cssbuilder.Form.will-receive-props-2.id,meta', nextProps.meta
        this.setControlsAndValues(nextProps.meta);
    }
    handleInfoRequest = (title, url) => {
        // log 'handleInfoRequest', title, url
        this.setState({
            infoOpen: true, 
            infoUrl: url, 
            infoTitle: title
        });
    }
    handleInfoClose = () => {
        this.setState({
            infoOpen: false
        });
    }
    handleChangeValue = (controlId, value, origValue) => {
        // log 'Form.handleChange', controlId, value
        this.setState({
            values: {
                ...this.state.values, 
                [controlId]: value
            }
        }, (err, notUsed) => {
            if (err) {
                return callback(err);
            }
            const { id, onChangeValues } = this.props;
            const { values } = this.state;
            if (onChangeValues) {
                onChangeValues(id, values);
            }
        });
    }
    render() {
        const {
            caption
        } = this.props;
        const { controls, infoOpen, infoUrl, infoTitle } = this.state;
        return  (
                <div>
                    <div className="form-vertical">
                    {
                        caption &&  (
                            <h3>
                            {caption}
                            </h3>
                        )
                        
                    }{controls}</div>
                
                    <InfoDialog open={ infoOpen } url={ infoUrl } title={ infoTitle } onClose={ this.handleInfoClose }>
                    </InfoDialog>
                
                </div>
            )
        ;
    }
}

export default Form
