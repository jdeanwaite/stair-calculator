import { StairCalculatorPage } from './app.po';

describe('stair-calculator App', function() {
  let page: StairCalculatorPage;

  beforeEach(() => {
    page = new StairCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
