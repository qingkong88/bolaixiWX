(function loadData(){
	var data = {
		prodList: [
			{
				name: 'BA7100 550瓦',
				type: '侧开关直磨机',
				link: '/prods/zhimo/prod_BA710.html',
				imageUrl: '/prods/img/BA710_min.png'
			},
			{
				name: 'BA712 550瓦',
				type: '后开关直磨机',
				link: '/prods/zhimo/prod_BA712.html',
				imageUrl: '/prods/img/BA712_min.png'
			}
		]
	};
	
	
	var instance = new Vue({
		el: '#zhimoxilie',
		data: data
	});
})()
