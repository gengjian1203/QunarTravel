<template>
  <div>
    <div class="talk-line"></div>
    <div class="talk-title border-bottom">
      用户评论
    </div>
    <div class="talk-content border-bottom">
      参观故宫是来京必须要安排的行程，紫禁城的宏伟和惊艳超乎你想象，假装自己穿越时空，你走在乾隆皇帝走过的石板砖上，体验当年盛世的文化底蕴和奢华的生活～ 攻略1 提前网上购买门票，凭身份证直接进 攻略2 租讲解器，每个讲解器都是感应的，每个只讲解一遍，只有一个耳机，别想着两人共用的好事儿，哈哈哈 攻略3 周一闭馆，周末人居多，尽量安排工作日，若所有宫殿都想参观，就提早进去，不过我个人觉得没必要，参观代表性的中轴和个别妃子和慈禧的宫殿即可，建议预留至少大半天时间在里头 再来北京，还愿意去故宫~~
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailTalk'
}

</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'

  .talk-line
    width: 100%
    height: .2rem
    background: #f5f5f5
  .talk-title
    width: 100%
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    padding: 0 .4rem
    &::after
      content: " ";
      position: absolute
      top: .26rem
      left: .2rem
      width: .06rem
      height: .25rem
      background: $BGColor
  .talk-content
    width: 100%
    box-sizing: border-box
    font-size: .25rem
    color: #616161
    line-height: .42rem
    padding: .1rem .2rem .3rem .2rem
</style>
