import * as actions from '../actions'

const update_item2_A = {
  id: 2,
  metric_result: {
    id: 11,
    status: 'running',
    progressPercentage: 42,
    data: [
      {
        label: 'Metric 1',
        value: 55,
        result: 'ambivalent'
      },
      {
        label: 'Metric 2',
        value: 73,
        result: 'success'
      }
    ]
  }
}

const update_item2_B = {
  id: 2,
  metric_result: {
    id: 11,
    status: 'running',
    progressPercentage: 68,
    data: [
      {
    		label: 'Metric 1',
    		value: 55,
    		result: 'ambivalent'
    	},
    	{
    		label: 'Metric 2',
    		value: 73,
    		result: 'success'
    	},
    	{
    		label: 'Metric 3',
    		value: 58,
    		result: 'ambivalent'
    	}
    ]
  }
}

const update_item2_C = {
  id: 2,
  metric_result: {
    id: 11,
    status: 'success',
    progressPercentage: 100,
    data: [
      {
    		label: 'Metric 1',
    		value: 55,
    		result: 'ambivalent'
    	},
    	{
    		label: 'Metric 2',
    		value: 73,
    		result: 'success'
    	},
    	{
    		label: 'Metric 3',
    		value: 58,
    		result: 'ambivalent'
    	},
    	{
    		label: 'Metric 4',
    		value: 82,
    		result: 'success'
    	}
    ]
  }
}

const update_item2_D = {
  id: 2,
  build_result: {
    id: 21,
    status: 'running',
    progressPercentage: 58,
    timeFinished: null
  }
}

const update_item2_E = {
  id: 2,
  build_result: {
    id: 21,
    status: 'success',
    progressPercentage: 100,
    timeFinished: 1482258989678
  }
}

const update_item2_F = {
  id: 2,
  unit_test_result: {
    id: 31,
    status: 'running',
    progressPercentage: 36,
    totalTests: 1026,
    testsPassed: 238,
    coveragePercentage: 24
  }
}

const update_item2_G = {
  id: 2,
  unit_test_result: {
    id: 31,
    status: 'running',
    progressPercentage: 76,
    totalTests: 1026,
    testsPassed: 688,
    coveragePercentage: 52
  }
}

const update_item2_H = {
  id: 2,
  unit_test_result: {
    id: 31,
    status: 'success',
    progressPercentage: 100,
    totalTests: 1026,
    testsPassed: 1026,
    coveragePercentage: 33
  }
}

const add_item4 = {
  id: 4,
  name: 'Task name 4',
  owner: 'dquiros',
  timeStarted: 1482258781277,
  status: 'pending',
  statusText: '',
  statusCTA: '',
  metric_result: null,
  build_result: null,
  unit_test_result: null,
  functional_test_result: null
}


const update_item4_A = {
  id: 4,
  status: 'running',
  metric_result: {
    id: 13,
    status: 'running',
    progressPercentage: 22,
    data: [
      {
        label: 'Test',
        value: 45,
        result: 'fail'
      }
    ]
  }
}

const update_item4_B = {
  id: 4,
  metric_result: {
    id: 13,
    status: 'fail',
    progressPercentage: 100,
    data: [
      {
    		label: 'Metric 1',
    		value: 55,
    		result: 'ambivalent'
    	},
    	{
    		label: 'Metric 2',
    		value: 73,
    		result: 'success'
    	},
    	{
    		label: 'Metric 3',
    		value: 58,
    		result: 'ambivalent'
    	},
    	{
    		label: 'Metric 4',
    		value: 34,
    		result: 'fail'
    	}
    ]
  }
}


const interaction = {
  lapse: 1000,
  actions: [
    actions.updateDashboardItem(update_item2_A),
    actions.updateDashboardItem(update_item2_B),
    actions.expandDashboardItem(3),
    actions.updateDashboardItem(update_item2_C),
    actions.addDashboardItem(add_item4),
    actions.updateDashboardItem(update_item2_D),
    actions.updateDashboardItem(update_item2_E),
    actions.updateDashboardItem(update_item4_A),
    actions.expandDashboardItem(2),
    actions.updateDashboardItem(update_item2_F),
    actions.updateDashboardItem(update_item2_G),
    actions.updateDashboardItem(update_item4_B),
    actions.updateDashboardItem(update_item2_H),
    actions.expandDashboardItem(2)
  ]
};

export default interaction
