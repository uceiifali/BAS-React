export const InputLabel = ({ label, id }) => {
    return (
      <label htmlFor={id} className="text-white text-xs font-medium mb-2">
        {label}
      </label>
    );
  };