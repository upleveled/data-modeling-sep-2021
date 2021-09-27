

// const positions = ['CEO', 'dev', 'Marketing Manager'];
const positions = { ceo: 'CEO', dev: 'dev', marketing: 'Marketing Manager' };

const employees = [
  {
    name: 'Peter',
    role: 'Editor',
    position: positions.dev,
    id: 1,
  },
  {
    name: 'Andrea',
    role: 'Admin',
    position: positions.ceo,
    id: 2,
  },
  {
    name: 'Michael',
    role: 'Editor',
    position: positions.marketing,
    id: 3,
  },
  {
    name: 'Clara',
    role: 'No Rights',
    position: positions.dev,
    id: 4,
  },
  {
    name: 'Sara',
    role: 'Admin',
    position: positions.dev,
    id: 5,
  },
];

function DataModeling() {
  return (
    <ul>
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            <div>name: {employee.name} </div>
            <div>position: {employee.position}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default DataModeling;
