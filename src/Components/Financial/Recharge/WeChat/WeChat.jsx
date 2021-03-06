/*微信*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Fetch from '../../../../Utils';
import {hashHistory} from 'react-router';
import {stateVar} from '../../../../State';
import {InputNumber, Button, Modal} from 'antd';
import {changeMoneyToChinese, onValidate, getStore} from '../../../../CommonJs/common';

import '../QQWallet/QQWallet.scss';

@observer
export default class WeChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLoadingRecharge: false,
            imgUrlIndex: 0,
            backList: null, // 可选择银行
            loadmax: 0, //渠道限额最多
            loadmin: 0, //渠道限额最少
            handingCharge: 0,

            postData: {
                type: 'deposit', //操作类型
                tag: 'weixin', //充值分类  微信weixin
                payment: '', //银行渠道code
                bid: null, //银行渠道id
                money: 0,//充值金额
                rid: null, //充值银行id
                code: '', //充值银行code
            },
            validate: {
                money: 2, // 0: 对， 1：错
            },
            deductionend: 0,
            deductionstart: 0
        };
    };

    componentDidMount() {
        this._ismount = true;
        this.onLinePayment()
    };

    componentWillUnmount() {
        this._ismount = false;
    };

    onLinePayment() {
        Fetch.payment({
            method: 'POST',
            body: JSON.stringify({type: 'paymentBank', cateid: 3})
        }).then((res) => {
            if (this._ismount && res.status == 200) {
                let data = res.repsoneContent,
                    loadmin = 0,
                    loadmax = 0,
                    handingCharge = 0,
                    deductionend = 0,
                    deductionstart = 0,
                    postData = this.state.postData;
                if (data[0] !== undefined) {
                    postData.payment = data[0].payport_name;
                    postData.bid = data[0].id;
                    postData.rid = data[0].rid;
                    postData.code = data[0].code;
                    loadmin = data[0].loadmin;
                    loadmax = data[0].loadmax;
                    handingCharge = data[0].handing_charge;
                    deductionend = data[0].deductionend;
                    deductionstart = data[0].deductionstart;
                }
                this.setState({
                    backList: data,
                    loadmin: loadmin,
                    loadmax: loadmax,
                    handingCharge: handingCharge,
                    postData: postData,
                    deductionend: deductionend,
                    deductionstart: deductionstart
                })
            }
        })
    }

    // 立即充值
    onRecharge() {
        Modal.confirm({
            title: '温馨提示',
            content: `随机改变充值金额 : 为了避免您的支付限额，系统默认对您填写的整数金额随机减少${this.state.deductionstart}-${this.state.deductionend}元！`,
            onOk: () => {
                if (this.state.validate.money != 0) {
                    let validate = this.state.validate;
                    validate.money = 1;
                    this.setState({validate});
                    return
                }
                this.setState({iconLoadingRecharge: true});
                Fetch.payment({
                    method: 'POST',
                    body: JSON.stringify(this.state.postData)
                }).then((res) => {
                    console.log(res)
                    if (this._ismount) {
                        this.setState({iconLoadingRecharge: false});
                        if (res.status == 200) {
                            stateVar.aliPayInfo = res.repsoneContent.payInfo;
                            hashHistory.push({
                                pathname: '/financial/recharge/promptlyRecharge',
                                query: {
                                    name: 'wechat'
                                }
                            });
                        } else {
                            Modal.warning({
                                title: res.shortMessage,
                            });
                        }
                    }
                })
            }
        })
    };

    // 充值金额
    onRechargeAmount(value) {
        let {validate, postData, loadmin, loadmax} = this.state;
        let reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
        let r = reg.test(value);
        let val = parseFloat(value);
        if (!r || val == 0 || val < parseFloat(loadmin) || val > parseFloat(loadmax)) {
            validate.money = 1;
        } else {
            validate.money = 0;
        }
        postData.money = value;
        this.setState({postData, validate});

    };

    /*选择*/
    selectActive(id, index) {
        let selectBank = this.state.backList.filter(item => item.id == id)[0],
            postData = this.state.postData;
        postData.payment = selectBank.payport_name;
        postData.bid = parseInt(selectBank.id);
        postData.rid = parseInt(selectBank.rid);
        postData.code = selectBank.code;
        this.setState({
            imgUrlIndex: index,
            loadmin: selectBank.loadmin,
            loadmax: selectBank.loadmax,
            handingCharge: selectBank.handing_charge,
            postData: postData,
        });
    };

    /*enter键提交*/
    onSubmit(e) {
        if (e.keyCode == 13) {
            this.onRecharge()
        }
    }

    render() {
        const {backList, imgUrlIndex, handingCharge} = this.state;
        return (
            <div className="qq_wallet" onKeyDown={(e) => this.onSubmit(e)}>
                <ul className="r_m_list">
                    <li className="clear">
                        <span className="r_m_li_w left">选择充值方式：</span>
                        {
                            backList == null ? <span style={{color: '#CF2027'}}>正在加载...</span> :
                                backList.length == 0 ? <span style={{color: '#CF2027'}}>该充值方式正在维护中！！！</span> :
                                    <ul className="r_m_select_yhk left">
                                        {
                                            backList.map((item, index) => {
                                                return (
                                                    <li className={imgUrlIndex === index ? 'r_m_active' : ''}
                                                        onClick={() => {
                                                            this.selectActive(item.id, index)
                                                        }} key={index}>
                                                        <img src={stateVar.httpUrl + item.bankImgUrl} alt="选择"/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                        }
                    </li>
                    <li>
                        <span className="r_m_li_w">充值金额：</span>
                        <InputNumber min={0} size="large"
                                     formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                     parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                     onChange={(value) => {
                                         this.onRechargeAmount(value)
                                     }}
                                     className={onValidate('money', this.state.validate)}
                        />
                        <span style={{margin: '0 15px 0 5px'}}>元</span>
                        <span>{changeMoneyToChinese(this.state.postData.money)}</span>
                        <p className="r_m_dx">
                            <span className="r_m_recharge_text">
                                单笔充值限额：最低
                                <strong style={{color: '#CB1313', fontWeight: 'normal'}}>{this.state.loadmin}</strong>
                                元，最高
                                <strong style={{color: '#CB1313', fontWeight: 'normal'}}>{this.state.loadmax}</strong>
                                元，最多保留两位小数
                            </span>
                        </p>
                        {
                            handingCharge <= 0 ? null :
                                <p className="r_m_dx text_color">温馨提示：此渠道需要收取 {handingCharge}%手续费，谢谢！</p>
                        }
                    </li>
                    <li className="r_m_primary_btn">
                        <span className="r_m_li_w"></span>
                        <Button type="primary" size="large" loading={this.state.iconLoadingRecharge}
                                onClick={() => {
                                    this.onRecharge()
                                }}
                                disabled={backList == null || backList.length == 0}
                        >
                            立即充值
                        </Button>
                    </li>
                </ul>
            </div>
        )
    }
}

