var vis = {};

var selector1 = document.querySelector('#selector');
var inst = new mdui.Select(selector,{"gutter": 24});

selector1.addEventListener('change', function() {
  // 当选择发生变化时执行的操作
  var selectedOption = selector1.value;
  resetYData(parseInt(selectedOption));
});

window.addEventListener('scroll', function() {
  var header = document.getElementsByTagName('header')[0];
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    header.style.background = 'transparent';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.8)';
  }
  var chartList = ['chart1','chart2','chart3','chart4','chart5'];
  // 遍历chartList中的元素，判断是否在可视区域内
  for (var i = 0; i < chartList.length; i++) {
    var chart = document.getElementById(chartList[i]);
    var chartTop = chart.getBoundingClientRect().top;
    var chartBottom = chart.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    if (chartTop < windowHeight && chartBottom > 0) {
      // 在可视区域内
      if (chartList[i] == 'chart1' && !vis[chartList[i]]) {
        setTimeout(activiteChart1(), 2000); 
        // id area1 中的chartText类由一个从下到上的动画进入
        document.getElementById('area1').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
        vis[chartList[i]] = true;
      }
      if (chartList[i] == 'chart2' && !vis[chartList[i]]) {
        setTimeout(activiteChart2(), 2000);
        document.getElementById('area2').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
        vis[chartList[i]] = true;
      }
      if (chartList[i] == 'chart3' && !vis[chartList[i]]) {
        setTimeout(activiteChart3(), 2000);
        document.getElementById('area3').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
        vis[chartList[i]] = true;
      }
      if (chartList[i] == 'chart4' && !vis[chartList[i]]) {
        setTimeout(activiteChart4(), 2000);
        document.getElementById('area4').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
        vis[chartList[i]] = true;
      }
      if (chartList[i] == 'chart5' && !vis[chartList[i]]) {
        setTimeout(activiteChart5(), 2000);
        document.getElementById('area5').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
        vis[chartList[i]] = true;
      }
    }
  }
});

window.addEventListener('scroll', function() {
  var navLinks = document.querySelectorAll('nav a'); // 替换为适当的选择器
  var chartsSection = document.querySelector('.chartt'); // 替换为适当的选择器

  // 获取滚动距离和charts区域位置
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var chartsOffsetTop = chartsSection.offsetTop;
  link = navLinks[0];
  // 判断滚动位置是否在charts区域
  if (scrollTop >= chartsOffsetTop-200 && scrollTop < chartsOffsetTop + chartsSection.offsetHeight) {
    // 在charts区域中，添加样式
    link.style.boxShadow = '0 0 10px rgba(49, 160, 160, 0.5)';
    link.style.borderBottom = '2px solid rgb(49, 160, 160)';
    link.style.color = 'rgb(49, 160, 160)';
  } else {
    // 不在charts区域中，移除样式
    link.style.boxShadow = '';
    link.style.borderBottom = '';
    link.style.color = 'rgb(150, 150, 150)';
  }

  var mapSection = document.querySelector('#map'); // 替换为适当的选择器
  var mapOffsetTop = mapSection.offsetTop;
  link = navLinks[1];
  // 判断滚动位置是否在charts区域
  if (scrollTop >= mapOffsetTop && scrollTop < mapOffsetTop + mapSection.offsetHeight) {
    // 在charts区域中，添加样式
    link.style.boxShadow = '0 0 10px rgba(49, 160, 160, 0.5)';
    link.style.borderBottom = '2px solid rgb(49, 160, 160)';
    link.style.color = 'rgb(49, 160, 160)';
  } else {
    // 不在charts区域中，移除样式
    link.style.boxShadow = '';
    link.style.borderBottom = '';
    link.style.color = 'rgb(150, 150, 150)';
  }

  var aboutSection = document.querySelector('#about'); // 替换为适当的选择器
  var aboutOffsetTop = aboutSection.offsetTop;
  link = navLinks[2];
  // 判断滚动位置是否在charts区域
  if (scrollTop >= aboutOffsetTop && scrollTop < aboutOffsetTop + aboutSection.offsetHeight) {
    // 在charts区域中，添加样式
    link.style.boxShadow = '0 0 10px rgba(49, 160, 160, 0.5)';
    link.style.borderBottom = '2px solid rgb(49, 160, 160)';
    link.style.color = 'rgb(49, 160, 160)';
  } else {
    // 不在charts区域中，移除样式
    link.style.boxShadow = '';
    link.style.borderBottom = '';
    link.style.color = 'rgb(150, 150, 150)';
  }
});

async function activiteChart1(){
  var chartDom2 = document.getElementById("chart1");
  var myChart2 = echarts.init(chartDom2);
  var option2;
  // prettier-ignore
  let dataAxis = ['晋', '豫', '冀', '浙', '川', '陕', '苏', '湘', '鲁', '赣', '闽', '皖', '鄂', '滇', '甘', '辽', '蒙', '京', '新', '粤', '吉', '桂', '黔', '藏', '黑', '渝', '青', '沪', '琼', '宁', '津'];
  // prettier-ignore
  let data = [539, 430, 304, 300, 289, 283, 261, 234, 230, 190, 179, 178, 177, 170, 161, 154, 148, 140, 136, 133, 97, 84, 81, 71, 70, 62, 51, 42, 37, 36, 27];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  option2 = {
    // title: {
    //   text: '全国重点文物保护单位各省空间分布数量分析',
    //   subtext: '数据来自中国八批重点文物保护单位名单，截至2023年5月共八批'
    // },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    animationDuration: 2000,
    animationDelay: 500,
    animationDurationUpdate: 1000,
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: data
      }
    ]
  };
  // Enable data zoom when user click bar.
  const zoomSize = 6;
  myChart2.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart2.dispatchAction({
      type: 'dataZoom',
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
  });
  
  option2 && myChart2.setOption(option2);
}

async function activiteChart2(){
  var chartDom = document.getElementById("chart2");
  var myChart = echarts.init(chartDom);
  var option;

  setTimeout(function () {
    option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      toolbox: {
        feature: {
          dataView: {}
        }
      },
      animationDuration: 2000,
      animationDelay: 1000,
      dataset: {
        source: [
          ['product', '1961', '1982', '1988', '1996', '2001', '2006', '2013', '2019'],
          ['古建筑', 77, 28, 111, 110, 248, 513, 804, 283],
          ['古墓葬', 19, 7, 29, 22, 50, 77, 195, 35],
          ['古遗址', 26, 10, 49, 54, 144, 221, 528, 177],
          ['代表性、纪念性建筑物', 33, 10, 41, 52, 41, 206, 344, 259],
          ['石窟寺、石刻及其他', 25, 7, 28, 12, 37, 64, 120, 58]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
  
    myChart.setOption(option);
  });

  option && myChart.setOption(option);
}

async function activiteChart3(){
  var chartDom3 = document.getElementById("chart3");
  var myChart3 = echarts.init(chartDom3);
  var option3;
  
  option3 = {
    animationDuration: 2000,
    animationDelay: 1000,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    toolbox: {
      feature: {
        dataView: {}
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['第八批(812)', '第七批(1991)', '第六批(1186)', '第五批(543)', '第四批(262)', '第三批(258)', '第二批(62)', '第一批(180)']
    },
    series: [
      {
        name: '石窟寺、石刻及其他',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [58, 120, 64, 37, 12, 28, 7, 25]
      },
      {
        name: '古建筑',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [283, 804, 513, 248, 110, 111, 28, 77]
      },
      {
        name: '古遗址',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [177, 528, 221, 144, 54, 49, 10, 26]
      },
      {
        name: '近现代重要史迹及代表性建筑革命遗址及革命纪念建筑物',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [259, 344, 206, 41, 52, 41, 10, 33]
      },
      {
        name: '古墓葬',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [35, 195, 77, 50, 22, 29, 7, 19]
      }
    ]
  };
  
  option3 && myChart3.setOption(option3);
}

async function activiteChart4(){
  var chartDom4 = document.getElementById("chart4");
  var myChart4 = echarts.init(chartDom4);
  var option4;
  
  option4 = {
    animationDuration: 2000,
    animationDelay: 1000,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['古遗址', '古建筑', '近现代重要史迹及代表性建筑', '革命遗址及革命纪念建筑物', '古墓葬', '合并项目', '石窟寺、石刻及其他']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        dataView: {}
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel:{  interval: 0},
        data: ['旧石器', '新石器', '夏', '商', '西周', '东周', '秦', '汉', '三国', '晋', '南北朝', '隋', '唐', '五代十国', '宋', '辽', '金', '元', '明', '清', '中华民国', '中国']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '古遗址',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [100, 362, 32, 39, 52, 121, 24, 112, 7, 9, 31, 15, 93, 7, 74, 26,	29, 25, 37, 14, 0, 0]
      },
      {
        name: '古墓葬',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 6, 18, 6, 22, 54, 4, 108, 13, 8, 12, 6, 32, 10, 29, 15, 3, 18, 43, 26, 0, 1]
      },
      {
        name: '古建筑',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 0, 5, 5, 19, 0, 0, 7, 4, 91, 23, 279, 48, 94, 236, 748, 609, 6, 0]
      },
      {
        name: '近现代重要史迹及代表性建筑',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 275, 543, 78]
      },
      {
        name: '革命遗址及革命纪念建筑物',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 28, 45, 8]
      },
      {
        name: '合并项目',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1, 0, 0, 0, 1, 5, 0, 17, 0, 2, 6, 3, 15, 2, 10, 2, 2, 2, 16, 11, 46, 0]
      },
      {
        name: '石窟寺、石刻及其他',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1, 11, 0, 0, 1, 6, 0, 16, 3, 4, 74, 12, 86, 7, 66, 2, 7, 12, 28, 13, 1, 1]
      }
    ]
  };
  
  option4 && myChart4.setOption(option4);
}

function getLevelOption() {
  return [
    {
      itemStyle: {
        borderWidth: 0,
        gapWidth: 5,
      },
    },
    {
      itemStyle: {
        gapWidth: 1,
      },
    },
    {
      colorSaturation: [0.15, 0.75],
      itemStyle: {
        gapWidth: 1,
        borderColorSaturation: 0.6,
      },
    },
  ];
}

async function activiteChart5(){
  var chartDom5 = document.getElementById("chart5");
  var myChart5 = echarts.init(chartDom5);
  var option5;
  
  option5 = {
    animationDuration: 1000,
    animationDelay: 500,
    tooltip: {
      formatter: function (info) {
        var value = info.value;
        return ['<div class="tooltip-title">' +
        info.name +
        '</div>',,"\n总个数: " + value].join("");
      },
    },
    series: [
      {
        type: "treemap",
        visibleMin: 300,
        label: {
          show: true,
          formatter: "{b}",
        },
        upperLabel: {
          show: true,
          height: 20,
        },
        itemStyle: {
          borderColor: "#fff",
        },
        levels: getLevelOption(),
        data: [
          {
            name: "山西",
            value: 539,
            children: [
              {
                name: "上古",
                value: 18,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 21,
              },
              {
                name: "春秋",
                value: 2,
              },
              {
                name: "战国",
                value: 1,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 6,
              },
              {
                name: "三国两晋南北朝",
                value: 22,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 17,
              },
              {
                name: "五代十国",
                value: 4,
              },
              {
                name: "宋",
                value: 128,
              },
              {
                name: "元",
                value: 125,
              },
              {
                name: "明",
                value: 122,
              },
              {
                name: "清",
                value: 44,
              },
              {
                name: "民国",
                value: 26,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "河南",
            value: 430,
            children: [
              {
                name: "上古",
                value: 73,
              },
              {
                name: "夏",
                value: 7,
              },
              {
                name: "商",
                value: 11,
              },
              {
                name: "周",
                value: 28,
              },
              {
                name: "春秋",
                value: 5,
              },
              {
                name: "战国",
                value: 9,
              },
              {
                name: "秦",
                value: 3,
              },
              {
                name: "汉",
                value: 33,
              },
              {
                name: "三国两晋南北朝",
                value: 22,
              },
              {
                name: "隋",
                value: 3,
              },
              {
                name: "唐",
                value: 23,
              },
              {
                name: "五代十国",
                value: 6,
              },
              {
                name: "宋",
                value: 62,
              },
              {
                name: "元",
                value: 19,
              },
              {
                name: "明",
                value: 54,
              },
              {
                name: "清",
                value: 42,
              },
              {
                name: "民国",
                value: 22,
              },
              {
                name: "新中国",
                value: 8,
              },
            ],
          },
          {
            name: "河北",
            value: 304,
            children: [
              {
                name: "上古",
                value: 20,
              },
              {
                name: "夏",
                value: 3,
              },
              {
                name: "商",
                value: 4,
              },
              {
                name: "周",
                value: 6,
              },
              {
                name: "春秋",
                value: 2,
              },
              {
                name: "战国",
                value: 13,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 13,
              },
              {
                name: "三国两晋南北朝",
                value: 16,
              },
              {
                name: "隋",
                value: 4,
              },
              {
                name: "唐",
                value: 18,
              },
              {
                name: "五代十国",
                value: 4,
              },
              {
                name: "宋",
                value: 56,
              },
              {
                name: "元",
                value: 18,
              },
              {
                name: "明",
                value: 62,
              },
              {
                name: "清",
                value: 41,
              },
              {
                name: "民国",
                value: 20,
              },
              {
                name: "新中国",
                value: 3,
              },
            ],
          },
          {
            name: "浙江",
            value: 300,
            children: [
              {
                name: "上古",
                value: 23,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 3,
              },
              {
                name: "春秋",
                value: 7,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 6,
              },
              {
                name: "三国两晋南北朝",
                value: 5,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 16,
              },
              {
                name: "五代十国",
                value: 12,
              },
              {
                name: "宋",
                value: 47,
              },
              {
                name: "元",
                value: 17,
              },
              {
                name: "明",
                value: 61,
              },
              {
                name: "清",
                value: 73,
              },
              {
                name: "民国",
                value: 24,
              },
              {
                name: "新中国",
                value: 4,
              },
            ],
          },
          {
            name: "四川",
            value: 289,
            children: [
              {
                name: "上古",
                value: 8,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 3,
              },
              {
                name: "周",
                value: 2,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 4,
              },
              {
                name: "秦",
                value: 2,
              },
              {
                name: "汉",
                value: 23,
              },
              {
                name: "三国两晋南北朝",
                value: 4,
              },
              {
                name: "隋",
                value: 5,
              },
              {
                name: "唐",
                value: 34,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 33,
              },
              {
                name: "元",
                value: 14,
              },
              {
                name: "明",
                value: 53,
              },
              {
                name: "清",
                value: 72,
              },
              {
                name: "民国",
                value: 25,
              },
              {
                name: "新中国",
                value: 5,
              },
            ],
          },
          {
            name: "陕西",
            value: 282,
            children: [
              {
                name: "上古",
                value: 32,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 4,
              },
              {
                name: "周",
                value: 9,
              },
              {
                name: "春秋",
                value: 2,
              },
              {
                name: "战国",
                value: 9,
              },
              {
                name: "秦",
                value: 13,
              },
              {
                name: "汉",
                value: 27,
              },
              {
                name: "三国两晋南北朝",
                value: 7,
              },
              {
                name: "隋",
                value: 8,
              },
              {
                name: "唐",
                value: 43,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 29,
              },
              {
                name: "元",
                value: 12,
              },
              {
                name: "明",
                value: 38,
              },
              {
                name: "清",
                value: 14,
              },
              {
                name: "民国",
                value: 33,
              },
              {
                name: "新中国",
                value: 0,
              },
            ],
          },
          {
            name: "湖南",
            value: 234,
            children: [
              {
                name: "上古",
                value: 21,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 6,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 8,
              },
              {
                name: "秦",
                value: 2,
              },
              {
                name: "汉",
                value: 10,
              },
              {
                name: "三国两晋南北朝",
                value: 3,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 7,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 19,
              },
              {
                name: "元",
                value: 0,
              },
              {
                name: "明",
                value: 32,
              },
              {
                name: "清",
                value: 78,
              },
              {
                name: "民国",
                value: 40,
              },
              {
                name: "新中国",
                value: 3,
              },
            ],
          },
          {
            name: "山东",
            value: 230,
            children: [
              {
                name: "上古",
                value: 52,
              },
              {
                name: "夏",
                value: 1,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 22,
              },
              {
                name: "春秋",
                value: 4,
              },
              {
                name: "战国",
                value: 4,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 13,
              },
              {
                name: "三国两晋南北朝",
                value: 19,
              },
              {
                name: "隋",
                value: 3,
              },
              {
                name: "唐",
                value: 6,
              },
              {
                name: "五代十国",
                value: 1,
              },
              {
                name: "宋",
                value: 20,
              },
              {
                name: "元",
                value: 5,
              },
              {
                name: "明",
                value: 27,
              },
              {
                name: "清",
                value: 32,
              },
              {
                name: "民国",
                value: 16,
              },
              {
                name: "新中国",
                value: 2,
              },
            ],
          },
          {
            name: "江西",
            value: 190,
            children: [
              {
                name: "上古",
                value: 8,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 4,
              },
              {
                name: "周",
                value: 2,
              },
              {
                name: "春秋",
                value: 1,
              },
              {
                name: "战国",
                value: 1,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 4,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 12,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 25,
              },
              {
                name: "元",
                value: 4,
              },
              {
                name: "明",
                value: 28,
              },
              {
                name: "清",
                value: 30,
              },
              {
                name: "民国",
                value: 66,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "福建",
            value: 179,
            children: [
              {
                name: "上古",
                value: 10,
              },
              {
                name: "夏",
                value: 1,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 1,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 1,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 6,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 41,
              },
              {
                name: "元",
                value: 5,
              },
              {
                name: "明",
                value: 36,
              },
              {
                name: "清",
                value: 53,
              },
              {
                name: "民国",
                value: 18,
              },
              {
                name: "新中国",
                value: 2,
              },
            ],
          },
          {
            name: "安徽",
            value: 178,
            children: [
              {
                name: "上古",
                value: 18,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 4,
              },
              {
                name: "春秋",
                value: 2,
              },
              {
                name: "战国",
                value: 2,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 4,
              },
              {
                name: "三国两晋南北朝",
                value: 4,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 9,
              },
              {
                name: "五代十国",
                value: 1,
              },
              {
                name: "宋",
                value: 17,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 51,
              },
              {
                name: "清",
                value: 43,
              },
              {
                name: "民国",
                value: 14,
              },
              {
                name: "新中国",
                value: 5,
              },
            ],
          },
          {
            name: "湖北",
            value: 176,
            children: [
              {
                name: "上古",
                value: 24,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 23,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 6,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 0,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 6,
              },
              {
                name: "五代十国",
                value: 1,
              },
              {
                name: "宋",
                value: 8,
              },
              {
                name: "元",
                value: 6,
              },
              {
                name: "明",
                value: 26,
              },
              {
                name: "清",
                value: 32,
              },
              {
                name: "民国",
                value: 34,
              },
              {
                name: "新中国",
                value: 6,
              },
            ],
          },
          {
            name: "云南",
            value: 169,
            children: [
              {
                name: "上古",
                value: 13,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 2,
              },
              {
                name: "春秋",
                value: 3,
              },
              {
                name: "战国",
                value: 3,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 6,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 15,
              },
              {
                name: "五代十国",
                value: 1,
              },
              {
                name: "宋",
                value: 2,
              },
              {
                name: "元",
                value: 9,
              },
              {
                name: "明",
                value: 34,
              },
              {
                name: "清",
                value: 49,
              },
              {
                name: "民国",
                value: 24,
              },
              {
                name: "新中国",
                value: 5,
              },
            ],
          },
          {
            name: "甘肃",
            value: 161,
            children: [
              {
                name: "上古",
                value: 24,
              },
              {
                name: "夏",
                value: 3,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 4,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 4,
              },
              {
                name: "秦",
                value: 2,
              },
              {
                name: "汉",
                value: 20,
              },
              {
                name: "三国两晋南北朝",
                value: 22,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 3,
              },
              {
                name: "五代十国",
                value: 2,
              },
              {
                name: "宋",
                value: 17,
              },
              {
                name: "元",
                value: 6,
              },
              {
                name: "明",
                value: 31,
              },
              {
                name: "清",
                value: 8,
              },
              {
                name: "民国",
                value: 13,
              },
              {
                name: "新中国",
                value: 0,
              },
            ],
          },
          {
            name: "辽宁",
            value: 154,
            children: [
              {
                name: "上古",
                value: 17,
              },
              {
                name: "夏",
                value: 4,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 1,
              },
              {
                name: "春秋",
                value: 1,
              },
              {
                name: "战国",
                value: 1,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 26,
              },
              {
                name: "三国两晋南北朝",
                value: 8,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 3,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 30,
              },
              {
                name: "元",
                value: 0,
              },
              {
                name: "明",
                value: 11,
              },
              {
                name: "清",
                value: 26,
              },
              {
                name: "民国",
                value: 18,
              },
              {
                name: "新中国",
                value: 6,
              },
            ],
          },
          {
            name: "内蒙古",
            value: 148,
            children: [
              {
                name: "上古",
                value: 32,
              },
              {
                name: "夏",
                value: 4,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 2,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 2,
              },
              {
                name: "秦",
                value: 1,
              },
              {
                name: "汉",
                value: 11,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 2,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 32,
              },
              {
                name: "元",
                value: 12,
              },
              {
                name: "明",
                value: 5,
              },
              {
                name: "清",
                value: 29,
              },
              {
                name: "民国",
                value: 11,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "北京",
            value: 133,
            children: [
              {
                name: "上古",
                value: 2,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 1,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 0,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 3,
              },
              {
                name: "唐",
                value: 0,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 7,
              },
              {
                name: "元",
                value: 8,
              },
              {
                name: "明",
                value: 39,
              },
              {
                name: "清",
                value: 50,
              },
              {
                name: "民国",
                value: 14,
              },
              {
                name: "新中国",
                value: 9,
              },
            ],
          },
          {
            name: "新疆",
            value: 140,
            children: [
              {
                name: "上古",
                value: 16,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 2,
              },
              {
                name: "春秋",
                value: 3,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 22,
              },
              {
                name: "三国两晋南北朝",
                value: 14,
              },
              {
                name: "隋",
                value: 2,
              },
              {
                name: "唐",
                value: 34,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 0,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 6,
              },
              {
                name: "清",
                value: 24,
              },
              {
                name: "民国",
                value: 8,
              },
              {
                name: "新中国",
                value: 6,
              },
            ],
          },
          {
            name: "广东",
            value: 133,
            children: [
              {
                name: "上古",
                value: 8,
              },
              {
                name: "夏",
                value: 1,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 2,
              },
              {
                name: "汉",
                value: 2,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 9,
              },
              {
                name: "五代十国",
                value: 3,
              },
              {
                name: "宋",
                value: 11,
              },
              {
                name: "元",
                value: 1,
              },
              {
                name: "明",
                value: 22,
              },
              {
                name: "清",
                value: 45,
              },
              {
                name: "民国",
                value: 27,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "吉林",
            value: 97,
            children: [
              {
                name: "上古",
                value: 11,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 5,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 5,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 13,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 11,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 17,
              },
              {
                name: "元",
                value: 0,
              },
              {
                name: "明",
                value: 4,
              },
              {
                name: "清",
                value: 9,
              },
              {
                name: "民国",
                value: 18,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "广西",
            value: 84,
            children: [
              {
                name: "上古",
                value: 13,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 2,
              },
              {
                name: "秦",
                value: 2,
              },
              {
                name: "汉",
                value: 4,
              },
              {
                name: "三国两晋南北朝",
                value: 1,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 2,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 6,
              },
              {
                name: "元",
                value: 0,
              },
              {
                name: "明",
                value: 14,
              },
              {
                name: "清",
                value: 16,
              },
              {
                name: "民国",
                value: 23,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "贵州",
            value: 81,
            children: [
              {
                name: "上古",
                value: 4,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 2,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 4,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 2,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 2,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 28,
              },
              {
                name: "清",
                value: 21,
              },
              {
                name: "民国",
                value: 13,
              },
              {
                name: "新中国",
                value: 3,
              },
            ],
          },
          {
            name: "西藏",
            value: 67,
            children: [
              {
                name: "上古",
                value: 4,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 1,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 13,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 9,
              },
              {
                name: "元",
                value: 6,
              },
              {
                name: "明",
                value: 16,
              },
              {
                name: "清",
                value: 12,
              },
              {
                name: "民国",
                value: 1,
              },
              {
                name: "新中国",
                value: 5,
              },
            ],
          },
          {
            name: "黑龙江",
            value: 70,
            children: [
              {
                name: "上古",
                value: 8,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 1,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 4,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 3,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 6,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 14,
              },
              {
                name: "元",
                value: 1,
              },
              {
                name: "明",
                value: 2,
              },
              {
                name: "清",
                value: 12,
              },
              {
                name: "民国",
                value: 16,
              },
              {
                name: "新中国",
                value: 2,
              },
            ],
          },
          {
            name: "重庆",
            value: 62,
            children: [
              {
                name: "上古",
                value: 2,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 1,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 2,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 1,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 9,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 4,
              },
              {
                name: "清",
                value: 9,
              },
              {
                name: "民国",
                value: 30,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
          {
            name: "江苏",
            value: 261,
            children: [
              {
                name: "上古",
                value: 25,
              },
              {
                name: "夏",
                value: 1,
              },
              {
                name: "商",
                value: 2,
              },
              {
                name: "周",
                value: 6,
              },
              {
                name: "春秋",
                value: 2,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 12,
              },
              {
                name: "三国两晋南北朝",
                value: 14,
              },
              {
                name: "隋",
                value: 1,
              },
              {
                name: "唐",
                value: 7,
              },
              {
                name: "五代十国",
                value: 3,
              },
              {
                name: "宋",
                value: 21,
              },
              {
                name: "元",
                value: 10,
              },
              {
                name: "明",
                value: 46,
              },
              {
                name: "清",
                value: 62,
              },
              {
                name: "民国",
                value: 47,
              },
              {
                name: "新中国",
                value: 2,
              },
            ],
          },
          {
            name: "青海",
            value: 51,
            children: [
              {
                name: "上古",
                value: 6,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 1,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 2,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 5,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 3,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 11,
              },
              {
                name: "清",
                value: 13,
              },
              {
                name: "民国",
                value: 3,
              },
              {
                name: "新中国",
                value: 3,
              },
            ],
          },
          {
            name: "上海",
            value: 41,
            children: [
              {
                name: "上古",
                value: 4,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 0,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 2,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 2,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 3,
              },
              {
                name: "清",
                value: 11,
              },
              {
                name: "民国",
                value: 14,
              },
              {
                name: "新中国",
                value: 3,
              },
            ],
          },
          {
            name: "海南",
            value: 37,
            children: [
              {
                name: "上古",
                value: 3,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 1,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 4,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 7,
              },
              {
                name: "元",
                value: 1,
              },
              {
                name: "明",
                value: 6,
              },
              {
                name: "清",
                value: 7,
              },
              {
                name: "民国",
                value: 8,
              },
              {
                name: "新中国",
                value: 0,
              },
            ],
          },
          {
            name: "宁夏",
            value: 35,
            children: [
              {
                name: "上古",
                value: 5,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 1,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 3,
              },
              {
                name: "三国两晋南北朝",
                value: 2,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 1,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 9,
              },
              {
                name: "元",
                value: 2,
              },
              {
                name: "明",
                value: 2,
              },
              {
                name: "清",
                value: 9,
              },
              {
                name: "民国",
                value: 1,
              },
              {
                name: "新中国",
                value: 0,
              },
            ],
          },
          {
            name: "天津",
            value: 27,
            children: [
              {
                name: "上古",
                value: 0,
              },
              {
                name: "夏",
                value: 0,
              },
              {
                name: "商",
                value: 0,
              },
              {
                name: "周",
                value: 0,
              },
              {
                name: "春秋",
                value: 0,
              },
              {
                name: "战国",
                value: 0,
              },
              {
                name: "秦",
                value: 0,
              },
              {
                name: "汉",
                value: 0,
              },
              {
                name: "三国两晋南北朝",
                value: 0,
              },
              {
                name: "隋",
                value: 0,
              },
              {
                name: "唐",
                value: 0,
              },
              {
                name: "五代十国",
                value: 0,
              },
              {
                name: "宋",
                value: 2,
              },
              {
                name: "元",
                value: 1,
              },
              {
                name: "明",
                value: 1,
              },
              {
                name: "清",
                value: 12,
              },
              {
                name: "民国",
                value: 10,
              },
              {
                name: "新中国",
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  };
  
  
  option5 && myChart5.setOption(option5);
}

function resetYData(num) {
  var chartDom2 = document.getElementById("chart1");
  var myChart2 = echarts.init(chartDom2);
  if(num == 1){
    var newaxis = ['晋', '豫', '浙', '冀', '川', '渝', '陕', '赣', '闽', '鄂', '苏', '蒙', '鲁', '湘', '新', '滇', '皖', '黔', '桂', '甘', '辽', '吉', '青', '宁', '京', '黑', '琼', '津', '粤', '沪', '藏'];
    var newdata = [421, 158, 150, 142, 141, 105, 99, 92, 88, 81, 80, 77, 67, 54, 54, 53, 47, 44, 39, 36, 33, 25, 22, 14, 13, 10, 10, 6, 5, 5, 3];
  }else if(num == 2){
    var newaxis = ['陕', '豫', '甘', '京', '冀', '川', '湘', '辽', '晋', '渝', '苏', '皖', '浙', '闽', '滇', '粤', '鲁', '桂', '鄂', '赣', '蒙', '黔', '新', '青', '宁', '吉', '黑', '琼', '藏', '沪', '津'];
    var newdata = [43, 35, 32, 29, 28, 24, 24, 23, 20, 20, 17, 16, 15, 15, 12, 12, 11, 11, 10, 7, 6, 5, 4, 4, 3, 2, 2, 2, 1, 1, 0];
  }else if(num == 3){
    var newaxis = ['豫', '湘', '陕', '冀', '辽', '京', '苏', '皖', '浙', '滇', '粤', '晋', '渝', '甘', '藏', '闽', '鲁', '川', '赣', '鄂', '吉', '新', '宁', '青', '琼', '蒙', '桂', '黔', '黑', '沪', '津'];
    var newdata = [157, 90, 87, 71, 71, 61, 52, 52, 50, 50, 49, 47, 46, 40, 37, 33, 32, 27, 24, 21, 19, 15, 15, 14, 11, 9, 8, 7, 7, 6, 1];
  }else if(num == 4){
    var newaxis = ['苏', '渝', '新', '皖', '浙', '鲁', '蒙', '川', '鄂', '甘', '湘', '冀', '豫', '赣', '黑', '闽', '吉', '晋', '陕', '沪', '藏', '粤', '桂', '津', '京', '滇', '辽', '琼', '青', '黔', '宁'];
    var newdata = [72, 64, 53, 52, 49, 46, 44, 40, 40, 40, 39, 37, 36, 35, 33, 32, 31, 29, 28, 27, 25, 24, 21, 19, 18, 14, 12, 10, 8, 7, 1];
  }else if(num == 5){
    var newaxis = ['川', '豫', '浙', '鲁', '滇', '冀', '陕', '渝', '湘', '晋', '赣', '京', '鄂', '苏', '闽', '皖', '黑', '辽', '黔', '新', '粤', '吉', '甘', '藏', '琼', '青', '沪', '宁', '桂', '津', '蒙'];
    var newdata = [57, 44, 36, 34, 32, 26, 26, 26, 23, 22, 21, 19, 18, 13, 10, 10, 10, 9, 8, 7, 7, 7, 6, 4, 4, 3, 3, 3, 2, 1, 0];
  }else if(num == 0){
    var newaxis = ['晋', '豫', '冀', '浙', '川', '陕', '苏', '湘', '鲁', '赣', '闽', '皖', '鄂', '滇', '甘', '辽', '蒙', '京', '新', '粤', '吉', '桂', '黔', '藏', '黑', '渝', '青', '沪', '琼', '宁', '津'];
    var newdata = [539, 430, 304, 300, 289, 283, 261, 234, 230, 190, 179, 178, 177, 170, 161, 154, 148, 140, 136, 133, 97, 84, 81, 71, 70, 62, 51, 42, 37, 36, 27];
  }
  myChart2.setOption({
    xAxis: {
      data: newaxis
    },
    series: [{
      data: newdata
    }]
  });
}