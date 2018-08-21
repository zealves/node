import { ShinyButtonModule } from './shiny-button.module';

describe('ShinyButtonModule', () => {
  let shinyButtonModule: ShinyButtonModule;

  beforeEach(() => {
    shinyButtonModule = new ShinyButtonModule();
  });

  it('should create an instance', () => {
    expect(shinyButtonModule).toBeTruthy();
  });
});
