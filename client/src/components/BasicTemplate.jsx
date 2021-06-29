import '../App.css'
import React, { useContext } from 'react'
import { RootContext } from '../store/GlobalState'

// Style Properties of Timer Template
const style = {
    boldAndClear: {
        backgroundColor: '#000000',
        color: '#DAA520',
    },
    shadesOfGrey: {
        backgroundColor: '#4c4c4c',
        color: '#ffffff',
    },
    brightAndElegant: {
        backgroundColor: '#f2f2f2',
        color: '#000000',
    },
    itsEasy: {
        backgroundColor: '#ffffff',
        color: '#ff4949',
    },
    harvestGold: {
        backgroundColor: '#fff0a5',
        color: '#964B00',
    },
    goodMood: {
        backgroundColor: '#a5fff3',
        color: '#008000',
    },
    trustMe: {
        backgroundColor: '#0687ff',
        color: '#ffffff',
    },
    fairyTale: {
        backgroundColor: '#f7bfa6',
        color: '#612204',
    },
    importantThings: {
        backgroundColor: '#f33016',
        color: '#f7e75f',
    }

}

const BasicTemplate = () => {
    const { selectTemplate } = useContext(RootContext)

    function scrollToPreview(styleName) {

        // setVal(true)
        selectTemplate(style[styleName])
        // setPredefinedStyle(style[styleName])

    }
    return (
        <div className="mt12 maxFormHeight">
            <h3>Basic Template</h3>
            <ul className="buttonList overFlow">
                <li className="listItem boldAndClear" onClick={() => scrollToPreview('boldAndClear')} style={style.boldAndClear}>Bold and Clear</li>
                <li className="listItem shadesOfGrey" onClick={() => scrollToPreview('shadesOfGrey')} style={style.shadesOfGrey}>Shades of Grey</li>
                <li className="listItem brightAndElegant" onClick={() => scrollToPreview('brightAndElegant')} style={style.brightAndElegant}>Bright and Elegant</li>
                <li className="listItem itsEasy" onClick={() => scrollToPreview('itsEasy')} style={style.itsEasy}>It's Easy</li>
                <li className="listItem harvestGold" onClick={() => scrollToPreview('harvestGold')} style={style.harvestGold}>Harvest Gold</li>
                <li className="listItem goodMood" onClick={() => scrollToPreview('goodMood')} style={style.goodMood}>Good Mood</li>
                <li className="listItem trustMe" onClick={() => scrollToPreview('trustMe')} style={style.trustMe}>Trust Me</li>
                <li className="listItem fairyTale" onClick={() => scrollToPreview('fairyTale')} style={style.fairyTale}>Fairy Tale</li>
                <li className="listItem importantThings" onClick={() => scrollToPreview('importantThings')} style={style.importantThings}>Important Things</li>
            </ul>
        </div>
    )
}

export default BasicTemplate