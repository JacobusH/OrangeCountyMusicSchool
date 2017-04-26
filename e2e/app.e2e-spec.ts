import { OrangeCountyMusicSchoolPage } from './app.po';

describe('orange-county-music-school App', () => {
  let page: OrangeCountyMusicSchoolPage;

  beforeEach(() => {
    page = new OrangeCountyMusicSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
