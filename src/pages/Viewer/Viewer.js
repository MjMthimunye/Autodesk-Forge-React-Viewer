import React, { Component } from 'react';
import launchViewer from './ViewerFunctions';

class Viewer extends Component {

    componentDidMount(){
        
        var documentId = 'urn:*your file urn';
        launchViewer('viewerDiv', documentId);
    }
    
    render() {
        return (
            <div style={{position: "absolute", width: "100%", height: "85%"}} id="viewerDiv"/>
        );
    }
}

export default Viewer;