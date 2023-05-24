// ScrollReveal().reveal(".charts" , {delay:600,duration: 2000});
// ScrollReveal().reveal("#about" , {delay:800,duration: 1000});

window.addEventListener('scroll', function() {
  var chartList = ['chart1','chart2','chart3'];
  // 遍历chartList中的元素，判断是否在可视区域内
  for (var i = 0; i < chartList.length; i++) {
    var chart = document.getElementById(chartList[i]);
    var chartTop = chart.getBoundingClientRect().top;
    var chartBottom = chart.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    if (chartTop < windowHeight && chartBottom > 0) {
      // 在可视区域内
      if (chartList[i] == 'chart1') {
        // 2s后执行
        setTimeout(activiteChart1(), 2000); 
        // id area1 中的chartText类由一个从下到上的动画进入
        document.getElementById('area1').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
      }
      if (chartList[i] == 'chart2') {
        setTimeout(activiteChart2(), 2000);
        document.getElementById('area2').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
      }
      if (chartList[i] == 'chart3') {
        setTimeout(activiteChart3(), 2000);
        document.getElementById('area3').getElementsByClassName('chartText')[0].classList.add('chartTextActive');
      }
    }
  }
});

async function activiteChart1(){
  var chartDom = document.getElementById("chart1");
  var myChart = echarts.init(chartDom);
  var option;

  setTimeout(function () {
    option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      // animationDuration: 2000,
      // animationDelay: 1000,
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

async function activiteChart2(){
  var chartDom2 = document.getElementById("chart2");
  var myChart2 = echarts.init(chartDom2);
  var option2;
  
  // prettier-ignore
  let dataAxis = ['晋', '豫', '浙', '冀', '川', '陕', '苏', '湘', '鲁', '赣', '闽', '皖', '鄂', '滇', '甘', '辽', '蒙', '京', '新', '粤', '吉', '桂', '黔', '藏', '黑', '渝', '青', '沪', '琼', '宁', '津'];
  // prettier-ignore
  let data = [537, 428, 300, 296, 289, 282, 261, 234, 230, 190, 179, 178, 177, 170, 160, 154, 151, 141, 140, 134, 97, 84, 81, 71, 70, 62, 51, 42, 37, 36, 32];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  option2 = {
    title: {
      text: '全国重点文物保护单位各省空间分布数量分析',
      subtext: '数据来自中国八批重点文物保护单位名单，截至2023年5月共八批'
    },
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
    animationDuration: 5000,
    animationDelay: 2000,
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

async function activiteChart3(){
  var chartDom3 = document.getElementById("chart3");
  var myChart3 = echarts.init(chartDom3);
  var option3;
  
  option3 = {
    animationDuration: 2000,
    animationDelay: 2000,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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