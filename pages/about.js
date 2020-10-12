import React, { Component } from "react";
import AboutComponent from "../components/about/Index";

class About extends Component {
    static async getInitialProps({ query }) {
        return { query }
    }

    render() {
        return (
            <AboutComponent  {...this.props} />
        );
    }
}

export default About;