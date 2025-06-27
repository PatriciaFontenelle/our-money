const Alert = ({ type = "success", message, show }) => {
  return (
    show && (
      <div role="alert" className={`alert alert-${type} alert-soft`}>
        <span>{message}</span>
      </div>
    )
  );
};

export default Alert;
