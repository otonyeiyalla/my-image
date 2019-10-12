import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import checkPropTypes from 'check-prop-types';


const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component
}

const findByTestArr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
/* let component;
beforeEach(() => {
    component = setUp();
}); */
describe('Header Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                onChange: jest.fn(),
                theImage: { }
            };
            const propsErr = checkPropTypes(Header.propTypes, expectedProps, 'props', Header.name);
            expect(propsErr).toBeUndefined();
        });
        
    });

    describe('Has props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                onChange: jest.fn(),
                theImage: [{}],
            };
            wrapper = setUp(props)
        });

        it('Should render without errors', () => {
        //const component = shallow(<Header/>);
        //const component = setUp();
        //console.log(wrapper.debug())
        const component = findByTestArr(wrapper, 'headerComponent');
        expect(component.length).toBe(1);
        //expect(wrapper.length).toBe(1);

        });
        
    });
    
   /*  describe('Has NO Props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        
        it('should not render', () => {
            const component = findByTestArr(wrapper, 'headerComponent');
            expect(component.length).toBe(0);
        });
    }); */
});