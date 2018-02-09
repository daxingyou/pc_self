import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Fetch from '../../../Utils';
import { Row, Col, Button, Table, message, Modal  } from 'antd';
import { timestampToTime } from '../../../CommonJs/common';
import { stateVar } from '../../../State';
import lotteryTypeList from '../../../CommonJs/common.json';

import litimg_details from './Img/litimg_details.png';
import './ActivityDetails.scss';

@observer
export default class ActivityDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnLoading: false,
            tableLoading: false,
            id: this.props.location.query.id, //活动id
            response:{
                activity_mechanism_type: '-1', //活动奖金机制 （1 专题、2 拉新、3 签到、4 充值流水）
                activity_pics: '',//活动图片
                activity_title: '', //活动标题
                start_time: '', //活动开始时间戳
                end_time: '',
                pull_new_fans_number: 0, //人数限制
                radio_activity_type_url: '', //活动链接
                platform: {}, //参与来源平台
                lotterys: [], //活动范围，彩种列表
                games: [], //活动范围，游戏列表
                activity_introduce: '',//规则说明
                status: '', //状态状态。1 正常，200 已完成，400 已满员，401 已结束
                reg_add_time_last_of: '0', //直属下线注册时间晚于时间戳值
                is_regnew_pay_amount_val: '0',//直属下线充值限额条件值
                newadd_reward_amount: '0', //上级奖励金额 x 元
                newadd_reward_extract_amount: '0', //上级奖励金额 x 元
                reward_amount : '0', //新人奖励金额 x 元
                reward_extract_amount : '0', //新人奖励金额,且流水达提现限定值
                max_online_num_num: '0', //最大参与人数
                remain_online_num: '0', //剩余可参加人数

                sign_day_count_type: '0', //签到的计算方式（0 按天累计计算，1 按天连续计算）
                sign_conditions_water_amount: '0', //流水达到 x 元，自动签到
                activity_award_sign_sets: [], //签到奖励的档次数据

                user_get_bonus_number_val: '0', //总计可领取奖金次数
                water_bills_stes: {}, //充值流水
            },
            userSign: {}, //个人进度
        };
    };
    componentDidMount(){
        this._ismount = true;
        this.getData();
    };
    componentWillUnmount() {
        this._ismount = false;
    };
    getData() {
        Fetch.activityData({
            method: 'GET',
            // body: JSON.stringify({id: this.props.location.query.id})
        }, '&id='+this.state.id).then((res)=>{
            if(this._ismount && res.status == 200){
                let data= res.repsoneContent;
                if(data.activity_mechanism_type != 1){
                    this.getUserSignDatas();
                }
                this.setState({response: data});
            }
        })
    }
    getUserSignDatas() {
        Fetch.userSignDatas({
            method: 'GET',
        }, '&id='+this.state.id).then((res)=>{
            if(this._ismount && res.status == 200){
                let data= res.repsoneContent;
                this.setState({userSign: data})
            }
        })
    };
    /*报名*/
    enterApply() {
        this.setState({ btnLoading: true });
        Fetch.postEnrolls({
            method: 'POST',
            body: JSON.stringify({activityid: this.state.id})
        }).then((res)=>{
            if(this._ismount){
                this.setState({btnLoading: false});
                if(res.status == 200){
                    message.success(res.shortMessage);
                    this.getData();
                }else{
                    Modal.warning({
                        title: res.shortMessage,
                    });
                }
            }
        })
    };
    /*活动签到领奖*/
    onSignTheAward(record){
        Fetch.signTheAward({
            method: 'POST',
            body: JSON.stringify({
                activityid: this.state.id,
                awardday: record.aw_days
            })
        }).then((res)=>{
            if(this._ismount){
                if(res.status == 1){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else if(res.status == 400){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else{
                    Modal.warning({
                        title: res.shortMessage,
                    });
                }
            }
        })
    };
    /*充值达标领奖*/
    onRechargeAmountAward(record){
        Fetch.rechargeAmountAward({
            method: 'POST',
            body: JSON.stringify({
                activityid: this.state.id,
                amount: record.wa_pay_amount,
            })
        }).then((res)=>{
            if(this._ismount){
                if(res.status == 1){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else if(res.status == 400){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else{
                    Modal.warning({
                        title: res.shortMessage,
                    });
                }
            }
        })
    };
    /*流水达标领奖*/
    onWateAmountAward(record){
        Fetch.wateAmountAward({
            method: 'POST',
            body: JSON.stringify({
                activityid: this.state.id,
                amount: record.wa_water_account,
            })
        }).then((res)=> {
            if(this._ismount){
                if(res.status == 1){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else if(res.status == 400){
                    Modal.success({
                        title: '领取成功',
                        content: res.shortMessage,
                    });
                    this.getData();
                }else{
                    Modal.warning({
                        title: res.shortMessage,
                    });
                }
            }
        })
    };
    /*奖金说明*/
    onActivityType(){
        let { response } = this.state,
            activityType = response.activity_mechanism_type;
        if(activityType == 1){
            return (
                <div className="dissertation_active">
                    <span>专题活动链接地址：</span>
                    <a href={response.radio_activity_type_url} target="_blank">{response.radio_activity_type_url}</a>
                </div>
            )
        }else if(activityType == 2){
            return (
                <ul className="dissertation_active">
                    <li>1. 直属下线注册时间晚于
                        <span className="col_color_ying">{timestampToTime(response.reg_add_time_last_of)}</span>
                        （包含），且充值金额大于等于
                        <span className="col_color_ying">{response.is_regnew_pay_amount_val}</span>
                        元
                    </li>
                    <li>
                        2. 上级奖励金额
                        <span className="col_color_ying">{response.newadd_reward_amount}</span>
                        元，流水达到
                        <span className="col_color_ying">{response.newadd_reward_extract_amount}</span>
                        元可提现
                    </li>
                    <li>
                        3. 新人奖励金额
                        <span className="col_color_ying">{response.reward_amount}</span>
                        元，流水达到
                        <span className="col_color_ying">{response.reward_extract_amount}</span>
                        元可提现
                    </li>
                    <li>
                        4. 人数限额：
                        <span className="col_color_ying">{response.max_online_num_num}</span>
                        人
                    </li>
                </ul>
            )
        }else if(activityType == 3){
            let columns = [
                { title: '达到天数', dataIndex: 'aw_days' ,width: 80},
                { title: '奖金', dataIndex: 'aw_pay_awards' ,width: 80},
                { title: '剩余奖品份数', dataIndex: 'aw_surplus_prizes' ,width: 80},
                { title: '可领取次数', dataIndex: 'user_aw_get_numbers',
                    render: (text, record) =>
                        <Button
                            onClick={()=>this.onSignTheAward(record)} type="primary"
                            disabled={parseInt(text) > 0 ? false : true}
                        >
                            领取
                        </Button>,
                    width: 80
                }
            ];
            let activity_award_sign_sets = response.activity_award_sign_sets[0];
            if(activity_award_sign_sets.aw_days == undefined){
                columns = columns.filter(item => item.dataIndex != 'aw_days')
            }
            if(activity_award_sign_sets.aw_pay_awards == undefined){
                columns = columns.filter(item => item.dataIndex != 'aw_pay_awards')
            }
            if(activity_award_sign_sets.aw_surplus_prizes == undefined){
                columns = columns.filter(item => item.dataIndex != 'aw_surplus_prizes')
            }
            return (
                <div>
                    <p className="a_d_explain_text">1. {response.sign_day_count_type == 0 ? '流水按天累计计算' : '流水按天连续计算'}</p>
                    <p className="a_d_explain_text">
                        2. 流水达到
                        <span className="col_color_ying"> {response.sign_conditions_water_amount} </span>
                        元，自动签到
                    </p>
                    <div className="a_d_table">
                        <Table columns={columns}
                               rowKey={record => record.userid}
                               dataSource={response.activity_award_sign_sets}
                               pagination={false}
                               loading={this.state.tableLoading}
                               scroll={{y: 300}}
                               size="middle"
                        />
                    </div>
                </div>
            )
        }else if(activityType == 4){
            let water_bills_stes = response.water_bills_stes[0];
            let columns = [
                { title: '序号', dataIndex: 'key', width: 50,
                    render: (text, record, index)=> index+1
                },
                { title: '充值金额', dataIndex: 'wa_pay_amount', width: 80 },
                { title: '充值奖金', dataIndex: 'wa_pay_awards', width: 80 },
                { title: '剩余奖金份数', dataIndex: 'wa_surplus_prizes', width: 111 },
                { title: '可领次数', dataIndex: 'wa_get_awards',
                    render: (text, record) =>
                        <Button type="primary"
                                disabled={parseInt(text) > 0 ? false : true}
                                onClick={()=>this.onRechargeAmountAward(record)}
                        >
                            领取
                        </Button>,
                    width: 80
                },
                { title: '流水金额', dataIndex: 'wa_water_account', width: 80 },
                { title: '流水奖金', dataIndex: 'wa_water_award', width: 80 },
                { title: '剩余奖金份数', dataIndex: 'wa_surplus_award', width: 111 },
                { title: '可领次数', dataIndex: 'wa_get_award_numbers', width: 80,
                    render: (text) =>
                        <Button type="primary"
                                disabled={parseInt(text) > 0 ? false : true}
                                onClick={()=>this.onWateAmountAward()}
                        >
                            领取
                        </Button>
                },
            ];
            if(water_bills_stes.wa_pay_amount == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_pay_amount')
            }
            if(water_bills_stes.wa_pay_awards == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_pay_awards')
            }
            if(water_bills_stes.wa_surplus_prizes == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_surplus_prizes')
            }
            if(water_bills_stes.wa_water_account == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_water_account')
            }
            if(water_bills_stes.wa_water_award == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_water_award')
            }
            if(water_bills_stes.wa_surplus_award == undefined){
                columns = columns.filter(item => item.dataIndex != 'wa_surplus_award')
            }

            return (
                <div>
                    <p className="a_d_explain_text">
                        总计可领取奖金次数：
                        <span className="col_color_ying">{response.user_get_bonus_number_val}</span>
                        次
                    </p>
                    <div className="a_d_table">
                        <Table columns={columns}
                               rowKey={record => record.userid}
                               dataSource={response.water_bills_stes}
                               pagination={false}
                               loading={this.state.tableLoading}
                               scroll={{y: 300}}
                               size="middle"
                        />
                    </div>
                </div>
            )
        }else{
            return
        }
    };
    /*参与平台*/
    onPlatform(){
        let { response } = this.state,
            platform = response.platform,
            text = '';
        if(platform.read_rang_android != undefined && platform.read_rang_android == 1){
            text += 'Android客户端，'
        }
        if(platform.read_rang_ios != undefined && platform.read_rang_ios == 1){
            text += 'IOS客户端，'
        }
        if(platform.read_rang_web != undefined && platform.read_rang_web == 1){
            text += 'wap版，'
        }
        if(platform.read_rang_air != undefined && platform.read_rang_air == 1){
            text += 'Air客户端，'
        }
        if(platform.read_rang_other != undefined && platform.read_rang_other == 1){
            text += '其他'
        }
        return text;
    };
    /*报名状态*/
    onStatus(){
        let { response } = this.state,
            status = response.status;
        if(status == 1){
            return '立刻报名'
        }else if(status == 200){
            return '已完成'
        }else if(status == 400){
            return '已满员'
        }else if(status == 401){
            return '已结束'
        }else{
            return '无状态'
        }
    };
    /*个人进度*/
    onMechanismType(){
        let { response, userSign } = this.state,
            type = response.activity_mechanism_type;
        if(type == 1){
            return <p className="dissertation">请前往专题页查看个人进度</p>
        }else if(type == 2){
            return (
                <ul className="schedule_list">
                    <li>有效推广人数：{userSign.pull_new_num == undefined ? '0' : userSign.pull_new_num} 人</li>
                    <li>奖金（需流水）：{userSign.user_award_amount == undefined ? '0' : userSign.user_award_amount} 元</li>
                    <li>流水金额：{userSign.user_loss_amount == undefined ? '0' : userSign.user_loss_amount} 元</li>
                    <li>可提现奖金：{userSign.used_user_award_amount == undefined ? '0' : userSign.used_user_award_amount}元</li>
                </ul>
            )
        }else if(type == 3){
            return (
                <ul className="schedule_list">
                    <li>累计签到天数：{userSign.count_sign_days == undefined ? '0' : userSign.count_sign_days} 天</li>
                    <li>连续最大签到天数：{userSign.max_continuity_sign_days == undefined ? '0' : userSign.max_continuity_sign_days} 天</li>
                    <li>可提现奖金：{userSign.availablebalance == undefined ? '0' : userSign.availablebalance} 元</li>
                </ul>
            )
        }else if(type == 4){
            return (
                <ul className="schedule_list">
                    <li>充值金额：{userSign.recharge_amount == undefined ? '0' : userSign.recharge_amount} 元</li>
                    <li>奖金金额（需流水）：{userSign.user_award_amount == undefined ? '0' : userSign.user_award_amount} 元</li>
                    <li>流水金额：{userSign.user_loss_amount == undefined ? '0' : userSign.user_loss_amount} 元</li>
                    <li>可提现奖金：{userSign.used_user_award_amount == undefined ? '0' : userSign.used_user_award_amount} 元</li>
                </ul>
            )
        }else{
            return <p className="dissertation">无</p>
        }
    }
    render() {
        const { response } = this.state;
        return (
            <Row type="flex" justify="center" align="top" className="a_d_main main_width" >
                <Col span={24}>
                    {
                        response.activity_pics == undefined || response.activity_pics == '' ?
                            <img className="a_d_activeImg" src={litimg_details} alt=""/> :
                            <img className="a_d_activeImg" src={stateVar.httpUrl+response.activity_pics} alt="活动"/>

                    }
                    <h3 className="a_d_activeName">{response.activity_title}</h3>
                    <div className="a_d_active_introduce clear">
                        <div className="a_d_active left">
                            <div className="clear">
                                <ul className="a_d_list left">
                                    <li>
                                        <span>活动时间：</span>
                                        <span>
                                            {timestampToTime(response.start_time)} 至 {timestampToTime(response.end_time)}
                                        </span>
                                    </li>
                                    <li>
                                        <span>活动限额：</span>
                                        <span>每日限额 {response.pull_new_fans_number} 名</span>
                                    </li>
                                    <li>
                                        <span>参与平台：</span>
                                        <span>
                                            {
                                                this.onPlatform()
                                            }
                                            （<a className="hover_a" href="javascript:void(0)">平台说明</a>）
                                        </span>
                                    </li>
                                </ul>
                                <div className="a_d_apply right">
                                    <Button type="primary" loading={this.state.btnLoading}
                                            onClick={()=>this.enterApply()}
                                            disabled = {response.status != 1}
                                    >
                                        {
                                            this.onStatus()
                                        }
                                    </Button>
                                    <p className="a_d_residue_number">（限额剩余{response.remain_online_num}人）</p>
                                </div>
                            </div>
                            <div className="a_d_explain">
                                <p className="a_d_explain_text">奖金说明：</p>
                                {
                                    this.onActivityType()
                                }
                            </div>
                            {
                                response.activity_introduce == '' ? null :
                                    <div className="a_d_explain">
                                        <p className="a_d_explain_text">规则说明：</p>
                                        <div className="a_d_explain_list" dangerouslySetInnerHTML={{__html: response.activity_introduce}}></div>
                                    </div>
                            }

                        </div>
                        <div className="right">
                            <div className="a_d_schedule clear">
                                <p className="schedule_title">个人进度</p>
                                {
                                    this.onMechanismType()
                                }
                                {/*<a className="lucky_draw right" href="javascript:void(0)">前往抽奖</a>*/}
                            </div>
                            <div className="a_d_schedule clear">
                                <p className="schedule_title">活动范围</p>
                                <ul className="schedule_list lottery_name clear">
                                    <li style={{color:'#CC0000', fontSize:14}}>彩票</li>
                                    {
                                        response.lotterys.map((item, index)=>{
                                            return (
                                                <li className="left" key={index}>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {
                                    response.games instanceof Array && response.games.length == 0 ? null :
                                        <ul className="schedule_list lottery_name clear">
                                            <li style={{color:'#CC0000', fontSize:14}}>综合游戏</li>
                                            {
                                                response.games.map((item, index)=>{
                                                    return (
                                                        <li className="left" key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
