export const getBadgeCount = values => (
  Object.keys(values).filter(k => k !== 'q').length
)

export default {
  getBadgeCount,
}
