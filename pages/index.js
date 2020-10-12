import React, { Component } from "react";
import IndexComponent from "../components/home/Index";

class Index extends Component {
    static async getInitialProps({ query }) {
        return { query }
    }

    render() {
        return (
            <IndexComponent  {...this.props} />
        );
    }
}

export default Index;