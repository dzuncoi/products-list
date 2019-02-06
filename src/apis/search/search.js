import fetch from '../../helpers/fetch/fetch'

export default {
  search: async params => (
    fetch('/searchv2/designs', {
      method: 'GET',
      params,
    })
  ),
}
