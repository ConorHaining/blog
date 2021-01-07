module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              marginTop: '0',
              a: {
                fontWeight: '700'
              }
            },
            h3: {
              marginTop: '0',
              a: {
                fontWeight: '600'
              }
            },
            h4: {
              marginTop: '0',
              a: {
                fontWeight: '600'
              }
            }
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
