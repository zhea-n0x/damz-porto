// app/api/medium/route.js
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['content:encoded'],
  },
});

const feedUrl = 'https://medium.com/feed/@adamfrdsid';

export async function GET() {
  try {
    const feed = await parser.parseURL(feedUrl);
    const posts = feed.items.map(item => {
      const imgMatch = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : null;

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        image,
      };
    });

    return NextResponse.json({ posts });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch Medium posts' }, { status: 500 });
  }
}
