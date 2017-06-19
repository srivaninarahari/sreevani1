import { FirstprojectPage } from './app.po';

describe('firstproject App', () => {
  let page: FirstprojectPage;

  beforeEach(() => {
    page = new FirstprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
