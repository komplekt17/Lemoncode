import * as React from 'react'
import { IColorPicker, IColor } from '../types'
import { ColorSlider } from '.'

// keyof Color ensures only 'red', 'blue' or 'green' can be passed in.
const updateColor = (props : IColorPicker, colorId : keyof IColor) => (value: any) => {  
    props.onColorUpdated({
        // this creates a clone of the current props.color object...  
        ...props.color,
        // ... which gets one of its properties (colorId) 
        // immediately replaced by a new value.   
        [colorId]: value  
    });
 };

const ColorPicker = (props: IColorPicker) => {
	return (
		<>
            {Object.keys(props.color).map((field: keyof IColor) => (
                <ColorSlider
                    key={field}
                    value={props.color[field]}
                    onValueUpdated={updateColor(props, field)}
                />
            ))}
        </>
	)
}

export { ColorPicker }
