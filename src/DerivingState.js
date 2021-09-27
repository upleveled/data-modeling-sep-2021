import { useEffect, useState } from 'react';

function createSalaryString(salary1, salary2) {
  // this is the condition for case 1 default
  let string = 'salaries: ';

  // this is the condition for case 2
  if (salary1 >= 700) {
    string = `salaries: ${salary1}`;
    // this is the condition for case 3
  } else if (salary2 >= 700) {
    string = `salaries: ${salary2}`;
  }

  // this is the condition for case 4
  if (salary1 >= 700 && salary2 >= 700) {
    string = `salaries:  ${salary1}, ${salary2}`;
  }

  return string;
}

function DerivingState() {
  const [salary1, setSalary1] = useState(1000);
  const [salary2, setSalary2] = useState(1000);
  // option 2 extra sate whit multiple setState calls (ANTI-PATTERN)
  const [salaries, setSalaries] = useState(
    createSalaryString(salary1, salary2),
  );

  // option 3 deriving state
  // const salaries = createSalaryString(salary1, salary2);

  //option 4 use Effect
  useEffect(() => {
    setSalaries(createSalaryString(salary1, salary2));
  }, [salary1, salary2]);

  return (
    <div>
      <h1>Deriving State vs Extra State Variables</h1>
      <div>salary1: {salary1}</div>
      <button
        onClick={() => {
          setSalary1(salary1 + 100);
        }}
      >
        raise
      </button>
      <button
        onClick={() => {
          setSalary1(salary1 - 100);
        }}
      >
        decrease
      </button>
      <div>salary2: {salary2}</div>
      <button
        onClick={() => {
          setSalary2(salary2 + 100);
        }}
      >
        raise
      </button>
      <button
        onClick={() => {
          setSalary2(salary2 - 100);
        }}
      >
        decrease
      </button>

      <div>{salaries}</div>

      {/*  Option1 not that flexible
      <div>
        salaries:
        {salary1 > 700 ? salary1 : ''}
        {salary1 > 700 && salary2 > 700 ? ', ' : ''}
        {salary2 > 700 ? salary2 : ''}
      </div>
      */}
    </div>
  );
}

export default DerivingState;
