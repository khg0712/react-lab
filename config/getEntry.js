import getPath from './getPath';

export default function getEnty(path){
	let entry = {};
	getPath(path).map((item)=>{
		/**
		 * 下面输出格式为{"about/about":".src/aobout/index.js"}
		 * 这样目的是为了将js打包到对应的文件夹下
		 */
		entry[`${item}/${item}`] = `${path}/${item}/index.js`;
	});
	return entry;
};