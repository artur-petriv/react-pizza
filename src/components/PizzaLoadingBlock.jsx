import React from "react";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

function PizzaLoadingBlock() {
  return (
    <div className="pizza-block">
      <Skeleton
        style={{ margin: "0 auto 20px" }}
        variant="circle"
        width={245}
        height={245}
      />
      <Skeleton
        variant="rect"
        height={29}
        style={{ marginBottom: "14px", borderRadius: "4px" }}
      />
      <Skeleton
        variant="rect"
        height={84}
        style={{ marginBottom: "20px", borderRadius: "10px" }}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Skeleton
          variant="rect"
          width={88}
          height={28}
          style={{ borderRadius: "4px" }}
        />
        <Skeleton
          variant="rect"
          width={151}
          height={44}
          style={{ borderRadius: "30px" }}
        />
      </Box>
    </div>
  );
}

export default PizzaLoadingBlock;
