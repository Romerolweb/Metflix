import { MetflixPage } from './app.po';

describe('metflix App', () => {
  let page: MetflixPage;

  beforeEach(() => {
    page = new MetflixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
