import React, { Component } from 'react'
import styles from './WebSiteNaivgation.module.css';
import { fillList } from '../configFiles/config';


class WebSiteNavigation extends Component 
{
    state = {
        list: [],
    }

    componentDidMount ()
    {
        const { match: { params } } = this.props;
        console.log("params", params);

        this.refreshList();
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

    async refreshList ()
    {
        const list = await fillList();
        this.setState({ list: list });
    }
}

export default WebSiteNavigation;