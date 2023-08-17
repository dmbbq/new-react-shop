function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-20 ">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div  className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cardItem d-flex align-center mb-20">
                  <img
                    className="mr-20"
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p> <b>{obj.price} руб</b>{" "}
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cardTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 428руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1026руб. </b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>{" "}
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавте хоча б одну пару кросівок,щоб зробити замолення.</p>
            <button className="greenBtn" onClick={onClose}>
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;

// https://64ce18750c01d81da3ee83ad.mockapi.io/cart шлях де будуть виводитись все що ми добавили в корзину"backend"
