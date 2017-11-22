import { CandyPalPage } from './app.po';

describe('candy-pal App', () => {
  let page: CandyPalPage;

  beforeEach(() => {
    page = new CandyPalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
