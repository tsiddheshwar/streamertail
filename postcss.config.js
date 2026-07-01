module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'custom-properties': false, // preserve CSS variables
        'nesting-rules': true,
        'cascade-layers': false     // preserve @layer rules as-is
      }
    }),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')({ preset: 'default' })] : [])
  ]
};
