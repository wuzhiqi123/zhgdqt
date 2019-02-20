<template>
    <div>
        <div style="width:800px;height:500px" id="pm25"></div>
        <div style="width:800px;height:500px" id="pm10"></div>
        <div style="width:800px;height:500px" id="tsp"></div>
        <div style="width:800px;height:500px" id="zs"></div>
        <div style="width:800px;height:500px" id="wd"></div>
        <div style="width:800px;height:500px" id="sd"></div>
        <div style="width:800px;height:500px" id="fl"></div>
        <div style="width:800px;height:500px" id="fs"></div>
        <div style="width:800px;height:500px" id="fxfw"></div>
        <div style="width:800px;height:500px" id="fxds"></div>
        <div style="width:800px;height:500px" id="qy"></div>
        <div style="width:800px;height:500px" id="gz"></div>
    </div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: "",
        data(){
        return {
                parma:{
                    start:'',
                        end :'',
                },
            selectss:[
                 'pm25',
                 'pm10',
                 'tsp',
                 'zs',
                 'wd',
                 'sd',
                 'fl',
                 'fs',
                 'fxfw',
                 'fxds',
                 'qy',
                 'gz',
            ],
            }
        },
        created(){
            this.getMonitoringInformationList(this.parma)
        },
        methods:{
            getMonitoringInformationList(parma){
                this.$axios.post("/api/monitoringInformation/getJcxx",parma).then(re =>{
                    this.itmes = re.data.data
                    //this.total = re.data.total
                    this.initCharts(this.itmes)
                })
            },
            initCharts (itmes) {
                let data = {
                    pm25:[],
                    pm10:[],
                    tsp:[],
                    zs:[],
                    wd:[],
                    sd:[],
                    fl:[],
                    fs:[],
                    fxfw:[],
                    fxds:[],
                    qy:[],
                    gz:[],
                }
                let date = [];
                for(let i=0 ;i<itmes.length;i++){
                    for(let curve in itmes[i]){
                        if ("pm25" == curve) {
                            data.pm25.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("pm10" == curve) {
                            data.pm10.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("tsp" == curve) {
                            data.tsp.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("zs" == curve) {
                            data.zs.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("wd" == curve) {
                            data.wd.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("sd" == curve) {
                            data.sd.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("fl" == curve) {
                            data.fl.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("fs" == curve) {
                            data.fs.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("fxfw" == curve) {
                            data.fxfw.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("fxds" == curve) {
                            data.fxds.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("qy" == curve) {
                            data.qy.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }
                        if ("gz" == curve) {
                            data.gz.push(itmes[i][curve])
                            date.push(itmes[i].sjsj)
                        }

                    }
                }
                    for( let index in this.selectss){
                        let name = this.selectss[index]
                        let sj=[]
                        let myChart = echarts.init(document.getElementById(name));
                        debugger;
                        if(name == "pm25"){
                            sj = data.pm25
                        }else if(name == "pm10"){
                            sj = data.pm10
                        }
                        else if(name == "tsp"){
                            sj = data.tsp
                        }
                        else if(name == "zs"){
                            sj = data.zs
                        }
                        else if(name == "wd"){
                            sj = data.wd
                        }
                        else if(name == "sd"){
                            sj = data.sd
                        }
                        else if(name == "fl"){
                            sj = data.pm25
                        }
                        else if(name == "fs"){
                            sj = data.fs
                        }
                        else if(name == "fxfw"){
                            sj = data.fxfw
                        }else if(name == "fxds"){
                            sj = data.fxds
                        }
                        else if(name == "qy"){
                            sj = data.qy
                        }
                        else if(name == "gz"){
                            sj = data.gz
                        }
                        let option = '';
                        myChart.setOption(
                            option = {
                                tooltip: {
                                    trigger: 'axis',
                                    position: function (pt) {
                                        return [pt[0], '10%'];
                                    }
                                },
                                title: {
                                    left: 'center',
                                    text:name+ '数据图',
                                },
                                toolbox: {
                                    feature: {
                                        dataZoom: {
                                            yAxisIndex: 'none'
                                        },
                                        restore: {},
                                        saveAsImage: {}
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: date
                                },
                                yAxis: {
                                    type: 'value',
                                    boundaryGap: [0, '100%']
                                },
                                dataZoom: [{
                                    type: 'inside',
                                    start: 0,
                                    end: 10
                                }, {
                                    start: 0,
                                    end: 10,
                                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                                    handleSize: '80%',
                                    handleStyle: {
                                        color: '#fff',
                                        shadowBlur: 3,
                                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                                        shadowOffsetX: 2,
                                        shadowOffsetY: 2
                                    }
                                }],
                                series: [
                                    {
                                        name:'模拟数据',
                                        type:'line',
                                        smooth:true,
                                        symbol: 'none',
                                        sampling: 'average',
                                        itemStyle: {
                                            color: 'rgb(255, 70, 131)'
                                        },
                                        data:sj
                                    }
                                ]
                            })
                    }

                }
            },
    }
</script>

<style scoped>

</style>