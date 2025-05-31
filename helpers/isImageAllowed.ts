
export const isImageAllowed = (url: string): boolean => {
  try {
    const domain = new URL(url).hostname;
    return [
      "media.cnn.com",
      "image.cnbcfm.com",
      "variety.com",
      "nypost.com",
      "fortune.com",
      "s.yimg.com",
      "washingtonpost.com",
      "dims.apnews.com",
      "wordpress.wbur.org",
      "deadline.com",
      "cdn.sanity.io",
      "images.axios.com",
      "media-cldnry.s-nbcnews.com",
      "static.politico.com",
      "assets-prd.ignimgs.com",
      "ichef.bbci.co.uk",
      "cdn.vox-cdn.com",
      "imageio.forbes.com",
      "media.zenfs.com",
      "s3media.247sports.com",
      "defector.com",
      "usatoday.com",
      "buzzfeed.com",
      "hollywoodreporter.com",
      "nbcnews.com",
      "thetimes.com",
      "slate.com",
      "gq.com",
      "wwd.com",
      "apnews.com",
      "nbcsports.brightspotcdn.com",
      "theverge.com",
      "cnbc.com",
      "usatoday.com",
      "assets.apnews.com",
      "media.wired.com",
      "platform.vox.com",
      "cloudfront.net",
      "img.buzzfeed.com",
      "techcrunch.com",
      "images2.minutemediacdn.com",
      "images.macrumors.com",
      "i.insider.com",
      "studyfinds.org",
      "scitechdaily.com",
      "cdn.arstechnica.net",
      "cdn.mos.cms.futurecdn.net",
      "npr.brightspotcdn.com"
    ].includes(domain);
  } catch {
    return false;
  }
};