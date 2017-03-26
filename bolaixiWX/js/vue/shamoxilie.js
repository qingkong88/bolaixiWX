(function loadData(){
	var data = {
		prodList: [
			{
				name: 'BA330 92*180毫米-300瓦',
				type: '平板式砂光机',
				link: '/prods/shamo/prod_BA330.html',
				imageUrl: '/prods/img/BA330_min.png'
			},
			{
				name: 'BA3260 113*102毫米-260瓦',
				type: '平板式砂光机',
				link: '/prods/shamo/prod_BA3260.html',
				imageUrl: '/prods/img/BA3260_min.png'
			}
		]
	};
	
	
	var instance = new Vue({
		el: '#shamoxilie',
		data: data
	});
})()
