import React, {Component, } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize ("UA-152878124-1");
const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set ({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const HDC = class extends Component {
        componentDidmount() {
            const page = this.props.location.pathname + this.props.loacation.search;
            trackPage(page);
        }
        componentDidUpdate(prevProps) {
            const currentPage = 
            prevProps.location.pathname + prevProps.location.search;
            const nextPage = 
            this.props.location.pathname + this.props.location.search;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render(){
            return <WrappedComponent {...this.props} />;
        }
    };

    return HDC;
};

export default withTracker;