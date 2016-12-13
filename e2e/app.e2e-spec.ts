import { ScottPage } from './app.po';

describe('scott App', function() {
  let page: ScottPage;

  beforeEach(() => {
    page = new ScottPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
