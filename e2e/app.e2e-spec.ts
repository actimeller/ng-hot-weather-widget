import { NgHotWeatherWidgetPage } from './app.po';

describe('ng-hot-weather-widget App', function() {
  let page: NgHotWeatherWidgetPage;

  beforeEach(() => {
    page = new NgHotWeatherWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
