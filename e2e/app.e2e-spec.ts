import { RusticasPage } from './app.po';

describe('rusticas App', function() {
  let page: RusticasPage;

  beforeEach(() => {
    page = new RusticasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
