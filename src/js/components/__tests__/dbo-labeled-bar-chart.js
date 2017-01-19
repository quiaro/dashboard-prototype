import React from 'react';

import { shallow } from 'enzyme';
import DBO_Labeled_Bar_Chart from '../dbo-labeled-bar-chart';

describe('DBO_Labeled_Bar_Chart', () => {
  it('should render', () => {
    const isVisible = true;

    const component = shallow(
      <DBO_Labeled_Bar_Chart percentage='75' legend='Chart Legend' />
    );

    expect(component.find('.dbo-labeled-bar-chart').length).toBeTruthy();
    expect(component.find('.chart-value').length).toBeTruthy();
    expect(component.find('.legend b').text()).toEqual('75%');
    expect(component.find('.legend span').text()).toEqual('Chart Legend');
  })
})
