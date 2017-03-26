(function loadData(){
	var data = {
		prodList: [
			{
				name: 'BA280 800瓦',
				type: '3功能电锤',
				link: '/prods/chuizuan/prod_BA280.html',
				imageUrl: '/prods/img/BA280_min.png'
			},
			{
				name: 'BA632 320瓦10MM',
				type: '手电钻',
				link: '/prods/chuizuan/prod_BA632.html',
				imageUrl: '/prods/img/BA632_min.png'
			},
			{
				name: 'BA650 10MM-450瓦',
				type: '手电钻',
				link: '/prods/chuizuan/prod_BA650.html',
				imageUrl: '/prods/img/BA650_min.png'
			},
			{
				name: 'BA660 13MM-650瓦',
				type: '手电钻',
				link: '/prods/chuizuan/prod_BA660.html',
				imageUrl: '/prods/img/BA660_min.png'
			},
		]
	};
	
	
	var instance = new Vue({
		el: '#chuizuanxilie',
		data: data
	});
})()
