export const fetchItems = () => new Promise(resolve => resolve([
  {
    id: 1,
    name: 'item-name-1',
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
  }
]));
