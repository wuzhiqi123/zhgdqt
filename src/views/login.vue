<template>
    <div class="login" >
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">智慧工地管理系统</span>
                <el-form :model="loginUser"  :rules="rules" ref="loginForm"
                         label-width="80pxs" class="loginForm">

                    <el-form-item label="邮箱" prop="email">
                        <el-input  v-model="loginUser.email"  placholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginUser.password"  placholder="请输入用密码"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="选择身份" >
                        <el-select v-model="registerUser.identity" placeholden="请选择身份">
                            <el-option label="管理员" value="manage"></el-option>
                            <el-option label="员工" value="employee"></el-option>
                        </el-select>
                    </el-form-item>-->
                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="sumitForm('loginForm')">登入</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "register",
        component:{},
        data(){
            return {
                loginUser:{
                    name:"",
                    email:"",
                    password:"",
                    password2:"",
                    identity:"",
                },
                rules:{
                    amail:[
                        {
                        type:"email",
                        required:true,
                        message:"邮箱不能为空",
                        trigger:"blur"
                    }
                    ],
                    password:[
                      {required: true, message: "密码不能为空", trigger: "blur"},
                      {min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur"},
                    ],

                }
            }
        },
        methods:{
            sumitForm(registerForm){
                this.$refs[registerForm].validate(valid =>{
                    if(valid){
                        this.$axios
                            .post("/api/user/vue")
                            .then(rep=>{
                                debugger;
                                this.$message({
                                    message:"登入成功",
                                    type:"success"
                                })
                                this.$router.push("/index")
                            })
                    }

                })

            }
        }
    }

</script>

<style scoped>
    .login {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../assets/bg.jpg) no-repeat center center;
        background-size: 100% 100%;
    }
    .form_container {
        width: 370px;
        height: 210px;
        position: absolute;
        top: 20%;
        left: 34%;
        padding: 25px;
        border-radius: 5px;
        text-align: center;
    }
    .form_container .manage_tip .title {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 26px;
        color: #fff;
    }
    .loginForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;
    }

    .submit_btn {
        width: 100%;
    }
 /*   .tiparea {
        text-align: right;
        font-size: 12px;
        color: #333;
    }
    .tiparea p a {
        color: #409eff;
    }*/
</style>
<!--
<script>
/*    import ElSelect from "element-ui/lib/select";
    export default {
        components: {ElSelect}
    }*/
</script>-->
