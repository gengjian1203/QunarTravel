export default {
  ChangNowCity (state, city) {
    state.nowcity = city
    try {
      localStorage.nowcity = city
    } catch (e) {}
  },
  ChangNowStar (state, star) {
    state.nowStar = star
  },
  ChangNowComment (state, comment) {
    state.nowComment = comment
  },
  ChangNowStrategy (state, strategy) {
    state.nowStrategy = strategy
  }

}
