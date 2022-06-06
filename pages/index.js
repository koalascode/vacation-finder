import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { parseNextUrl } from 'next/dist/shared/lib/router/utils/parse-next-url'
import Iceland from "./iceland"

export default function Home() {

  const [panel, setPanel] = useState();
  const [optOne, setOptOne] = useState();
  const [optTwo, setOptTwo] = useState();
  const [optThree, setOptThree] = useState();
  const [optFour, setOptFour] = useState();
  const [optFive, setOptFive] = useState();
  const [optSix, setOptSix] = useState();
  const [optSeven, setOptSeven] = useState();
  const [optEight, setOptEight] = useState();
  const [travelTime, setTravelTime] = useState()
  const [submitStatus, setSubmitStatus] = useState()

  const toggleContinue = () => {
    changePanel()
  }

  const totalPages = 8; //Change this to the total pages once finished

  const changePanel = () => {
    if (panel === undefined) {
      setPanel(1)
    } else if (panel < totalPages) {
      setPanel(panel + 1)
    }
  }

  const decreasePanel = () => {
    if (panel > 0 && panel !== undefined) {
      setPanel(panel - 1)
    }
  }
 
    if (typeof window !== "undefined") {
      if (panel <= 0) {
        document.getElementById("intro").style.display = "flex";
        document.getElementById("1").style.display = "none"; 
      }
      
      if (panel === 1) {
        document.getElementById("intro").style.display = "none";
        document.getElementById("1").style.display = "flex";
        document.getElementById("2").style.display = "none";
      }
      if (panel > 1 && panel < 8) {
        document.getElementById(panel).style.display = "flex"
        document.getElementById(panel - 1).style.display = "none"
        document.getElementById(panel + 1).style.display = "none";
      }
      if (panel === 8) {
        document.getElementById(panel).style.display = "flex";
        document.getElementById(panel - 1).style.display = "none"

        document.getElementById("nextpanel").style.display = "none"
        document.getElementById("showresults").style.display = "block"
      } else {
        document.getElementById("nextpanel").style.display = "block"
        document.getElementById("showresults").style.display = "none"
      }
    }

    //Find a way to show the user what they have selected and be able to update this based on changed selections.

    /*
    if (typeof window !== undefined) {
      optOne === "beach" ? document.getElementById("beachtext").style.color = "#2bb979" : null;
      optOne === "mountain" ? document.getElementById("mountaintext").style.color = "#2bb979" : null;
    }
    */

  const handleBeach = () => {
    setOptOne("beach");
    changePanel() ;
  }

  const handleMountains = () => {
    setOptOne("mountain")
    changePanel()
  }

  const handleRelax = () => {
    setOptTwo("relax")
    changePanel();
  }

  const handleAdventure = () => {
    setOptTwo("adventure")
    changePanel()
  }

  const handleCity = () => {
    setOptThree("city")
    changePanel()
  }

  const handleWildlife = () => {
    setOptThree("wildlife")
    changePanel()
  }

  const handleFoodie = () => {
    setOptFour("foodie")
    changePanel()
  }

  const handleNonFoodie = () => {
    setOptFour("nonfoodie")
    changePanel()
  }

  const handleModern = () => {
    setOptFive("modern")
    changePanel() 
  }

  const handleHistorical = () => {
    setOptFive("historical")
    changePanel()
  }

  const handleHot = () => {
    setOptSix("hot")
    changePanel() 
  }

  const handleCold = () => {
    setOptSix("cold")
    changePanel() 
  }

  const handleMuseum = () => {
    setOptSeven("museum")
    changePanel() 
  }

  const handleSight = () => {
    setOptSeven("sight")
    changePanel() 
  }

  let photoSelected = new Array();

  const handlePhotoSelection = (e) => {
    e.preventDefault()
    photoSelected = new Array (); //resets photoSelected each time used
    e.target.hawaiioption.checked ? photoSelected.push("hawaii") : null;
    e.target.croption.checked ? photoSelected.push("costa rica") : null;
    e.target.icelandoption.checked ? photoSelected.push("iceland") : null;
    e.target.cityoption.checked ? photoSelected.push("city") : null;
    document.getElementById("photosubmitbutton").style.backgroundColor = "#46b5ec"
    document.getElementById("photosubmitbutton").style.color = "white"
    console.log(photoSelected)
  }

  const handleButtonColor = () => {
    //if () put if dark mode
    document.getElementById("photosubmitbutton").style.backgroundColor = "#2B2934"
    document.getElementById("photosubmitbutton").style.color = "white"

    //if () put if light mode
  }

 

  //Fix these results
  const router = useRouter()
  const handleResults = () => {
    let initialTravelLocation = ""
    optOne === "beach" ? (optTwo === "relax" ? (optThree === "city" ? (optFour === "foodie" ? (optFive === "historical" ? (optSix === "hot" ? (optSeven === "museum" ? initialTravelLocation = "athens" : initialTravelLocation = "hawaii") : (optSeven === "museum" ? initialTravelLocation = "athens" : initialTravelLocation = "iceland")) : initialTravelLocation =  "iceland") : optSix === "hot" ? initialTravelLocation = "portugal" : initialTravelLocation = "iceland") : optSix === "hot" ? initialTravelLocation = "portugal" : initialTravelLocation = "iceland") : optSix === "hot" ? optFour === "foodie" ? initialTravelLocation = "portugal" : initialTravelLocation = "hawaii" : initialTravelLocation = "iceland") : null;
    optOne === "mountains" ? (optTwo === "relax" ? (optThree === "city" ? (optFour === "foodie" ? (optFive === "historical" ? (optSix === "hot" ? (optSeven === "museum" ? initialTravelLocation = "athens" : initialTravelLocation = "argentina") : (optSeven === "museum" ? initialTravelLocation = "switzerland or norway winter" : (optSix === "hot" ? initialTravelLocation === "argentina or athens" : initialTravelLocation = "iceland"))) : initialTravelLocation = "iceland") : optSix === "hot" ? initialTravelLocation = "switzerland or norway summer" : initialTravelLocation = "iceland") : optSix === "hot" ? initialTravelLocation = "portugal" : initialTravelLocation = "iceland") : optSix === "hot" ? optFour === "foodie" ? initialTravelLocation = "portugal" : initialTravelLocation = "hawaii" : initialTravelLocation = "iceland") : null;
    console.log(initialTravelLocation)
    console.log(photoSelected)
    let secondTravelLocation = ""
    photoSelected.includes(initialTravelLocation) ? secondTravelLocation = `${initialTravelLocation}` : secondTravelLocation = "no match"
    console.log(secondTravelLocation)
    if (typeof window !== undefined) { //I don't think that this is needed though since when you hit the button the window is there.
      //initialTravelLocation === secondTravelLocation ? document.getElementById(initialTravelLocation).style.display = "block" : null;
    }
    
  } 
  

  return (
    <div className={styles.container} id="main"> 
      <meta name="color-scheme" content="dark"/>
     <title>Vacation Finder</title>
    <link rel="icon" href="./lightmodeicon.png"/>
      <h1 className={styles.header}>Vacation Finder</h1>
      <div className={styles.introductioncontainer} id="intro">
        <div>
        <h2 className={styles.introductionheader}>Making travel decisions is very difficult, so we are here to make things easier.</h2>
        <p className={styles.introductionmain}>After getting your results for countries we have some guides, alternatives, and photos for the destination in order for you to decide where you want to go.</p>
        <button onClick={toggleContinue} className={styles.introductionbutton}>Continue...</button>
        </div>
        <Image src="/mountrainer.png" width={600} height={500} className={styles.image}/>
      </div>
      <div className={styles.cardcontainer} id="1">
        <div className={styles.card} onClick={handleBeach}>
          <Image src="/beachpictwo.jpg" className={styles.image} width={650} height={500}/>
          <h2 id="beachtext" className={styles.cardheader}>Beach</h2>
        </div>
        <div className={styles.card} onClick={handleMountains}>
          <Image src="/mountains.jpg" className={styles.image} width={650} height={500}/>
          <h2 id="mountaintext" className={styles.cardheader}>Mountains</h2>
        </div>
        <p>1<br /><b>-</b><br />{totalPages}</p>
      </div>
      <div className={styles.secondcardscontainer} id="2">
       <div className={styles.card} onClick={handleRelax}>
          <Image src="/relax.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Relax</h2>
        </div>
        <div className={styles.card} onClick={handleAdventure}>
          <Image src="/adventure.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Adventure</h2>
        </div>
        <p>2<br /><b>-</b><br />{totalPages}</p>
      </div>
      <div className={styles.secondcardscontainer} id="3">
       <div className={styles.card} onClick={handleCity}>
          <Image src="/city.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>City</h2>
        </div>
        <div className={styles.card} onClick={handleWildlife}>
          <Image src="/wildlife.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Wildlife</h2>
        </div>
        <p>3<br /><b>-</b><br />{totalPages}</p>
      </div>
      <div className={styles.secondcardscontainer} id="4">
       <div className={styles.card} onClick={handleFoodie}>
          <Image src="/food.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Foodie</h2>
        </div>
        <div className={styles.card} onClick={handleNonFoodie}>
          <Image src="/badfood.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Any Food</h2>
        </div>
        <p>4<br /><b>-</b><br />{totalPages}</p>
      </div> 
      <div className={styles.secondcardscontainer} id="5">
       <div className={styles.card} onClick={handleModern}>
          <Image src="/modern.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Modern</h2>
        </div>
        <div className={styles.card} onClick={handleHistorical}>
          <Image src="/historical.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Historical</h2>
        </div>
        <p>5<br /><b>-</b><br />{totalPages}</p>
      </div>
      <div className={styles.secondcardscontainer} id="6">
       <div className={styles.card} onClick={handleHot}>
          <Image src="/hot.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Hot</h2>
        </div>
        <div className={styles.card} onClick={handleCold}>
          <Image src="/mountains.jpg" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Cold</h2>
        </div>
        <p>6<br /><b>-</b><br />{totalPages}</p>
      </div> 
      <div className={styles.secondcardscontainer} id="7">
       <div className={styles.card} onClick={handleMuseum}>
          <Image src="/modern.png" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Museum</h2>
        </div>
        <div className={styles.card} onClick={handleSight}>
          <Image src="/washington1.jpg" className={styles.image} width={650} height={500}/>
          <h2 id="optiontext" className={styles.cardheader}>Sightseeing</h2>
        </div>
        <p>7<br /><b>-</b><br />{totalPages}</p>
      </div>
      <div className={styles.secondcardscontainer} id="8">
       <div className={styles.card}>
          <h2 id="optiontext" className={styles.cardheader}>How much time do you have to travel?</h2>
          <form>
            <input onClick={() => setTravelTime("1 week")} className={styles.traveltimeform} type="radio" name="traveltime" id="oneweek"/>
            <label for="oneweek">1 Week or Less</label>
            <br />
            <input onClick = {() => setTravelTime("1-2 week")} className={styles.traveltimeform} type="radio" name="traveltime" id="onetotwo" />
            <label for="onetotwo">1-2 Weeks</label>
            <br />
            <input onClick={() => setTravelTime("2-4 week")} className={styles.traveltimeform} type="radio" name="traveltime" id="twotofour" />
            <label for="twotofour">2-4 Week</label>
            <br />
            <input onClick={() => setTravelTime("4+ week")} className={styles.traveltimeform} type="radio" name="traveltime" id="overfour"/>
            <label for="overfour">4+ Week</label>
            <br />
          </form>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardheader}>Do any of these places stand out to you?</h2>
          <p className={styles.cardinstruction}>Select any that stand out</p>
          <form className={styles.photoformcontainer} onChange={handleButtonColor} onSubmit={handlePhotoSelection}>
            <input className={styles.checkboxnone} type="checkbox" id="hawaiioption"/>
            <label className={styles.label} for="hawaiioption"><Image src="/hawaiiphoto.jpg" width={300} height={200} className={styles.formimage}/></label>
            <input className={styles.checkboxnone} type="checkbox" id="croption"/>
            <label className={styles.label} for="croption"><Image src="/costaricaphoto.jpg" width={240} height={300} className={styles.formimage}/></label>
            <input className={styles.checkboxnone} type="checkbox" id="cityoption"/>
            <label className={styles.label} for="cityoption"><Image src="/madrid2.png" width={240} height={300} className={styles.formimage}/></label>
            <input className={styles.checkboxnone} type="checkbox" id="icelandoption"/>
            <label className={styles.label} for="icelandoption"><Image src="/iceland5.jpg" width={300} height={200} className={styles.formimage}/></label>
            <br />
            <input type="submit" value="Enter" className={styles.submitbutton} id="photosubmitbutton"/>
          </form>
        </div>
        <p>8<br /><b>-</b><br />{totalPages}</p>
       
      </div> 
      {submitStatus === "submitted" ? 
      <div id="results">
        <div id="iceland">
        <Iceland travelingTimes={travelTime}/>
        </div> 
        
      </div>
      : null}
      
      <div className={styles.navigationcontainer} id="navigation">
        <button onClick={decreasePanel} className={styles.navigationbutton}>⬅️ Last Page</button>
        <button id="nextpanel" onClick={changePanel} className={styles.navigationbutton}>Next Page ➡️</button>
        <button id="showresults" className={styles.showresultsbutton} onClick={handleResults} >Show Results ✈️</button>  
      </div>
      
    </div>
    
  )
}