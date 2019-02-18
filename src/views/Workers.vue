<template>
    <el-tabs v-model="activeName" >
    <el-tab-pane label="表格显示" name="first">
<div class = "workers">
    <div style="width: 100% ; height:100%;">
    <div style="width: 80%  ; height:100%; float:left">
    <div style="width: 100% ; height:100%;float:left">
        <el-form
                :inline="true"
                ref="add_data"
                size="mini"
                 >
            <div style = "height:5px"></div>
            <div >
                <el-input  v-model="parameter.dwmc"  readonly  size="mini">
                    <template slot="prepend">队长:</template>
                </el-input>
            </div>
            <div style = "height:4px"></div>
            <el-form-item >
                <el-input placeholder="请输入工人姓名,电话号码" style="width: 200px ;height:10px ;float:left"></el-input>
                <el-button  style=" width: 50px ;height:29px ;float:left" type="primary" size ="small" icon="el-icon-search" ></el-button>
            </el-form-item>
            <el-form-item class="btnRight">
                <el-button style=" width: 50px " type="primary" size ="mini"  @click='handleAdd()'>添加</el-button>
            </el-form-item>
        </el-form>
    </div>
        <div style="width: 100% ; height:40px;background-color:#7592ba;float:left">
            <div style = "height :12px"></div>
                <el-dropdown trigger="click" style="height:20px" size="mini" @command='setDialogInfo'>
                  <span class="el-dropdown-link">
                    <span  style="color:#000000">选择班组</span><i style="color:#000000" class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown" >
                        <template    v-for="grssbz in lwbz" >
                            <el-dropdown-item :command= 'grssbz.nm'>{{grssbz.mc}}</el-dropdown-item>
                        </template>
                    </el-dropdown-menu>
                </el-dropdown>
<!--            <el-form
                    :inline="true"
                    ref="add_data"
            >
            <el-form-item   >
                <el-select v-model="parameter.bz"  >
                    <el-option
                            v-for="grssbz in lwbz"
                            :key="grssbz.nm"
                            :label="grssbz.mc" :value="grssbz.nm"
                    ></el-option>
                </el-select>
            </el-form-item>
            </el-form>-->
        </div>
        <el-dialog title="工人信息" :visible.sync="dialogFormVisible" size = "mini" :before-close="handleClose">
            <div style = "width :100% ;height :120px">
                <div style = "float:left;width:30%">
                    <img src ="../assets/timg.png" style = "width :100px ;height:102px"/>
                </div>
                <div style = "float:left;width:30%">
                    <el-row><el-col :span="8" ><span style = "font-weight:bold">{{grxx.xm}}</span></el-col><el-col :span="2"><span>{{grxx.xb}}</span></el-col></el-row>
                    <el-row>
                        <el-col ><span>工种:  </span>{{grxx.grgz}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col ><span>队伍:  </span>{{grxx.grssdw}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col ><span>班组:  </span>{{grxx.grssbz}}</el-col>
                    </el-row>
                </div>
                <div style = "float:left ;width: 30%">
                        <el-row><el-col><span>进场日期:  </span>111</el-col></el-row>
                        <el-row><el-col><span>退场日期:  </span>222</el-col></el-row>
                </div>
            </div>
                <div style = "width :100% ;height :370px">
                    <el-tabs v-model="grxxactiveName" @tab-click="grxxhandleClick">
                        <el-tab-pane label="详细信息" name="grxxfirst">
                                <el-row><span>身份证号:  </span>{{grxx.sfzh}}</el-row>
                                <el-row><span>出生日期:  </span>{{grxx.csrq}}</el-row>
                                <el-row><span>民族:  </span>{{grxx.mz}}</el-row>
                                <el-row><span>政治面貌:  </span>{{grxx.zzmm}}</el-row>
                                <el-row><span>籍贯:  </span>{{grxx.jg}}</el-row>
                                <el-row><span>宿舍:  </span></el-row>
                                <el-row><span>家庭住址:  </span>{{grxx.jtzz}}</el-row>
                                <el-row><span>联系电话:  </span>{{grxx.lxdh}}</el-row>
                                <el-row><span>文化程度:  </span>{{grxx.whcd}}</el-row>
                                <el-row><span>特长:  </span>{{grxx.tc}}</el-row>
                                <el-row><span>紧急联系人:  </span>{{grxx.jjlxr}}</el-row>
                                <el-row><span>紧急联系电话:  </span>{{grxx.jjlxdh}}</el-row>
                        </el-tab-pane>
                        <el-tab-pane label="安全教育" name="grxxthird">
                        </el-tab-pane>
                        <el-tab-pane label="奖励记录" name="grxxjljl">                            <el-table
                                :data="jljl"
                                style="width: 100% ;"
                                stripe
                                max-height="400"
                                size="mini">
                            <el-table-column
                                    prop="jllx"
                                    label="奖励类型"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="sjlr"
                                    label="受奖励人"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="ssdw"
                                    label="所属队伍"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="sj"
                                    label="事件"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="jlmc"
                                    label="奖励名称"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="fssj"
                                    label="发生时间"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="jlyy"
                                    label="奖励原因"
                            >
                            </el-table-column>
                        </el-table></el-tab-pane>
                        <el-tab-pane label="不良记录" name="grxxbljl">定时任务补偿</el-tab-pane>
                        <el-tab-pane label="合同文件" name="grxxhtwj">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </div>
        </el-dialog>
    <div class="table_container" style="width:100%; height:50%; overflow-y:auto; float:left">
    <el-table
            :data="itmes"
            size="mini"
            height = "370px"
            >
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>

        <el-table-column prop="image" label="图片"  >
            <!-- 图片的显示 -->
            <template   slot-scope="scope">
                <img src="data:image/jpg;base64," />
            </template>
        </el-table-column>
        <el-table-column
                prop="rynm"
                label="人员内码"
                align='center'
                v-if="false">
        </el-table-column>
        <el-table-column
                prop="xm"
                label="姓名"
                align='center'
                >
        </el-table-column>
        <el-table-column
                prop="xbnm"
                label="性别内码"
                align='center'
                v-if="false">
        </el-table-column>
        <el-table-column
                prop="xb"
                label="性别"
                align='center'
                >
        </el-table-column>
        <el-table-column
                prop="csrq"
                label="出生日期"
                align='center'
                >
        </el-table-column>
        <el-table-column
                prop="sfzh"
                label="身份证号"
                align='center'
                >
        </el-table-column>
        <el-table-column
                prop="mznm"
                label="民族内码"
                align='center'
                v-if="false">
        </el-table-column>
        <el-table-column
                prop="mz"
                label="民族"
                align='center'
                v-if="false"
                >
        </el-table-column>
        <el-table-column
                prop="zzmmnm"
                label="政治面貌内码"
                align='center'
                v-if="false">
        </el-table-column>
        <el-table-column
                prop="zzmm"
                label="政治面貌"
                align='center'
                v-if="false"
                >
        </el-table-column>
        <el-table-column
                prop="jg"
                label="籍贯"
                align='center'
                v-if="false"
                >
        </el-table-column>
        <el-table-column
                prop="jtzz"
                label="家庭住址"
                align='center'
                v-if="false"
                >
        </el-table-column>
        <el-table-column
                prop="lxdh"
                label="联系电话"
                align='center'
               >
        </el-table-column>
        <el-table-column
                prop="whcdnm"
                label="文化程度内码"
                align='center'
                v-if="false">
        </el-table-column>
        <el-table-column
                       prop="whcd"
                       label="文化程度"
                       align='center'
                       >
               </el-table-column>
              <el-table-column
                       prop="tc"
                       label="特长"
                       align='center'
                       v-if="false"
                       >
               </el-table-column>
              <el-table-column
                       prop="jjlxr"
                       label="紧急联系人"
                       align='center'
                       v-if="false"
                      >
               </el-table-column>
               <el-table-column
                       prop="jjlxdh"
                       label="紧急联系电话"
                       align='center'
                       v-if="false">
               </el-table-column>
               <el-table-column
                       prop="sjsj"
                       label="数据时间"
                       align='center'
                       v-if="false">
               </el-table-column>
        <el-table-column
                label="操作"
                size = "mini"
        width = "180px">
            <template slot-scope="scope">
                <el-button  @click="handleClick(scope.row)" type="primary" size="mini"  icon='el-icon-search'></el-button>
                <el-button
                        type="primary"
                        icon='el-icon-edit'
                        size="mini"
                        @click='onEditMoney(scope.row)'
                ></el-button>
                <el-button
                        type="primary"
                        icon='el-icon-delete'
                        size="mini"
                        @click='onDeleteMoney(scope.row,scope.$index)'
                ></el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
    </div>
    </div>
    <div style="width: 18% ;float:left">
        <div style="height:5px"></div>
        <div div style="width: 100% ;height:52px; float:left">
            <el-form size="mini">
                <el-form-item >
                    <el-input placeholder="工人队伍" style="width: 60% ;height:10px ;float:left" ></el-input>
                    <el-button  style=" width: 30% ;height:29px ;float:left"  type="primary" size ="small" icon="el-icon-search" ></el-button>
                </el-form-item>
            </el-form>
        </div>
    <div style="width: 100% ;  float:left;">
        <el-table
                :data="lwdw"
                @row-click='openDetails'
                size="mini"
        >
            <el-table-column
                    prop="mc"
                    label="劳务队伍"
                    align='center'
                    height = "40px"
                    >
            </el-table-column>
        </el-table>
    </div>
    </div>
  <!--  <DialogFound :dialogi='dialogi' :formData='formData' ></DialogFound>-->
</div>
    </el-tab-pane>
    <el-tab-pane label="工种统计" name="second">
        <div style="width:400px;height:300px" ref="chart">

        </div>
        <div style="width:300px;height:300px" ref="11">

        </div>
    </el-tab-pane>
    </el-tabs>
</template>

<script>
    import DialogFound from "./Dialog"
    const echarts = require('echarts');
    export default {
        name: "workers",
        data(){
         return {
             activeName: 'first',
             itmes :[],
             parameter:{
                 bz:'',
                 bznm:'',
                 dwnm:'',
                 dwmc:'',
             },
             grxxactiveName: 'grxxfirst',
             dialogFormVisible:false,
             lwdw:[],
             lwbz:[],
             format_grgz_list:[],
             dialogi:{
                 show:false
             },/*,

             search_data: {
                 startTime: "",
                 endTime: ""
             }*/
             bzparma:{
                 nm:'',
                 mc:'',
             },
             grxx:{
                 image:'',
                 sfzh:'',
                 xm:'',
                 csrq:'',
                 jg:'',
                 jtzz:'',
                 khh:'',
                 whcd:'',
                 whcdnm:'',
                 jjlxr:'',
                 xb:'',
                 xbnm:'',
                 mz:'',
                 mznm:'',
                 zzmm:'',
                 zzmmnm:'',
                 grssdw:'',
                 dwnm:'',
                 grssbz:'',
                 bznm:'',
                 grgz:'',
                 grgzlbnm:'',
                 jjlxdh:'',
                 yhkh:'',
                 tc:'',
                 lxdh:'',
             },
             jljl:'',
             formData:{
                 image:'',
                 sfzh:'',
                 xm:'',
                 csrq:'',
                 jg:'',
                 jtzz:'',
                 khh:'',
                 whcd:'',
                 whcdnm:'',
                 jjlxr:'',
                 xb:'',
                 xbnm:'',
                 mz:'',
                 mznm:'',
                 zzmm:'',
                 zzmmnm:'',
                 grssdw:'',
                 dwnm:'',
                 grssbz:'',
                 bznm:'',
                 grgz:'',
                 grgzlbnm:'',
                 jjlxdh:'',
                 yhkh:'',
                 tc:'',
                 lxdh:'',
             }
         }
        },
        created(){
            this.getLWDWList();
            this.getlwbzList();
            this.getGgrgz()
        },
        methods:{
            getWorkersList(grdw){
                this.$axios.post("/api/user/getUser",grdw).then(re =>{
                    this.itmes = re.data.data
                    this.initCharts();
                })
            },
            initCharts(){
                let myChart = echarts.init(this.$refs.chart);
                let grlb = [];
                let sl = [];
                let data = []
                for(let g=0; g<this.format_grgz_list.length;g++){
                    grlb.push(this.format_grgz_list[g].mc)
                }
                for(let j=0; j<grlb.length;j++){
                    let grgzsl = 0;
                    for(let h=0; h<this.itmes.length;h++){
                        if(grlb[j] == this.itmes[h].grgz){
                            grgzsl++
                        }

                    }
                    let vule = {
                        value:'',
                        name:'',
                    };
                    vule.value = grgzsl;
                    vule.name = grlb[j]
                    data.push(vule)
                    //this.option.xAxis.data.push(grlb[j])
                    sl.push(grgzsl)
                    /*this.option.series.data.push(grgzsl++)*/
                }
                let option = '';
                myChart.setOption(option = {
                    title : {
                        text: '工人工种统计',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '25%',
                            center: ['25%', '45%'],
                            data:data,

                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                });
            },
            getGgrgz(){
                this.$axios.post("/api/dictionary/getGgrgz").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_grgz_list = re.data.data
                    }
                })
            },
            getLWDWList(){
                this.$axios.post("/api/dictionary/getGrssdw").then(re =>{
                    this.lwdw = re.data.data
                    this.parameter.dwnm = re.data.data[0].nm
                    this.parameter.dwmc = re.data.data[0].mc
                    this.getWorkersList(this.parameter);

                })
            },
            getlwbzList(){
                this.$axios.post("/api/dictionary/getGrssbz",this.bzparma).then(re =>{
                    this.lwbz = re.data.data
/*                    let aa = {};
                    aa.dwnm = re.data.data[0].nm
                    this.getWorkersList(aa);*/

                })
            },
            onDeleteMoney(row, index) {
                let aa = {};
                aa.nms = row.rynm
                // 删除
                this.$axios.post("/api/user/deleteUser",aa).then(re => {
                    if(re.data.code == "OK"){
                        this.$message("删除数据成功");
                        this.getWorkersList(this.parameter);
                    }else{
                        this.$message("删除失败");
                    }

                    /*this.getProfile();*/
                });
            },
            setDialogInfo(cmdItmet){
                this.parameter.bznm = cmdItmet;
                this.getWorkersList(this.parameter);
            },
            onEditMoney(row) {
                this.formData = row
                this.$router.push({name:"editor",params:{
                        sfzh:row.sfzh,
                        xm:row.xm,
                        csrq:row.csrq,
                        jg:row.jg,
                        jtzz:row.jtzz,
                        khh:row.khh,
                        whcd:row.whcd,
                        whcdnm:row.whcdnm,
                        jjlxr:row.jjlxr,
                        xb:row.xb,
                        xbnm:row.xbnm,
                        mz:row.mz,
                        mznm:row.mznm,
                        zzmm:row.zzmm,
                        zzmmnm:row.zzmmnm,
                        grssdw:row.grssdw,
                        dwnm:row.dwnm,
                        grssbz:row.grssbz,
                        bznm:row.bznm,
                        grgz:row.grgz,
                        grgzlbnm:row.grgzlbnm,
                        jjlxdh:row.jjlxdh,
                        yhkh:row.yhkh,
                        tc:row.tc,
                        lxdh:row.lxdh,
                }});
            },
            openDetails(row, event, column){
                this.parameter.dwnm = row.nm
                this.parameter.dwmc = row.mc
                this.getWorkersList(this.parameter);
            },
            search_data(){
                console.log(2133212)
            },
            handleAdd(){
               /* this.dialogi.show = true*/
                this.$router.push("/dialog");
            },
            handleClick(row){
                let jljlparma= {
                        jlr:row.rynm,
                        zt:'',
                    }
                this.$axios.post("/api/jljl/getJljl",jljlparma).then(re =>{
                    if(re.data.code == "OK"){
                        this.grxx = row
                        this.jljl = re.data.data
                        this.dialogFormVisible = true;
                    }else{
                        this.$message(re.data.data)
                    }

                })

            },
            grxxhandleClick(tab, event){
                console.log(tab, event);
            },
            handleClose(done){
                this.grxxactiveName =  'grxxfirst';
                done();
            },
        },
        components:{
            DialogFound
        }
    }
</script>

<style scoped>
    .btnRight {
        float: right;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-row {
        margin-bottom: 15px;
    }
    .el-dialog__header{
        background: #2b46bf;
    }
</style>