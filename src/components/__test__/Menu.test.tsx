import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Menu from '../Menu';

describe("Menu test", () => {
    test("should show title all the time", () => {
        
        render(<Menu title='Testing'><h4>Content</h4></Menu>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
})