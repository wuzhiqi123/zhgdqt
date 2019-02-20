 <template>
    <el-tabs v-model="activeName" >
        <el-tab-pane label="表格显示" name="first">
            <div class = "monitoringInformation">
                <div class="block">
                    <div style = "float: left ;">
                        <el-date-picker
                                size ="mini"
                                v-model="value7"
                                type="datetimerange"
                                align="right"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2"
                                :default-time="['00:00:00', '23:59:00']">
                        </el-date-picker>
                    </div>
                    <div style = "float: left ;"><el-button  style=" width: 50px ;height:29px ;float:left" type="primary" size ="small" icon="el-icon-search" @click='caxun()' ></el-button></div>
                </div>
            <div class="table_container">
                <el-table
                        :data="itmes.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        style="width: 100%"
                        max-height="400"
                >
                    <el-table-column
                            prop="nm"
                            label="内码"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="gdnm"
                            label="工地内码"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sbbh"
                            label="设备编号"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="pm25"
                            label="PM2.5（ug/m3）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="pm10"
                            label="PM10（ug/m3）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="tsp"
                            label="TSP（ug/m3）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="zs"
                            label="噪声（dB）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="wd"
                            label="温度(°C)"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sd"
                            label="湿度（%RH）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="fl"
                            label="风力（级）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="fs"
                            label="风速（m/s）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="fxfw"
                            label="风向（方位）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="fxds"
                            label="风向（度数）（°）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="qy"
                            label="气压（Kpa）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="gz"
                            label="光照（Lux）"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sjsj"
                            label="数据时间"
                            align='center'
                    >
                    </el-table-column>
                    <!--<el-table-column
                            prop="JJLXR"
                            label="紧急联系人"
                            align='center'
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="JJLXDH"
                            label="紧急联系电话"
                            align='center'
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="SJSJ"
                            label="数据时间"
                            align='center'
                            width="50">
                    </el-table-column>
        -->
                </el-table>
                <div style="text-align: center;margin-top: 30px;">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="total"
                            @current-change="current_change">
                    </el-pagination>
                </div>
            </div>
        </div>
        </el-tab-pane>
        <el-tab-pane label="曲线显示" name="second">
            <div>
                <el-select v-model="value" @change="changeSelect(value)" placeholder="请选择">
                    <el-option
                            v-for="item in selectss"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div style="width:800px;height:500px" ref="chart">

            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: "monitoringInformation",
        data(){
            return {
                activeName: 'first',
                itmes :[],
                total: 0,
                pagesize:10,
                currentPage:1,
                value:'',
                parma:{
                    start:'',
                    end :'',
                },
                selectss:[
                    {
                        value: 'pm25',
                        label: 'PM2.5（ug/m3）'
                    },
                    {
                        value: 'pm10',
                        label: 'PM10（ug/m3）'
                    },
                    {
                        value: 'tsp',
                        label: 'TSP（ug/m3）'
                    },
                    {
                        value: 'zs',
                        label: '噪声（dB）'
                    },
                    {
                        value: 'wd',
                        label: '温度(°C)'
                    },
                    {
                        value: 'sd',
                        label: '湿度（%RH）'
                    },
                    {
                        value: 'fl',
                        label: '风力（级）'
                    },
                    {
                        value: 'fs',
                        label: '风速（m/s）'
                    },
                    {
                        value: 'fxfw',
                        label: '风向（方位）'
                    },
                    {
                        value: 'fxds',
                        label: '风向（度数）（°）'
                    },
                    {
                        value: 'qy',
                        label: '气压（Kpa）'
                    },
                    {
                        value: 'gz',
                        label: '光照（Lux）'
                    },

                    ],
                pickerOptions2: {
                    shortcuts: [
                        {
                            text: '最近1小时',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 );
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '今天',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setHours(0)
                                start.setMinutes(0)
                                start.setSeconds(0)
                                //start.setTime(start.getTime() - 3600 * 1000 * 24 );
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '最近一周',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                start.setHours(0)
                                start.setMinutes(0)
                                start.setSeconds(0)
                                end.setHours(23)
                                end.setMinutes(59)
                                end.setSeconds(0)
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            start.setHours(0)
                            start.setMinutes(0)
                            start.setSeconds(0)
                            end.setHours(23)
                            end.setMinutes(59)
                            end.setSeconds(0)
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            start.setHours(0)
                            start.setMinutes(0)
                            start.setSeconds(0)
                            end.setHours(23)
                            end.setMinutes(59)
                            end.setSeconds(0)
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value7: '',
            }
        },
        created(){
            //this.getMonitoringInformationList();
        },
        methods:{
            getMonitoringInformationList(parma){
                this.$axios.post("/api/monitoringInformation/getJcxx",parma).then(re =>{
                    this.itmes = re.data.data
                    this.total = re.data.total

                })
            },
            caxun(){
                this.parma.start = new Date(this.value7[0]).getTime()
                this.parma.end = new Date(this.value7[1]).getTime()
                this.getMonitoringInformationList(this.parma)
            },
            changeSelect(val){
                let label = null;
                for(let i = 0; i< this.selectss.length ;i++){
                    if(this.selectss[i].value == val){
                        label =   this.selectss[i].label
                    }
                }
                this.initCharts(val ,label);
            },
            initCharts (val,label) {
                let myChart = echarts.init(this.$refs.chart);
                let curves = this.itmes
                let data = []
                let date = [];

                for(let i=0 ;i<curves.length;i++){
                    for(let curve in curves[i]){
                        if (val == curve) {
                            data.push(curves[i][curve])
                            date.push(curves[i].sjsj)
                        }
                    }
                }
                debugger;
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
                            text: '大数据量面积图',
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
                                data: data
                            }
                        ]
                })
            },
            current_change:function(currentPage){
                this.currentPage = currentPage;
            },
        },
    }
</script>

<style scoped>

</style>