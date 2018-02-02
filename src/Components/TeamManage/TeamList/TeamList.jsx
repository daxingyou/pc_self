/*团队列表*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { hashHistory } from 'react-router';
import { DatePicker, Table, Input, Button, Pagination, Modal, InputNumber, Slider, Icon, message, Spin } from 'antd';
import Fetch from '../../../Utils';
import Crumbs from '../../Common/Crumbs/Crumbs'
import { stateVar } from '../../../State';
import Contract from '../../Common/Contract/Contract';

import './TeamList.scss'

let typeContent = '';
@observer
export default class TeamList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            tableData: {
                dataSource: [],
                total: 0, // 数据条数
                accnumall: 0, //团队总人数
                history: [
                    {
                        name: stateVar.userInfo.userName,
                    }
                ]
            },
            selectInfo: {
                username: '', //用户id
                register_time_begin: '', //开始时间
                register_time_end: '', //结束时间
                p: 1, //页数
                pn: 10, //每页条数
                uid: '', //点击用户名传入的用户id
                sortby: null, // sortby: 字段名 asc(升序) desc(降序)
            },
            alterVisible: false, //修改比例
            alterData: {},
            affirmLoading: false,
            disabled: true,
            typeName: '', // 要修改类型的名字：日工资，分红，配额，奖金组
            contentArr: [],
            prizeGroupList: [], //可设置的奖金组列表
            prizeGroupFlag: 0, // 需要修改的奖金组

            salary_ratio: [], //修改协议

            agPost: {// 配额请求参数
                flag: 'post', //修改配额的时候必须传这个值
                accgroup: [], //返回的奖金组agid
                accnum: [], // 与accgroup顺序一致, 增加的配额个数
                uid: null, //要修改的用户id
            },
            diviPost:{// 分红请求参数
                userid: null,
                dividend_radio: null, // 要修改的比例
            },
            prizeGroupPost: {}, // 奖金组请求参数
            contract_name: '修改协议', //按钮btn
        };
        this.onCancel = this.onCancel.bind(this);
        this.onDiviratio = this.onDiviratio.bind(this);
    };
    componentDidMount() {
        this._ismount = true;
        this.getData();
    };
    componentWillUnmount() {
        this._ismount = false;
    };
    handleTableChange = (pagination, filters, sorter) => {
        let selectInfo = this.state.selectInfo;
        if(sorter.columnKey == undefined){
            selectInfo.sortby = null;
            this.setState({selectInfo: selectInfo});
        } else {
            if(sorter.order == 'descend') {
                selectInfo.sortby = sorter.columnKey + ' ' + 'desc';
            }else{
                selectInfo.sortby = sorter.columnKey + ' ' + 'asc';
            }
            this.setState({selectInfo: selectInfo},()=>this.getData());
        }
    };
    /*获取团队列表*/
    getData(type, record) {
        let selectInfo = this.state.selectInfo;
        this.setState({loading: true});
        if(selectInfo.username == stateVar.userInfo.userName) {
            selectInfo.username = '';
            selectInfo.uid = '';
        }
        if(type === 'clickName'){
            let selectInfo = this.state.selectInfo;
            selectInfo.uid = record.userid;
        }
        Fetch.usreList({
            method: "POST",
            body: JSON.stringify(selectInfo)
        }).then((res)=>{
            if(this._ismount) {
                this.setState({loading: false});
                if(res.status == 200){
                    let resData = res.repsoneContent,
                        tableData = this.state.tableData,
                        historyFlag = true,
                        history = tableData.history;
                    if(type === 'clickName'){
                        for(let i = 0; i < history.length; i++) {
                            if(history[i].name === record.username) {
                                historyFlag = false;
                                break;
                            }
                        }
                        if (historyFlag) {
                            history.push({name: record.username, uid: record.userid});
                        }
                    }
                    tableData.dataSource = resData.results;
                    tableData.accnumall = parseInt(resData.self.team_count);
                    tableData.total = parseInt(resData.affects);
                    this.setState({tableData: tableData});
                }else{
                    Modal.warning({
                        title: res.shortMessage,
                    });
                }
            }
        })
    };
    /*input用户名*/
    onChangeUserName(e) {
        let selectInfo = this.state.selectInfo;
        selectInfo.username =e.target.value;
        this.setState({selectInfo: selectInfo})
    }
    /*注册开始时间*/
    onRegisterTimeStart(date, dateString) {
        let selectInfo = this.state.selectInfo;
        selectInfo.register_time_begin = dateString;
        this.setState({selectInfo: selectInfo});
    };
    /*注册结束时间*/
    onRegisterTimeEnd(date, dateString) {
        let selectInfo = this.state.selectInfo;
        selectInfo.register_time_end = dateString;
        this.setState({selectInfo: selectInfo});
    };
    /*切换每页显示条数*/
    onShowSizeChange (current, pageSize) {
        let selectInfo = this.state.selectInfo;
        selectInfo.p = current;
        selectInfo.pn = pageSize;
        this.setState({selectInfo}, ()=>this.getData())
    };
    /*切换页面时*/
    onChangePagination(page) {
        let selectInfo = this.state.selectInfo;
        selectInfo.p = page;
        this.setState({selectInfo},()=>this.getData());
    };
    /*面包屑组件调用*/
    onChildState(item, i) {
        let selectInfo = this.state.selectInfo;
        selectInfo.uid = item.uid;
        this.setState({
            selectInfo: selectInfo
        }, ()=>this.getData())
    };
    /*修改契约*/
    onClickColBtn(type, record) {
        this.setState({
            alterData: record,
            alterVisible: true,
            disabled: true,
            prizeGroupFlag: record.prize_group,
        });
        if(type == '配额'){
            this.getAccGroupList(record);
        }else if(type == '日工资'){
            let postDataSelf = {
                userid: record.userid,
                parentid: record.parentid,
            };
            Fetch.dailysalaryself({
                method: 'POST',
                body: JSON.stringify(postDataSelf)
            }).then((res)=>{
                if(this._ismount && res.status == 200){
                    let pros = res.repsoneContent.pros;
                    this.setState({
                        typeName: '日工资契约',
                        contentArr: pros[pros.length - 1],
                    })
                }
            });
        }else if(type == '分红'){
            let { diviPost } = this.state;
            diviPost.dividend_radio = record.dividend_radio;
            this.setState({
                typeName: '分红契约',
                diviPost,
            })
        }else{
            //获取可设置的奖金组列表
            Fetch.awardTeam({
                method: 'POST',
                body: JSON.stringify({uid: record.userid})
            }).then((res)=>{
                if(this._ismount && res.status == 200){
                    let { prizeGroupPost } = this.state,
                        data = res.repsoneContent;
                    prizeGroupPost.uid = data.uid;
                    prizeGroupPost.flag = 'rapid';
                    prizeGroupPost.selfPoint = data.selfPoint;
                    this.setState({
                        typeName: '奖金组契约',
                        prizeGroupList: data.list,
                        prizeGroupPost,
                    })
                }
            })
        }
    };
    /*游戏记录*/
    onSelectGameRecord(record) {
        hashHistory.push({
                pathname: '/gameRecord/lotteryBet',
                query: {
                    name: record.username
                }
        });
        stateVar.navIndex = 'gameRecord';
    };
    /*日工资修改值处理*/
    onChangeAlterContract(val, item){
        item.salary_ratio = val;
        let salary_ratioFlag = this.state.contentArr;
        salary_ratioFlag.forEach((data, i)=>{
            if(data.sale == item.sale){
                data.salary_ratio = val
            }
        });
        this.setState({salary_ratio: salary_ratioFlag});
    };
    /*提交协议*/
    onDiviratio(contract_name){
        if(contract_name == '修改契约'){
            this.setState({disabled: false, contract_name: '签订协议'});
        }else{
            let { typeName, alterData } = this.state;
            this.setState({affirmLoading: true});
            if(typeName == '配额契约'){
                let { agPost } = this.state;
                agPost.uid = alterData.userid;
                Fetch.quota({
                    method: 'POST',
                    body: JSON.stringify(agPost)
                }).then((res)=>{
                    if(this._ismount){
                        this.setState({affirmLoading: false});
                        if(res.status == 200){
                            message.success(res.repsoneContent);
                            this.setState({alterVisible: false, disabled: true, contract_name: '修改协议'});
                            this.getAccGroupList(alterData);
                        }else{
                            Modal.warning({
                                title: res.shortMessage,
                            });
                        }
                    }
                })
            }else if(typeName == '分红契约'){
                let diviPost = this.state.diviPost;
                diviPost.userid = alterData.userid;
                Fetch.diviratio({
                    method: 'POST',
                    body: JSON.stringify(diviPost)
                }).then((res)=>{
                    if(this._ismount) {
                        this.setState({affirmLoading: false});
                        if(res.status == 200){
                            message.success(res.repsoneContent);
                            this.setState({alterVisible: false, disabled: true, contract_name: '修改协议'});
                        }else{
                            Modal.warning({
                                title: res.shortMessage,
                            });
                        }
                    }
                })
            }else if(typeName == '日工资契约'){
                let postData = {
                    userid: alterData.userid,
                    parentid: alterData.parentid,
                    salary_ratio: this.state.salary_ratio,
                };
                Fetch.dailysalaryupdate({
                    method: 'POST',
                    body: JSON.stringify(postData)
                }).then((res)=>{
                    if(this._ismount){
                        this.setState({affirmLoading: false});
                        if(res.status == 200){
                            message.success(res.repsoneContent);
                            this.setState({alterVisible: false, disabled: true, contract_name: '修改协议'});
                        }else{
                            Modal.warning({
                                title: res.shortMessage,
                            });
                        }
                    }
                })
            }else if(typeName == '奖金组契约'){
                let { prizeGroupFlag, prizeGroupPost, prizeGroupList } = this.state;
                let selectPrizeGroup = prizeGroupList.filter((item, index) => item.prizeGroup == prizeGroupFlag)[0];
                prizeGroupPost.groupLevel = prizeGroupFlag;
                prizeGroupPost.keeppoint = ((prizeGroupPost.selfPoint - selectPrizeGroup.high) * 100).toFixed(2);
                Fetch.awardTeam({
                    method: 'POST',
                    body: JSON.stringify(prizeGroupPost)
                }).then((res)=>{
                    if(this._ismount){
                        this.setState({affirmLoading: false});
                        if(res.status == 200){
                            message.success(res.repsoneContent);
                            this.setState({alterVisible: false, disabled: true, contract_name: '修改协议'});
                        }else{
                            Modal.warning({
                                title: res.shortMessage,
                            });
                        }
                    }
                })
            }
        }
    };
    /*关闭模态框*/
    onCancel(){
        this.setState({alterVisible: false, affirmLoading: false, contract_name: '修改协议'});
    };
    /*奖金组设置 滑动条*/
    onRegisterSetBonus(value) {
        this.setState({prizeGroupFlag: value});
    };
    /*奖金组*/
    onMinus() {
        let { disabled, prizeGroupFlag, prizeGroupList } = this.state;
        if(disabled || prizeGroupFlag <= prizeGroupList[0].prizeGroup){
            return
        }
        this.setState({prizeGroupFlag: this.state.prizeGroupFlag - 2});
    };
    onAdd(){
        let { disabled, prizeGroupFlag, prizeGroupList } = this.state;
        if(disabled || prizeGroupFlag >= prizeGroupList[prizeGroupList.length - 1].prizeGroup){
            return
        }
        this.setState({prizeGroupFlag: this.state.prizeGroupFlag + 2});
    };
    /*设置配额契约*/
    onChangeAccGroup(value, item){
        let { agPost } = this.state,
            accgroup = agPost.accgroup;
        for(let i = 0; i < accgroup.length; i++){
            if(accgroup[i] == item.agid){
                agPost.accnum[i] = value;
                break;
            }
        }
        this.setState({agPost});
    };
    /*获取对应用户配额列表*/
    getAccGroupList(record){
        Fetch.quota({
            method: 'POST',
            body: JSON.stringify({uid: record.userid})
        }).then((res)=>{
            if(this._ismount && res.status == 200){
                let aAllUserTypeAccNum = res.repsoneContent.aAllUserTypeAccNum,
                    { agPost } = this.state;
                agPost.accgroup = [];
                agPost.accnum = [];
                aAllUserTypeAccNum.forEach((item)=>{
                    agPost.accgroup.push(item.agid);
                    agPost.accnum.push(0);
                });
                this.setState({
                    typeName: '配额契约',
                    contentArr: aAllUserTypeAccNum,
                })
            }
        })
    }
    render() {
        const { tableData, typeName, contentArr, prizeGroupList, agPost, diviPost } = this.state;
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',// 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
                render: (text, record) => <a className="hover_a" href="javascript:void(0)" onClick={()=>this.getData('clickName', record)}>{text}</a>,
                width: 140,
            }, {
                title: '用户类型',
                dataIndex: 'groupname',
                width: 80,
            }, {
                title: '团队人数',
                dataIndex: 'team_count',
                sorter: () => {},
                width: 100,
            }, {
                title: '奖金组',
                dataIndex: 'prize_group',
                render: (text, record) => <a className="hover_a" href="javascript:void(0)" onClick={()=>this.onClickColBtn('奖金组', record)}>{text}</a>,
                sorter: () => {},
                width: 100,
            }, {
                title: '注册时间',
                dataIndex: 'register_time',
                sorter: () => {},
                width: 85,
            }, {
                title: '日工资',
                dataIndex: 'daily_salary_status',
                render: (text, record) => <Button type={text == 1 ? 'primary' : ''} onClick={()=>this.onClickColBtn('日工资', record)}>{text==1 ? '已签订' : '未签订'}</Button>,
                width: 100,
            }, {
                title: '分红',
                dataIndex: 'dividend_salary_status',
                render: (text, record) => <Button type={text == 1 ? 'primary' : ''} onClick={()=>this.onClickColBtn('分红', record)}>{text==1 ? '已签订' : '未签订'}</Button>,
                width: 100,
            }, {
                title: '配额',
                dataIndex: 'useraccgroup_status',
                render: (text, record) => <Button type={text == 1 ? 'primary' : ''} onClick={()=>this.onClickColBtn('配额', record)}>{text == 1 ? '已签订' : '未签订'}</Button>,
                width: 100,
            }, {
                title: '最后登录时间',
                dataIndex: 'lasttime',
                width: 85,
            }, {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) => <Button onClick={()=>this.onSelectGameRecord(record)}>游戏记录</Button>,
                width: 130,
            }];
        const footer = <div className="tabel_footer">
                            <span>总计</span>
                            <span>
                                  团队总人数：
                                  <strong>{tableData.accnumall} 人</strong>
                            </span>
                        </div>;
        if(typeName == '配额契约'){
            typeContent = <div className="a_c_text">
                <p>契约内容：</p>
                <p>该用户可继续推广下级，其中可分配奖金组：</p>
                <ul className="text_content_list">
                    {
                        contentArr.map((item, i)=>{
                            return (
                                <li key={item.uagid}>
                                    {item.accGroup}&nbsp;配额为<span className="subaccnum">{item.subaccnum == undefined ? '0' : item.subaccnum}</span>个
                                    <span style={{display: this.state.disabled ? 'none' : ''}}>
                                            ，再增加
                                            <InputNumber min={0}
                                                         value={agPost.accnum[i]}
                                                         onChange={(value)=>this.onChangeAccGroup(value, item)}
                                            />
                                            个 （剩余可分配{item.accnum}个）
                                        </span>
                                </li>
                            )
                        })
                    }
                    <li>1948&nbsp;及以下剩余配额：无限；</li>
                </ul>
            </div>;
        }else if(typeName == '日工资契约'){
            typeContent = <div className="a_c_text">
                <p>契约内容：</p>
                <ul className="text_content_list">
                    {
                        contentArr.map((item, i)=>{
                            return (
                                <li key={item.sale}>
                                    第{i+1}档：日销量≥{item.sale.slice(0, -4)}{i != 5 &&<i>&nbsp;&nbsp;</i>}{i == 0 && <i>&nbsp;&nbsp;</i>}万元时，日工资比例为
                                    <InputNumber min={0} value={item.salary_ratio}
                                                 onChange={(value)=>this.onChangeAlterContract(value, item)}
                                                 disabled={this.state.disabled}
                                    />
                                    %。
                                </li>
                            )
                        })
                    }
                </ul>
            </div>;
        }else if(typeName == '分红契约'){
            typeContent = <div className="a_c_text">
                <p>契约内容：</p>
                <div>
                    如该用户每半月结算净盈亏总值时为负数，可获得分红，金额为亏损值的
                    <InputNumber min={0} value={diviPost.dividend_radio}
                                 onChange={(value)=>{
                                     diviPost.dividend_radio = value;
                                     this.setState({diviPost});
                                 }}
                                 disabled={this.state.disabled}
                    />
                    %。
                </div>
            </div>;
        }else if(typeName == '奖金组契约'){
            typeContent = <div className="a_c_text">
                <p>契约内容：</p>
                <div>
                    该用户的奖金组级别为
                    <InputNumber min={0} value={this.state.prizeGroupFlag}
                                 step={2}
                                 onChange={(value)=>this.onRegisterSetBonus(value)}
                                 disabled={this.state.disabled}
                    />。
                    <div className="prize_group_slider">
                        <Icon className="slider_left" onClick={()=>this.onMinus()} type="left"/>
                        <Slider
                                min={prizeGroupList.length !== 0 && prizeGroupList[0].prizeGroup}
                                max={prizeGroupList.length !== 0 && prizeGroupList[prizeGroupList.length-1].prizeGroup}
                                step={2}
                                onChange={(value)=>{this.onRegisterSetBonus(value)}}
                                value={parseInt(this.state.prizeGroupFlag)}
                                disabled={this.state.disabled}
                        />
                        <Icon className="slider_right" onClick={()=>this.onAdd()} type="right" />
                    </div>
                    {
                        prizeGroupList.length !== 0 && <p style={{textAlign: 'center'}}>{prizeGroupList[0].prizeGroup} - {prizeGroupList[prizeGroupList.length-1].prizeGroup}</p>
                    }
                </div>
            </div>;
        }else{
            typeContent = ''
        }

        return (
            <div className="team_list">
                <div className="team_list_top">
                    <div className="t_l_time">
                        <ul className="t_l_time_row">
                            <li>
                                <span>用户名：</span>
                                <Input placeholder="请输入用户名" value={this.state.selectInfo.username} onChange={(e)=>this.onChangeUserName(e)}/>
                            </li>
                            <li className="t_m_date_classify">注册时间：</li>
                            <li style={{marginLeft: '8px'}}>
                                <DatePicker showTime
                                            format="YYYY-MM-DD HH:mm:ss"
                                            placeholder="请选择开始时间"
                                            onChange={(date, dateString)=>this.onRegisterTimeStart(date, dateString)}
                                />
                            </li>
                            <li style={{margin: '0 8px'}}>至</li>
                            <li>
                                <DatePicker showTime
                                            format="YYYY-MM-DD HH:mm:ss"
                                            placeholder="请选择结束时间"
                                            onChange={(date, dateString)=>this.onRegisterTimeEnd(date, dateString)}
                                />
                            </li>
                            <li className="t_m_serch">
                                <Button type="primary"
                                        icon="search"
                                        onClick={()=>this.getData()}
                                >
                                    搜索
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="t_l_table">
                    <div className="t_l_location_name">
                        <span className="left">当前位置：</span>
                        <Crumbs table={this.state.tableData} onChildState={this.onChildState.bind(this)}/>
                    </div>
                    <div className="t_l_table_list">
                        <Table columns={columns}
                               rowKey={record => record.userid}
                               dataSource={this.state.tableData.dataSource}
                               pagination={false}
                               loading={this.state.loading}
                               footer={tableData.total <= 0 ? null : ()=>footer}
                               onChange={this.handleTableChange}
                        />
                    </div>
                    <div className="page right"  style={{display: tableData.total <= 0 ? 'none' : ''}}>
                        <Pagination showSizeChanger
                                    onShowSizeChange={(current, pageSize)=>this.onShowSizeChange(current, pageSize)}
                                    onChange={(page)=>this.onChangePagination(page)}
                                    defaultCurrent={1}
                                    total={this.state.tableData.total}
                                    pageSizeOptions={stateVar.pageSizeOptions.slice()}
                        />
                    </div>
                </div>
                <Contract
                    title={this.state.typeName}
                    textDescribe={typeContent}
                    alterData={this.state.alterData}
                    alterVisible={this.state.alterVisible}
                    affirmLoading={this.state.affirmLoading}
                    contract_name={this.state.contract_name}
                    disabled={this.state.disabled}
                    onCancel={this.onCancel}
                    onAffirm={this.onDiviratio}
                />
            </div>
        );
    }
}