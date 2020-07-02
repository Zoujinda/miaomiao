<!--  -->
<template>
  <div class="messageBox">
      <h2>{{title}}</h2>
      <p>{{content}}</p>
      <div>
          <div @touchstart="handleOk">{{ok}}</div>
          <div @touchstart="handleCancel">{{cancel}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'MessageBox',
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>
    .messageBox{
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 3px;
        position: absolute;
        background: white;
        box-shadow: 4px 4px 10px #ccc;
        top: 50%;
        left: 50%;
        margin: -60px 0 0 -100px;
        h2{
            text-align: center;
            line-height: 40px;
            font-size: 18px;
        }
        p{
            text-align: center;
            line-height: 40px;
        }
        &>div{
            display: flex;
            position: absolute;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #ccc;
            div{
                flex: 1;
                text-align: center;
                line-height: 30px;
                border-right: 1px solid #ccc;
                &:last-child{
                    border: none;
                }
            }
        }
    }
</style>
