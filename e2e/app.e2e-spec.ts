import { Angular2dynamicFormPage } from './app.po';

describe('angular2dynamic-form App', () => {
  let page: Angular2dynamicFormPage;

  beforeEach(() => {
    page = new Angular2dynamicFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
