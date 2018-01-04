/*契约*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Button, Modal } from 'antd';
import common from '../../../CommonJs/common';
import { stateVar } from '../../../State';

import './Contract.scss';

@observer
export default class Contract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contract_name: '修改契约',
        };
    };
    /*修改契约*/
    onAffirm() {
        let contract_name = this.state.contract_name;
        if(contract_name == '修改契约'){
            this.setState({contract_name:  '签订契约'});
        }else{
            this.setState({contract_name: '修改契约'})
        }
        this.props.onAffirm(contract_name);
    };
    /*取消关闭modal*/
    onCancel(){
        this.props.onCancel();
        this.setState({contract_name: '修改契约'})
    };
    /*是否已签订*/
    isSign() {
        let { disabled, alterData } = this.props;
        console.log(alterData)
        if(alterData.daily_salary_status == 1 || alterData.dividend_salary_status == 1 || alterData.useraccgroup_status == 1){
            return disabled ? 'a_c_name a_c_active' : 'a_c_name';
        }else{
            return disabled ? 'a_c_name a_c_active' : 'a_c_name';
        }
    };
    render() {
        const { alterData, title, alterVisible, textDescribe, disabled } = this.props;
        const { contract_name } = this.state;
        return (
            <Modal
                visible={alterVisible}
                footer={null}
                maskClosable={false}
                closable={false}
                width={619}
                className="alter_dividend"
            >
                <div className="alter_content clear">
                    <ul className="a_c_list">
                        <li>
                            <span>用户名：</span>
                            <i>{alterData.username}</i>
                        </li>
                        <li>
                            <span>契约类型：</span>
                            <i>{title}</i>
                        </li>
                    </ul>
                    {textDescribe}
                    <div className={this.isSign()}>
                        <p>{alterData.username}</p>
                        <p>{common.setDateTime(0)}</p>
                    </div>
                    {
                        stateVar.userInfo.userName == alterData.username ?
                            <div className="a_c_btn_one">
                                <Button onClick={()=>this.onCancel()}>关闭</Button>
                            </div> :
                            <div className="a_c_btn">
                                <Button loading={this.props.affirmLoading}
                                        onClick={()=>this.onAffirm()}
                                        className="a_c_cancel_btn"
                                >
                                    {contract_name}
                                </Button>
                                <Button onClick={()=>this.onCancel()}
                                >
                                    关闭
                                </Button>
                            </div>
                    }
                </div>
            </Modal>
        )
    }
}
