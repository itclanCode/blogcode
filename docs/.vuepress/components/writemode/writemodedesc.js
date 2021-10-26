const writingModeData = [
  {
    attr: 'writing-mode',
    type: 'String',
    value: 'horizontal-tb/vertical-rl/vertical-lr/sideways-rl/sideways-lr',
    descption:
      '决定文本在水平或垂直方向上如何排布horizontal-tb表示水平,vertical-rl表示垂直',
  },
];

const tableColums = [
  {
    prop: 'attr',
    label: '属性',
  },
  {
    prop: 'type',
    label: '类型',
  },

  {
    prop: 'value',
    label: '值',
    width: '200px',
  },
  {
    prop: 'descption',
    label: '说明',
  },
];

export { writingModeData, tableColums };
