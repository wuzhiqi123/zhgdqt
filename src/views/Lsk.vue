<template>
    <div>
    <div style = "margin : 8px 0px 10px 5px ;">
        <div style = "margin : 0px 20px 0px 0px ; float:left ;background:#4539f5; color:#4941ff ;width:6px;height:18px"></div> <span >临时卡</span>
    </div>
    <div>
        <el-form>
            <el-form-item >
                <el-input  v-model="ckrorkh" size ="mini" placeholder="持卡人,卡号" style="width: 200px ;height:10px ;float:left"></el-input>
                <el-button @click='selectLsk()'  style=" margin : 7px 0px 0px 0px; width: 50px ;height:28px ;float:left" type="primary" size ="mini" icon="el-icon-search" ></el-button>
                <el-button @click='addLsk()'  style=" margin : 7px 0px 0px 10px; width: 50px ;width:60px ;height:28px ;float:left" type="primary" size ="mini"  >新增卡</el-button>
            </el-form-item>

        </el-form>
    </div>
        <el-tabs v-model="activeName" @tab-click="handleClick()" >
            <el-tab-pane label="全部" name="0">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            size="mini">
                        <el-table-column
                                prop="nm"
                                label="编号"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="kh"
                                label="卡号"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="ckrxm"
                                label="持卡人"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zkrq"
                                label="制卡日期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="rzlx"
                                label="认证类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="yxq"
                                label="有效期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zt"
                                label="状态"
                                :formatter="formatZt"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bz"
                                label="备注"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column label="操作" width="90">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handlezt(scope.$index, scope.row)">{{bjzt}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="有效" name="1">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            size="mini">
                        <el-table-column
                                prop="nm"
                                label="编号"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="kh"
                                label="卡号"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="ckrxm"
                                label="持卡人"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zkrq"
                                label="制卡日期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="rzlx"
                                label="认证类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="yxq"
                                label="有效期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zt"
                                label="状态"
                                :formatter="formatZt"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bz"
                                label="备注"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column label="操作" width="90">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handlezt(scope.$index, scope.row)">{{bjzt}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="失效" name="2">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            size="mini">
                        <el-table-column
                                prop="nm"
                                label="编号"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="kh"
                                label="卡号"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="ckrxm"
                                label="持卡人"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zkrq"
                                label="制卡日期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="rzlx"
                                label="认证类型"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="yxq"
                                label="有效期"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="zt"
                                label="状态"
                                :formatter="formatZt"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="bz"
                                label="备注"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="sjsj"
                                label="数据时间"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="gdnm"
                                label="工地内码"
                                v-if="false"
                        >
                        </el-table-column>
                        <el-table-column label="操作" width="90">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handlezt(scope.$index, scope.row)">{{bjzt}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div></el-tab-pane>
        </el-tabs>
        <el-dialog title="新增临时卡" :visible.sync="addlskdialog">
            <el-form :model="lskdialog" label-position="left" label-width="120px" size ="mini">
                <el-form-item label="卡号" >
                    <el-input v-model="lskdialog.kh"  ></el-input>
                </el-form-item>
                <el-form-item label="持卡人身份证号" >
                    <el-input v-model="lskdialog.ckrsfzh"  style = "float :left;width:65%"></el-input>
                    <el-button type="primary" size ="mini" icon="search" @click='ucc()' style = "float :left;width:35%">读取身份证</el-button>
                </el-form-item>
                <el-form-item label="持卡人姓名"  >
                    <el-input v-model="lskdialog.ckrxm" ></el-input>
                </el-form-item>
                <el-form-item label="制卡日期" >
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="lskdialog.zkrq" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="有限期" >
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="lskdialog.yxq" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="状态" >
                    <el-select v-model="lskdialog.zt" placeholder="状态" style="width:100%  ;">
                        <el-option
                                key="1"
                                label="有效" value="1"
                        ></el-option>
                        <el-option
                            key="2"
                            label="无效" value="2"
                    ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注" >
                    <el-input v-model="lskdialog.bz" ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="lskquxiao()">取 消</el-button>
                <el-button type="primary" @click="lskaddqueding(lskdialog)">确 定</el-button>
            </div>
        </el-dialog>
    </div>

    </div>
</template>

<script>
    export default {
        name: "lsk",
        data(){
            return {
                addlskdialog:false,
                tableData:'',
                bjzt:'修改状态',
                activeName: '0',
                LskParma:{
                    parma:'',
                    zt:'0',
                },
                ckrorkh:'',
                lskdialog: {
                    kh:'',
                    ckrsfzh: '',
                    ckrxm: '',
                    zkrq: '',
                    zdrzrs: '',
                    yxq:'',
                    zt:'',
                    bz:'',
                },
            }
        },
        created(){
            this.getLskxx(this.LskParma)
        },
        methods:{
            getLskxx(parma){
                this.$axios.post("/api/lsk/getLskxx",parma).then(re =>{
                    this.tableData = re.data.data
                })
            },
            selectLsk(){
                let ckrorkh = this.ckrorkh
                this.LskParma.parma = ckrorkh
                this.LskParma.zt = '1'
                //this.getLskxx( this.LskParma)
                this.$axios.post("/api/lsk/getLskxx",this.LskParma).then(re =>{
                    this.tableData = re.data.data
                })

            },
            addLsk(){
                this.addlskdialog = true
            },
            lskaddqueding(lskdialog){
                this.$axios.post("/api/lsk/addLskxx",lskdialog).then(re =>{
                    this.tableData = re.data.data
                })
    },
            lskquxiao(){
                this.addlskdialog = false
            },
            handleClick(){
                this.LskParma.zt = this.activeName
                this.getLskxx(this.LskParma);
            },
            ucc(){
                this.$axios.post("/api/user/ucc").then(re =>{
                    this.lskdialog.ckrsfzh = re.data.data.IDNUM;
                  /*  this.formData.xm = re.data.data.CHNAME;
                    this.formData.jtzz = re.data.data.ADDRESS;
                    this.formData.xb = re.data.data.SEX
                    this.formData.mz = re.data.data.FOLK;
                    this.formData.csrq = re.data.data.BIRTH;
                    let src = "data:image/jpg;base64," + re.data.data.PIC*/
                    //this.formData.src =   src

                })
            },
            handlezt(index ,row){
                this.lskaddqueding(row)
                this.getLskxx(this.LskParma)
            },
            formatZt: function (row, column) {
                return row.zt === '1' ? '有效' : row.zt === '2' ? '无效' : '状态错误'
            },
        },

    }
</script>

<style scoped>

</style>