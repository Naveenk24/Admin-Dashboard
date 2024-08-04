import './index.css';

const SelectOption = () => {
  const options = [
    {
      id: 1,
      title: 'Calculators',
    },
    {
      id: 2,
      title: 'Option 2',
    },
    {
      id: 3,
      title: 'Options 3',
    },
  ];

  return (
    <div className="select-option-conainer">
      <select className="select-element">
        {options.map((item) => (
          <option key={item.id} vlaue={item.title} className="select-item">
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
