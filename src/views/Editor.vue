<template>
    <div class = "dialog">
        <!--        <el-dialog title = "员工添加"
                           :close-on-click-modal='false'
                           :close-on-press-escape='false'
                           :modal-append-to-body="false"
                >-->
        <div >
            <div style="height:30px ;background: #717ec1 ;">
                <span>员工编辑</span>
            </div>
            <div class="form"  >
                <el-form
                        ref="form"
                        :model='formData'
                        :rules="form_rules"
                        label-width="100px"
                        size="mini"
                        style="margin:0px auto;width:auto;">
                    <div  class = "user" style ="background: #c1b9bd ;">
                        <div style="height:4px "></div>
                        <el-row type="flex" class="row-bg" justify="center" >
                            <el-col :space="4"  >
                                <div class = "user_1" style="width:60%  ; float:right ">
                                    <el-form-item prop='xm' label="姓名:">
                                        <el-input type="xm" v-model="formData.xm"></el-input> <el-button type="primary" size ="small" icon="search" @click='ucc()'>读取身份证</el-button>
                                    </el-form-item>
                                    <el-form-item prop='sfzh' label="身份证号:" >
                                        <el-input type="sfzh" v-model="formData.sfzh"  ></el-input>
                                    </el-form-item>
                                    <el-form-item prop='csrq' label="出生日期:">
                                        <el-date-picker type="date" placeholder="出生日期" v-model="formData.csrq" style="width: 100%;" value-format="yyyy-MM-dd" format="yyyy-MM-dd"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item prop='jg' label="籍贯:">
                                        <el-input type="jg" v-model="formData.jg"></el-input>
                                    </el-form-item>
                                    <el-table-column prop="image" label="身份证照片" >
                                        <el-row>
                                            <!-- 图片的显示 align="right"align="right" -->
                                            <img :src="formData.src" style = "width :102px ;height: 100px;" align="right"/>
                                            <img :src="formData.paizhao" style = "width :102px ;height: 100px;" align="right"/>

                                        </el-row>
                                        <el-row>
                                            <el-button type="primary" size ="mini"  @click='paizhao()'style="float:right">拍照</el-button>
                                        </el-row>
                                    </el-table-column>
                                    <!--<div id="upload">
                                        <label class="el-form-item__label" style="width: 80px;">上传图片</label>
                                        &lt;!&ndash;elementui的上传图片的upload组件&ndash;&gt;
                                        <el-upload
                                                class="upload-demo"
                                                :before-upload="beforeupload"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                style="margin-left:80px;">
                                            <i class="el-icon-upload"></i>
                                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                        </el-upload>
                                    </div>-->
                                </div>
                            </el-col>
                            <el-col :space="4"  >
                                <div class = "user_2" style="width:60%  ;">
                                    <el-form-item label="性别:"  >
                                        <el-select v-model="formData.xb" placeholder="性别" >
                                            <el-option
                                                    v-for="xb in format_xb_list"
                                                    :key="xb.nm"
                                                    :label="xb.mc" :value="xb.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>

                                    <el-form-item label="民族:"  >
                                        <el-select v-model="formData.mz" value-key="formData.mznm" placeholder="民族" >
                                            <el-option
                                                    v-for="mz in format_mz_list"
                                                    :key="mz.nm"
                                                    :label="mz.mc" :value="mz.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="政治面貌:"  >
                                        <el-select v-model="formData.zzmm" placeholder="政治面貌" >
                                            <el-option
                                                    v-for="zzmm in format_zzmm_list"
                                                    :key="zzmm.nm"
                                                    :label="zzmm.mc" :value="zzmm.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="工人所属队伍:"  >
                                        <el-select v-model="formData.grssdw" placeholder="工人所属队伍" >
                                            <el-option
                                                    v-for="grssdw in format_grssdw_list"
                                                    :key="grssdw.nm"
                                                    :label="grssdw.mc" :value="grssdw.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="工人所属班组:"  >
                                        <el-select v-model="formData.grssbz" placeholder="工人所属班组" >
                                            <el-option
                                                    v-for="grssbz in format_grssbz_list"
                                                    :key="grssbz.nm"
                                                    :label="grssbz.mc" :value="grssbz.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="工人工种:"  >
                                        <el-select v-model="formData.grgz" placeholder="工人工种" >
                                            <el-option
                                                    v-for="grgz in format_grgz_list"
                                                    :key="grgz.nm"
                                                    :label="grgz.mc" :value="grgz.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                </div>
                            </el-col>
                        </el-row >
                    </div>

                    <div class = "user_3">
                        <div style="height:4px "></div>
                        <el-row type="flex" class="row-bg" justify="center" >
                            <el-col :space="4"  >
                                <div class = "user_4" style="width:60%  ; float:right">
                                    <el-form-item prop='jtzz' label="家庭住址:">
                                        <el-input type="jtzz" v-model="formData.jtzz"></el-input>
                                    </el-form-item>
                                    <el-form-item prop='khh' label="开户行:">
                                        <el-input type="khh" v-model="formData.khh"></el-input>
                                    </el-form-item>
                                    <el-form-item label="文化程度:"  >
                                        <el-select v-model="formData.whcd"   placeholder="文化程度" >
                                            <el-option
                                                    v-for="item in format_whcd_list"
                                                    :key="item.nm"
                                                    :label="item.mc" :value="item.mc"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item prop='jjlxr' label="紧急联系人:">
                                        <el-input type="jjlxr" v-model="formData.jjlxr"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :space="4"  >
                                <div class = "user_5" style="width:60% ">
                                    <el-form-item prop='yhkh' label="开户行:">
                                        <el-input type="yhkh" v-model="formData.yhkh"></el-input>
                                    </el-form-item>
                                    <el-form-item prop='lxdh' label="联系电话:">
                                        <el-input type="lxdh" v-model="formData.lxdh"></el-input>
                                    </el-form-item>
                                    <el-form-item prop='tc' label="特长:">
                                        <el-input type="tc" v-model="formData.tc"></el-input>
                                    </el-form-item>
                                    <el-form-item prop='jjlxdh' label="紧急联系电话:">
                                        <el-input type="jjlxdh" v-model="formData.jjlxdh"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div  style="text-align:center">
                        <el-form-item  class="text_right">
                            <el-button @click='onCancel()'>取 消</el-button>
                            <el-button type="primary" @click='onSubmit(formData)'>提  交</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <!-- </el-dialog>-->
    </div>
</template>

<script>
    export default {
        name: "editor",
        param:"",
        props:{
            dialogi:Object
        },
        data (){
            return {
                websocket: {},
                format_whcd_list:[],
                format_xb_list:[],
                format_mz_list:[],
                format_zzmm_list:[],
                format_grssdw_list:[],
                format_grssbz_list:[],
                format_grgz_list:[],
                formData:{
                    paizhao:require('../assets/timg.png'),
                    src:require('../assets/timg.png'),
                    sfzh:'',
                    xm:'',
                    csrq:'',
                    jg:'',
                    jtzz:'',
                    khh:'',
                    whcd:'',
                    whcdnm:'',
                    jjlxr:"",
                    xb:"",
                    xbnm:'',
                    mz:"",
                    mznm:"",
                    zzmm:"",
                    zzmmnm:'',
                    grssdw:"",
                    dwnm:'',
                    grssbz:"",
                    bznm:'',
                    grgz:"",
                    grgzlbnm:'',
                    jjlxdh:"",
                    yhkh:"",
                    tc:"",
                    lxdh:""
                },
                form_rules: {
                    sfzh: [
                        { required: true, message: "身份证号不能为空！", trigger: "blur" }
                    ],
                    xm: [
                        { required: true, message: "姓名不能为空！", trigger: "blur" }
                    ],
                    csrq: [
                        { required: true, message: "出生日期不能为空！", trigger: "blur" }
                    ],
                    jg: [
                        { required: true, message: "籍贯不能为空！", trigger: "blur" }
                    ],
                    jtzz: [
                        { required: true, message: "家庭住址不能为空！", trigger: "blur" }
                    ],
                    khh: [
                        { required: true, message: "银行卡号不能为空！", trigger: "blur" }
                    ],
                    /*  jg: [
                          { required: true, message: "籍贯不能为空！", trigger: "blur" }
                      ],
                      jg: [
                          { required: true, message: "籍贯不能为空！", trigger: "blur" }
                      ]*/
                }
            }
        },
        created(){
            this.getWhcd()
            this.getXb()
            this.getMz()
            this.getZzmm()
            this.getGrssdw()
            this.getGrssbz()
            this.getGgrgz()
            this.getrouter();
        },
        methods:{
            getrouter(){
                    this.formData.rynm = this.$route.params.rynm,
                    this.formData.sfzh = this.$route.params.sfzh,
                    this.formData.xm=this.$route.params.xm,
                    this.formData.csrq=this.$route.params.csrq,
                    this.formData.jg=this.$route.params.jg,
                    this.formData.jtzz=this.$route.params.jtzz,
                    this.formData.khh=this.$route.params.khh,
                    this.formData.whcd=this.$route.params.whcd,
                    this.formData.whcdnm=this.$route.params.whcdnm,
                    this.formData.jjlxr=this.$route.params.jjlxr,
                    this.formData.xb=this.$route.params.xb,
                    this.formData.xbnm=this.$route.params.xbnm,
                    this.formData.mz=this.$route.params.mz,
                    this.formData.mznm=this.$route.params.mznm,
                    this.formData.zzmm=this.$route.params.zzmm,
                    this.formData.zzmmnm=this.$route.params.zzmmnm,
                    this.formData.grssdw=this.$route.params.grssdw,
                    this.formData.dwnmv=this.$route.params.dwnm,
                    this.formData.grssbz=this.$route.params.grssbz,
                    this.formData.bznm=this.$route.params.bznm,
                    this.formData.grgz=this.$route.params.grgz,
                    this.formData.grgzlbnm=this.$route.params.grgzlbnm,
                    this.formData.jjlxdh=this.$route.params.jjlxdh,
                    this.formData.yhkh=this.$route.params.yhkh,
                    this.formData.tc=this.$route.params.tc,
                    this.formData.lxdh=this.$route.params.lxdh
            },

            initWebSocket(){ //初始化weosocket
                //let url ="ws://" + document.location.host + "/WebChat/websocket/" + username + "/"+ _img
                const wsuri ="ws://127.0.0.1:8282/websocket/paizhao"//ws地址
                console.log(wsuri)
                this.websock = new WebSocket(wsuri);
                this.websocket.onopen = this.websocketonopen;
                //onopen
                this.websocket.onerror = this.websocketonerror;

                this.websock.onmessage = this.websocketonmessage;
                this.websock.onclose = this.websocketclose;
            },

            websocketonopen() {
                console.log("WebSocket连接成功");
            },
            websocketonerror(e) { //错误
                console.log("WebSocket连接发生错误");
            },
            websocketonmessage(e){ //数据接收
                console.log(e);
                let src = "data:image/jpg;base64," + e.data
                if("连接成功" == src){
                    this.formData.paizhao = null
                }else{
                    this.formData.paizhao = src
                }

            },

            websocketsend(agentData){//数据发送
                this.websock.send(agentData);
            },

            websocketclose(e){ //关闭
                // console.log("connection closed (" + e.code + ")");
            },
            paizhao(){
                //点击拍照时开启长连接
                this.initWebSocket()
            },

            ucc(){
                this.$axios.post("/api/user/ucc").then(re =>{
                    this.formData.sfzh = re.data.data.IDNUM;
                    this.formData.xm = re.data.data.CHNAME;
                    this.formData.jtzz = re.data.data.ADDRESS;
                    this.formData.xb = re.data.data.SEX
                    this.formData.mz = re.data.data.FOLK;
                    this.formData.csrq = re.data.data.BIRTH;
                    let src = "data:image/jpg;base64," + re.data.data.PIC
                    this.formData.src =   src
                })
            },
            onCancel(){
                this.$router.push("/workers");
            },
            onSubmit( form ){
                for(let i = 0; i< this.format_whcd_list.length ;i++){
                    if(this.format_whcd_list[i].mc == form.whcd){
                        form.whcdnm =   this.format_whcd_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_xb_list.length ;i++){
                    if(this.format_xb_list[i].mc == form.xb){
                        form.xbnm =   this.format_xb_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_mz_list.length ;i++){
                    if(this.format_mz_list[i].mc == form.mz){
                        form.mznm =   this.format_mz_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_zzmm_list.length ;i++){
                    if(this.format_zzmm_list[i].mc == form.zzmm){
                        form.zzmmnm =   this.format_zzmm_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_grssdw_list.length ;i++){
                    if(this.format_grssdw_list[i].mc == form.grssdw){
                        form.dwnm =   this.format_grssdw_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_grssbz_list.length ;i++){
                    if(this.format_grssbz_list[i].mc == form.grssbz){
                        form.bznm =   this.format_grssbz_list[i].nm
                    }
                }
                for(let i = 0; i< this.format_grgz_list.length ;i++){
                    if(this.format_grgz_list[i].mc == form.grgz){

                        form.grgzlbnm =   this.format_grgz_list[i].nm
                    }
                }
                let csrqaa = form.csrq.toString()
                form.csrqaa = csrqaa;
                this.$axios.post("/api/workers/add",form).then(re=>{

                    if(re.data.code == "OK"){
                        this.$message("修改成功成功")
                        this.$router.push("/workers");
                    }else{
                        this.$message("修改失败失败")
                    }
                })
            },
            getWhcd(){
                this.$axios.post("/api/dictionary/getWhcd").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_whcd_list = re.data.data
                    }
                })
            },
            getXb(){
                this.$axios.post("/api/dictionary/getXb").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_xb_list =re.data.data
                    }
                })
            },
            getMz(){
                this.$axios.post("/api/dictionary/getMz").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_mz_list = re.data.data
                    }
                })
            },
            getZzmm(){
                this.$axios.post("/api/dictionary/getZzmm").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_zzmm_list = re.data.data
                    }
                })
            },
            getGrssdw(){
                this.$axios.post("/api/dictionary/getGrssdw").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_grssdw_list =re.data.data
                    }
                })
            },
            getGrssbz(){
                this.$axios.post("/api/dictionary/getGrssbz").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_grssbz_list = re.data.data
                    }
                })
            },
            getGgrgz(){
                this.$axios.post("/api/dictionary/getGgrgz").then(re =>{
                    if(re.data.code == "OK"){
                        this.format_grgz_list = re.data.data
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>