<template>
    <div>
        <div style = "margin : 8px 0px 10px 5px ;">
            <div style = "margin : 0px 20px 0px 0px ; float:left ;background:#4539f5; color:#4941ff ;width:6px;height:18px"></div> <span >奖励记录</span>
        </div>
        <div style=" margin : 2px 0px 0px 5px;">
            <el-form>
                <el-form-item >
                    <el-input  v-model="ckrorkh" size ="mini" placeholder="请输入奖励对象名称" style="width: 200px ;height:10px ;float:left"></el-input>
                    <el-button @click='selectLsk()'  style=" margin : 7px 0px 0px 0px; width: 50px ;height:28px ;float:left" type="primary" size ="mini" icon="el-icon-search" ></el-button>
                    <el-button @click='addGr()'  style=" margin : 7px 0px 0px 10px ;width:100px ;height:28px ;float:left" type="primary" size ="mini"   >添加工人奖励</el-button>
                    <el-button @click='addBz()'  style=" margin : 7px 0px 0px 10px ;width:100px ;height:28px ;float:left" type="primary" size ="mini"   >添加班组奖励</el-button>
                </el-form-item>

            </el-form>
        </div>
        <div style=" margin : 2px 0px 0px 10px;">
        <el-tabs v-model="activeName"  @tab-click="handleClick()">
            <el-tab-pane label="全部" name="0">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100% ;"
                            stripe
                            max-height="400"
                            size="mini">
                        <el-table-column
                                prop="jlnm"
                                label="奖励内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllxnm"
                                label="奖励类型内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllx"
                                label="奖励类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sfbz"
                                label="是否班组"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjlr"
                                label="受奖励人/班组"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bznm"
                                label="班组内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjlbz"
                                label="受奖励班组"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="dwnm"
                                label="队伍内码"
                                v-if="false"
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
                        <el-table-column
                                prop="zt"
                                label="状态"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                                v-if="false"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工人" name="1">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100% ;"
                            stripe
                            max-height="400"
                            size="mini">
                        <el-table-column
                                prop="jlnm"
                                label="奖励内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllxnm"
                                label="奖励类型内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllx"
                                label="奖励类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sfbz"
                                label="是否班组"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjlr"
                                label="受奖励人"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bznm"
                                label="班组内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjlbz"
                                label="受奖励班组"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="dwnm"
                                label="队伍内码"
                                v-if="false"
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
                        <el-table-column
                                prop="zt"
                                label="状态"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                                v-if="false"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="班组" name="2">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100% ;"
                            stripe
                            max-height="400"
                            size="mini">
                        <el-table-column
                                prop="jlnm"
                                label="奖励内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllxnm"
                                label="奖励类型内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="jllx"
                                label="奖励类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sfbz"
                                label="是否班组"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bznm"
                                label="班组内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjlr"
                                label="受奖励班组"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="dwnm"
                                label="队伍内码"
                                v-if="false"
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
                        <el-table-column
                                prop="zt"
                                label="状态"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                                v-if="false"
                        >
                        </el-table-column>
                    </el-table>
                </div></el-tab-pane>
        </el-tabs>
        </div>
        <el-dialog title="添加奖励记录" :visible.sync="tjjljl">
            <el-form :model="tjjljlform" label-position="left" label-width="120px">
                <el-form-item label="所属队伍" >
                    <el-select v-model="tjjljlform.dwnm"  filterable placeholder="请选择" @change="seleUser">
                        <el-option
                                v-for="(  item ,index) in lwdw"
                                :key="index"
                                :label="item.mc"
                                :value="item.nm">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="受奖励工人" >
                    <el-select v-model="tjjljlform.rynm"  filterable placeholder="请选择">
                        <el-option
                                v-for="(  item ,index) in users"
                                :key="index"
                                :label="item.xm"
                                :value="item.rynm">
                        </el-option>
                    </el-select>
                </el-form-item>
              <!--  <el-form-item label="受奖励班组" >
                    <el-select v-model="tjjljlform.sjlbz"  filterable placeholder="请选着">
                        <el-option
                                v-for="(  item ,index) in lwbz"
                                :key="index"
                                :label="item.mc"
                                :value="item.nm">
                        </el-option>
                    </el-select>
                </el-form-item>-->
                <el-form-item label="奖励原因"  >
                    <el-input v-model="tjjljlform.jlyy" ></el-input>
                </el-form-item>
                <el-form-item label="事件"  >
                    <el-input v-model="tjjljlform.sj" ></el-input>
                </el-form-item>
                <el-form-item label="奖励名称"  >
                    <el-input v-model="tjjljlform.jlmc" ></el-input>
                </el-form-item>
                <el-form-item label="发生时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="tjjljlform.fssj" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="状态" >
                    <el-select v-model="tjjljlform.zt"  filterable placeholder="请选着">
                        <el-option
                                v-for="(  item ,index) in zt"
                                :key="index"
                                :label="item.value"
                                :value="item.nm">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tjjlquxiao()">取 消</el-button>
                <el-button type="primary" @click="tjjlqueding(tjjljlform)">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="添加奖励记录" :visible.sync="tjjljlbz">
            <el-form :model="tjjljlform" label-position="left" label-width="120px">
                <el-form-item label="所属队伍" >
                    <el-select v-model="tjjljlform.dwnm"  filterable placeholder="请选择" @change="selebz">
                        <el-option
                                v-for="(  item ,index) in lwdw"
                                :key="index"
                                :label="item.mc"
                                :value="item.nm">
                        </el-option>
                    </el-select>
                </el-form-item>
                  <el-form-item label="受奖励班组" >
                      <el-select v-model="tjjljlform.sjlbz"  filterable placeholder="请选择">
                          <el-option
                                  v-for="(  item ,index) in lwbz"
                                  :key="index"
                                  :label="item.mc"
                                  :value="item.nm">
                          </el-option>
                      </el-select>
                  </el-form-item>
                <el-form-item label="事件"  >
                    <el-input v-model="tjjljlform.sj" ></el-input>
                </el-form-item>
                <el-form-item label="奖励原因"  >
                    <el-input v-model="tjjljlform.jlyy" ></el-input>
                </el-form-item>
                <el-form-item label="奖励名称"  >
                    <el-input v-model="tjjljlform.jlmc" ></el-input>
                </el-form-item>
                <el-form-item label="发生时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="tjjljlform.fssj" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="状态" >
                    <el-select v-model="tjjljlform.zt"  filterable placeholder="请选着">
                        <el-option
                                v-for="(  item ,index) in zt"
                                :key="index"
                                :label="item.value"
                                :value="item.nm">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tjbzjlquxiao()">取 消</el-button>
                <el-button type="primary" @click="tjjlbzqueding(tjjljlform)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "jljl",
        data(){
            return {
                tableData:'',
                tjjljl:false,
                tjjljlbz:false,
                activeName: '0',
                users:'',
                jljlparma:{
                    jlr:'0',
                    zt:'',
                },
                zt:[
                    {
                        nm:1,
                        value:"未发放",
                    },
                    {
                        nm:2,
                        value:"已发放",
                    },
                ],
                lwbz:'',
                lwdw:'',
                grdw:{
                    bz:'',
                    dwnm:'',
                    dwmc:'',
                },
                bzparma:{
                    nm:'',
                    mc:'',
                },
                tjjljlform:{
                    sfbz:'',
                    rynm:'',
                    sjlgr:'',
                    sjlbz:'',
                    dwnm:'',
                    ssdw:'',
                    jlyy:'',
                    sj:'',
                    jlmc:'',
                    fssj:'',
                },
                ckrorkh:'',
            }
    },
        created(){
            this.getJljl(this.jljlparma)
            this.getlwbzList()
            this.getLWDWList();
        },
        methods:{
            getWorkersList(grdw){
                this.$axios.post("/api/user/getUser",grdw).then(re =>{
                    this.users = re.data.data
                })
            },
            getlwbzList(bzparma){
                this.$axios.post("/api/dictionary/getGrssbz",bzparma).then(re =>{
                    this.lwbz = re.data.data

                })
            },
            getLWDWList(){
                this.$axios.post("/api/dictionary/getGrssdw").then(re =>{
                    this.lwdw = re.data.data

                })
            },
            getJljl(jljlparma){
                this.$axios.post("/api/jljl/getJljl",jljlparma).then(re =>{
                    this.tableData = re.data.data
                })
            },
            handleClick(){
                this.jljlparma.jlr=this.activeName
                this.getJljl(this.jljlparma)
            },
            addGr(){
                this.tjjljl = true
            },
            addBz(){
                this.tjjljlbz = true
            },
            tjjlquxiao(){
                this.tjjljl = false
            },
            seleUser(val){
                this.grdw.dwmc = val
                this.getWorkersList(this.grdw)
            },
            selebz(val){
                this.bzparma.nm = val
                this.getlwbzList(this.bzparma)
            },
            tjjlqueding(tjjljlform){

                for(let i = 0; i< this.users.length ;i++){
                    if(this.users[i].rynm == tjjljlform.rynm){
                        tjjljlform.sjlgr =   this.users[i].xm
                    }
                }
                for(let i = 0; i< this.lwdw.length ;i++){
                    if(this.lwdw[i].nm == tjjljlform.dwnm){
                        tjjljlform.ssdw =   this.lwdw[i].mc
                    }
                }
                tjjljlform.sfbz = 1
                this.$axios.post("/api/jljl/addJljl",tjjljlform).then(re =>{
                    //this.tableData = re.data.data
                    if(re.data.code == "OK"){
                        this.tjjljl = false
                        this.getJljl(this.jljlparma)
                        this.$message("添加成功")
                    }else{
                        this.$message("添加失败")
                    }
                })
            },
            tjbzjlquxiao(){
                this.tjjljlbz = false
            },
            tjjlbzqueding(tjjljlform){
                for(let i = 0; i< this.lwbz.length ;i++){
                    if(this.lwbz[i].nm == tjjljlform.bznm){
                        tjjljlform.sjlbz =   this.lwbz[i].mc
                    }
                }
                for(let i = 0; i< this.lwdw.length ;i++){
                    if(this.lwdw[i].nm == tjjljlform.dwnm){
                        tjjljlform.ssdw =   this.lwdw[i].mc
                    }
                }
                tjjljlform.sfbz = 2
                this.$axios.post("/api/jljl/addJljl",tjjljlform).then(re =>{
                    //this.tableData = re.data.data
                    if(re.data.code == "OK"){
                        this.tjjljlbz = false

                        this.getJljl(this.jljlparma)
                        this.$message("添加成功")
                    }else{
                        this.$message("添加失败")
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>