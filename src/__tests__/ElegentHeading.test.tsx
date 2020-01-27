import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ElegantHeading from '../ElegantHeading';


it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ElegantHeading className={"test"}>test</ElegantHeading>,
        div
    );

    const comp = div.querySelector('div');
    expect(comp).toBeDefined();

    ReactDOM.unmountComponentAtNode(div);
});