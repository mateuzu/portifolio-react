/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {
      blur: {
        '1/2': '2px',
      },
      colors: {
        azul_real: '#0466c8',
        azul_marinho: '#0353a4',
        azul_profundo: '#023e7d',
        azul_noturno: '#002855',
        azul_meianoite: '#001845',
        azul_meianoite_escuro: '#001233',
        azul_meianoite_profundo: '#0c1821',
        azul_meianoite_claro: '#33415c',
        azul_cinza_claro: '#5c677d',
        azul_cinza_medio: '#7d8597',
        azul_marinho_profundo: '#172554',
        azul_cinza_escuro: '#030712',
        cinza_claro: '#D1D5DB'
      }
    },
  },
  plugins: [],
}

