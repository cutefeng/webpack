module.exports = {
	entry:"./js/index.js",//入口文件
	output:{//输出文件
		 path: __dirname,
		 filename:"bundle.js"
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:"babel-loader"},
			{test:/\.css$/,loader:"style-loader!css-loader"}
		]
	}

}