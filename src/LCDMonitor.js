import React, { useEffect, useState } from 'react';
import './LCDMonitor.css';
import moment from 'moment';
import 'moment/locale/ko';
import ZERO5_LOGO from './images/ZERO5_LOGO.jpg';
import { mdiLedOn as uvLamp } from '@mdi/js'; // UV 살균 램프 svg파일
import { mdiBarcodeScan as barcodeScanner } from '@mdi/js'; // 바코드 스캐너 아이콘
import { mdiSignalCellular3 as signalGood } from '@mdi/js'; // 통신감도
import Icon from '@mdi/react';

const LCDMonitor = () => {
    const [nowTime, setNowTime] = useState('0000-00-00 00:00:00');
    const [uvSwitchColor, setUvSwitchColor] = useState('grey');
    const [toggleSW, setToggleSW] = useState(false);
    const [text, setText] = useState('OFF');
    //current Time
    useEffect(() => {
        setNowTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, []);

    const switchUV = () => {
        // console.log('눌림!');
        let color;
        let str;
        if (toggleSW) {
            color = 'white';
            str = 'ON';
        } else {
            color = 'grey';
            str = 'OFF';
        }
        setUvSwitchColor(color);
        setText(str);
        setToggleSW(!toggleSW);
    };

    return (
        <div className="container">
            <div className="topBar">
                <span>Model S/M : cart003</span>
                <span>{nowTime}</span>
                <span>배터리 상태: 76%</span>
            </div>
            <div className="middleScreen">
                <div className="menuScreen">
                    <div
                        style={{
                            flexGrow: '1',
                            // margin: 'auto',
                            padding: '4%',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#1e272e',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            // height: '100%',
                        }}
                    >
                        <p>
                            <Icon path={barcodeScanner} size={'13vw'} color="white" />
                        </p>
                        바코드 스캔하기
                    </div>
                    <div
                        style={{
                            flexGrow: '2',
                            // margin: 'auto',
                            padding: '4%',
                            display: 'flex',
                            flexDirection: 'column',
                            // backgroundColor: uvSwitchColor,
                            backgroundColor: '#1e272e',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            // height: '100%',
                        }}
                        onClick={switchUV}
                    >
                        {/* <button style={{ border: 'none', color: 'transparent', backgroundColor: uvSwitchColor }} onClick={() => switchUV}> */}
                        <p>
                            <Icon path={uvLamp} size={'13vw'} color={uvSwitchColor} />
                        </p>
                        UV 살균 기능 켜기 {text} 상태
                        {/* </button> */}
                    </div>
                    <div
                        style={{
                            flexGrow: '1',
                            // margin: 'auto',
                            padding: '4%',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#1e272e',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            // height: '100%',
                        }}
                    >
                        <p>
                            <Icon path={signalGood} size={'13vw'} color="#44bd32" />
                        </p>
                        현재 통신 상태
                    </div>
                </div>
                <div className="logoScreen">
                    {/* <span> */}
                    <img src={ZERO5_LOGO} className="logoImg" alt="logo" />
                    {/* </span> */}
                </div>
            </div>
            <div className="footerScreen">
                <span>ver 0.0.1</span>
                <span>dev screen</span>
                <span>copyrightⓒ 2021 All rights reserved by Zero5</span>
            </div>
        </div>
    );
};

export default LCDMonitor;
