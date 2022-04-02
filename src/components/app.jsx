import React, {Component} from 'react';
import Headers from "./common/headers2";
import Footers from "./common/footers";

//For Others route calling this layout
class Layout extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount')
      }
    
    render() {
        return (
            <>
                <Headers/>
                {this.props.children}
                <Footers/>
            </>
        );
    }
}

export default Layout;
