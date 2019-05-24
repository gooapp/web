import React, { Component } from 'react'
import styles from './WebSiteNaivgation.module.css';
import { decryptAES, encrypAES } from '../Vendor';
import webSiteList from '../Config/webSiteListConfig.json';
import appConfig from '../Config/appConfig.json';


class WebSiteNavigation extends Component 
{
    state = {
        list: [],
    }

    componentWillMount () 
    {
        document.title = "小乌龟导航";

    }

    componentDidMount ()
    {
        const { match: { params } } = this.props;
        let info = params.info;
        const rbv = appConfig.rbv;

        let buildVersion = -1;

        if (info)
        {
            try
            {
                const json = decryptAES(info);
                const infoObj = JSON.parse(json);
                buildVersion = parseInt(infoObj.buildVersion, 10);
            }
            catch (error)
            {
                console.log("WebSiteNavigation decryptAES Error:", error);
            }
        }

        console.log("buildVersion=", buildVersion);

        let list = [...webSiteList];

        if (buildVersion > rbv || buildVersion <= 0)
        {
            list.pop();
        }

        this.setState({ list: list });
    }

    render ()
    {
        const { list } = this.state;

        return (
            <div className={ styles.container }>
                {
                    list.map((cate, index) =>
                    {
                        const items = cate.items;

                        return (
                            <div
                                className={ styles.cateContainer }
                                key={ cate.title }
                            >
                                <div className={ styles.cateHeader }>
                                    { cate.title }
                                </div>
                                <div className={ styles.cateItemContainer }>
                                    {
                                        items.map((item, itemIndex) =>
                                        {
                                            return (
                                                <div
                                                    className={ styles.item }
                                                    key={ item.title }
                                                    onClick={ () =>
                                                    {
                                                        window.open(item.url, "_self");
                                                    } }
                                                >
                                                    { item.title }
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }

            </div>


        );
    }

}

export default WebSiteNavigation;