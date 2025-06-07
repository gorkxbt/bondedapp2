'use client'

import React from 'react'
import Spline from '@splinetool/react-spline'

interface SplineBackgroundProps {
  sceneUrl: string
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ sceneUrl }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        scene={sceneUrl}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default SplineBackground 