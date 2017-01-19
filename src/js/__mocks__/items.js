const items = [
  {
    id: 1,
    type: 'firewall',
    name: 'item-name-1 really great big long name',
    owner: 'ostone',
    timeStarted: 1482258431277,
    status: 'success',
    statusText: 'Auto-Merged',
    statusCTA: 'Merged Build',
    metric_result: {
  		id: 10,
  		status: 'success',
      progressPercentage: 100,
  		data: [
  			{
  				label: 'Test',
  				value: 64,
  				result: 'success'
  			},
  			{
  				label: 'Maintainability',
  				value: 53,
  				result: 'fail'
  			},
  			{
  				label: 'Security',
  				value: 64,
  				result: 'ambivalent'
  			},
  			{
  				label: 'Workmanship',
  				value: 72,
  				result: 'ambivalent'
  			}
  		]
  	},
    build_result: {
  		id: 20,
  		status: 'success',
      progressPercentage: 100,
  		timeFinished: 1482258989678
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
    type: 'firewall',
    name: 'item-name-2',
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
      		label: 'Test',
      		value: 55,
      		result: 'ambivalent'
      	}
      ]
    },
    build_result: null,
    unit_test_result: null,
    functional_test_result: null
  },
  {
    id: 3,
    type: 'build',
    name: 'item-name-3',
    owner: 'asmith',
    timeStarted: 1482258431277,
    status: 'fail',
    statusText: 'Metrics Reduction',
    statusCTA: 'Find Issues',
    metric_result: {
      id: 12,
  		status: 'success',
      progressPercentage: 100,
  		data: [
  			{
  				label: 'Test',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Maintainability',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Security',
  				value: 85,
  				result: 'success'
  			},
  			{
  				label: 'Workmanship',
  				value: 85,
  				result: 'success'
  			}
  		]
    },
    build_result: {
      id: 22,
  		status: 'fail',
      progressPercentage: 100,
  		timeFinished: 1482258989678
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