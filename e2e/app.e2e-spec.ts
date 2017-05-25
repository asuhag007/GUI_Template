import { AngularUIEditorPage } from './app.po';

describe('angular-uieditor App', () => {
  let page: AngularUIEditorPage;

  beforeEach(() => {
    page = new AngularUIEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
