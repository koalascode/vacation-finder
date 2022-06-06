import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PlaceTemplate.module.css'
import { UserData } from '.'
import { useState } from 'react'

export default function Iceland(props) {
    const [count, setCount] = useState(1)
    const stringcount = JSON.stringify(count)
    
    const lastPhoto = 15;

    const prevPhoto = () => {
        count > 1 ? setCount(count - 1) : null
    }

    const nextPhoto = () => {
        count < lastPhoto ? setCount(count + 1) : null
    }

    //console.log(props?.travelingTimes)

    return (
        <div className={styles.container}>
        <title>Iceland | Vacation Finder</title>
        <link rel="icon" href="./lightmodeicon.png"/>
            <div className={styles.sectiononeflex}>
                <div>
                    <h1 className={styles.sectiononeheader}>Iceland</h1>
                    <p className={styles.sectiononemain}>The island in the North Atlantic has become a global travel hub due to its incredible landscapes, beautiful glaciers, spectacular geiser pools, and of course, an active volcano. There are so many places to go and things to see in Iceland, so look below for a guide for the top visits in Iceland.</p>
                </div>
                <Image src="/iceland4.jpg" width={740} height={460} className={styles.image}/>
            </div>
            <div className={styles.sectiontwo}>
                <div>
                    <h1 className={styles.sectiontwoheader}>Alternative Options</h1>
                </div>
                <div className={styles.card}>
                    <Image src="/washington.jpg" width={350} height={570} className={styles.image}/>
                    <h2 className={styles.cardtext}>Substiture</h2>
                </div>
                <div className={styles.card}>
                    <Image src="/northeast.jpg" width={350} height={570} className={styles.image}/>
                    <h2 className={styles.cardtext}>With</h2>
                </div>
                <div className={styles.card}>
                    <Image src="/crphoto2.jpg" width={350} height={570} className={styles.image}/>
                    <h2 className={styles.cardtext}>Variables (words and photos)</h2>
                </div>
            </div>
            <div>
                <h1 className={styles.guideheader}>Travel Guide</h1>
                <p className={styles.guidep}>For a trip of {props?.travelingTimes}</p>
                <div className={styles.sectionthreeflexcontainer}>
                    <Image src="/iceland5.jpg" width={600} height={400} className={styles.image}/>
                    <div>
                        <h1 className={styles.individualdayheader}>Day One</h1>
                        <p className={styles.individualdayactivities}>This is where the plan for the first day of Iceland should go. Make different custom plans depending on the amount of days that the person has, that should be passed in like a child prop.</p>
                    </div>
                </div>
                <div className={styles.sectionthreeflexcontainer}>
                    <div>
                        <h1 className={styles.individualdayheader}>Day Two</h1>
                        <p className={styles.individualdayactivities}>This is where the plan for the first day of Iceland should go. Make different custom plans depending on the amount of days that the person has, that should be passed in like a child prop.</p>
                    </div>
                    <Image src="/iceland9.jpg" width={600} height={400} className={styles.image}/>
                </div>
                <div className={styles.sectionthreeflexcontainer}>
                <Image src="/iceland7.jpg" width={600} height={400} className={styles.image}/>
                    <div>
                        <h1 className={styles.individualdayheader}>Day Three</h1>
                        <p className={styles.individualdayactivities}>This is where the plan for the first day of Iceland should go. Make different custom plans depending on the amount of days that the person has, that should be passed in like a child prop.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div>
                <h1 className={styles.photogalleryheader}>Photo Gallery</h1>
                <div className={styles.photocontainer}>
                    <button className={styles.photochangebutton} id="right" onClick={prevPhoto}><h1 className={styles.buttontext}>←</h1></button>
                    <img src={"/iceland" + stringcount + ".jpg"} className={styles.imagecontainer}/>
                    <button className={styles.photochangebutton} id="left" onClick={nextPhoto}><h1 className={styles.buttontext}>→</h1></button>
                </div>
                
            </div>
        </div>
    )
}