import Mock from 'mockjs';
var Random = Mock.Random;
		Random.extend({
		    constellation: function(date) {
		        var constellations = ['连衣裙', '长裤', '衬衣', '半身裙', 'T恤','晚礼服','短裙','A字裙','短裤','碎花裙','婚纱','伴娘服'];
		        return this.pick(constellations);
		    }
		});
var linfo1 = Mock.mock({
	"sou|4":[
		{
			"kind":"@constellation",
			"name":"@name"
		}
	]
});
export default linfo1;