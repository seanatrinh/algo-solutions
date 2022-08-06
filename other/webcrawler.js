/*
Given a URL, crawl that webpage for URLs, and then continue crawling until you've visited all URLs
Assume you have an API with two methods:
  get_html_content(url) -> returns html of the webpage of url
  get_links_on_page(html) -> returns array of the urls in the html

Do this in a breadth-first style manner (it's just easier).
*/

class Webcrawler {
  constructor(url) {
    this.visited_urls = {};
    this.url_queue = [url];
  }

  async process_url(url) {
    try {
      const html = await get_html_content(url);
      const links = get_links_on_page(html);

      for (const link of links) {
        if (!(link in this.visited_urls)) {
          this.visited_urls[link] = true;
          this.url_queue.unshift(link);
        }
      }
    } catch(error) {
      console.error(`ERROR: ${error}`);
    }
  }

  async run() {
    while (this.url_queue.length > 0) {
      const current_url = this.url_queue.pop();
      await this.process_url(current_url);
    }

    return Object.keys(this.visited_urls);
  }
}

function get_html_content(url) {

}

function get_links_on_page(html) {

}