/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts:false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	},
			 images: {
			domains: ['basket-01.wb.ru', 
			'basket-02.wb.ru', 
			'basket-03.wb.ru', 
			'basket-04.wb.ru', 
			'basket-05.wb.ru', 
			'basket-06.wb.ru', 
			'basket-07.wb.ru', 
			'basket-08.wb.ru', 
			'basket-09.wb.ru', 
			'basket-10.wb.ru', 
			'basket-11.wb.ru', 
			'basket-12.wb.ru', 
			'basket-13.wb.ru', 
			'basket-14.wb.ru', 
			'basket-15.wb.ru', 
			'basket-16.wb.ru', 
			'basket-17.wb.ru', 
			'basket-18.wb.ru', 
			'basket-19.wb.ru', 
			'basket-20.wb.ru']
		},
	
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*',
			},
			{
				source: "/uploads/:path*",
				destination: 'http://localhost:4200/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
