import { data } from "../../utils/data";
import { apiClient } from "../../service/api";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import Alert from "../../components/Alert";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [showAlert, setShowAlert] = useState(true);
  const [alertType, setAlertType] = useState("success");

  const openModal = () => {
    const modal = document.getElementById("add-transaction-modal");
    modal.showModal();
  };

  const addTransaction = (formData) => {
    setLoading(true);
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
      getTransactions();
    });
  };

  const getTransactions = () => {
    setLoading(true);
    apiClient
      .get("/listTransactions", {
        headers: { Authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        setTransactions(res.data.transactions);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Alert show={showAlert} type={alertType} message="Teste" />
      <div id="home-container" className="p-4 bg-white w-[90%] m-auto">
        <button disabled={loading} onClick={() => openModal()}>
          Adicionar Transação
        </button>

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
              {loading ? (
                <tr>
                  <td colSpan={4}>
                    <div className="flex justify-center items-center p-8">
                      <span className="loading loading-spinner text-light-green"></span>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {transactions.map((t, index) => {
                    return (
                      <tr key={index}>
                        <td>{t.type}</td>
                        <td>{formatCurrency(t.amount)}</td>
                        <td>{t.category}</td>
                        <td>{t.account}</td>
                      </tr>
                    );
                  })}
                </>
              )}
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
    </>
  );
};

export default Home;
