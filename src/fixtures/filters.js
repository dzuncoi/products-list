const filters = [{
  name: 'Availability',
  value: 'availability',
  options: [{
    value: 'all',
    name: 'All',
  }, {
    value: 'for_sale',
    name: 'For Sale',
  }, {
    value: 'not_for_sale',
    name: 'Not For Sale',
  }],
}, {
  name: 'Substrate',
  value: 'substrate',
  options: [{
    value: 'any',
    name: 'Any',
  }, {
    value: 'fabric',
    name: 'Fabric',
  }, {
    value: 'wallpaper',
    name: 'Wallpaper',
  }, {
    value: 'gift_wrap',
    name: 'Gift wrap',
  }],
}, {
  name: 'View',
  value: 'view',
  options: [{
    name: 'Fabric',
    value: 'fabric',
  }, {
    name: 'Design',
    value: 'design',
  }, {
    name: 'Project',
    value: 'project',
  }],
}, {
  name: 'Sort by',
  value: 'sort',
  options: [{
    name: 'Classic',
    value: 'classic',
  }, {
    name: 'Freshtastic',
    value: 'freshtastic',
  }, {
    name: 'New',
    value: 'new',
  }, {
    name: 'Best Selling',
    value: 'best_selling',
  }, {
    name: 'Favorites',
    value: 'favorites',
  }, {
    name: 'Relevant',
    value: 'relevant',
  }],
}]

export default filters
