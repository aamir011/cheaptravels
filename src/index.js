import React                             from "react";
import ReactDOM                          from "react-dom";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

//Image LightBox
import SimpleReactLightbox               from 'simple-react-lightbox'

//Layout default import from components.
import defaultLayout                    from "./components/layouts/main";
import secondLayout                     from "./components/layouts/main-two";

//Import wrapping layout
import Layout                           from "./components/app";

//Import all page from components
import aboutUs                          from "./components/pages/about-us/AboutUs";
import destinations                     from "./components/pages/destinations/Destinations";
import countries                     from "./components/pages/destinations/countries";
import packages                         from "./components/pages/package/Packages";
import contact                          from "./components/pages/contact/Contact";
import faq                              from "./components/pages/faq/Faq";
import error                            from "./components/pages/404/404";
import airlines                            from "./components/pages/guide/AirlinesComponent";
import airlineDetails                            from "./components/pages/guide/AirlineDetails";
import gallary                          from "./components/pages/gallary/GalleryComponent";
import packageSidebar                   from "./components/pages/package/PackageSidebar";
import packageStandard                  from "./components/pages/package/PackageStanderd";
import packageDetails                   from "./components/pages/package/PackageDetails";
import blog                             from "./components/pages/blog/BlogComponent";
import blogSidebar                      from "./components/pages/blog/BlogSidebar";
import blogStandard                     from "./components/pages/blog/BlogStandard";
import blogDetails                      from "./components/pages/blog/BlogDetails";
import beatMyQuote                      from "./components/pages/beatmyquote";
import autoComplete                      from "./reactAutoComplete";
import termsConditons                      from "./components/pages/termsConditons";
import admin                      from "./components/pages/auth/admin";
import login                      from "./components/pages/auth/login";
import {store} from './redux/store';
import {Provider} from 'react-redux';

//Initializations All Css
import './index.css';
import './index.scss';

//Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};

/*
* Version : 0.1
* Event : Rendering all content to web.
* Actions: Define all routes and page.
* @return html
* */

class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <BrowserRouter basename={"/"}>
                    <Switch>
                        <Route exact path='/' component={secondLayout} />
                        <Route path={`${process.env.PUBLIC_URL}/home-page-2`} component={defaultLayout} />
                        <Layout>
                            <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                            <Route path={`${process.env.PUBLIC_URL}/destination`} component={destinations} />
                            <Route path={`${process.env.PUBLIC_URL}/destination-detail`} component={countries} />
                            <Route path={`${process.env.PUBLIC_URL}/package`} component={packages} />
                            <Route path={`${process.env.PUBLIC_URL}/business-class-flights`} component={packageSidebar} />
                            <Route path={`${process.env.PUBLIC_URL}/package-standard`} component={packageStandard} />
                            <Route path={`${process.env.PUBLIC_URL}/package-details`} component={packageDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
                            <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
                            <Route path={`${process.env.PUBLIC_URL}/airlines`} component={airlines} />
                            <Route path={`${process.env.PUBLIC_URL}/airlines-details`} component={airlineDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/gallary`} component={gallary} />
                            <Route path={`${process.env.PUBLIC_URL}/blog`} component={blog} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} component={blogSidebar} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-standard`} component={blogStandard} />
                            <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={blogDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/beat-my-quote`} component={beatMyQuote} />
                            <Route path={`${process.env.PUBLIC_URL}/terms-conditons`} component={termsConditons} />
                            <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />
                            <Route path={`${process.env.PUBLIC_URL}/admin`} component={admin} />
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={login} />
                            <Route path={`${process.env.PUBLIC_URL}/autoComplete`} component={autoComplete} />
                        </Layout>
                    </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Root />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);

