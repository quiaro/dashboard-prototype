import React from 'react';
import { shallow } from 'enzyme';
import DBO_Result_Panel from '../dbo-result-panel';

describe('DBO_Result_Panel', () => {
  it('should render a firewall result correctly on fail', () => {
    const component = shallow(
      <DBO_Result_Panel type='firewall' status='fail' message='Result Detail' ctaText='Button Text' />
    );

    expect(component.find('.dbo-result-panel.firewall.fail').length).toBeTruthy();
    expect(component.find('.resolution em').text()).toEqual('Change Rejected');
    expect(component.find('.resolution b').text()).toEqual('Result Detail');
    expect(component.find('button.cta').text()).toEqual('Button Text');
  })

  it('should render a firewall result correctly on success', () => {
    const component = shallow(
      <DBO_Result_Panel type='firewall' status='success' message='Result Detail' ctaText='Button Text' />
    );

    expect(component.find('.dbo-result-panel.firewall.success').length).toBeTruthy();
    expect(component.find('.resolution em').text()).toEqual('Change Accepted');
    expect(component.find('.resolution b').text()).toEqual('Result Detail');
    expect(component.find('button.cta').text()).toEqual('Button Text');
  })

  it('should render a build result correctly', () => {
    const component = shallow(
      <DBO_Result_Panel type='build' status='success' message='Result Detail' ctaText='Button Text' />
    );

    expect(component.find('.dbo-result-panel.build.success').length).toBeTruthy();
    expect(component.find('.resolution em').text()).toEqual('');
    expect(component.find('.resolution b').text()).toEqual('Result Detail');
    expect(component.find('button.cta').text()).toEqual('Button Text');
  })

  it('should render empty if the status is neither "success" nor "fail"', () => {
    const component = shallow(
      <DBO_Result_Panel type='firewall' status='pending' message='Result Detail' ctaText='Button Text' />
    );
    expect(component.find('.dbo-result-panel').length).toBeTruthy();
    expect(component.find('.dbo-result-panel').children().length).toEqual(0);
  })
})
