import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/about.html'),
                books: resolve(__dirname, 'pages/books.html'),
                projects: resolve(__dirname, 'pages/projects.html'),
                publications: resolve(__dirname, 'pages/publications.html'),
                press: resolve(__dirname, 'pages/press.html'),
                events: resolve(__dirname, 'pages/events.html'),
                contact: resolve(__dirname, 'pages/contact.html'),
                poems: resolve(__dirname, 'pages/poems.html'),
                fiction: resolve(__dirname, 'pages/fiction.html'),
                essays: resolve(__dirname, 'pages/essays.html'),
                artWriting: resolve(__dirname, 'pages/art-writing.html'),
                features: resolve(__dirname, 'pages/features.html'),
                interviews: resolve(__dirname, 'pages/interviews.html'),
                videos: resolve(__dirname, 'pages/videos.html'),
            }
        }
    }
})
