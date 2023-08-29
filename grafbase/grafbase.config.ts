import { g, config } from '@grafbase/sdk';

// @ts-ignore
const Post = g.model('Post', {
  title: g.string().length({ min: 2, max: 100 }),
  description: g.string().length({ min: 2, max: 2000 }).optional(),
  url: g.url(),
  comments: g.relation(() => Comment).list().optional(),
})

// @ts-ignore
const Comment = g.model('Comment', {
  message: g.string(), 
  post: g.relation(() => Post),
})


export default config({
  schema: g,
})