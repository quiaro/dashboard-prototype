import React from 'react';
import { shallow } from 'enzyme';
import DBO_Button_Panel_Build from '../dbo-button-panel_build';

describe('DBO_Button_Panel_Build', () => {
  it('should render', () => {
    const buildData = {
      status: 'fail',
      timeFinished: 1482258989678
    };
    const component = shallow(
      <DBO_Button_Panel_Build build={buildData} />
    );

    expect(component.find('.dbo-button-panel.build.fail').length).toBeTruthy();
    expect(component.find('.panel-header').text()).toEqual('Build');
    expect(component.find('.panel-body .options .debug').text()).toEqual('Debug');
    expect(component.find('.panel-body .options .release').text()).toEqual('Release');
    expect(component.find('.panel-body .date').text()).toEqual('1482258989678');
  })
})
