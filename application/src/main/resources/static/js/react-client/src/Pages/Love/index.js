
import React from "react";
import style from './style.module.scss'

const LoveLanguages  =() => {
    return (
        <div className={style.lovePage}>
            <h1 className={style.header}>Love languages </h1>
            <p>There are five diffrent ways to show love to your partner: </p>
            <ul>
                <li>Words of affirmation</li>
                <li>Acts of Service</li>
                <li>Receiving gifts</li>
                <li>Quality time</li>
                <li>Physical touch</li>
            </ul>
            <p>To learn more, please click on  <a 
            href="https://www.familycentre.org/news/post/5-different-ways-to-show-love-and-improve-your-relationship">five love languages.</a></p>

        </div>
    )
}
export default LoveLanguages;