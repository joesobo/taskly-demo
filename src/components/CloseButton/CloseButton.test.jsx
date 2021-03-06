import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CloseButton from './CloseButton';

const createTestProps = props => ({
  handleOnClick: jest.fn(),
  ...props,
});

describe('CloseButton component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<CloseButton {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<CloseButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
