

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/about.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/about.js'
      
const t_2 = universal(import('__react_static_root__/src/pages/header.js'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/header.js'
      
const t_3 = universal(import('__react_static_root__/src/pages/headerhidded.js'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/headerhidded.js'
      
const t_4 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/index.js'
      
const t_5 = universal(import('__react_static_root__/src/pages/poesia.js'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/poesia.js'
      
const t_6 = universal(import('__react_static_root__/src/containers/Post'), universalOptions)
      t_6.template = '__react_static_root__/src/containers/Post'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/about.js': t_1,
'__react_static_root__/src/pages/header.js': t_2,
'__react_static_root__/src/pages/headerhidded.js': t_3,
'__react_static_root__/src/pages/index.js': t_4,
'__react_static_root__/src/pages/poesia.js': t_5,
'__react_static_root__/src/containers/Post': t_6
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

