import React, {ElementType} from "react";
import {Skeleton as MuiSkeleton} from "@mui/material";

interface SkeletonProps {
  elements: ElementType[],
  width: string | number
}

const Skeleton = ({elements, width}: SkeletonProps): JSX.Element => {
  return (
    <>
      {elements.map(element => <MuiSkeleton animation="wave" component={element} variant="text" width={width} sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        bgcolor: '#3b2424'
      }}/>)}
    </>
  )
}

export default Skeleton;