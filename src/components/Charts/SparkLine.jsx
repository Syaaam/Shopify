import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ Id, Height, Width, Data, Color, Type, CurrentColor }) => {
  return (
    <SparklineComponent
      id={Id}
      height={Height}
      width={Width}
      ineWidth={1}
      valueType="Numeric"
      fill={Color}
      border={{ color: CurrentColor, width: 2 }}
      dataSource={Data}
      xName="x"
      yName="y"
      type={Type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true
        }
      }}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine