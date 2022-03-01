/* eslint-disable react/jsx-no-duplicate-props */
import React, { FC,  useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";

interface TimeCounterProps {
  value: string;
  label: string;
}

const TimeCounter: FC<TimeCounterProps> = (props: TimeCounterProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mr="1px"
      alignItems="center"
    >
      <Box borderRadius="10px" padding="15px" bgcolor="orangered" mb="5px">
        {props.value}
      </Box>
      <Box fontSize={12}>{props.label}</Box>
    </Box>
  );
};

const App: React.FC = () => {
  const [timeLimit, setTimeLimit] = useState(30000);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLimit - 1 < 0) {
        clearTimeout(timer);
        return;
      }
      setTimeLimit((timeLimit) => timeLimit - 1);
    }, 1000);
  }, [timeLimit]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={20}>
      <TimeCounter
        value={(~~(timeLimit / (24 * 3600))).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        label="Days"
      />
      <TimeCounter
        value={(~~(timeLimit / 3600) % 24).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        label="Hours"
      />
      <TimeCounter
        value={(~~(timeLimit / 60) % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        label="Minutes"
      />
      <TimeCounter
        value={(timeLimit % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        label="Seconds"
      />
    </Box>
  );
};

export default App;
