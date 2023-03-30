import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  CalculatorWindow,
  POST_CALCUlATOR,
} from "../../../reducers/post/post-api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalBtn({ id }) {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const [err, setErr] = useState(false);
  const [data, setData] = useState({
    height: "",
    width: "",
    quantity: "",
  });
  const [first, setFirst] = useState({
    height: "",
    width: "",
    windows_quantity: "",
    id: "amansoft",
  });

  // get all details
  const { calculator, calculatorTotal } =
    useSelector((store) => store.post);

  const [down, setDown] = useState({
    test: true,
    title: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handle2 = (e) => {
    const newData2 = { ...first };
    newData2[e.target.id] = e.target.value;
    setFirst(newData2);
  };
  const addTodo = () => {
    if (todos.length === 0) {
      if (
        first.width.length === 0 ||
        first.height.length === 0 ||
        first.windows_quantity.length === 0
      ) {
        setErr(true);
      } else {
        setTodos([
          ...todos,
          {
            id: new Date().toISOString(),
            height: first.height,
            width: first.width,
            windows_quantity:
              first.windows_quantity,
          },
        ]);
        setData({
          height: "",
          width: "",
          quantity: "",
        });
        setErr(false);
      }
    } else {
      if (
        data.width.length === 0 ||
        data.height.length === 0 ||
        data.quantity.length === 0
      ) {
        setErr(true);
      } else {
        setTodos([
          ...todos,
          {
            id: new Date().toISOString(),
            height: data.height,
            width: data.width,
            windows_quantity: data.quantity,
          },
        ]);
        setData({
          height: "",
          width: "",
          quantity: "",
        });
        setErr(false);
      }
    }
  };
  const deleted = (todoId) => {
    setTodos(
      todos.filter((todo) => todo.id !== todoId)
    );
  };
  const setKal = () => {
    if (todos.length === 0) {
      dispatch(CalculatorWindow([first], id));
      setTodos([]);
      setFirst({
        height: "",
        width: "",
        windows_quantity: "",
        id: "amansoft",
      });
    } else {
      dispatch(CalculatorWindow(todos, id));
      setTodos([]);
      setFirst({
        height: "",
        width: "",
        windows_quantity: "",
        id: "amansoft",
      });
    }
  };

  const x = () => {
    dispatch({
      type: POST_CALCUlATOR,
      payload: [],
    });
    closeModal();
  };
  //modal function
  const [modalIsOpen, setIsOpen] =
    React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function ModalOpen() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        onClick={openModal}
        className={"btnModal"}
      >
        РАССЧИТАТЬ СТОИМОСТЬ
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <section id="modal">
          <div className="container">
            <div className="modal">
              <div
                className="modal_block"
                id="block"
              >
                <h1>КАЛЬКУЛЯТОР СТОИМОСТИ</h1>
                <button
                  style={{ color: "red" }}
                  className={"modal_block_btn"}
                  onClick={() => x()}
                >
                  &times;
                </button>
              </div>
              <ul
                className={
                  todos.length > 3 ? "ul2" : "ul"
                }
              >
                {todos.map((todo, index) => (
                  <div
                    key={false}
                    className={"spans"}
                  >
                    <h1>Окно №{index + 1}</h1>
                    <li
                      key={todo.id}
                      className={"span_block"}
                    >
                      <span className={"span"}>
                        <span>Высота :</span>{" "}
                        {todo.height}Cм
                      </span>
                      <span className={"span"}>
                        <span>Ширина :</span>{" "}
                        {todo.width}Cм
                      </span>
                      <span className={"span"}>
                        <span>Количество :</span>{" "}
                        {todo.windows_quantity}Шт
                      </span>
                      <button
                        className={
                          "span_block_btn"
                        }
                        style={{ color: "red" }}
                        onClick={() =>
                          deleted(todo.id)
                        }
                      >
                        &times;
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
              <label>
                <h5 className={"error"}>
                  {!err
                    ? ""
                    : "Все поля должны быть"}
                </h5>
                {todos.length === 0 ? (
                  <div className={"block_input"}>
                    <input
                      className={"input"}
                      type="number"
                      value={first.height}
                      id={"height"}
                      placeholder={"Высота в см"}
                      onChange={(e) => handle2(e)}
                    />
                    <input
                      className={"input"}
                      type="number"
                      value={first.width}
                      id={"width"}
                      placeholder={"Ширина в см"}
                      onChange={(e) => handle2(e)}
                    />
                    <input
                      className={"input"}
                      type="number"
                      value={
                        first.windows_quantity
                      }
                      id={"windows_quantity"}
                      placeholder={"Количество"}
                      onChange={(e) => handle2(e)}
                    />
                  </div>
                ) : (
                  <div className={"block_input"}>
                    <input
                      className={"input"}
                      type="number"
                      value={data.height}
                      id={"height"}
                      placeholder={"Высота в см"}
                      onChange={(e) => handle(e)}
                    />
                    <input
                      className={"input"}
                      type="number"
                      value={data.width}
                      id={"width"}
                      placeholder={"Ширина в см"}
                      onChange={(e) => handle(e)}
                    />
                    <input
                      className={"input"}
                      type="number"
                      value={data.quantity}
                      id={"quantity"}
                      placeholder={"Количество"}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                )}
                <button
                  className={"block_input_btn"}
                  onClick={addTodo}
                >
                  ДОБАВИТЬ ЕЩЕ ОКНО +
                </button>
                <button
                  className={"send_btn"}
                  onClick={() => setKal()}
                >
                  РАССЧИТАТЬ СТОИМОСТЬ
                </button>
              </label>
              {calculator.length === 0 ? (
                <></>
              ) : (
                <div
                  className={"modal_calculate"}
                >
                  <hr />
                  <p>
                    Результат рассчёта стоимости:
                  </p>
                  <div
                    className={
                      calculator.length > 3
                        ? "modal_calculate_block2"
                        : "modal_calculate_block"
                    }
                  >
                    {calculator.map((item) => {
                      return (
                        <div
                          key={true}
                          className={
                            "calculate_block"
                          }
                        >
                          <div
                            className={
                              "calculate"
                            }
                          >
                            <div className="calculate_left">
                              <p>{item.name}</p>
                              {down.title ===
                              item.name ? (
                                <div>
                                  {!down.test ? (
                                    <button
                                      onClick={() =>
                                        setDown({
                                          test: true,
                                          title:
                                            "",
                                        })
                                      }
                                    >
                                      Обратно...
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        setDown({
                                          test: false,
                                          title:
                                            item.name,
                                        })
                                      }
                                    >
                                      Подробные...
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <button
                                  onClick={() =>
                                    setDown({
                                      test: false,
                                      title:
                                        item.name,
                                    })
                                  }
                                >
                                  Читать
                                  подробнее...
                                </button>
                              )}
                            </div>
                            <div className="calculate_right">
                              <p>
                                Стоимость одного:{" "}
                                {
                                  item.sum_per_window
                                }{" "}
                                C
                              </p>
                              <p>
                                Стоимость:{" "}
                                {item.total_sum} C
                              </p>
                            </div>
                          </div>
                          {down.title ===
                          item.name ? (
                            <div
                              className={`calculate_detail_${down}`}
                            >
                              {item.detail.map(
                                (item) => {
                                  return (
                                    <div
                                      className={
                                        "detail"
                                      }
                                    >
                                      <h1>
                                        {
                                          item.category_name
                                        }
                                      </h1>
                                      <h1>
                                        {
                                          item.product_name
                                        }
                                      </h1>
                                      <h1>
                                        {item.product_count.toFixed(
                                          2
                                        )}
                                      </h1>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <h4>
                    Общая стоимость:{" "}
                    {calculatorTotal} C
                  </h4>
                </div>
              )}
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
export default ModalBtn;
