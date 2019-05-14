import React, { Component } from 'react'
import icon from '../imgs/icon.png';
import shot1 from '../imgs/shot1.png';
import shot2 from '../imgs/shot2.png';
import styles from './mainPage.module.css';

class MainPage extends Component 
{
    state = {

    }

    render ()
    {
        return (
            <div className={ styles.container }>

                {/* top */ }
                <div className={ styles.top }>
                    <img className={ styles.icon } src={ icon } />
                    <div className={ styles.header }>Goo浏览器</div>
                    <div className={ styles.headerIntro }>发现免费资源</div>
                </div>



                {/* mid */ }
                <div className={ styles.mid }>

                    {/* left */ }
                    <div className={ styles.left }>
                        iOS版下载
                    </div>

                    {/* right */ }
                    <div className={ styles.right }>
                        Android版下载
                    </div>

                </div>


                {/* bottom */ }
                <div className={ styles.bottom }>
                    {/* <img className={ styles.shotImage } src={ shot1 } />
                    <img className={ styles.shotImage } src={ shot2 } /> */}
                </div>


            </div>
        );
    }
}

export default MainPage;