import React from 'react';
import { render, screen } from "@testing-library/react"
import { SearchResult } from '../../components/searchResults/searchResult.component';

const highlight = {
    beginOffset: 7,
    endOffset: 8
}

const title = {
    text: "sample title",
    highlights: [highlight]
}

const documentExpert = {
    text: "sample text goes here",
    highlights: []
}

beforeEach(async () => {
    await render(
        <SearchResult
            documentID= "12345"
            documentTitle={title}
            documentExcerpt= {documentExpert}
            documentURI="https://www.google.com"
        />
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders the resultItem', () => {
    const result = screen.getByText(/sample text goes here/i);
    expect(result).toBeInTheDocument();
});