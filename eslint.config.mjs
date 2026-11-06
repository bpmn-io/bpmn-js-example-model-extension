import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'public'
  ],
  build: [
    '*.js',
    '*.mjs'
  ],
  app: [
    'app/**/*.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // build
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.build
    };
  }),

  // app
  ...bpmnIoPlugin.configs.browser.map(config => {
    return {
      ...config,
      files: files.app
    };
  }),
  ...bpmnIoPlugin.configs.esm.map(config => {
    return {
      ...config,
      files: files.app
    };
  })
];
