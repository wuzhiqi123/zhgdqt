<template>
    <div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="pm25"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="pm10"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="tsp"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="zs"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="wd"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="sd"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="fl"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="fs"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="fxfw"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="fxds"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="qy"></div>
        <div style="margin : 0px 20px 10px 10px ;width:400px;height:250px;float:left" id="gz"></div>
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
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("pm10" == curve) {
                            data.pm10.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("tsp" == curve) {
                            data.tsp.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("zs" == curve) {
                            data.zs.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("wd" == curve) {
                            data.wd.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("sd" == curve) {
                            data.sd.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("fl" == curve) {
                            data.fl.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("fs" == curve) {
                            data.fs.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("fxfw" == curve) {
                            data.fxfw.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("fxds" == curve) {
                            data.fxds.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("qy" == curve) {
                            data.qy.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }
                        if ("gz" == curve) {
                            data.gz.push(itmes[i][curve])
                            date.push(itmes[i].sjsj.split(" ")[0])
                        }

                    }
                }
                    for( let index in this.selectss){
                        let name = this.selectss[index]
                        let sj=[]
                        let zs = '';
                        let myChart = echarts.init(document.getElementById(name));
                        if(name == "pm25"){
                            sj = data.pm25
                            zs = "PM2.5（ug/m3"

                        }else if(name == "pm10"){
                            sj = data.pm10
                            zs = "PM10（ug/m3"
                        }
                        else if(name == "tsp"){
                            sj = data.tsp
                            zs = "TSP（ug/m3"
                        }
                        else if(name == "zs"){
                            sj = data.zs
                            zs = "噪声(dB)"
                        }
                        else if(name == "wd"){
                            sj = data.wd
                            zs = "温度(°C)"
                        }
                        else if(name == "sd"){
                            sj = data.sd
                            zs = "湿度(%RH)"
                        }
                        else if(name == "fl"){
                            sj = data.pm25
                            zs = "风力(级)"
                        }
                        else if(name == "fs"){
                            sj = data.fs
                            zs = "风速(m/s)"
                        }
                        else if(name == "fxfw"){
                            sj = data.fxfw
                            zs = "风向（方位)"
                        }else if(name == "fxds"){
                            sj = data.fxds
                            zs = "风向（度数）（°）"
                        }
                        else if(name == "qy"){
                            sj = data.qy
                            zs = "气压（Kpa）"
                        }
                        else if(name == "gz"){
                            sj = data.gz
                            zs = "光照（Lux）"
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
                                    text:zs+ '数据图',
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