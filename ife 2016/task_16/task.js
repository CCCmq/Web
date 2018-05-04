/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [];
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById('aqi-city-input');
	var quality = document.getElementById('aqi-value-input');
	aqiData.push([city.value,quality.value]);

	var tr = document.createElement("tr");
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var table = document.getElementById('aqi-table');
	table.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	td1.textContent = aqiData[0][0];
	td2.textContent= aqiData[0][1];
	td3.innerHTML = "<button onclick='delBtnHandle(this)'>删除</button>";

	city.value = "";
	quality.value = "";
	city.focus();

	aqiData.pop();
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
  var del = obj.parentNode.parentNode;
  del.parentNode.removeChild(del);
  renderAqiList();


}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}
