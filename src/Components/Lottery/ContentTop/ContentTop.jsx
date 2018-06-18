import React, {Component} from 'react';
import {observer} from 'mobx-react';
import emitter from '../../../Utils/events';
import {Switch, message, Button} from 'antd';
import {toJS} from 'mobx';
import {Link} from 'react-router';
import './ContentTop.scss';
import zoushi from './Img/zoushi.png';
import introduce from './Img/introduce.png';
import Fetch from '../../../Utils';
import {stateVar} from '../../../State';
import commone from './../commone.js';
import common from '../../../CommonJs/common';


let curLocation = location.href;
/*当前浏览器url地址*/
@observer
export default class ContentTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kjStopFlag: [],
            kjStopallFlag: false,
            kjStopTime: 0,
            statusClass: true,
            textAreaValue: '',
            timeShow: {hour: '00', second: '00', minute: '00', day: '00'},
            code: [],//开奖号码
            animateCode: [],//开奖动画号码
            nowIssue: '??????',//上一期前期号
            el1: {rotateZ: 0},
            ifRandom: false,
            betokObj: {},
            issueArray: [],
            booleanValue: true,
            mmcmoni: true,
            directFlag: false
        };
    }

    componentDidMount() {
        this.eventEmitter = emitter.on('kjhistory', () => {
            this.getKjHistory();
        });
        this.eventWebsocket = emitter.on('openWebsocket', (data) => {
            this.handleData(data);
        });
        this.eventcontentTop = emitter.on('initContentTop', () => {
            this.initData();
        });
    };

    componentWillUnmount() {
        this._ismount = false;
        emitter.off(this.eventEmitter);
        emitter.off(this.eventWebsocket);
        emitter.off(this.eventcontentTop);

        if (this.interval) {
            window.clearInterval(this.interval)
        }
        if (this.clearTimeout_1) {
            window.clearTimeout(this.clearTimeout_1)
        }
        if (this.clearTimeout_2) {
            window.clearTimeout(this.clearTimeout_2)
        }
        if (this.clearTimeout_3) {
            window.clearTimeout(this.clearTimeout_3)
        }
        if (this.clearTimeout_4) {
            window.clearTimeout(this.clearTimeout_4)
        }
    };

    initData() {
        clearInterval(this.interval);
        stateVar.animateCodeFlag = false;
        window.clearTimeout(this.clearTimeout_1);
        window.clearTimeout(this.clearTimeout_2);
        window.clearTimeout(this.clearTimeout_3);
        window.clearTimeout(this.clearTimeout_4);
        this.setState({
            kjStopFlag: [],
            kjStopallFlag: false,
            kjStopTime: 0,
            statusClass: true,
            textAreaValue: '',
            timeShow: {hour: '00', second: '00', minute: '00', day: '00'},
            code: [],//开奖号码
            animateCode: [],//开奖动画号码
            nowIssue: '??????',//上一期前期号
            el1: {rotateZ: 0},
            ifRandom: false,
            betokObj: {},
            issueArray: [],
            booleanValue: true,
            mmcmoni: true,
            directFlag: false
        }, () => {
            this._ismount = true;
            let tempArrCode = [];
            let tempStopFlag = [];
            for (let i = 0; i < stateVar.nowlottery.lotteryLength; i++) {
                tempArrCode.push('-');
                if (stateVar.nowlottery.lotteryBetId == 23) {
                    tempStopFlag.push(true);
                } else {
                    tempStopFlag.push(false);
                }
            }
            curLocation = curLocation.split("#")[0] + "#/tendency?id=" + stateVar.nowlottery.lotteryBetId;
            if (this._ismount) {
                this.setState({
                    code: tempArrCode,
                    kjStopFlag: tempStopFlag,
                    animateCode: tempArrCode
                }, () => {
                    if (stateVar.nowlottery.lotteryBetId != 23) {
                        stateVar.animateCodeFlag = true;
                        this.kjanimate(0);
                    }
                });
            }
            this.getlotterycode();
            this.getFutureIssue();
            this.getKjHistory();
        });
    };

    /**
     Function 开奖动画
     param 开奖持续时间
     */
    kjanimate(b) {
        if (!this._ismount || !stateVar.animateCodeFlag) {
            return;
        }
        if (this.clearTimeout_1) {
            window.clearTimeout(this.clearTimeout_1)
        }
        if (this.state.kjStopTime >= 5) {
            this.setState({mmcmoni: false});
            $(".monikj span").html('模拟开奖');
            return;
        }
        let tempCode = [];
        for (let i = 0; i < stateVar.nowlottery.lotteryLength; i++) {
            if (stateVar.nowlottery.cnname.indexOf('11选5') > -1) {
                tempCode.push(Math.floor(Math.random() * 2) + '' + Math.floor(Math.random() * 10));
            } else {
                tempCode.push(Math.floor(Math.random() * 10));
            }
        }
        this.setState({animateCode: tempCode}, () => {
            this.clearTimeout_1 = setTimeout(() => {
                if (b < 600) {
                    b = b + 50;
                    this.kjanimate(b);
                } else {
                    if (this.state.kjStopallFlag) {
                        let tempI = this.state.kjStopTime;
                        this.clearTimeout_2 = setTimeout(() => {
                            let tempArr = [];
                            for (let i = 0; i < this.state.code.length; i++) {
                                if (i <= tempI) {
                                    tempArr.push(true);
                                } else {
                                    tempArr.push(false);
                                }
                            }
                            tempI += 1;
                            console.log(tempArr)
                            this.setState({
                                kjStopFlag: tempArr,
                                kjStopTime: tempI
                            }, () => {
                                $(".kjCodeClass").eq(tempI - 1).animate({fontSize: "40px"}, 50, () => {
                                    $(".kjCodeClass").animate({fontSize: "36px"}, 200);
                                });
                            });
                        }, 50);
                        this.kjanimate(400);
                    } else {
                        // this.kjanimate(600);
                    }
                }
            }, 50);
        });

    };

    //获取未来期
    getFutureIssue() {
        //返回根据彩种类型返回彩种ID
        if (stateVar.nowlottery.lotteryBetId == 23) {
            return false;
        }
        Fetch.aboutBet({
            method: "POST",
            body: JSON.stringify({flag: 'getTodayTomorrowIssue', lotteryid: stateVar.nowlottery.lotteryBetId})
        }).then((data) => {
            if (this._ismount && data.status == 200) {
                stateVar.openLotteryFlag = true;
                let todayData = data.repsoneContent.today;
                let tomorrowData = data.repsoneContent.tomorrow;
                todayData = todayData.concat(tomorrowData);
                stateVar.tomorrowIssue = tomorrowData;
                stateVar.checkTrace = false;
                stateVar.todayAndTomorrow = todayData;
                this.props.actionTrace();
                stateVar.issueIndex = todayData[0].issue;
            }
        })
    };

    //开奖倒计时
    tick(starttime, endtime) {
        if (starttime == "" || endtime == "" || !endtime) {
            $.lt_time_leave = 0;
        } else {
            $.lt_time_leave = (commone.format(endtime).getTime() - commone.format(starttime).getTime()) / 1000;//总秒数
        }
        let hsm = commone.diff($.lt_time_leave);
        this.setState({timeShow: hsm});
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if ($.lt_time_leave > 0 && ($.lt_time_leave % 240 == 0 || $.lt_time_leave == 60)) {//每隔4分钟以及最后一分钟重新读取服务器时间
                Fetch.aboutBet({
                    method: "POST",
                    body: JSON.stringify({
                        flag: 'gettime',
                        lotteryid: stateVar.nowlottery.lotteryBetId,
                        issue: stateVar.nextIssue
                    })
                }).then((data) => {
                    if (this._ismount && data.status == 200) {
                        let tempData = data.repsoneContent || 0;
                        tempData = parseInt(tempData, 10);
                        tempData = isNaN(tempData) ? 0 : tempData;
                        tempData = tempData <= 0 ? 0 : tempData;
                        $.lt_time_leave = tempData;
                    }
                })
            }
            let tempTime = commone.diff($.lt_time_leave);
            this.setState({timeShow: tempTime});
            if ($.lt_time_leave == 60) {
                this.actionSound(60);
            }
            if ($.lt_time_leave == 0) {//结束
                this.actionSound(0);
                this.setState({
                    kjStopallFlag: false,
                    kjStopTime: 0,
                    kjStopFlag: [true, true, true, true, true]
                }, () => {
                    // this.kjanimate(700);
                });
                clearInterval(this.interval);
                message.config({
                    top: '48%',
                    // duration: 2
                });
                stateVar.betVisible = false;
                if (endtime != null) {
                    message.info('当期销售已截止，请进入下一期购买', 2, () => {
                        message.destroy();// 销毁节点
                        message.config({
                            top: '2%',
                        })
                    });
                }
                this.getlotterycode(true);
            }
            $.lt_time_leave = $.lt_time_leave - 1;
        }, 1000);
    };

    //得到最近历史开奖号码
    getKjHistory(flag) {
        if (stateVar.nowlottery.lotteryBetId == 23) {
            Fetch.aboutMmc({
                method: "POST",
                body: JSON.stringify({lotteryid: stateVar.nowlottery.lotteryBetId, issuecount: 20, flag: 'getlastcode'})
            }).then((data) => {
                if (this._ismount) {
                    stateVar.openLotteryFlag = true;
                    let tempData = data.repsoneContent;
                    if (data.status == 200) {
                        if (tempData.length > 0) {
                            stateVar.mmccode = tempData[0].split(' ');
                            stateVar.mmCkjNumberList = tempData;
                            this.setState({
                                mmcmoni: true,
                                kjStopallFlag: false,
                                kjStopTime: 0
                            }, () => {
                                this.kjanimate(700);
                            });
                            this.clearTimeout_3 = setTimeout(() => {
                                this.setState({
                                    code: stateVar.mmccode,
                                    mmcmoni: false,
                                    kjStopallFlag: true
                                });
                            }, 300);
                        } else {
                            stateVar.mmCkjNumberList = [];
                            this.setState({mmcmoni: false});
                        }
                    } else {
                        this.setState({mmcmoni: false, kjStopallFlag: true});
                    }
                }
            })
        } else {
            let tempObj = {};
            if (flag) {
                tempObj = {
                    lotteryid: stateVar.nowlottery.lotteryBetId,
                    issuecount: 20,
                    curmid: stateVar.nowlottery.cuimId,
                    cacheTrue: 2
                };
            } else {
                tempObj = {
                    lotteryid: stateVar.nowlottery.lotteryBetId,
                    issuecount: 20,
                    curmid: stateVar.nowlottery.cuimId
                };
            }
            Fetch.ksHistoery({
                method: "POST",
                body: JSON.stringify(tempObj)
            }).then((data) => {
                if (this._ismount && data.status == 200) {
                    stateVar.kjNumberList = data.repsoneContent;
                    // 刷新遗漏 冷热
                    emitter.emit('refreshMissHot');
                }
            })
        }
    };

    //获取最近一期开奖号码和期号
    getlotterycode(a) {
        if (stateVar.nowlottery.lotteryBetId == 23) {
            return false;
        }
        Fetch.aboutBet({
            method: "POST",
            body: JSON.stringify({flag: 'getlotterycode', lotteryid: stateVar.nowlottery.lotteryBetId})
        }).then((data) => {
            let tempData = data.repsoneContent;
            let tempArray = toJS(stateVar.todayAndTomorrow);
            if (this._ismount && data.status == 200) {
                if (a) {
                    while (true) {
                        if (tempArray.length == 0) {
                            break;
                        }
                        if (tempData.curissue != tempArray[0].issue) {
                            tempArray.splice(0, 1);
                        } else {
                            break;
                        }
                    }
                }
                let tempCode = [];
                if (tempData.code.length <= 5) {
                    tempCode = tempData.code.split('');
                } else {
                    tempCode = tempData.code.split(' ');
                }
                if (a) {
                    this.setState({kjStopallFlag: false});
                } else {
                    this.setState({kjStopallFlag: true});
                }
                stateVar.issueIndex = tempArray.length != 0 ? tempArray[0].issue : '??????';
                stateVar.nextIssue = tempData.curissue;
                this.setState({code: tempCode, nowIssue: tempData.issue}, () => {
                    if (a && tempArray.length != 0) {
                        stateVar.todayAndTomorrow = tempArray;
                        this.props.actionTrace();
                    } else {
                        this.getFutureIssue();
                    }
                    this.tick(tempData.datetime, tempData.cursaleend);
                });
            }
        })
    };

    //秒秒彩模拟开号
    monikj() {
        this.setState({
            mmcmoni: true,
            kjStopallFlag: false,
            kjStopTime: 0,
            kjStopFlag: [false, false, false, false, false],
        }, () => {
            stateVar.animateCodeFlag = true
            this.kjanimate(0);
        });
        $(".monikj span").html('开奖中...');
        Fetch.aboutMmc({
            method: "POST",
            body: JSON.stringify({"flag": "getcodes", "lotteryid": 23})
        }).then((data) => {
            let tempData = data.repsoneContent;
            if (this._ismount && data.status == 200) {
                this.setState({kjStopallFlag: true});
                stateVar.mmccode = tempData.split('');
                this.setState({code: stateVar.mmccode});
                this.clearTimeout_4 = setTimeout(() => {
                    this.props.getBetHistory();
                    this.getKjHistory();
                }, 2500);
            } else {
                if (this._ismount) {
                    this.setState({mmcmoni: false});
                }
            }
        })
    };

    //显示开奖号码
    showkjNumber() {
        if (stateVar.nowlottery.lotteryId == 'pk10') {
            return (
                <div className="praise_mark">
                    <div className="praise_mark_text_pk10">
                        <div>第&nbsp;<span style={{color: '#CF2027'}}>{this.state.nowIssue}</span>&nbsp;期</div>
                        <div>开奖号码</div>
                        <div>
                            <a href={curLocation} target="_blank" style={{marginRight: '5px'}}>
                                <img src={zoushi}/>
                                <span style={{marginLeft: '3px'}} className="method_introduce">走势</span>
                            </a>
                            <div>
                                <Link to='/helpInfo/playMethodIntroduce?navIndex=1'><img src={introduce}/><span
                                    style={{marginLeft: '5px'}} className="method_introduce">玩法</span></Link>
                            </div>
                        </div>
                    </div>
                    <ul className="ball_number_pk10">
                        {
                            this.state.code.map((val, idx) => {
                                return (
                                    <li key={idx}>{val}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="praise_mark">
                    <div className="praise_mark_text">
                        <span className='issueName'>第{this.state.nowIssue}期&nbsp;开奖号码</span>
                        <a href={curLocation} target="_blank" style={{marginRight: '14px'}}>
                            <img src={zoushi}/>
                            <span className="method_introduce">走势</span>
                        </a>
                        <Link to='/helpInfo/playMethodIntroduce?navIndex=1'><img src={introduce}/><span
                            className="method_introduce">玩法</span></Link>
                    </div>
                    <ul className="ball_number clear">
                        {
                            this.state.code.map((val, idx) => {
                                return (
                                    <li key={idx}>
                                        {
                                            this.state.kjStopFlag[idx] ?
                                                <span className='kjCodeClass'>{val}</span>
                                                :
                                                <span>{this.state.animateCode[idx]}</span>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    };

    // 音效开关
    onChangeSound(checked) {
        if (checked) {
            common.setStore('soundswitch', 'on');
        } else {
            common.setStore('soundswitch', 'off');
        }
    };

    //控制音效
    actionSound(param) {
        let tempHtml;
        if (param == 0) {
            tempHtml = document.getElementById('fengdansound');
        } else if (param == 60) {
            tempHtml = document.getElementById('minutesound');
        } else if (param == 'kj') {
            tempHtml = document.getElementById('kjsound');
        } else {
            return;
        }
        if (common.getStore('soundswitch') == 'off') {
            tempHtml.muted = true;
        } else {
            tempHtml.muted = false;
        }
        tempHtml.play();
    };

    handleData(data) {
        let message = eval('(' + data + ')');
        if (message.status == 1) {
            let tempType = message.data.type;
            let tempData = message.data.data;
            if (tempType == 1) {
                if (tempData) {
                    if (tempData.lotteryid == stateVar.nowlottery.lotteryBetId) {
                        this.actionSound('kj');
                        let tempCode;
                        if (tempData['number'].length <= 5) {
                            tempCode = tempData['number'].split('');
                        } else {
                            tempCode = tempData['number'].split(' ');
                        }
                        this.setState({kjStopallFlag: true, code: tempCode, nowIssue: tempData.expectedIssue});
                        this.getKjHistory(true);
                        this.props.getBetHistory();
                    }
                }
            } else if (tempType == 4 || tempType == 3) {
                if (tempData && (tempData.lotteryid == stateVar.nowlottery.lotteryBetId)) {
                    this.props.getBetHistory();
                }
            } else if (tempType == 8 || tempType == 2) {
                setTimeout(() => {
                    this.props.getVersion();
                }, 3000)
                this.getAccGroup();
            }
        }
    };

    //获取奖金组
    getAccGroup() {
        //登录
        Fetch.login({
            method: "POST",
            body: JSON.stringify({
                "sType": 'message',
            })
        }).then((data) => {
            if (this._ismount) {
                let result = data.repsoneContent;
                if (data.status == 200) {
                    stateVar.userInfo.accGroup = result.accGroup;
                    common.setStore("accGroup", result.accGroup);
                }
            }
        })
    };

    render() {
        const {timeShow, kjStopFlag, animateCode, code} = this.state;
        const {nowlottery, nextIssue} = stateVar;

        return (
            <div className="bet_content" key="ContentTop">
                <div className="content_title">
                    {
                        (() => {
                            let topHtml;
                            if (nowlottery.lotteryBetId == 23) {
                                topHtml = <ul className="title_list clear">
                                    <li>
                                        <div className="content_cz_logo">
                                            <img src={require('./Img/' + nowlottery.imgUrl + '.png')} alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        <ul className="content_center mmc">
                                            <li className="content_cz_text">
                                                <div className="cz_name m_bottom">
                                                    <span>{nowlottery.cnname}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="ball_number_mmc">
                                            {/*{*/}
                                            {/*code.map((val, idx) => {*/}
                                            {/*return (*/}
                                            {/*<li key={idx}>*/}
                                            {/*<span className='kjCodeClass'*/}
                                            {/*style={{display: kjStopFlag[idx] ? 'block' : 'none'}}>{val}</span>*/}
                                            {/*<span*/}
                                            {/*style={{display: kjStopFlag[idx] ? 'none' : 'block'}}>{animateCode[idx]}</span>*/}
                                            {/*</li>*/}
                                            {/*)*/}
                                            {/*})*/}
                                            {/*}*/}
                                            {
                                                kjStopFlag.map((value, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {value ?
                                                                <span className='kjCodeClass'>{code[index]}</span> :
                                                                <span
                                                                    className='kjCodeClass'>{animateCode[index]}</span>}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <Button className='monikj' disabled={this.state.mmcmoni}
                                                onClick={() => this.monikj()}>模拟开奖</Button>
                                    </li>
                                </ul>
                            } else {
                                topHtml = <ul className="title_list clear">
                                    <li>
                                        <div className="content_cz_logo">
                                            <img src={require('./Img/' + nowlottery.imgUrl + '.png')} alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        <ul className="content_center">
                                            <li className="content_cz_text">
                                                <div className="cz_name m_bottom">
                                                    <span>{nowlottery.cnname}</span>
                                                </div>
                                                <div className="cz_periods m_bottom">
                                                    <span className="text_color">{nextIssue}期</span>
                                                </div>
                                                <div className="m_bottom">
                                                    <span style={{fontSize: '12px', marginRight: '5px'}}>音效</span>
                                                    <Switch size="small"
                                                            defaultChecked={common.getStore('soundswitch') == 'off' ? false : true}
                                                            onChange={(checked) => this.onChangeSound(checked)}/>
                                                </div>
                                            </li>
                                            <li className="abort_time">
                                                <p className="abort_time_text">投注截止还有</p>
                                                <div className="c_m_count_down">
                                                    <div type="flex">
                                                        <div
                                                            className="item_text maohao">{timeShow.hour}</div>
                                                        <div className="item_type">时</div>
                                                        <div
                                                            className="item_text maohao">{timeShow.minute}</div>
                                                        <div className="item_type">分</div>
                                                        <div className="item_text">{timeShow.second}</div>
                                                        <div className="item_type" style={{marginRight: 0}}>秒</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {
                                            this.showkjNumber()
                                        }
                                    </li>
                                </ul>
                            }
                            return topHtml;
                        })()
                    }
                </div>
            </div>
        );
    }
}
