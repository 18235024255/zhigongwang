// JavaScript Document
var myChart1 = echarts.init(document.getElementById('chart1'));
var myChart2 = echarts.init(document.getElementById('chart2'));
var myChart3 = echarts.init(document.getElementById('chart3'));
var myChart4 = echarts.init(document.getElementById('chart4'));

option1 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '60%',
            center: ['50%', '50%'],
            data:[
                {value:69000, name:'职业技能培训'},
                {value:19000, name:'家政服务培训'},
                {value:13000, name:'创业培训'},
                {value:15000, name:'免费就业服务'},
                {value:52000, name:'帮助获得职业技能证书'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
    color:['#E7505A', '#3598DC', '#32C5D2', '#816EA3', '#F7CA17', '#F7CA17', '#FFF263', '#6AF9C4','#DDDF00']
};
option2 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'困难帮扶措施',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:40, name:'职工服务中心'},
                {value:200, name:'爱心超市'},
                {value:130, name:'爱心学校'},
                {value:350, name:'爱心药房'},
                {value:130, name:'爱心医院'}
            ]
        }
    ],
    color:['#E7505A', '#3598DC', '#FF7132', '#36D7B6', '#F0C005', '#FF9655', '#FFF263', '#6AF9C4','#DDDF00']
};
option3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['全国模范职工之家','职工小家','全国优秀工会工作者','评选表彰重庆市模范职工之家','重庆市模范职工小家','全市首批职工最可信赖的“娘家人”'],
    },
    series: [
        {
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            name: '2015年',
            type: 'bar',
            data: [10, 124, 152, 50, 72, 72],
            barWidth : 36,
            itemStyle: {
                normal: {
                     color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                         '#D91E19', '#36D7B6', '#E74F5B', '#F3C301', '#3598DC', '#FF7132', '#FFF263', '#6AF9C4','#DDDF00'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        },
    ],
};


option4 = {
    tooltip: {
        trigger: '重庆市总工会',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'会员情况',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center : ['50%', '50%'],
            data:[
                {value:400000, name:'非会员职工'},
                {value:3900000, name:'农民工会员'},
                {value:3300000, name:'非农民工会员'}
            ]
        },
        {
            name:'组织情况',
            type:'pie',
            radius: ['40%', '55%'],
            center : ['50%', '50%'],
            data:[

                {value:40, name:'区县总工会', selected:true},
                {value:1, name:'市级机关联合会'},
                {value:1017, name:'乡镇街道工会'},
                {value:40, name:'区县职工服务中心'},
                {value:1400, name:'镇街帮扶站'}
            ]
        }
    ],
    color:['#3598DC', '#C8D046', '#E74F5B', '#FF7132', '#2F353B', '#F3C301', '#8E44AD', '#36D7B6']
};