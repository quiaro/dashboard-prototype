import { Schema, arrayOf } from 'normalizr'

export const metric_result = new Schema('metric_results')

export const build_result = new Schema('build_results')

export const unit_test_result = new Schema('unit_test_results')

export const functional_test_result = new Schema('functional_test_results')

export const item = new Schema('items')
export const array_item = arrayOf(item)

item.define({
  metric_result: metric_result,
  build_result: build_result,
  unit_test_result: unit_test_result,
  functional_test_result: functional_test_result
});
