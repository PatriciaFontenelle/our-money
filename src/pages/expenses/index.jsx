import { useState } from "react";
import { openModal } from "../../utils/helpers";
import { data } from "../../utils/data";
import DataTable from "../../components/DataTable";

const modalId = "add-expense-modal";

const AddExpenses = () => {
  const addExpense = () => {
    console.log("Add expense");
  };

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box w-fit min-w-100">
        <p className="font-semibold text-xl mb-4">Adicionar Despesa Fixa</p>
        <form action={addExpense}>
          <div className="input-group">
            <label htmlFor="description">Descrição:</label>
            <input name="description" type="text" className="input" />
          </div>

          <div className="input-group mt-2">
            <label htmlFor="amount">Valor:</label>
            <input type="text" className="input" />
          </div>

          <div className="input-group mt-2">
            <label htmlFor="dueDate">Vencimento:</label>
            <input type="date" className="input" />
          </div>

          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Prestações</legend>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Tem prestações?
            </label>
            <div className="input-group">
                <label htmlFor="n-installments">Nº de prestações:</label>
                <input type="number" className="input" />
            </div>
          </fieldset>

          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Débito direto</legend>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              É débito direto?
            </label>
            <div className="input-group">
            <label htmlFor="account">Conta:</label>
            <select name="account" id="" className="select">
                {data.accounts.map((a, index) => {
                    return(
                        <option key={index} value={a}>{a}</option>
                    )
                })}
            </select>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

const Expenses = () => {
  return (
    <div>
      <DataTable
        addBtnText="Adicionar Despesa Fixa"
        btnClick={() => openModal(modalId)}
      />
      <AddExpenses />
    </div>
  );
};

export default Expenses;
