import './TodoTemplate.scss';
import '../App.css';

// 날짜 
const TodoTemplate = ({ children }) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleString('ko-KR', {
        weekday: 'long'
    })

    return (
        <div className="TodoTemplate">
            {/* 헤더 */}
            {/* <div className="app-title">일정관리</div> */}
            <header>
                <div class="nav">
                    <h1 class="logo"><a href="#">TodoList</a></h1>
                    <div class="navWrap">
                        <ul class="menu">
                            <li><a href="#">회원가입</a>
                                <div class="bar"></div>
                            </li>
                            <li><a href="#">로그인</a>
                                <div class="bar"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 날짜 */}
                <div className="app-date">
                    <div>{dateString}<br></br>{dayName}</div>
                </div>
            </header>

            <div className="content">{children}</div>
        </div>
    )
}
export default TodoTemplate;