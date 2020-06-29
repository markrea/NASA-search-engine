import React from 'react';
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
    const mock = jest.fn();
    const { asFragment } = render(<Search setSearchResults={mock}/>);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});