import React from 'react';
import { render, screen } from "@testing-library/react"
import { SearchCount } from '../../components/searchCount/searchCount.component';

beforeEach(async () => {
    await render(
        <SearchCount
            total={100}
            offset={10}
        />
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders the search count', () => {
    const totalCount = screen.getByText(/100/i);
    expect(totalCount).toBeInTheDocument();
});