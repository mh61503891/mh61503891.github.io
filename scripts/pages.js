hexo.extend.generator.register('all-archives', function(locals) {
  return {
    path: 'all-archives/index.html',
    data: locals,
    layout: ['all-archives']
  }
})

hexo.extend.generator.register('all-categories', function(locals) {
  return {
    path: 'all-categories/index.html',
    data: locals,
    layout: ['all-categories']
  }
})

hexo.extend.generator.register('all-tags', function(locals) {
  return {
    path: 'all-tags/index.html',
    data: locals,
    layout: ['all-tags']
  }
})
