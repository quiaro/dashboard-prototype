import React from 'react';
import { shallow } from 'enzyme';
import DBO_Arrow_Metric from '../dbo-arrow-metric';

describe('DBO_Arrow_Metric', () => {
  it('should render', () => {
    const metricData = {
      label: 'Test',
      value: 64,
      result: 'success'
    };
    const component = shallow(
      <DBO_Arrow_Metric data={metricData} />
    );

    expect(component.find('.dbo-arrow-metric.success').length).toBeTruthy();
    expect(component.find('.text').text()).toEqual('64');
    expect(component.find('.label').text()).toEqual('Test');
  })
})
