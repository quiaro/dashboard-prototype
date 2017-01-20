import React from 'react';
import { mount } from 'enzyme';
import DBO_Button_Panel_Metric from '../dbo-button-panel_metric';

describe('DBO_Button_Panel_Metric', () => {
  it('should render', () => {
    const metricsData = {
      status: 'running',
      data: [{
        label: 'Metric 1',
        value: 64,
        result: 'success'
      },
      {
        label: 'Metric 2',
        value: 53,
        result: 'fail'
      }]
    };
    const component = mount(
      <DBO_Button_Panel_Metric metrics={metricsData} />
    );

    expect(component.find('.dbo-button-panel.metrics.running').length).toBeTruthy();
    expect(component.find('.panel-header').text()).toEqual('Phase I');
    expect(component.find('.panel-body .dbo-single-metric').length).toEqual(2);
  })
})
