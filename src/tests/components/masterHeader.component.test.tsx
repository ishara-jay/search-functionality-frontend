import React from 'react';
import { render, screen } from "@testing-library/react"
import { MasterHeader } from '../../components/header/masterHeader.component';

beforeEach(async () => {
    await render(
        <MasterHeader/>
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders the master header', () => {
    const header = screen.getByText(/An Official Website of the/i);
    expect(header).toBeInTheDocument();
});