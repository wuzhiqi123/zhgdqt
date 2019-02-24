<template>
    <div>
    <div style = "margin : 8px 0px 10px 5px ;">
        <div style = "margin : 0px 20px 0px 0px ; float:left ;background:#4539f5; color:#4941ff ;width:6px;height:18px"></div> <span >选择入住人员</span>
        <div style = "margin : 5px 0px 35px 5px ;">
            <el-button type="primary" @click="rzclick">入住</el-button>
        </div>
    </div>
    <div>
        <el-select v-model="parameter.dwnm" placeholder="请选择" size="mini" style="margin : 6px 0px 0px 5px ;float:left">
            <el-option
                    v-for="item in lwdw"
                    :key="item.nm"
                    :label="item.mc"
                    :value="item.nm">
            </el-option>
        </el-select>
        <el-select v-model="parameter.bznm" placeholder="请选择" size="mini" style="margin : 6px 0px 0px 5px ; float:left">
            <el-option
                    v-for="item in lwbz"
                    :key="item.nm"
                    :label="item.mc"
                    :value="item.nm">
            </el-option>
        </el-select>
        <el-form style="margin : 0px 0px 0px 20px ; float:left" >
            <el-form-item >
                <el-input  v-model="ckrorkh" size ="mini" placeholder="请输入人姓名,身份证号" style="width: 200px ;height:10px ;float:left"></el-input>
                <el-button @click='selectLsk()'  style=" margin : 7px 0px 0px 0px; width: 50px ;height:28px ;float:left" type="primary" size ="mini" icon="el-icon-search" ></el-button>
            </el-form-item>
        </el-form>

    </div>
    <div class="table_container" style="width:100%; height:50%; overflow-y:auto; float:left">
        <el-tabs v-model="activeName"  @tab-click ="tabClick">
            <el-tab-pane label="未入住人员" name="first">
                <el-table
                    :data="wrz"
                    stripe
                    size="mini"
                    max-height="350"
                    @selection-change="changeFun"
            >
                <el-table-column
                        type="selection"
                        width="55">
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
                        prop="sfzh"
                        label="身份证号"
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
                        prop="grgz"
                        label="工种"
                        align='center'
                >
                </el-table-column>
                <el-table-column
                        prop="grssdw"
                        label="队伍"
                        align='center'
                >
                </el-table-column>
                <el-table-column
                        prop="grssbz"
                        label="班组"
                        align='center'
                >
                </el-table-column>
                <el-table-column
                        prop="csrq"
                        label="出生日期"
                        align='center'
                        v-if="false"
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
                        v-if="false"
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
                        v-if="false"
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
            </el-table>
            </el-tab-pane>
            <el-tab-pane label="全部人员" name="second">
                <el-table
                        :data="itmes"
                        stripe
                        size="mini"
                        max-height="350"
                        @selection-change="changeFun"
                >
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
                            prop="sfzh"
                            label="身份证号"
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
                            prop="grgz"
                            label="工种"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="grssdw"
                            label="队伍"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="grssbz"
                            label="班组"
                            align='center'
                    >
                    </el-table-column>
                    <el-table-column
                            prop="csrq"
                            label="出生日期"
                            align='center'
                            v-if="false"
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
                            v-if="false"
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
                            v-if="false"
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
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
    </div>

</template>

<script>
    export default {
        name: "rytj",
        data(){
            return {
                activeName: 'first',
                ckrorkh:'',
                itmes :[],
                lwdw:'',
                lwbz:'',
                wrz:[],

                parameter:{
                    bz:'',
                    bznm:"",
                    dwnm:'',
                    dwmc:'',
                },
                rz:{
                    ssnm:'',
                    workersList:'',
                },
            }
        },
        created(){
            this.getWorkersList()
            this.getLWDWList();
            this.getlwbzList(this.parameter);
        },
        methods: {
            getWorkersList() {
                this.$axios.post("/api/user/getUser",this.parameter).then(re => {
                    this.wrz = [];
                    this.itmes = re.data.data.workersList
                    for(let i = 0 ;i<this.itmes.length ;i++){
                        if(this.itmes[i].ssnm == null || this.itmes[i].ssnm ==""){
                            this.wrz.push(this.itmes[i])
                        }
                    }

                })
            },
            handleClick(tab, event) {
                this.$axios.post("/api/user/getUser",this.parameter).then(re => {
                    this.itmes = re.data.data
                })
            },
            getLWDWList(){
                this.$axios.post("/api/dictionary/getGrssdw").then(re =>{
                    this.lwdw = re.data.data

                })
            },
            getlwbzList(bzparma){
                this.$axios.post("/api/dictionary/getGrssbz",bzparma).then(re =>{
                    this.lwbz = re.data.data

                })
            },
            rzclick(){
                this.rz.ssnm=this.$route.params.ssnm
                if(this.rz.workersList.length != 0){
                    this.$axios.post("/api/ryrz/add",this.rz).then(re =>{
                        if(re.data.code =="OK"){
                            this.$router.push("/sslxx");
                            this.$message("成功")
                        }else{
                            this.$router.push("/sslxx");
                            this.$message(re.data.data)
                        }
                    })
                }else{
                    this.$message("请选择人员")
                }
            },
            tabClick(){
                this.rz.workersList = null
            },
            changeFun(val){
                this.rz.workersList = val
            },
        }
    }
</script>

<style scoped>

</style>