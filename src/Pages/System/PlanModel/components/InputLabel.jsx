export const InputLabel = ({ label, id,size }) => {
    return (
      <label 
      style={{
        fontSize: size? `${size}px` : '12px',
      }}
      htmlFor={id} className="text-white text-xs font-medium mb-2">
        {label}
      </label>
    );
  };