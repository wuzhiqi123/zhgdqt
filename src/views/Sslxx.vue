<template>
    <div>
        <div style = "margin : 8px 0px 10px 5px ;">
            <div style = "margin : 0px 20px 0px 0px ; float:left ;background:#4539f5; color:#4941ff ;width:6px;height:18px"></div> <span >宿舍管理</span>
        </div>
        <div style = "margin : 5px 0px 35px 5px ;">
            <el-button type="primary" @click="plrz">批量入住</el-button>
        </div>
            <div style = "margin : 5px 0px 10px 5px ;">
                <el-radio-group v-model="radio3" @change = "selecsslxx()" >
                    <template v-for=" itm in itms" >
                        <el-radio-button :label="itm.sslmc" :value = "itm.sslnm" style = "margin : 5px 10px 10px 0px ;"></el-radio-button>
                    </template>
                    <el-radio-button label="添加" style = "margin : 5px 10px 10px 0px ;"></el-radio-button>
                </el-radio-group>
            </div>
        <el-dialog title="宿舍楼添加" :visible.sync="dialogFormVisible">
            <el-form :model="form" label-position="left" label-width="120px">
                <el-form-item label="宿舍楼名称" >
                    <el-input v-model="form.sslmc"  ></el-input>
                </el-form-item>
                <el-form-item label="宿舍楼属性" >
                    <el-select v-model="form.sslsx" placeholder="请选择宿舍楼属性">
                        <el-option label="员工" value="员工"></el-option>
                        <el-option label="领导" value="领导"></el-option>
                    </el-select>
                </el-form-item>
                    <el-form-item label="宿舍楼位置"  >
                        <el-input v-model="form.sslwz" ></el-input>
                    </el-form-item>
                    <el-form-item label="备注" >
                        <el-input v-model="form.bz" ></el-input>
                    </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="quxiao()">取 消</el-button>
                <el-button type="primary" @click="queding(form)">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog :title="title" :visible.sync="tjlc">
            <el-form :model="tjlcform" label-position="left" label-width="120px">
                <el-form-item label="宿舍楼" >
                    <el-input v-model="tjlcform.sslmc" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="楼层" >
                    <el-input v-model="tjlcform.lc"  :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="房间号"  >
                    <el-input v-model="tjlcform.fjh" :disabled="disabledFjh"></el-input>
                </el-form-item>
                <el-form-item label="最大入住人数" >
                    <el-input v-model="tjlcform.zdrzrs" ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tjlcquxiao()">取 消</el-button>
                <el-button type="primary" @click="tjlcqueding(tjlcform)">确 定</el-button>
            </div>
        </el-dialog>

        <div style = "margin : 0px 20px 0px 0px ;background:#9d9699;width:100% ;height: 30px;line-height:30px;">
            <span style = "margin : 0px 0px 0px 5px ;">{{itms[0].sslmc}}</span>
        </div>
        <div style = "margin : 20px 20px 0px 5px ">
            <template  v-for="(sslc,index ) in ssxx">
                <div>
            <el-radio-group  v-model="radio4" @change="addtjfj">
                <el-radio-button :label="index +c" style = "margin : 5px 10px 10px 0px ;"></el-radio-button>
                <template v-for=" itm in sslc" >
                    <el-radio-button :label="itm.fjh + ' ('+0+'/'+itm.zdrzrs+')'"  style = "margin : 5px 10px 10px 0px ;" border = "true" text-color="#9d9699">
                    </el-radio-button>
                </template>
                <el-radio-button :label="index" style = "margin : 5px 10px 10px 0px ;"  >+</el-radio-button>
                <!--<el-button   type="primary" style = "margin : 5px 10px 10px 0px ;" @click.native="addtjfj" size = "mini" value = index>+</el-button>-->
            </el-radio-group>
                </div>
            </template>
            <el-button type="primary" @click="addtjlc()"   >添加楼层</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sslxx",
        data(){
            return  {
                dialogFormVisible:false,
                tjlc:false,
                disabledFjh:true,
                title:'',
                radio3 :'',
                radio4:'',
                itms:'',
                ssxx:'',
                ssxxparma:{
                    sslxx:'',
                },
                c:'F',
                form: {
                    sslmc: '',
                    sslsx: '',
                    sslwz: '',
                    bz: '',
                },
                tjlcform: {
                    sslmc:'',
                    ssl: '',
                    lc: '',
                    fjh: '',
                    zdrzrs: '',
                },
                formLabelWidth: '120px',
            }

        },
        created(){
            this.getSslxx()
        },
        methods: {
            getSslxx() {
                this.$axios.post("/api/sslxx/getSslxx").then(re => {
                    this.itms = re.data.data
                    this.radio3 = this.itms[0].sslmc
                    this.ssxxparma.sslxx =  this.itms[0].sslnm
                    this.getSsxx(this.ssxxparma);
                })

            },
            getSsxx(ssxxparma){
                this.$axios.post("/api/sslxx/getSsxx",ssxxparma).then(re => {
                    this.ssxx = re.data.data
                })
            },
            addtjlc(){
                let i = 0;
                this.title = "添加楼层"
                this.disabledFjh = true
                this.tjlc = true
                this.tjlcform.sslmc = this.radio3
                for(let a in this.ssxx){
                    i++
                }
                this.tjlcform.lc = i+1
                this.tjlcform.fjh = i+1+"01"
            },
            plrz(){
                 if(this. radio4.includes("F")){
                     this.$message("请选择房间")
                 }else{
                     let fjh = this.radio4.split(" ")[0]
                     let ssnm ='' ;
                     for(let i  in this.ssxx){
                         for(let j = 0 ;j<this.ssxx[i].length;j++){
                             if(fjh == this.ssxx[i][j].fjh){
                                 ssnm = this.ssxx[i][j].ssnm
                             }
                         }
                     }
                     this.$router.push({name:"rytj",params:{
                             fjh:fjh,
                             ssnm:ssnm,
                         }})
                 }
            },
            selecsslxx(){
                if("添加" == this.radio3){
                    this.dialogFormVisible = true;
                }else{
                    for(let g=0; g<this.itms.length;g++){
                        if(this.radio3 == this.itms[g].sslmc){
                            this.ssxxparma.sslxx = this.itms[g].sslnm
                            this.getSsxx(this.ssxxparma);
                        }
                    }
                }
        },
            quxiao(){
                this.dialogFormVisible = false
                this.radio3 ='';
            },
            queding(form){
                this.dialogFormVisible = false
                this.radio3 ='';
                this.$axios.post("/api/sslxx/addSsLxx",form).then(re => {
                    if(re.data.code == "OK"){
                        this.ssxx = re.data.data
                        this.getSslxx();
                    }else{
                        this.$message(re.data.data)
                    }
                })
            },
            tjlcquxiao(){
                this.tjlc  = false
                //this.radio3 ='';
            },
            tjlcqueding(form){
                this.tjlc  = false
                for(let i = 0 ;i<this.itms.length;i++){
                    if(form.sslmc == this.itms[i].sslmc){
                        form.ssl = this.itms[i].sslnm

                    }
                }
               // this.radio3 ='';
                this.$axios.post("/api/sslxx/addLcxx",form).then(re => {
                    if(re.data.code == "OK"){
                        this.getSslxx()
                        this.$message("OK")
                    }else{
                        this.$message(re.data.data)
                    }
                })
            },
            addtjfj(){
                let numgExp = /^[0-9]+$/
               let numRe = new RegExp(numgExp)
                if(numRe.test(this.radio4)){
                    let i = 0;
                    this.title = "添加房间"
                    this.disabledFjh = false
                    this.tjlc = true
                    this.tjlcform.sslmc = this.radio3
                    for(let a in this.ssxx){
                        i++
                    }
                    this.tjlcform.lc = this.radio4
                    this.tjlcform.fjh = ''
                    this.radio4 = ''
                }
            },
        }
    }
</script>

<style scoped>

</style>