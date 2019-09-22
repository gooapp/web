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

    componentWillMount() 
    {
        const name = this.props.match.params.name ? this.props.match.params.name + "导航" : "导航";
        document.title = name;

    }

    componentDidMount()
    {
        let list = [...webSiteList];

        this.setState({ list: list });
    }

    render()
    {
        const { list } = this.state;

        return (
            <div className={styles.container}>
                {
                    list.map((cate, index) =>
                    {
                        const items = cate.items;

                        return (
                            <div
                                className={styles.cateContainer}
                                key={cate.title}
                            >
                                <div className={styles.cateHeader}>
                                    {cate.title}
                                </div>
                                <div className={styles.cateItemContainer}>
                                    {
                                        items.map((item, itemIndex) =>
                                        {
                                            return (
                                                <div
                                                    className={styles.item}
                                                    key={item.title}
                                                    onClick={() =>
                                                    {
                                                        window.open(item.url, "_self");
                                                    }}
                                                >
                                                    {item.title}
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