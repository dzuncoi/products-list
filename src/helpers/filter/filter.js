export const generateParams = ({ page, ...values }) => ({
  ...values,
  offset: (page - 1) * values.limit,
})

const BADGE_BLACKLIST = ['q', 'limit', 'offset']

export const getBadgeCount = values => (
  Object.keys(generateParams(values)).filter(k => BADGE_BLACKLIST.indexOf(k) < 0).length
)
