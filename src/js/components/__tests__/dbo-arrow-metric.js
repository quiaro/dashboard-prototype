import React from 'react';
import { shallow } from 'enzyme';
import DBO_Single_Metric from '../dbo-single-metric';

describe('DBO_Single_Metric', () => {
  it('should render', () => {
    const metricData = {
      label: 'Test',
      value: 64,
      result: 'success'
    };
    const component = shallow(
      <DBO_Single_Metric data={metricData} />
    );

    expect(component.find('.dbo-single-metric.success').length).toBeTruthy();
    expect(component.find('.text').text()).toEqual('64');
    expect(component.find('.label').text()).toEqual('Test');
  })
})
