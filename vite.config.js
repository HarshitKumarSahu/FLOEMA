import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'public/js',
    rollupOptions: {
      input: './src/js/main.js',
      output: {
        entryFileNames: 'bundle.js'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../public',
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'src/js/main.js')
//       },
//       output: {
//         entryFileNames: 'js/[name].js',
//         chunkFileNames: 'js/[name].js',
//         assetFileNames: ({ name }) => {
//           if (/\.css$/.test(name ?? '')) {
//             return 'css/[name][extname]';
//           }
//           return 'assets/[name][extname]';
//         }
//       }
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/scss/variables.scss";`
//       }
//     }
//   }
// });


// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../public',
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'src/js/main.js')
//       },
//       output: {
//         entryFileNames: 'js/[name].js',
//         chunkFileNames: 'js/[name].js',
//         assetFileNames: ({ name }) => {
//           if (/\.css$/.test(name ?? '')) {
//             return 'css/[name][extname]';
//           }
//           return 'assets/[name][extname]';
//         }
//       }
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/scss/variables.scss";`
//       }
//     }
//   },
//   server: {
//     port: 5173,
//     proxy: {
//       '/': {
//         target: 'http://localhost:8080',
//         changeOrigin: true
//       }
//     }
//   }
// });