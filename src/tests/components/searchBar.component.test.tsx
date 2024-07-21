import React, { act } from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import { SearchBar } from "../../components/searchBar/searchBar.component"

const setInputText = jest.fn();
const inputText = "sample input text";
const suggestions = {
    queries: []
};
const onClick = jest.fn();

beforeEach(async () => {
    await render(
        <SearchBar
            setInputText={setInputText}
            inputText={inputText}
            suggestions={suggestions}
            onClick={onClick}
        />
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders the search bar', () => {
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
});

test('triggers onClick callback when search is clicked', () => {
    const searchButton = screen.getByText(/Search/i);
    fireEvent.click(searchButton);
    expect(onClick).toHaveBeenCalled();
});