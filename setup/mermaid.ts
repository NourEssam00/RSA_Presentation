import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: '18px',
    primaryColor: '#f5f5f6',
    primaryBorderColor: '#16161a',
    primaryTextColor: '#16161a',
    lineColor: '#6a6c74',
    secondaryColor: '#e4e4e7',
    tertiaryColor: '#ffffff',
  },
}))