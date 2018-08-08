//首页
import React, { Component } from 'react';
import $ from 'jquery';
import './css/base.css';
import './css/app.scss';
import Home from "./components/Home";
import Nv from "./components/Nv";
import Nan from "./components/Nan";
import DingZhi from "./components/DingZhi";
import RenQi from "./components/RenQi";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import l1 from './img/lin1.png';
import linfor1 from './data/linfo-1';
import Mock from 'mockjs';
Mock.mock("http://www.zhayanwang.com/sou",linfor1);
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			arr:[],
			arr1:[],
			arr2:[],
			cart:0
		}
	}
//请求搜索框美衣，设计师的数据
	sou(){
	  		
  	}
	componentDidMount(){
		console.log('componentDidMount');
		var _this = this;
//头部搜索框上下内容请求数据		
		var arr3 = [];
		var arr4 = [];
		$.ajax({
			type:"get",
			url:"http://www.zhayanwang.com/sou",
			dataType:"json",
			async:true,
			success:function(data){
				_this.setState({arr:data.sou});
				_this.state.arr.map(function(item,i){
				  	arr3.push(item.kind);
				  	arr4.push(item.name);
				})
				_this.setState({arr1:arr3});
				_this.setState({arr2:arr4});  
			}
	  	});
//给搜索框的美衣、设计师添加开关事件
		$('.l-input-p-span').eq(0).addClass('l-input-span1');
		$('.l-input-p-span').click(function(){
			$(this).siblings('span').removeClass('l-input-span1');
			$(this).addClass('l-input-span1');
			var i = $(this).index();
			$('.l-input-p2').children("p").eq(i).css('display','block').siblings('p').css('display','none');
		})
//导航点击时下面显示三角
		$('.l-Router-one').click(function(){
			$(this).children('em').addClass("sanjiao");
			$(this).siblings().children('em').removeClass('sanjiao');
		})
//分类导航栏的鼠标滑入划出事件
		/*console.log($('.l-Router-fenlei'))
		$('.l-Router-fenlei').click(function(){
			
		})
		(".l-Router-fenlei").on('mouseout',function(){
			$('.fenlei').hide();
		})*/
	}
  render() {
  	var _this = this;
    return (
    	<div>
	      <div className="l-header-wrap">
			    <div className="l-header">
			        <div className="l-head">
			          	<img src={l1} />
			        </div>
			        <div className="l-input">
				        <p className="l-input-p">
				          	<span className="l-input-p-span">美衣</span>
				          	<span className="l-input-p-span">设计师</span>
				        </p>
				        <div className = "l-input-input">
				          	<input typ="text" placeholder="搜美衣" id="sou" />
				          	<span onClick={this.sou.bind(this)}>搜索</span>
				        </div>
				        <div className = "l-input-p2">
				          	<p>
				          		{
				          			_this.state.arr1.map(function(item,i){
				          				return <span key={i}>{item}</span>;
				          			})
				          		}
				          	</p>
				          	<p>
				          		{
				          			_this.state.arr2.map(function(item,i){
				          				return <span key={i}>{item}</span>;
				          			})
				          		}
				          	</p>	
				        </div>
			        </div>
				</div>
	    </div>
	    <div className="fenlei">
	    	fenlei
	    </div>
	    <div className="l-Router-wrap">
			<Router >
				<div>
					<div className="l-Router-fenlei">
						分类
				    </div>
					<div className="l-Router">
						<Link to="/home" className="l-Router-one">首页<em className="sanjiao"></em></Link>
						<Link to="/nv" className="l-Router-one">女装<em></em></Link>
						<Link to="/nan" className="l-Router-one">男装<em></em></Link>
						<Link to="/dingzhi" className="l-Router-one">服装定制<em></em></Link>
						<Link to="/renqi" className="l-Router-one">人气单品<em></em></Link>
						<Link to="/cart" className="l-Router-two">购物车({_this.state.cart})</Link>
						<Link to="/login" className="l-Router-two">登录<span>|</span></Link>
						<Link to="/register" className="l-Router-two">注册<span>|</span></Link>
					</div>
					<div>
						<Switch>
							<Route path='/home' component={Home}></Route>
							<Route path="/nv" component={Nv}></Route>
							<Route path="/nan" component={Nan}></Route>
							<Route path="/dingzhi" component={DingZhi}></Route>
							<Route path="/renqi" component={RenQi}></Route>
							<Route path="/register" component={Register}></Route>
							<Route path="/login" component={Login}></Route>
							<Route path="/cart" component={Cart}></Route>
							<Redirect to="/home"/>
						</Switch>
					</div>
			</div>
			</Router>
		</div>
	</div>
    );
  }
}

export default App;
