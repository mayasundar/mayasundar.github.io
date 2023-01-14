import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {createTheme} from "@mui/material";
import "../index.css";

interface LinkTabProps {
    label?: string;
    href?: string;
    value: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'

        },

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    components: {
        MuiButtonBase: {
            defaultProps: {
                disableElevation: true
            },
        },
    },
    overrides: {
        MuiTab: {
            root: {
                backgroundColor:'#F3F8FF',
                color:'#F3F8FF',
            },
            selected: {
                backgroundColor: '#0076FE',
                color: '#F3F8FF',
            }
        }
    }
});



function Tab1Content() {
    return (
        <div className="tab-content-container">
        <div className="tab-content">
            <h1> About Me ☺</h1>
            <p>I'm currently a junior at Columbia studying computer science and English.</p>
            I'm interested in <ul>
                <li>front-end development</li>
                <li>ui/ux</li>
                <li>figuring out how my favorite software products work</li>
                <li>digital humanities</li>
                <li>contemporary art & design</li>
                <li>techno-optimism</li>
            </ul>
        </div>
        </div>
    );
}

function Tab2Content() {
    return (
        <div className="tab-content-container">
        <div className="tab-content">
                {/* Layer 1 content goes here */}
                <h1> Things I Like ☺</h1>
                <ul>
                    <li>making spreadsheets</li>
                    <li>drinking lots of <a href="https://steepster.com/teas/ito-en/10605-jasmine-green-tea" target="_blank" rel="noopener noreferrer">tea</a></li>
                    <li>watching contemporary art auctions</li>
                    <li><a href="https://map.mta.info" target="_blank" rel="noopener noreferrer">well designed maps</a></li>
                    <li>hand embroidery, acrylic painting, and graphite drawing</li>
                </ul>
        </div>
        </div>
    );
}

function Tab3Content() {
    return (
        <div className="tab-content-container">
            <div className="tab-content">
                {/* Layer 1 content goes here */}
                <h1> Things I'm Involved In ☺ </h1>
                <ul>
                    <li>I'm grateful to be a student organizer for Columbia in Tech, a community of Columbia alumni working in technology!</li>
                    <li>I've interned at two MBA student-run ventures at Columbia Build Lab, an incubator housed at Columbia Business School. I'm currently the undergraduate co-president.</li>
                    <li>I've helped with research at Teachers College and CUIMC and have learned a lot about knowledge diversity and structural variant gene annotation, respectively.</li>
                </ul>
            </div>
        </div>
    );
}


function LayersPanel(props) {
    const { activeTab, setActiveTab } = props;

    function handleChange(event, value) {
        setActiveTab(value);
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <Tabs orientation="vertical" value={activeTab} onChange={handleChange} className="tabs" style={{width: '150'}}>
                    <LinkTab disableRipple="true" label="Layer 1" value="tab1" />
                    <LinkTab disableRipple="true" label="Layer 2" value="tab2" />
                    <LinkTab disableRipple="true" label="Layer 3" value="tab3" />
                </Tabs>
                {activeTab === "tab1" && <Tab1Content />}
                {activeTab === "tab2" && <Tab2Content />}
                {activeTab === "tab3" && <Tab3Content />}
            </div>
        </MuiThemeProvider>
    );
}

export default LayersPanel;
