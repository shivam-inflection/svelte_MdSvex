
// import { readFile } from 'fs/promises';
// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import mdsvex from 'mdsvex';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}





// Function to extract subtitles (h2) from a Markdown file
// export async function extractSubtitlesFromMarkdown(file) {
//   const content = await readFile(file, 'utf-8');

//   const processor = unified().use(remarkParse).use(mdsvex);

//   const { children } = processor.parse(content);

//   const subtitles = [];

//   for (const child of children) {
//     if (child.type === 'heading' && child.depth === 2) {
//       const { value } = child.children[0];
//       subtitles.push(value);
//     }
//   }

//   return subtitles;
// }
