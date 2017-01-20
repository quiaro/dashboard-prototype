import React from 'react';
import { shallow } from 'enzyme';
import DBO_Result_Panel from '../dbo-result-panel';

describe('DBO_Result_Panel', () => {
  it('should render an item correctly on fail', () => {
    const component = shallow(
      <DBO_Result_Panel status='fail' message='Result Detail' ctaText='Button Text' />
    );

    expect(component.find('.dbo-result-panel.fail').length).toBeTruthy();
    expect(component.find('.resolution b').text()).toEqual('Result Detail');
    expect(component.find('button.cta').text()).toEqual('Button Text');
  })

  it('should render an item correctly on success', () => {
    const component = shallow(
      <DBO_Result_Panel status='success' message='Result Detail' ctaText='Button Text' />
    );

    expect(component.find('.dbo-result-panel.success').length).toBeTruthy();
    expect(component.find('.resolution b').text()).toEqual('Result Detail');
    expect(component.find('button.cta').text()).toEqual('Button Text');
  })

  it('should render empty if the status is neither "success" nor "fail"', () => {
    const component = shallow(
      <DBO_Result_Panel status='pending' message='Result Detail' ctaText='Button Text' />
    );
    expect(component.find('.dbo-result-panel').length).toBeTruthy();
    expect(component.find('.dbo-result-panel').children().length).toEqual(0);
  })
})
