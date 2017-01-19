import React from 'react';
import { mount } from 'enzyme';
import DBO_Button_Panel_Test_Result from '../dbo-button-panel_test-result';

describe('DBO_Button_Panel_Test_Result', () => {
  it('should render', () => {
    const testResult = {
      status: 'success',
      totalTests: 152,
  		testsPassed: 138,
  		coveragePercentage: 76
    };
    const component = mount(
      <DBO_Button_Panel_Test_Result testResult={testResult} title='Panel Title' />
    );

    expect(component.find('.dbo-button-panel.test-result.success').length).toBeTruthy();
    expect(component.find('.panel-header').text()).toEqual('Panel Title');
    expect(component.find('.panel-body .dbo-labeled-bar-chart').length).toEqual(2);
    expect(component.find('.panel-body .dbo-labeled-bar-chart').at(0).find('.legend b').text())
      .toEqual('91%');
    expect(component.find('.panel-body .dbo-labeled-bar-chart').at(1).find('.legend b').text())
      .toEqual('76%');
  })
})
