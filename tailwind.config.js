import typography from '@tailwindcss/typography';

export default {
  content: ["_site/**/*.html"],
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
  corePlugins: {
  },
  plugins: [
    typography
  ],
}
