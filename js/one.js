//轮播图
window.onload = function(){
		//1、创建轮播图（包括页面）
		var l = new AutoPlayerImgs(
			"banner",
			1278,
			400,
			["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"],
			["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.sohu.com","http://www.mobiletrain.org"],
			2000,
			{width:20,height:20,bgColor:"gray",highLightColor:"red"}
		);
		l.go();	
}