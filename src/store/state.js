var defaultcity = '北京'
try {
  if (localStorage.nowcity) {
    defaultcity = localStorage.nowcity
  }
} catch (e) {}

export default {
  nowcity: defaultcity,
  nowStar: 0,
  nowComment: 0,
  nowStrategy: 0,
  nowStarLevel: ['神坑', '踩雷', '一般', '还好', '很棒', '超赞']
}
