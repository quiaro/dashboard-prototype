export const fetchItems = () => new Promise(resolve => resolve([
  {
    id: 1,
    name: 'Task name 1',
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
