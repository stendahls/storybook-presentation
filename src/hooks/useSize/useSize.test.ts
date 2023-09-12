import { mount } from 'cypress-react-unit-test';
import useSize, { SizeProps } from './useSize';

describe('useSize', () => {
  const multiplier = 4;

  it('should multiply width, height, and size by the multiplier when they are numbers', () => {
    const size: SizeProps = {
      width: 100,
      height: 200,
      size: 10,
    };

    mount(() => {
      const result = useSize(size);
      Cypress.env('result', result);
    });

    cy.get('@result').then(result => {
      expect(result.width).to.equal(size.width * multiplier);
      expect(result.height).to.equal(size.height * multiplier);
      expect(result.size).to.equal(size.size * multiplier);
    });
  });

  it('should keep width, height, and size as is when they are not numbers', () => {
    const size: SizeProps = {
      width: 'auto',
      height: '100%',
      size: 'auto',
    };

    mount(() => {
      const result = useSize(size);
      Cypress.env('result', result);
    });

    cy.get('@result').then(result => {
      expect(result.width).to.equal(size.width);
      expect(result.height).to.equal(size.height);
      expect(result.size).to.equal(size.size);
    });
  });
});