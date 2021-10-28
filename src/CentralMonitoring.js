import logo from './logo.svg';
import './App.css';
import YellowLight from './images/YellowLight.png';
import GreenLight from './images/GreenLight.png';
import RedLight from './images/RedLight.png';
import React, { useState, useEffect } from 'react';
// import

//카트 연결상태
const colors = {
    green: GreenLight,
    yellow: YellowLight,
    red: RedLight,
};

const CentralMonitoring = () => {
    const [changeLight, setChangeLight] = useState(false);

    useEffect(() => {
        if (changeLight) {
            alert('cart005 모델이 현재 매장을 벗어났습니다. 최종위치 : 3F-주차장');
        }
    }, [changeLight]);
    // 카트들 목록 map으로 띄워주기 위한 더미데이터
    const carts = [
        {
            name: 'cart001',
            status: colors.green,
            floor: '1F',
            detail: '화장품 매장',
        },
        {
            name: 'cart002',
            status: colors.green,
            floor: '1F',
            detail: '화장품 매장',
        },
        {
            name: 'cart003',
            status: colors.yellow,
            floor: '2F',
            detail: '전자제품 매장',
        },
        {
            name: 'cart004',
            status: colors.green,
            floor: '1F',
            detail: '푸드코트',
        },
        {
            name: 'cart005',
            status: changeLight ? colors.red : colors.green,
            floor: '3F',
            detail: '주차장',
        },
        {
            name: 'cart006',
            status: colors.green,
            floor: '4F',
            detail: '식품매장 인근',
        },
    ];

    //화면 하단을 누르면 작동되는 히든 버튼
    //5번 카트를 빨간불로 만들어준다.

    const btnPressed = (event) => {
        // console.log(event);
        !changeLight
            ? setTimeout(() => {
                  setChangeLight(!changeLight);
              }, 2000)
            : setChangeLight(!changeLight);
        // setChangeLight(!changeLight);
    };

    return (
        <div style={{ height: '2000px' }}>
            <div className="container">
                <h1>SSAC 중앙 모니터링</h1>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '2%',
                        backgroundColor: '#1e272e',
                        borderRadius: '20px',
                    }}
                >
                    <div style={{ fontWeight: '600', fontSize: '4vw', margin: ' 2% 5%' }}>현재 매장 내 쇼핑카트 현황</div>
                    <div
                        style={{
                            margin: '2% 4%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            fontWeight: '500',
                            fontSize: '3vw',
                        }}
                    >
                        <span>모델명</span>
                        <span>상태</span>
                        <span>최종 위치</span>
                    </div>
                    {carts.map((m) => {
                        return (
                            <div
                                style={{
                                    margin: '1% 7%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    fontWeight: '300',
                                    fontSize: '2.7vw',
                                    // flexWrap: 'nowrap',
                                }}
                            >
                                <span>{m.name}</span>
                                <span>
                                    <img src={m.status} alt="stat" className="trafficIcon" />
                                </span>
                                <span>
                                    {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
                                    <span>{m.floor}</span>
                                    {/* <span style={{ fontSize: '2vw' }}>{m.detail}</span> */}
                                    {/* </div> */}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button
                style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    height: '150px',
                    color: 'transparent',
                    // textDecoration: 'none',
                    border: 'none',
                }}
                onClick={btnPressed}
            >
                kk
            </button>
        </div>
    );
};

export default CentralMonitoring;
