<template>
    <div>
        <div style = "margin : 8px 0px 10px 5px ;">
            <div style = "margin : 0px 20px 0px 0px ; float:left ;background:#4539f5; color:#4941ff ;width:6px;height:18px"></div> <span >安全教育培训</span>
        </div>
        <div style = "height:30%">
            <el-form ref="refform" :rules="rules" :model="form" label-width="100px" size = "mini">
                <el-row >
                    <el-col :span="6">
                        <el-form-item label="培训类型:" prop="pxlx"  >
                            <el-select v-model="form.pxlx" placeholder="培训类型"   size = "mini">
                                <el-option
                                        v-for="itm in pxlx"
                                        :key="itm.nm"
                                        :label="itm.mc" :value="itm.mc"

                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="培训时间:" prop="pxsj" >
                            <el-date-picker type="date" placeholder="培训时间" v-model="form.pxsj" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="培训主题:" prop="pxzt" >
                            <el-input v-model="form.pxzt"  size ="mini" placeholder="最多100字"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="培训人:" prop="pxr" >
                            <el-input v-model="form.pxr"  size ="mini"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="培训地点:" prop="pxdd" >
                            <el-input v-model="form.pxdd"  size ="mini"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="备注:" prop="bz" >
                            <el-input v-model="form.bz"    type="textarea" autosize></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="添加附件:" prop="fj" >
                            <el-button   type="primary"  size = "mini">上传附件</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="参训人员:" prop="cxry" >
                            <el-button   type="primary"  size = "mini" @click="dialogTableVisible=true" >选择工人</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                            <el-button   type="primary"  size = "mini" @click='onSubmit(form)'>保存</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>

                <el-dialog title="选择工人" :visible.sync="dialogTableVisible" width="800px" height="400px ">
                    <el-table :data="itmes" style="width: 100%" @selection-change="changeFun" >
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="xm"
                                label="工人姓名"
                                align='center'
                        >
                        </el-table-column>
                        <el-table-column
                                label="工人性别"
                                prop="xb"
                        >
                        </el-table-column>
                        <el-table-column
                                label="年龄"
                                prop="csrq"
                                :formatter="formatterBannerOs"
                        >
                        </el-table-column>
                        <el-table-column
                                label="身份证号"
                                prop="sfzh"
                        >
                        </el-table-column>
                        <el-table-column
                                label="工种"
                                prop="grgz"
                        >
                        </el-table-column>
                        <el-table-column
                                label="所属队伍"
                                prop="grgz"
                        >
                        </el-table-column>
                    </el-table>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogTableVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
                  </span>
                </el-dialog>

        <div style = "height:50%">
        <el-table :data="itmes" style="width: 100%"  >
            <el-table-column
                    prop="xm"
                    label="工人姓名"
                    align='center'
            >
            </el-table-column>
            <el-table-column
                    label="工人性别"
                    prop="xb"
            >
            </el-table-column>
            <el-table-column
                    label="年龄"
                    prop="csrq"
                    :formatter="formatterBannerOs"
            >
            </el-table-column>
            <el-table-column
                    label="身份证号"
                    prop="sfzh"
            >
            </el-table-column>
            <el-table-column
                    label="工种"
                    prop="grgz"
            >
            </el-table-column>
            <el-table-column
                    label="所属队伍"
                    prop="grgz"
            >
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                rules: {
                    pxlx: [
                        { required: true, message: '请输入培训类型', trigger: 'blur' },
                    ],
                },
                pxlx:'',
                dialogTableVisible:false,
                itmes:'',
                parameter:{
                    bz:'',
                    bznm:'',
                    dwnm:'',
                    dwmc:'',
                },
                form:{
                    pxlxnm:'',
                    pxlx:'',
                    pxsj:'',
                    pxzt:'',
                    pxr:'',
                    pxdd:'',
                    pxnr:'',
                    fj:'',
                    bz:'',
                    tjfj:'',
                    cxry:'',
                },
            }
        },
        created(){
            this.getPxlx()
            this.getWorkersList(this.parameter)
        },
        methods:{
            getPxlx(){
                this.$axios.post("/api/dictionary/getPxlx").then(re =>{
                    this.pxlx = re.data.data
                })
            },
            formatterBannerOs(row, column, cellValue){
                let date = new Date();
                let nian = date.getFullYear()
                let csn = cellValue.split("/")[0]
                if(csn != null && csn!=""){
                    if( nian- csn >0){
                        return nian- csn
                    }else{
                        return "出生日期错误"
                    }
                }else{
                    return "出生日期错误"
                }
            },
            onSubmit(from ){
                for(let i = 0; i< this.pxlx.length ;i++){
                    if(this.pxlx[i].mc == from.pxlx){
                        from.pxlxnm =   this.pxlx[i].nm
                    }
                }
                this.$axios.post("/api/aqjypx/add",from).then(re =>{
                    if(re.data.code == "OK"){
                        this.$message("成功");
                    }else{
                        this.$message(re.data.data);
                    }
                })
            },
            getWorkersList(grdw){
                this.$axios.post("/api/user/getUser",grdw).then(re =>{
                    this.itmes = re.data.data
                })
            },
            changeFun (val) {
                this.form.workersList = val // 返回的是选中的列的数组集合
            },
        },
    }
</script>

<style scoped>
</style>