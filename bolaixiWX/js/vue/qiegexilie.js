(function loadData(){
	var data = {
		prodList: [
			{
				name: 'BA116 1400瓦 110毫米云石机',
				type: '平云石机',
				link: '/prods/qiege/prod_BA116.html',
				imageUrl: '/prods/img/BA116_min.png'
			}
		]
	};
	
	
	var instance = new Vue({
		el: '#qiegexilie',
		data: data
	});
})()
