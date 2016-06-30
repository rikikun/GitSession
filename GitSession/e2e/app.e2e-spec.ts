import { GitSessionPage } from './app.po';

describe('git-session App', function() {
  let page: GitSessionPage;

  beforeEach(() => {
    page = new GitSessionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
