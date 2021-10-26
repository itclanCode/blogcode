const singleAttrData = [
  {
    attr: 'width',
    type: 'Number',
    value: '500',
    descption: '宽度值必须固定',
  },
  {
    attr: 'overflow',
    type: 'String',
    value: 'hidden/visible/scroll/auto',
    descption: `hidden-内容溢出隐藏 | visible(默认-不会被裁剪) | scroll/auto(内容溢出-水平垂直方向会出现滚动条)`,
  },
  {
    attr: 'text-overflow',
    type: 'String',
    value: 'ellipsis',
    descption: '多出部分省略号显示',
  },
  {
    attr: 'white-space',
    type: 'String',
    value: 'nowrap',
    descption: '不换行',
  },
];

const multiAttrData = [
  {
    attr: 'width',
    type: 'Number',
    value: '500',
    descption: '宽度值必须固定',
  },
  {
    attr: 'display',
    type: 'String',
    value: '-webkit-box(-m/-moz)',
    descption: `老版本-声明盒子弹性收缩,必须要加上浏览器前缀,chrome(-webkit),IE(-moz),firefox(-moz)`,
  },
  {
    attr: 'overflow',
    type: 'String',
    value: 'hidden/visible/scroll/auto',
    descption: `hidden-内容溢出隐藏`,
  },
  {
    attr: 'text-overflow',
    type: 'String',
    value: 'ellipsis',
    descption: '多出部分省略号显示',
  },
  {
    attr: 'box-orient',
    type: 'String',
    value: 'vertical',
    descption: 'vertical垂直方向/horizontal水平方向',
  },
  {
    attr: 'line-clamp',
    type: 'Number',
    value: 2,
    descption: '控制显示行数',
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

export { multiAttrData, singleAttrData, tableColums };
