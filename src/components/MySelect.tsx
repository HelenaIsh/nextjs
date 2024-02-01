import React from 'react';
import {Select} from "@skbkontur/react-ui";


export default function MySelect() {
    const [value, setValue] = React.useState();
    const items = [Select.static(() => <Select.Item>Not selectable</Select.Item>), 'One', 'Two', 'Three', Select.SEP, 'Four']
    return (
        <>
            <Select items={items} value={value} onValueChange={setValue} />
        </>

    );
}