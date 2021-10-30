import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import mdxPrism from 'mdx-prism'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const root = process.cwd()

export const getFiles = (type = 'posts') => fs.readdirSync(path.join(root, 'content', type), 'utf-8')

export const getFileBySlug = async (slug, type = 'posts') => {
  const mdxSource = fs.readFileSync(path.join(root, 'content', type, `${slug}.mdx`))
  const { data, content } = await matter(mdxSource)

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles')
      ],
      rehypePlugins: [
        mdxPrism
      ]
    }
  })

  return {
    source,
    frontmatter: {
      readingTime: readingTime(content),
      ...data,
      slug
    }
  }
}

export const getAllFilesMetadata = async (type = 'posts') => {
  const files = getFiles()

  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'content', type, postSlug),
      'utf-8'
    )

    const { data } = matter(mdxSource)

    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost]
  }, [])
}
