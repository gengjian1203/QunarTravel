export default {
  ChangNowCity (state, city) {
    state.nowcity = city
    try {
      localStorage.nowcity = city
    } catch (e) {}
  }
}
