import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import '../App.scss';
//jdbc:mysql://localhost:3306?serverTimezone=UTC
//web02board password : dgsw_302
@inject('stores')
@observer
class Home extends Component {
    state={
        value: 1
    };
    render() {
        let t = this.props.stores.TimeStore;
        let p = this.props.stores.PostStore;
        return (
            <div>
                <div>{t.current_time && t.current_time.toString()}</div>
                <div>{t.ms}</div>
                <div><button onClick={t.getTime}>getTime from timestore</button></div>
                <div>{p.current_time && p.current_time.toString()}</div>
                <div><button onClick={p.getTime}>getTime from poststore</button></div>
                <div className='post-list'>
                    <ul>
                        <li>
                            <div>번호</div>
                            <div>제목</div>
                            <div>작성자</div>
                            <div>작성일</div>
                            <div>조회수</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;