import { data } from "../../utils/data";
import { apiClient } from "../../service/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  const openModal = () => {
    const modal = document.getElementById("add-transaction-modal");
    modal.showModal();
  };

  const addTransaction = (formData) => {
    const modal = document.getElementById("add-transaction-modal");
    modal.close();
    const data = {
      type: formData.get("type"),
      amount: formData.get("amount"),
      category: formData.get("category"),
      description: formData.get("description"),
      account: formData.get("account"),
    };
    apiClient.post("/newTransaction", data).then((res) => {
      console.log("res.data");
      console.log(res.data);
    });
  };

  const getTransactions = () => {
    apiClient
      .get("/listTransactions", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        setTransactions(res.data.transactions);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div id="home-container" className="p-4 bg-white w-[90%] m-auto">
      <button onClick={() => openModal()}>Adicionar Transação</button>

      {/* TRANSACTION TABLE */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Conta</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => {
                return (
                    <tr key={index}>
                        <td>{t.type}</td>
                        <td>{t.amount}</td>
                        <td>{t.category}</td>
                        <td>{t.account}</td>
                    </tr>
                )
            })}
            {/* row 1
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
          </tbody>
        </table>
      </div>

      {/* NEW TRANSACTION MODAL */}
      <table className="table"></table>
      <dialog id="add-transaction-modal" className="modal">
        <div className="modal-box w-fit min-w-100">
          <p className="font-semibold text-xl mb-4">Adicionar Transação</p>
          <form action={addTransaction}>
            <div className="input-group mb-2">
              <label htmlFor="type">Tipo:</label>
              <select className="select" name="type">
                {data.types.map((t) => (
                  <option value={t.value} key={t.id}>
                    {t.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group mb-2">
              <label htmlFor="amount">Valor:</label>
              <input
                type="number"
                min="0"
                step=".01"
                name="amount"
                className="input"
              />
            </div>
            <div className="input-group mb-2">
              <label htmlFor="category">Categoria:</label>
              <select name="category" className="select">
                {data.categories.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group mb-2">
              <label htmlFor="description">Descrição:</label>
              <textarea name="description" className="textarea" />
            </div>
            <div className="input-group mb-2">
              <label htmlFor="account">Conta:</label>
              <select name="account" className="select">
                {data.accounts.map((a, index) => (
                  <option value={a} key={index}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
            <button className="mt-2" type="submit">
              Adicionar
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
