export default {
  ChangNowCity (ctx, city) {
    ctx.commit('ChangNowCity', city)
  },
  ChangNowStar (ctx, star) {
    ctx.commit('ChangNowStar', star)
  },
  ChangNowComment (ctx, comment) {
    ctx.commit('ChangNowComment', comment)
  },
  ChangNowStrategy (ctx, strategy) {
    ctx.commit('ChangNowStrategy', strategy)
  }
}
