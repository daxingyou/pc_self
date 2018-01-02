/*个人总表*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Fetch from '../../../Utils';
import { stateVar } from '../../../State';
import { DatePicker, Button, Table } from 'antd';
import moment from 'moment';
import common from '../../../CommonJs/common';

import './SelfTable.scss'

const shortcutTime = [
    {
        text: '上周',
        id: 3
    },{
        text: '上半月',
        id: 4
    },{
        text: '下半月',
        id: 5
    },{
        text: '本月',
        id: 6
    }
];
@observer
export default class SelfTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            threeSeven: null,
            data: [],
            sum: {},
            tableLoading: false,
            searchLoading: false,
            classify: 1, // 游戏分类
            variety: 1, // 游戏种类
            postData: {
                starttime: common.setDateTime(0),
                endtime: common.setDateTime(1),
                p: 1,
                pn: 10,
            }
        }
    };
    componentDidMount() {
        this._ismount = true;
        this.getData();
    };
    componentWillUnmount() {
        this._ismount = false;
    };
    getData() {
        this.setState({ tableLoading: true });
        Fetch.profitLossLotteryBySelf({
            method: 'POST',
            body: JSON.stringify(this.state.postData),
        }).then((res)=>{
            console.log(res)
            if(this._ismount) {
                this.setState({ searchLoading: false, tableLoading: false });
                if(res.status == 200) {
                    let data = res.repsoneContent;
                    this.setState({
                        data: data.results,
                        sum: data.total,
                    });
                }else{
                    this.setState({
                        data: [],
                        sum: {},
                    });
                }
            }
        })
    };
    /*搜索*/
    onSearch() {
        this.setState({ searchLoading: true });
        this.getData();
    };
    /*开始查询日期*/
    onChangeStartTime(date, dateString) {
        let postData = this.state.postData;
        postData.starttime = dateString;
        this.setState({postData})
    };
    /*结束查询日期*/
    onChangeEndTime(date, dateString) {
        let postData = this.state.postData;
        postData.endtime = dateString;
        this.setState({postData})
    };
    /*切换每页显示条数*/
    onShowSizeChange (current, pageSize) {
        let postData = this.state.postData;
        postData.p = current;
        postData.pn = pageSize;
        this.setState({postData: postData},()=>this.getData())
    };
    /*切换页面时*/
    onChangePagination(page) {
        let postData = this.state.postData;
        postData.p = page;
        this.setState({postData: postData},()=>this.getData());
    };
    /*快捷选择时间*/
    onShortcutTime(val) {
        let threeSeven = this.state.threeSeven;
        if(threeSeven == val) {
            threeSeven = null
        }else{
            threeSeven = val;
        }
        this.setState({threeSeven});
    };
    render() {
        const dailysalaryStatus = stateVar.dailysalaryStatus;
        const { classify, variety, data, sum } = this.state;
        const columns = [
            {
                title: '日期',
                dataIndex: 'date',
                width: 85,
            }, {
                title: '用户名',
                dataIndex: 'username',
                width: 85,
            }, {
                title: '投注量',
                dataIndex: 'cp_stake',
                className: 'column-right',
                width: 85,
            }, {
                title: '有效投注量',
                dataIndex: 'cp_effective_stake',
                className: 'column-right',
                width: 85,
            },  {
                title: '中奖',
                dataIndex: 'cp_bonus',
                className: 'column-right',
                width: 85,
            }, {
                title: '返点',
                dataIndex: 'cp_point',
                className: 'column-right',
                width: 85,
            }, {
                title: '毛收入',
                dataIndex: 'income',
                className: 'column-right',
                width: 85,
            }, {
                title: '日工资',
                dataIndex: 'salary',
                className: dailysalaryStatus.isLose != 1 ? 'column-right status_hide' : 'column-right',
                width: 85,
            }, {
                title: '日亏损',
                dataIndex: 'lose_salary',
                className: dailysalaryStatus.isSalary != 1 ? 'column-right status_hide' : 'column-right',
                width: 85,
            }, {
                title: '活动',
                dataIndex: 'sum_activity',
                className: 'column-right',
                width: 85,
            }, {
                title: '净收入',
                dataIndex: 'net_income',
                className: dailysalaryStatus.isDividend != 1 ? 'column-right status_hide' : 'column-right',
                width: 85,
            }, {
                title: '分红',
                dataIndex: 'allsalary',
                className: dailysalaryStatus.isDividend != 1 ? 'column-right status_hide' : 'column-right',
                width: 85,
            }, {
                title: '总盈亏',
                dataIndex: 'last_win_lose',
                className: 'column-right',
                render: text => text < 0 ? <span className="col_color_shu">{text}</span> :
                                            <span className="col_color_ying">{text}</span>,
                width: 85,
            }
        ];
        const columnsRests = [
            {
                title: '日期',
                dataIndex: 'usergroup_naeweme',
                width: 130,
            }, {
                title: '用户名',
                dataIndex: 'sale',
                width: 130,
            }, {
                title: '投注',
                dataIndex: 'effective_sale',
                width: 130,
            }, {
                title: '有效投注',
                dataIndex: 'usergroup_name',
                width: 130,
            }, {
                title: '中奖金额',
                dataIndex: 'safewale',
                width: 130,
            }, {
                title: '返水',
                dataIndex: 'effective_sale232',
                width: 130,
            }, {
                title: '累计盈利',
                dataIndex: 'effective323_sale',
                width: 130,
            }, {
                title: '分红',
                dataIndex: 'effecti235ve_sale',
                width: 130,
            }
        ];
        const footer = <ul className="st_footer clear">
                            <li>总计</li>
                            <li>{sum.sum_cp_stake}</li>
                            <li>{sum.sum_cp_effective}</li>
                            <li>{sum.sum_cp_bonust}</li>
                            <li>{sum.sum_cp_point}</li>
                            <li>{sum.sum_income}</li>
                            <li>{sum.sum_salary}</li>
                            <li>{sum.sum_lose_salary}</li>
                            <li>{sum.sum_sum_activity}</li>
                            <li>{sum.sum_net_income}</li>
                            <li>{sum.sum_allsalary}</li>
                            <li className={parseFloat(sum.sum_last_win_lose) < 0 ? 'col_color_shu' : 'col_color_ying'}>{sum.sum_last_win_lose}</li>
                        </ul>;

        return (
            <div className="self_table">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>查询日期：</span>
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    placeholder="请选择开始查询日期"
                                    defaultValue={moment(common.setDateTime(0))}
                                    onChange={(date, dateString)=>{this.onChangeStartTime(date, dateString)}}
                                    disabledDate={(current)=>common.disabledDate(current, 'lt',-16)}
                                />
                                <span style={{margin: '0 8px'}}>至</span>
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    placeholder="请选择结束查询日期"
                                    defaultValue={moment(common.setDateTime(1))}
                                    onChange={(date, dateString)=>{this.onChangeEndTime(date, dateString)}}
                                    disabledDate={(current)=>common.disabledDate(current, 'gt', 1)}
                                />
                            </li>
                            <li className="t_m_line"></li>
                            <li>
                                <ul className="t_l_time_btn clear">
                                    {
                                        shortcutTime.map((item,i)=>{
                                            return <li className={item.id === this.state.threeSeven ? 't_l_time_btn_active' : ''} onClick={()=>{this.onShortcutTime(item.id)}} key={item.id}>{item.text}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                        <ul className="t_l_classify">
                            <li>
                                <span>游戏分类：</span>
                                <span className={1 === classify ? "t_l_border t_l_active" : "t_l_border"} onClick={()=>{this.setState({classify: 1})}}>彩票</span>
                                <span className={2 === classify ? "t_l_border t_l_active" : "t_l_border"} onClick={()=>{this.setState({classify: 2})}}>第三方</span>
                            </li>
                            <li>
                                <span>游戏种类：</span>
                                <span className={1 === variety ? "t_l_border t_l_active" : "t_l_border"} onClick={()=>{this.setState({variety: 1})}}>全彩种</span>
                            </li>
                            <li className="t_m_serch">
                                <Button type="primary"
                                        icon="search"
                                        loading={this.state.searchLoading}
                                        onClick={()=>this.onSearch()}
                                >
                                    搜索
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="t_l_table">
                        <div className="t_l_table_list">
                            {
                                classify === 1 ?
                                    <Table columns={columns}
                                           rowKey={record => record.date}
                                           dataSource={data}
                                           loading={this.state.tableLoading}
                                           pagination={false}
                                           footer={data.length <= 0 ? null : ()=>footer}
                                    /> :
                                    <Table columns={columnsRests}
                                           rowKey={record => record.date}
                                           dataSource={data}
                                           loading={this.state.tableLoading}
                                           pagination={false}
                                           footer={data.length <= 0 ? null : ()=>footer}
                                    />
                            }

                        </div>
                    </div>
            </div>
        );
    }
}
