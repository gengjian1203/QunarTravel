var defaultcity = '北京'
try {
  if (localStorage.nowcity) {
    defaultcity = localStorage.nowcity
  }
} catch (e) {}

export default {
  nowcity: defaultcity
}
