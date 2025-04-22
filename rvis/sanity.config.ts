import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'r—vis',

  projectId: 'ke6tbdpi',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
