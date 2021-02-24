const fs = require("fs-extra");

function generateRSS(metadata, posts) {
  const { siteURL, siteTitle, siteDescription } = metadata;

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml" />
    <title><![CDATA[${siteTitle}]]></title>
    <link>${siteURL}</link>
  <description><![CDATA[${siteDescription}]]></description>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
        <url>${siteURL}/feri.jpg</url>
        <title><![CDATA[${siteTitle}]]></title>
        <link>${siteURL}</link>
    </image>
    ${posts
      .map(
        (post) => `
        <item>
            <title>${post.title}</title>
      <link>${siteURL}/${post.slug}</link>
      <guid isPermaLink="false">${siteURL}/${post.slug}</guid>
            <description><![CDATA[${post.excerpt}]]></description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>
    `
      )
      .join("\n")}
</channel>
</rss>`;
}

module.exports.generateFeed = async function generateFeed(metadata, posts) {
  console.log("Copying RSS feed to the publish directory");
  if (!fs.existsSync("scripts/.tmp")) {
    await fs.mkdir("scripts/.tmp");
  }
  await fs.writeFile("scripts/.tmp/rss.xml", generateRSS(metadata, posts));
};

module.exports.afterExport = async function afterExport() {
  await fs.move("scripts/.tmp/rss.xml", "__sapper__/export/rss.xml");
};
