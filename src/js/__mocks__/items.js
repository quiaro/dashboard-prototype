const items = [
  {
    id: 1,
    name: 'Task name 1 really great big long name',
    owner: 'ostone',
    timeStarted: 1482258431277,
    status: 'success',
    statusText: 'Task Complete',
    statusCTA: 'View details',
    metric_result: {
  		id: 10,
  		status: 'success',
      progressPercentage: 100,
  		data: [
  			{
  				label: 'Metric 1',
  				value: 64,
  				result: 'success'
  			},
  			{
  				label: 'Metric 2',
  				value: 53,
  				result: 'fail'
  			},
  			{
  				label: 'Metric 3',
  				value: 64,
  				result: 'ambivalent'
  			},
  			{
  				label: 'Metric 4',
  				value: 72,
  				result: 'ambivalent'
  			}
  		]
  	},
    unit_test_result: {
      id: 30,
  		status: 'success',
      progressPercentage: 100,
  		totalTests: 152,
  		testsPassed: 138,
  		coveragePercentage: 76
    },
    functional_test_result: {
      id: 40,
  		status: 'success',
      progressPercentage: 100,
  		totalTests: 6466,
  		testsPassed: 4321,
  		coveragePercentage: 23
    }
  },
  {
    id: 2,
    name: 'Task name 2',
    owner: 'enorton',
    timeStarted: 1482258431277,
    status: 'running',
    statusText: '',
    statusCTA: '',
    metric_result: {
      id: 11,
  		status: 'running',
      progressPercentage: 26,
  		data: [
        {
      		label: 'Metric 1',
      		value: 55,
      		result: 'ambivalent'
      	}
      ]
    },
    unit_test_result: null,
    functional_test_result: null
  },
  {
    id: 3,
    name: 'Task name 3',
    owner: 'asmith',
    timeStarted: 1482258431277,
    status: 'fail',
    statusText: 'Task Failed',
    statusCTA: 'View details',
    metric_result: {
      id: 12,
  		status: 'success',
      progressPercentage: 100,
  		data: [
  			{
  				label: 'Metric 1',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Metric 2',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Metric 3',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Metric 4',
  				value: 85,
  				result: 'success'
  			}
  		]
    },
    unit_test_result: {
      id: 32,
  		status: 'fail',
      progressPercentage: 100,
  		totalTests: 152,
  		testsPassed: 38,
  		coveragePercentage: 14
    },
    functional_test_result: {
      id: 42,
  		status: 'success',
      progressPercentage: 100,
  		totalTests: 6466,
  		testsPassed: 6466,
  		coveragePercentage: 73
    }
  }
]

export default items;
