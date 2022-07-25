import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppRouter from '../renderer/AppRouter';

describe('AppRouter', () => {
    it('should render', () => {
        expect(render(<AppRouter />)).toBeTruthy();
    });
});
