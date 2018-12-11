const element = (
<div>
    <header className="header">
        <div className="logo">
            <img src="img/logo.png" alt="" />
        </div>
        <div className="nav">
            <div className="header-right"><img src="img/nav1.png" alt="" /></div>
            <div className="header-right"><img src="img/nav2.png" alt="" /></div>
            <div className="header-right"><img src="img/nav3.png" alt="" /></div>
            <div className="header-right"><img src="img/nav4.png" alt="" /></div>
            <div className="header-right"><img src="img/nav5.png" alt="" /></div>
            <div className="header-right"><img src="img/nav6.png" alt="" /></div>
            <div className="header-right"><img src="img/nav7.png" alt="" /></div>
        </div>
    </header>
    <div className="content">
        <div className="left-nav">
            <ul className="nav-content">
                <li><img src="img/lnav1.png" alt="商品管理" />商品管理</li>
                <li><img src="img/lnav2.gif" alt="商家管理" />商家管理</li>
                <li><img src="img/lnav3.gif" alt="订单管理" />订单管理</li>
                <li><img src="img/lnav4.gif" alt="广告管理" />广告管理</li>
                <li><img src="img/lnav5.gif" alt="会员管理" />会员管理</li>
                <li><img src="img/lnav6.gif" alt="权限管理" />权限管理</li>
                <li><img src="img/lnav7.gif" alt="员工管理" />员工管理</li>
                <li><img src="img/lnav8.gif" alt="员工考勤" />员工考勤</li>
                <li><img src="img/lnav9.gif" alt="报表统计" />报表统计</li>
            </ul>
        </div>
        <div className="right-content">
            <div className="location">
                <img src="img/location.png" alt="当前位置"/><span>当前位置：</span>
            </div>
            <div className="detail">
                <form action="">
                    <ul className="det">
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                        <li><span>员工</span><input type="text" className="input-text" /></li>
                    </ul>
                    <div className="but">
                        <input className="button" type="button" value="确定" />
                            <input className="button" type="button" value="重置" />
                    </div>
                </form>
            </div>
            <div className="foot">
                <span>车之翼</span>&nbsp;<span>版权所有</span>&nbsp;<span>All Rights Reserved</span>&nbsp;
                <span>[皖ICP备1503872号]</span>
            </div>
        </div>
    </div>
</div>
)


ReactDOM.render(
    element,
    document.getElementById('app')
)