const DataTable = ({ addBtnText, formData, btnClick }) => {
  return (
    <div className="bg-white p-4 w-[90%] m-auto">
      <header>
        <button onClick={() => btnClick()}>{addBtnText}</button>
      </header>
      <div className="overflox-x-auto">
        <table className="table">

        </table>
      </div>
    </div>
  );
};

export default DataTable;
