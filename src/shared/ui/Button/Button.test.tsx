import { describe } from "node:test";
import {render, screen} from '@testing-library/react'
import {Button} from '.'
import React from "react";
import { ButtonTheme } from "./ui/Button";

describe('classNames', () => {
    test('Test render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
})