<template>
    <header class="head-nav">
        <el-row >
            <el-col :span="6" class="logo-containse">
                <img src="../assets/logo.png" class="logo" alt="">
                <span class = "title">智慧工地后台管理系统</span>

            </el-col>
<!--            <el-col :span="6" class="logo-containse">
                <div >
                    <div>
                        <label size = "mini">21313</label>
                    </div>
                    <div style = "">
                        <el-input
                                placeholder="输入关键字进行过滤"
                                v-model="filterText"
                                size = "mini">
                        </el-input>

                        <el-tree
                                class="filter-tree"
                                :data="data2"
                                :props="defaultProps"
                                default-expand-all
                                :filter-node-method="filterNode"
                                ref="tree2">
                        </el-tree>
                    </div>
                </div>
            </el-col>-->
            <el-col :span="6" class = "user">
                <div class = "userinfo" >
                    <img src="user.avatar" class ="avatar" alt="">
                    <div class="welcome">
                        <p class = "name comename">欢迎</p>
                        <p class = "name avatarname">无支祁</p>
                    </div>
                    <span class='username'>
                        <el-dropdown  trigger="click" @command='setDialogInfo'>
                        <span  class="el-dropdown-link">
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command ="info">个人信息</el-dropdown-item>
                            <el-dropdown-item command = "logout">退出</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </header>
</template>
<script>

export default {
    name: "head-nav",
/*    data(){
        return{}
    },*/
    data() {
        return {
            filterText: '',
            data2: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
/*    computed: {
    }*/
    created(){
        this.getgd()
    },
    watch: {
        filterText(val) {
            this.$refs.tree2.filter(val);
        }
    },
methods:{
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
    },
    getgd(){
        this.$axios.post("/api/dictionary/getGd",this.grdw).then(re =>{
            this.Global.setJzgs(re.data.data[0])
        })
    },
    setDialogInfo(cmdItmet){
       /* console.log(cmdItmet)*/
        switch (cmdItmet){
            case "info" :this.showInfoList();
            break;
            case "logout":this.logout();
            break;
        }
    },
    showInfoList(){
        /*console.log("打印个人信息")*/
        this.$router.push('/infoshow');
    },
    logout(){
        //console.log("退出")
        this.$router.push('/login')
    }
}
};
</script>

<style scoped>
    .head-nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #324057;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }
    .logo-container {
        line-height: 60px;
        min-width: 400px;
    }
    .logo {
        height: 50px;
        width: 50px;
        margin-right: 5px;
        vertical-align: middle;
        display: inline-block;
    }
    .title {
        vertical-align: middle;
        font-size: 15px;
        font-family: "Microsoft YaHei";
        letter-spacing: 3px;
    }
    .user {
        line-height: 60px;
        text-align: right;
        float: right;
        padding-right: 10px;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        padding: 0 5px;
    }
    .name {
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }
    .comename {
        font-size: 12px;
    }
    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }
    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .el-dropdown {
        color: #fff;
    }
</style>
