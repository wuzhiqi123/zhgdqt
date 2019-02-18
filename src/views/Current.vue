<template>
    <div style = "  padding: 10px 0px 0px 10px;" size="mini">
        <div class="el-card__header"   >
            <div class="clearfix">PM2.5（ug/m3）</div>
            <div style="height: 20px ;text-align: center;line-height:20px;"  >离线</div>
            <div class="clearfix" style="  border-radius:0px 0px;">TSP（ug/m3）</div>
            <div style="height: 20px ;text-align: center; line-height:20px;">离线</div>
            <div class = "deviceName" >粉尘</div>
        </div>

        <div class="el-card__header">
            <div class="clearfix">风力（级）</div>
            <div style="height: 20px ;text-align: center;line-height:20px;" class = "text">离线</div>
            <div class="clearfix">风速（m/s）</div>
            <div style="height: 20px ;text-align: center;line-height:20px;"   class = "text">离线</div>
            <div class = "deviceName">风力风速</div>
        </div>

        <div class="el-card__header">
            <div  class="clearfix">温度(°C)</div>
            <div style="height: 20px ;text-align: center;line-height:20px;"  class = "text">离线</div>
            <div   class="clearfix">湿度（%RH）</div>
            <div style="height: 20px ;text-align: center;line-height:20px;"  class = "text">离线</div>
            <div class = "deviceName">温湿度(°C)</div>
        </div>
        <div class="el-card__header">
            <div class="clearfix">TSP（ug/m3）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">TSP（ug/m3）</div>
        </div>
        <div class="el-card__header" >
            <div class="clearfix">噪声（dB）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">噪声（dB）</div>
        </div>

<!--        <div class="el-card__header">
            <div class="clearfix">湿度（%RH）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">湿度（%RH）</div>
        </div>-->

<!--        <div class="el-card__header">
            <div class="clearfix">风速（m/s）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">风速（m/s）</div>
        </div>-->
        <div class="el-card__header">
            <div class="clearfix">风向（方位）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">风向（方位）</div>
        </div>
        <div class="el-card__header">
            <div class="clearfix">风向（度数）（°）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">风向（度数）（°）</div>
        </div>
        <div class="el-card__header">
            <div class="clearfix">气压（Kpa）</div>
            <div class = "text">离线</div>
            <div class = "deviceName">气压（Kpa）</div>
        </div>
        <div class="el-card__header">
            <div class="clearfix">光照（Lux）</div>
            <div class = "text">离线</div>
            <div class = "deviceName"> 光照（Lux）</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "current",
        data() {
            return {
                websocket: {},
            }
        },
        created(){
            //页面刚进入时开启长连接
            this.initWebSocket()
        },
        destroyed: function() {
            //页面销毁时关闭长连接
            this.websocketclose();
        },
        methods: {
            initWebSocket(){ //初始化weosocket
                //let url ="ws://" + document.location.host + "/WebChat/websocket/" + username + "/"+ _img
                const wsuri ="ws://127.0.0.1:8282/websocket/shishishuju"//ws地址
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
                //const redata = JSON.parse(e.data);
                //注意：长连接我们是后台直接1秒推送一条数据，
                //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
                //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
                console.log(e);
            },

            websocketsend(agentData){//数据发送
                this.websock.send(agentData);
            },

            websocketclose(e){ //关闭
               // console.log("connection closed (" + e.code + ")");
            },
        },
    }
</script>

<style scoped>
    .el-card__header{
        margin:5px 0px 0px  10px;
        font-size:15px;
        border-radius:5px 5px;
        padding: 0px 0px 0px 0px;
        margin-left:25px;
        margin-bottom:25px;
        float: left ;
        border:1px solid #000
    }
   .clearfix {
        background: #6f65f5;
        border-radius:0px 0px;
        font-size:15px;
        line-height:30px;
        width: 160px;
        height: 30px;
       text-align: center;
    }
   .text{
       height: 70px;

       text-align: center;
       line-height:70px;
   }
   .deviceName{
       border-top:1px solid rgba(100, 100, 100, 0.28);
       text-align: center;
       height: 24px;
       line-height:24px;
   }
</style>