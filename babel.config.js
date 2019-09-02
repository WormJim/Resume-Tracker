module.exports = (api) => {
  api.cache.forever();

  const common = {
    presets: [
      [
        '@babel/typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: ['./'],
          // alias: { config: './server/config' },
        },
      ],
    ],
  };

  const server = {
    presets: [
      [
        '@babel/env',
        {
          targets: { node: 'current' },
          useBuiltIns: false,
        },
      ],
    ],
  };

  const frontend = {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          modules: false,
          targets: '> 0.25%, not dead',
          useBuiltIns: 'entry',
          corejs: 3,
        },
      ],
    ],
  };

  const debug = {
    presets: [
      ...common.presets,
      [
        '@babel/env',
        {
          targets: { node: 'current' },
          useBuiltIns: false,
        },
      ],
    ],
    env: {
      debug: {
        sourceMaps: 'inline',
        retainLines: true,
      },
    },
  };

  return {
    plugins: [...common.plugins],
    presets: [...(process.env.NODE_SERVER ? server.presets : frontend.presets), ...common.presets],
  };
};
