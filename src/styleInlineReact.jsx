import { useState } from 'react'
import myPhoto from './assets/selfImage.jpg'

export default function InlineStyle() {

    // const profileStyle = {
    //     margin: "10px",
    //     marginBottom: '20px',
    //     padding: "2px",
    //     border: "2px solid #00000026",
    //     boxShadow: "2px 3px 1px 0 #14121252",
    // }

    const [profileStyle, setProfileStyle] = useState({
        width: '165px',
        margin: "10px",
        marginBottom: '20px',
        padding: "2px",
        border: "2px solid #00000026",
        boxShadow: "2px 3px 1px 0 #14121252",
    });
    let [colr, setColr] = useState('black');

    function manageStyle(bgColor, colr) {
        setProfileStyle({...profileStyle, backgroundColor:bgColor});
        setColr(colr);
    }

    let [disply, setDisplay] = useState(true);

    const dataWithHtml = [
        (
            <div>
                <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
                <div style={{margin:'7px', color: colr}}>
                    <p> <b>Name: </b> Gautam Kumar </p>
                    <p style={{margin:'8px'}}> Software Engineer </p>
                </div>
            </div>
        ),
        (
            <div>
                <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
                <div style={{margin:'7px', color: colr}}>
                    <p> <b>Name: </b> Gautam Kumar </p>
                    <p style={{margin:'8px'}}> Software Engineer </p>
                </div>
            </div>
        )
    ];

    const dataOnly = [
        {
            name: 'Gautam Kumar',
            role: 'Software Engineer',
            myPhoto: myPhoto
        },
        {
            name: 'Gautam Kumar',
            role: 'Software Engineer',
            myPhoto: myPhoto
        },
        {
            name: 'Gautam Kumar',
            role: 'Software Engineer',
            myPhoto: myPhoto
        }
    ];

    return <>
        <h1> Inline styling in React </h1>
        <button style={{marginLeft:'15px', marginRight:'20px'}} onClick={() => manageStyle('#80808045', 'red')}> Change Style </button>
        <button style={{marginRight:'20px'}} onClick={() => manageStyle('white', 'black')}> Set default style </button>
        <button style={{marginBottom:'10px'}} onClick={() => setDisplay(!disply)}> Toggle Display </button>

      <div style={{display: disply?'flex':'block', flexWrap:'wrap'}}>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
        <div style={profileStyle}>
            <img src={myPhoto} alt="My Image" style={{width:'165px'}}/>
            <div style={{margin:'7px', color: colr}}>
                <p> <b>Name: </b> Gautam Kumar </p>
                <p style={{margin:'8px'}}> Software Engineer </p>
            </div>
        </div>
      </div>

    <br/><hr/>
    <h2> Coming data from array ! <i> Here Array stores data with html tags </i> </h2>
    <div style={{margin:"16px"}}>
    {
        dataWithHtml.map((el, index) => (
            <div key={index} style={profileStyle}> {el} </div>
        ))
    }
    </div>

    <br/><hr/>
    <h2> Coming data from array ! <i> Here Array stores data only </i> </h2>
    <div>
        {
            dataOnly.map((el, index) => (
                <div key={index} style={profileStyle}>
                    <img src={el.myPhoto} alt="My Image" style={{width:'165px'}}/>
                    <div style={{margin:'7px', color: colr}}>
                        <p><b>Name: </b>{el.name}</p>
                        <p style={{margin:'8px'}}>{el.role}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </>
}