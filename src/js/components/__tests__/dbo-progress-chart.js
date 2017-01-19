import React from 'react';

import { shallow } from 'enzyme';
import DBO_Progress_Chart from '../dbo-progress-chart';

describe('DBO_Progress_Chart', () => {
  it('should render', () => {
    const isVisible = true;

    const component = shallow(
      <DBO_Progress_Chart progress='75' status='running' isVisible={isVisible} />
    );

    expect(component.find('.dbo-progress-chart').length).toBeTruthy();
    expect(component.find('.chart-value.running').length).toBeTruthy();
  })
})
